var GraphEditor = this.GraphEditor = function GraphEditor(div, options) {
    "use strict";

    var edge_list = [],
        nodes = [],
        removed_edges = [],
        controller,
        Controller, Vertex, Edge,
        graph_name,
        removed_node,
        MIN_X = 800,
        MIN_Y = 400,
        SIZE = {
            x: options.width || MIN_X,
            y: options.height || MIN_Y
        },
        center = {
            x: SIZE.x / 2,
            y: SIZE.y / 2
        },
        DIRECTED = options.directed || true,
        MULTIGRAPH = options.multigraph || false,
        NODE_RADIUS = options.node_radius || 10.0,
        LIVE = false,
        AUTO_MAXIMIZE = true,
        NODE_NUMBERS = false,
        SPRING = 0.999,
        SPEED = 2.0,
        FIXED_LENGTH = 100.0,
        ORIENTATION = Math.PI,
        SHOWFPS = false,
        SHIFT = false,
        LOOP = false,
        VLLVIEW = false,
        FPS = options.fps || 60,
        canvastag,
        ctx,
        loop_interval,
        last_frame;
    //Miscellaneous functions  
    function rand(a, b) {
        return a + Math.floor(Math.random() * (b - a));
    }

    function sort_num(a, b) {
        return a - b;
    }



    // first element in array such that f(i) is true;
    // If f(i) is always false returns undefined
    function first(array, f) {
        var i = 0,
            l = array.length;
        for (; i < l; ++i) {
            if (f(array[i])) {
                return array[i];
            }
        }
    }

    function nonundef(x) {
        return x !== undefined;
    }

    //functional min, could be done with recursion but this is faster
    function fmin(a, lessthan) {
        var i, l = a.length,
            best = 0;
        for (i = 0; i < l; i++) {
            if (lessthan(a[i], a[best])) {
                best = i;
            }
        }
        return a[best];
    }

    //Drawing functions
    function circle(x, y, r, nofillFlag) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        ctx.closePath();
        if (!nofillFlag) {
            ctx.fill();
        }
        ctx.stroke();
    }

    function line(x1, y1, x2, y2) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        //ctx.closePath();
        ctx.stroke();
    }

    function line2(x1, y1, x2, y2, label) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        //ctx.closePath();
        ctx.textAlign = "end"
        // ctx.fillText("text", x1,y1)
        //ctx.textAlign = "start"
        ctx.strokeStyle = 'transparent'
        ctx.fillText(label, x2, y2)
        ctx.stroke();
    }

    function bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
        //ctx.closePath();
        ctx.stroke();
    }
    //Library for doing basic vector algebra in 2D
    function Point(x, y) {
        return {
            x: x || 0,
            y: y || 0
        };
    }
    // Vector algebra operations
    function scalarm(a, v) {
        return {
            x: a * v.x,
            y: a * v.y
        };
    }

    function vectoradd(v1, v2) {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        };
    }

    function vectorsub(v1, v2) {
        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y
        };
    }
    //in-place versions
    function vectorsubi(v1, v2) {
        v1.x -= v2.x;
        v1.y -= v2.y;
        return v1;
    }

    function scalarmi(a, v) {
        v.x *= a;
        v.y *= a;
        return v;
    }

    function norm(v) {
        return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
    }

    function unit(v) {
        return scalarm(1 / norm(v), v);
    }

    function d(v, w) {
        return norm(vectoradd(v, scalarm(-1, w)));
    }

    function dot(v, w) {
        return v.x * w.x + v.y * w.y;
    }

    //project v onto w
    function project(v, w) {
        return scalarm(dot(v, w) / dot(w, w), w);
    }

    //shorest vector from point v to the line given by origin and w 
    function normal_vector_point_to_line(v, w) {
        return vectorsub(v, project(v, w));
    }

    //tests if p is in the tube defined along the segment v1-v2 of radius rad
    function in_tube(p, v1, v2, rad) {
        var v = vectorsub(p, v1),
            w = vectorsub(v2, v1);
        return norm(normal_vector_point_to_line(v, w)) < rad && dot(w, v) > 0 && dot(scalarm(-1, w), vectorsub(p, v2)) > 0;
    }

    function neighbors_of(node) {
        var neighbor, neighbors_list = [],
            i;
        for (i = 0; i < edge_list.length; i += 1) {
            neighbor = edge_list[i].connects_to(node);
            if (neighbor && neighbor !== node) {
                neighbors_list.push(neighbor);
            }
        }
        return neighbors_list;
    }

    function next_label() {
        var i = 0,
            j, good = false;
        while (!good) {
            good = true;
            for (j = 0; j < nodes.length; j++) {
                if (nodes[j].label === i.toString()) {
                    i++;
                    good = false;
                    break;
                }
            }
        }
        return i.toString();
    }

    var Vertex_info = function (loopback, frozen) {
        this.frozen = frozen;
        this.loopback = loopback;
    };

    Vertex = function (pos, label, node_properties) {
        //copy for objects would be nice
        this.pos = pos ? Point(pos.x, pos.y) : Point();
        this.v = Point();

        if (node_properties)
            this.vertex_info = node_properties;
        else
            this.vertex_info = new Vertex_info("", false);

        this.label = label || next_label();
    };

    Vertex.prototype = {
        node_loop_angle: function () {
            var angles = [],
                angle = 0,
                i, diff, bestdiff = 0,
                edge, npos, thispos = this.pos,
                neighbors_list = neighbors_of(this);
            angles = neighbors_list.map(function (node) {
                var npos = node.get_pos();
                return Math.atan2(-npos.y + thispos.y, npos.x - thispos.x);
            });
            angles.sort(sort_num);
            for (i = 0; i < angles.length - 1; i += 1) {
                diff = angles[i + 1] - angles[i];
                if (diff > bestdiff) {
                    angle = angles[i] + diff / 2;
                    bestdiff = diff;
                }
            }
            diff = Math.PI * 2 + angles[0] - angles[angles.length - 1];
            if (diff > bestdiff) {
                angle = angles[angles.length - 1] + diff / 2;
            }
            return angle;
        },
        display: function () {

            if (SHIFT) {
                // remove_illegal_edges(this.label);
            }

            var imageObj = new Image();
            var node_number;
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 1;

            if (this.selected) {
                ctx.strokeStyle = 'black';
                ctx.lineWidth = NODE_RADIUS / 5;

                imageObj.src = this.fill_vert(1);
            } else if (this.closest) {
                imageObj.src = this.fill_vert(1);
            } else {
                if (NODE_NUMBERS) {
                    imageObj.src = this.fill_vert(0);
                } else {
                    imageObj.src = this.fill_vert(0);
                }
            }
            circle(this.pos.x, this.pos.y, NODE_RADIUS);
            ctx.drawImage(imageObj, this.pos.x - NODE_RADIUS / 1.45, this.pos.y - NODE_RADIUS / 1.45, 1.4 * NODE_RADIUS, 1.4 * NODE_RADIUS)

            if (this.vertex_info.frozen) {
                //imageObj.src = 'img/clipart-router-6edb-fixed.png'
                ctx.drawImage(imageObj, this.pos.x - NODE_RADIUS / 1.45, this.pos.y - NODE_RADIUS / 1.45, 1.4 * NODE_RADIUS, 1.4 * NODE_RADIUS)
                // ctx.drawImage(imageObj, this.pos.x-NODE_RADIUS/3,this.pos.y-NODE_RADIUS,NODE_RADIUS,NODE_RADIUS)
            }

            if (NODE_NUMBERS) {
                ctx.fillStyle = "#000000";
                ctx.font = (NODE_RADIUS / 2) + "pt Helvetica"
                ctx.textAlign = "center"
                node_number = nodes.indexOf(this).toString();
                ctx.fillText(node_number, this.pos.x, this.pos.y + (NODE_RADIUS / 4));
            }
        },
        vector_from: function (v) {
            return {
                x: this.pos.x - v.x,
                y: this.pos.y - v.y
            };
        },
        change_vel: function (deltax, deltay) {
            if (!this.vertex_info.frozen) {
                this.v.x += deltax;
                this.v.y += deltay;
            }
        },
        fill_vert: function (is_closest) {

            var b_color = "#FFFFFF";
            var h_color = "#A8A8A8";

            var aoshi_img = 'img/access.png';
            var coshi_img = 'img/core.png';
            var euh_img = 'img/euh.png';
            var l2sw_img = 'img/l2.png';
            var empty_color = "#FFFFFF";
            var img = 'img/punto.png';

            if (this.label.split("#")[0] == "AOSHI") {
                if (is_closest)
                    ctx.fillStyle = h_color;
                else
                    ctx.fillStyle = b_color;
                return aoshi_img;

            } else if (this.label.split("#")[0] == "COSHI") {
                if (is_closest)
                    ctx.fillStyle = h_color;
                else
                    ctx.fillStyle = b_color;
                return coshi_img;

            } else if (this.label.split("#")[0] == "EUH") {
                if (is_closest)
                    ctx.fillStyle = h_color;
                else
                    ctx.fillStyle = b_color;
                return euh_img;

            } else if (this.label.split("#")[0] == "L2SW") {
                if (is_closest)
                    ctx.fillStyle = h_color;
                else
                    ctx.fillStyle = b_color;
                return l2sw_img;

            } else {
                ctx.fillStyle = empty_color;
                return img;
            }

        },
        get_pos: function () {
            return this.pos;
        },
        set_pos: function (new_pos) {
            this.pos = new_pos;
        },
        toggle_freeze: function () {
            this.vertex_info.frozen = !this.vertex_info.frozen;
        },
        get_frozen: function () {
            return this.vertex_info.frozen;
        },
        draw_loop: function () {
            var angle = this.node_loop_angle();
            circle(this.pos.x + 1.5 * Math.cos(angle) * NODE_RADIUS, this.pos.y - 1.5 * Math.sin(angle) * NODE_RADIUS, 2 * NODE_RADIUS, true);
        },
        run: function () {
            this.pos.x += Math.min(Math.max(SPEED * this.v.x, -20), 20);
            this.pos.y += Math.min(Math.max(SPEED * this.v.y, -20), 20);
            this.v.x *= 0.5;
            this.v.y *= 0.5;
        }
    };

    var Edge_info = function (edge_label, labe_to_node1, labe_to_node2, vll) {
        this.labe_to_node1 = labe_to_node1;
        this.labe_to_node2 = labe_to_node2;
        this.edge_label = edge_label;
        this.vll = vll;
    };

    Edge = function (node1, node2, multi, label) {
        this.node1 = node1;
        this.node2 = node2;
        this.multi = multi || 1;
        // this.label = label || '::';
        if (label) {
            this.edge_info = label;
        } else
            this.edge_info = new Edge_info("", "", "");
    };

    Edge.prototype = {
        draw_arrow_tips: function (in1, in2, label) {
            var dv = {
                    x: in2.x - in1.x,
                    y: in2.y - in1.y
                },
                lenv = norm(dv),
                v1 = vectoradd(in1, {
                    x: dv.x * (1 - NODE_RADIUS / lenv),
                    y: dv.y * (1 - NODE_RADIUS / lenv)
                }),
                angle = Math.PI + Math.atan2(dv.y, dv.x),
                newangle1 = angle + Math.PI / 6,
                newangle2 = angle - Math.PI / 6,
                smallv1 = {
                    x: (NODE_RADIUS + 10) * Math.cos(newangle1),
                    y: (NODE_RADIUS + 10) * Math.sin(newangle1)
                },
                smallv2 = {
                    x: NODE_RADIUS * Math.cos(newangle2),
                    y: NODE_RADIUS * Math.sin(newangle2)
                },
                tip1 = vectoradd(v1, smallv1),
                tip2 = vectoradd(v1, smallv2);

            line2(v1.x, v1.y, tip1.x, tip1.y, label);
            // line2(v1.x,v1.y,tip2.x,tip2.y);
        },
        draw_simple: function () {
            var pos1 = this.node1.get_pos(),
                pos2 = this.node2.get_pos();
            line(pos1.x, pos1.y, pos2.x, pos2.y);
            // this.label
            if (DIRECTED) {
                this.draw_arrow_tips(pos1, pos2, this.edge_info.labe_to_node1);
                this.draw_arrow_tips(pos2, pos1, this.edge_info.labe_to_node2);

            }
        },
        draw_multi: function () {
            var pos1 = this.node1.get_pos(),
                pos2 = this.node2.get_pos(),
                mid = scalarm(1 / 2, vectoradd(pos1, pos2)),
                dx = vectorsub(pos1, pos2),
                normal, control, i;
            normal = unit({
                x: dx.y,
                y: -dx.x
            });
            for (i = -(this.multi - 1) / 2; i <= (this.multi - 1) / 2; i += 1) {
                control = vectoradd(mid, scalarm(norm(dx) * i / 10, normal));
                bezier(pos1.x, pos1.y, control.x, control.y, control.x, control.y, pos2.x, pos2.y);
                if (DIRECTED) {
                    this.draw_arrow_tips(control, pos2, this.edge_info.labe_to_node1);
                    bezier(pos2.x, pos2.y, control.x, control.y, control.x, control.y, pos1.x, pos1.y);
                    this.draw_arrow_tips(control, pos1, this.edge_info.labe_to_node2);
                    //               this.draw_arrow_tips(control,pos2);
                }
            }
        },
        display: function () {
            var dv;
            if (this.selected) {
                ctx.strokeStyle = "#CC0000";
            } else if (this.closest) {
                ctx.strokeStyle = "#CCC000";
            } else if (this.node1.selected || this.node2.selected) {
                ctx.strokeStyle = "#0000C0";
            } else {
                ctx.strokeStyle = "#000000";
            }
            if (this.node1 === this.node2) {
                this.node1.draw_loop();
            } else {
                if (this.multi < 2) {
                    this.draw_simple();
                } else {
                    this.draw_multi();
                }
            }
        },
        is_touching: function (node) {
            return node === this.node1 || node === this.node2;
        },
        is_loop: function (node) {
            return node === this.node1 && node === this.node2;
        },
        connects_to: function (node) {
            var neighbor;
            if (this.node1 === node) {
                neighbor = this.node2;
            }
            if (this.node2 === node) {
                neighbor = this.node1;
            }
            return neighbor;
        },
        get_nodes: function () {
            return {
                node1: this.node1,
                node2: this.node2
            };
        },
        inc_mult: function () {
            if (MULTIGRAPH) {
                this.multi += 1;
            }
        },
        dec_mult: function () {
            if (this.multi > 0) {
                this.multi -= 1;
            }
            if (this.multi === 0) {
                remove_edge(this);
            }
        },
        set_vll: function () {
            this.edge_info.vll = true;
        }
    };

    //returns object {d: closest_distance, node: corresponding node}
    function get_closest_node(v) {
        return fmin(nodes.map(function (n) {
            return {
                d: d(n.get_pos(), v),
                node: n
            };
        }), function (a, b) {
            return a.d < b.d;
        });
    }


    function remove_illegal_edges(node_label) {
        var counter = 0;
        if (node_label.split("#")[0] == "L2SW" || node_label.split("#")[0] == "EUH") {

            for (var i = 0; i < edge_list.length; i++) {

                if (edge_list[i].edge_info.vll) { //TODO da confermare
                    break;
                }

                if (edge_list[i].node1.label == node_label) {
                    counter += 1;
                    // alert(edge_list[i].node1.label);
                    if (edge_list[i].node2.label.split("#")[0] != "L2SW" && node_label.split("#")[0] == "EUH")
                        counter = 2;
                    if (edge_list[i].node2.label.split("#")[0] == "COSHI" && node_label.split("#")[0] == "L2SW")
                        counter = 2;
                    if (counter > 1) {
                        remove_edge(edge_list[i]);
                    }


                } else if (edge_list[i].node2.label == node_label) {
                    if (node_label.split("#")[0] == "L2SW") {
                        if (edge_list[i].node1.label.split("#")[0] != "L2SW" &&
                            edge_list[i].node1.label.split("#")[0] != "EUH") {
                            remove_edge(edge_list[i]);
                        }
                    } else if (node_label.split("#")[0] == "EUH") {
                        if (edge_list[i].node2.label.split("#")[0] == "EUH") {
                            remove_edge(edge_list[i]);
                        }
                    }
                }
            }
        }
    }

    function remove_edge(edge) {
        edge_list.splice(edge_list.indexOf(edge), 1);
    }

    function remove_node(node) {
        var edge, i, index;
        removed_edges = [];
        for (i = edge_list.length - 1; i > -1; i -= 1) {
            edge = edge_list[i];
            if (edge.is_touching(node)) {
                removed_edges = removed_edges.concat(edge_list.splice(i, 1));
            }
        }
        index = nodes.indexOf(node);
        if (index !== -1) {
            removed_node = nodes.splice(index, 1)[0];
        }
        //realign labels and index
        for (i = nodes.length - 1; i > -1; i -= 1) {
            if (i < 9)
                nodes[i].label = nodes[i].label.split("#")[0] + "#0" + (i + 1);
            else
                nodes[i].label = nodes[i].label.split("#")[0] + "#" + i;

        }

        $('#undo_button').removeClass('graph_editor_undo_disabled');
        draw();
    }

    function undo_remove() {
        if (removed_node) {
            removed_node.label = next_label();
            nodes.push(removed_node);
            edge_list = edge_list.concat(removed_edges);
            removed_node = undefined;
            removed_edges = [];
            $('#undo_button').addClass('graph_editor_undo_disabled');
            draw();
        }
    }

    function toggle_loop(node) {
        var edge,
            existing = first(edge_list, function (edge) {
                return edge.is_loop(node);
            });
        if (existing) {
            edge_list.splice(edge_list.indexOf(existing), 1);
        } else {

            edge_list.push(new Edge(node, node));
        }
    }

    function toggle_edge(node1, node2) {
        var edge, existing = false,
            i;

        if (node1 === node2) {
            //maybe you want toggle_loop
            return;
        }
        for (i = edge_list.length - 1; i > -1; i -= 1) {
            edge = edge_list[i];
            if (edge.is_touching(node1) && edge.is_touching(node2)) {
                existing = true;
                break;
            }
        }
        if (existing) {
            edge_list.splice(i, 1);
        } else {
            var newEdge = new Edge(node1, node2);
            if (VLLVIEW)
                newEdge.set_vll()
            edge_list.push(newEdge);
        }
    }

    function centerize(maximize) {
        var min_x = 10000,
            max_x = -10000,
            min_y = 10000,
            max_y = -10000,
            width, height, scaling_factor, i, pos, newp;

        for (i = 0; i < nodes.length; i += 1) {
            pos = nodes[i].get_pos();
            min_x = Math.min(min_x, pos.x);
            max_x = Math.max(max_x, pos.x);
            min_y = Math.min(min_y, pos.y);
            max_y = Math.max(max_y, pos.y);
        }
        width = Math.max(max_x - min_x, 0.01);
        height = Math.max(max_y - min_y, 0.01);

        for (i = 0; i < nodes.length; i += 1) {
            if (nodes[i] !== hit_node) {
                pos = nodes[i].get_pos();
                if (maximize) {
                    scaling_factor = Math.max(Math.max(width, height), 0.01);
                    newp = {
                        x: (SIZE.x / 2) + ((SIZE.x * 9 / 10) * (pos.x - min_x) - (SIZE.x * 9 / 20) * width) / scaling_factor,
                        y: (SIZE.y / 2) + ((SIZE.y * 9 / 10) * (pos.y - min_y) - (SIZE.y * 9 / 20) * height) / scaling_factor
                    };
                } else {
                    newp = {
                        x: (SIZE.x - width) / 2 + pos.x - min_x,
                        y: newy = (SIZE.y - height) / 2 + pos.y - min_y
                    };
                }
                nodes[i].set_pos(newp);
            }
        }
    }

    function node_repos(a, b) {
        var i;
        var oldX;
        var oldY;
        for (i = 0; i < nodes.length; i += 1) {
            oldX = nodes[i].pos.x;
            oldY = nodes[i].pos.y;
            nodes[i].set_pos({
                x: a * oldX,
                y: b * oldY
            });
        }
        draw();
    }


    function circular_layout() {
        var i;
        for (i = 0; i < nodes.length; i += 1) {
            nodes[i].set_pos({
                x: SIZE.x / 2 + (2 * SIZE.x / 5) * Math.sin(2 * Math.PI * i / nodes.length),
                y: SIZE.y / 2 - (2 * SIZE.y / 5) * Math.cos(2 * Math.PI * i / nodes.length)
            });
        }
        draw();
    }

    function change_orientation(newval) {
        var new_orientation = Math.PI * (1 - newval / 180.0),
            n_x, n_y, r, theta, i, pos;
        for (i = 0; i < nodes.length; i += 1) {
            pos = nodes[i].get_pos();
            n_x = pos.x - SIZE.x / 2;
            n_y = pos.y - SIZE.y / 2;
            r = Math.sqrt(n_x * n_x + n_y * n_y);
            theta = Math.atan2(n_y, n_x) + new_orientation - ORIENTATION;
            nodes[i].set_pos({
                x: SIZE.x / 2 + r * Math.cos(theta),
                y: SIZE.y / 2 + r * Math.sin(theta)
            });
        }
        ORIENTATION = new_orientation;
        draw();
    }

    function split(edge) {
        var enodes = edge.get_nodes(),
            new_v,
            newpos = scalarmi(1 / 2, vectoradd(enodes.node1.get_pos(), enodes.node2.get_pos()));
        new_v = new Vertex(newpos);
        nodes.push(new_v);
        toggle_edge(new_v, enodes.node1);
        toggle_edge(new_v, enodes.node2);
        remove_edge(edge);
        return new_v;
    }

    function erase_graph() {
        nodes = [];
        edge_list = [];
        draw();
    }
    //most time crucial function according to profiler, hand-optimized
    function add_force(node1, node2, force_function, k) {
        var sqr_d, force, n1 = node1.get_pos(),
            n2 = node2.get_pos();
        var deltax = -n2.x + n1.x,
            deltay = -n2.y + n1.y;
        sqr_d = Math.max(Math.sqrt(deltax * deltax + deltay * deltay), 0.01);
        force = force_function(sqr_d, k) / sqr_d;
        deltax *= force;
        deltay *= force;
        node1.change_vel(deltax, deltay);
        deltax = -deltax;
        deltay = -deltay;
        node2.change_vel(deltax, deltay);
    }


    function spring_force(sqr_d, k) {
        return -Math.sqrt(sqr_d) / k;
    }

    function repulsive_force(sqr_d, k) {
        var k2 = k * k;
        return k2 * k2 / (sqr_d * sqr_d);
    }

    function border_repulse(node) {
        var p = node.get_pos(),
            d = (Math.min(p.x, p.y, SIZE.x - p.x, SIZE.y - p.y)),
            v;
        v = scalarm(20 / (d * d), vectorsub(center, p));
        node.change_vel(v.x, v.y);
    }

    function run_physics() {
        var k = Math.max(Math.sqrt(FIXED_LENGTH), 0.01),
            i, j, edge, l;
        for (i = 0, l = nodes.length; i < l; ++i) {
            border_repulse(nodes[i]);
            for (j = i + 1; j < l; j += 1) {
                add_force(nodes[i], nodes[j], repulsive_force, k);
            }
        }
        for (i = 0, l = edge_list.length; i < l; ++i) {
            edge = edge_list[i].get_nodes();
            add_force(edge.node1, edge.node2, spring_force, k);
        }

        for (i = 0, l = nodes.length; i < l; ++i) {
            nodes[i].run();
        }
    }
    Controller = function () {
        var hit_node, selected_object, dragging_node, dragging_frozen_flag, closest, mouse = new Point(),
            lastcheck = 0;
        return {
            select_object: function (obj) {
                if (selected_object === obj) {
                    this.unselect_object();
                    return;
                }
                if (selected_object) {
                    this.unselect_object();
                }
                selected_object = obj;
                obj.selected = true;

                update_infobox(obj);
            },
            set_mouse: function (e) {
                var obj = e.currentTarget,
                    offset = $(obj).offset();
                mouse = {
                    x: e.pageX - offset.left,
                    y: e.pageY - offset.top
                };
            },
            unselect_object: function () {
                if (selected_object) {
                    selected_object.selected = false;
                    selected_object = undefined;
                    update_infobox();
                }
            },
            drag_node_start: function (node) {
                dragging_node = node;
                dragging_frozen_flag = node.get_frozen();
                if (!node.get_frozen()) {
                    node.toggle_freeze();
                }
                if (!LIVE) {
                    start_loop();
                }
            },
            update_drag: function (m) {
                dragging_node.set_pos(m);
                if (dragging_node === selected_object) {
                    update_infobox(dragging_node);
                }
            },
            drag_node_stop: function () {
                if (dragging_frozen_flag === false) {
                    dragging_node.toggle_freeze();
                }
                dragging_node = undefined;
                if (!LIVE) {
                    stop_loop();
                }
            },
            find_closest: function () {
                var closest_data, edge;
                closest_data = get_closest_node(mouse);
                if (closest_data && closest_data.d < NODE_RADIUS) {
                    this.update_closest(closest_data.node);
                    return;
                }
                edge = first(edge_list, function (edge) {
                    var v = edge.get_nodes();
                    return in_tube(mouse, v.node1.get_pos(), v.node2.get_pos(), 15);
                });
                this.update_closest(edge);
            },
            update_closest: function (object) {
                if (closest && (closest !== object)) {
                    closest.closest = false;
                }
                closest = object;
                if (object) {
                    object.closest = true;
                }
            },
            mousedown: function () {
                if (closest && closest instanceof Vertex) {
                    hit_node = closest;
                }
                if (!LIVE) draw();
            },
            mouseup: function (e) {
                var new_v;
                if (dragging_node) {
                    this.drag_node_stop();
                } else if (hit_node && (selected_object === undefined)) {
                    this.select_object(hit_node);
                } else if (hit_node && selected_object instanceof Vertex && (selected_object !== hit_node)) {
                    toggle_edge(selected_object, hit_node);
                    if (!SHIFT) {
                        toggle_edge(selected_object, hit_node); //whr
                        this.unselect_object();
                    }
                } else if (closest) {
                    this.select_object(closest);
                } else {
                    if (SHIFT) {
                        new_v = new Vertex(mouse);
                        //careful for edge case of user not moving mouse afterclick
                        //if live the vertex flies off 
                        if (!LIVE) {
                            this.update_closest(new_v);
                        }
                        nodes.push(new_v);
                    }
                }
                hit_node = undefined;
                if (!LIVE) {
                    draw();
                }
            },
            mousemove: function (e) {
                this.set_mouse(e);
                if (hit_node && !dragging_node) {
                    this.drag_node_start(hit_node);
                }
                if (dragging_node) {
                    this.update_drag(mouse);
                }
                this.find_closest();
                if (!LIVE) draw();
            },
            keydown: function (e) {
                if (e.keyCode === 16) {
                    SHIFT = true;
                }
            },
            keyup: function (e) {
                SHIFT = false;
            },
            keypress: function (e) {
                var pos, canvaspos, dialog;
                //charCode has browser problems, check with http://www.quirksmode.org/js/keys.html
                //console.log(e.charCode,String.fromCharCode(e.charCode));
                if (String.fromCharCode(e.charCode) === '-' && selected_object) {
                    if (selected_object instanceof Vertex) {
                        remove_node(selected_object);
                    } else if (selected_object instanceof Edge) {
                        selected_object.dec_mult();
                    }
                    this.unselect_object();
                }
                if (String.fromCharCode(e.charCode) === 'l') {
                    toggle_live();
                }
                if (String.fromCharCode(e.charCode) === 'f') {
                    SHOWFPS = !SHOWFPS;
                }
                if (String.fromCharCode(e.charCode) === 'r' && selected_object instanceof Vertex) {
                    selected_object.toggle_freeze();
                    this.unselect_object();
                }
                if (String.fromCharCode(e.charCode) === '+' && selected_object instanceof Edge) {
                    selected_object.inc_mult();
                }
                if (String.fromCharCode(e.charCode) === 'o' && selected_object instanceof Vertex) {
                    toggle_loop(selected_object);
                }
                if (String.fromCharCode(e.charCode) === 's' && selected_object instanceof Edge) {
                    this.select_object(split(selected_object));
                }
                if (!LIVE) draw();
            },
            mouseleave: function () {
                this.drag_node_stop();
            },
            dblclick: function () {}
        };
    };


    function import_catalog_top(id) {
        $.getJSON("topocatalogjson/cat" + id + ".json", function (data) {
            //console.log(data);
            import_from_JSON(data, true, true);
            $('#myModalTopoCatalog').modal('hide');
        });

    }

    //JSONdata has the format
    //This format is compatible with sage
    //{"vertices" : [v0.label, v1.label, .... , vn.label],
    //"edges" : [ [e0v0.label, e0v1label, edgelabel], ... ],
    //"pos"" : [ [v0x, v0y], [v1x, v1y], ... ],
    //"name" : "a_graph"
    //} 
    function import_from_JSON(JSONdata, live, catalog) {
        var i, dict = {},
            new_v, pos, vertex;
        if (catalog) {
            var data = JSONdata;
        } else {
            data = JSON.parse(JSONdata)
        }
        erase_graph();
        for (i = 0; i < data.vertices.length; i += 1) {
            new_v = new Vertex({
                x: 0,
                y: 0
            }, data.vertices[i], data.node_properties[data.vertices[i]]);
            dict[data.vertices[i]] = new_v;
            dict[data.node_properties[i]] = new_v;
            nodes.push(new_v);
        }
        if (data.pos) {
            var maxx = -Infinity,
                minx = Infinity,
                maxy = -Infinity,
                miny = Infinity,
                newx, newy, dx, dy;
            for (i in data.pos) {
                maxx = Math.max(maxx, data.pos[i][0]);
                maxy = Math.max(maxy, data.pos[i][1]);
                minx = Math.min(minx, data.pos[i][0]);
                miny = Math.min(miny, data.pos[i][1]);
            }
            dx = maxx - minx;
            dy = maxy - miny;
            for (i in data.pos) {
                pos = data.pos[i];
                vertex = dict[i];
                newx = (data.pos[i][0] - minx) / dx;
                newx = newx * 8 * SIZE.x / 10 + SIZE.x / 10;
                newy = (data.pos[i][1] - miny) / dy;
                newy = newy * 8 * SIZE.y / 10 + SIZE.y / 10;
                vertex.set_pos({
                    x: newx,
                    y: newy
                });
            }
        } else {
            circular_layout();
        }

        for (i = 0; i < data.edges.length; i += 1) {
            edge_list.push(new Edge(dict[data.edges[i][0]], dict[data.edges[i][1]], 1, data.edges[i][2]));
        }
        graph_name = data.name;
        draw();
        if (live) {
            toggle_live();
        }
    }

    function positions_dict() {
        var i, out, pos;
        out = "{";
        out += nodes.map(function (n, i) {
            var pos = n.get_pos();
            return i + ":[" + [pos.x, (SIZE.y - pos.y)].join(',') + "]";
        }).join(',');
        return out + "}";
    }

    function adjacency_lists_dict() {
        var edge, empty, i, j, node, out;
        out = "{";
        out += nodes.map(function (node, i) {
            return i + ":[" + edge_list.map(function (e) {
                var enodes = e.get_nodes();
                if (enodes.node1 === node) {
                    return nodes.indexOf(enodes.node2);
                }
                if (enodes.node2 === node) {
                    return nodes.indexOf(enodes.node1);
                }
            }).filter(nonundef).join(',') + ']';
            // add filter i>j to only get neighbors with smaller index. which was the old functionality.
        });
        return out + "}";
    }

    function export_tkz() {
        var pos, edge, i, j, out, px2pt;
        px2pt = 0.75;
        out = "";
        out += "\\begin{tikzpicture}\n\n";
        for (i = 0; i < nodes.length; i++) {
            out += "\\Vertex";
            pos = nodes[i].get_pos();
            out += "[x=" + px2pt * pos.x + "pt,y=" + px2pt * (SIZE.y - pos.y) + "pt]";
            out += "{" + i + "};\n";
        }
        out += "\n";
        for (j = 0; j < edge_list.length; j++) {
            out += "\\Edge";
            edge = edge_list[j].get_nodes();
            out += "(" + nodes.indexOf(edge.node1) + ")";
            out += "(" + nodes.indexOf(edge.node2) + ")";
            out += "\n";
        }
        out += "\n";
        out += "\\end{tikzpicture}\n";
        return out;
    }

    function export_sage() {
        var data = {},
            node_properties, pos, i, exec = '';
        data.vertices = nodes.map(function (n) {
            return n.label;
        });
        data.edges = edge_list.map(function (e) {
            return [e.node1.label, e.node2.label, e.edge_info];
        });
        data.pos = {};
        for (i = 0; i < nodes.length; i++) {
            pos = nodes[i].get_pos();
            data.pos[nodes[i].label] = [pos.x, pos.y];
        }

        data.node_properties = {};
        for (i = 0; i < nodes.length; i++) {
            node_properties = nodes[i].vertex_info;
            data.node_properties[nodes[i].label] = nodes[i].vertex_info;
        }
        // data.node_properties = nodes.map(function (n){
        //     return n.loopback;
        // });
        data.name = graph_name;
        return JSON.stringify(data, null, "\t");
    }
    var UIside_panel_opened;

    function add_checkbox(name, variable, container_id, onclickf) {
        var s = '<li><div class="checkbox"><label>' + name + "  ";
        s += '<input type="checkbox"'; //+' id="'+name+'_check"'
        s += ' value="' + variable + '"';
        if (variable) {
            s += 'checked';
        }
        s += '/></label></div></li>';
        $(container_id).append(s);
        $(container_id + ' input:last').click(onclickf);
    }

    function add_button(name, container_id, onclickf) {
        var s = '<input type="button" id="' + name + '_button" value="' + name + '"';
        s += '/>';
        $(container_id).append(s);
        $(container_id + ' input:last').click(onclickf);
    }

    function add_slider(name, variable, container_id, min_, max_, disabled_, onchangef) {
        var s = '<li><tr><td><label id="' + name.replace(/\s/g, '') + '_label">' + name + '</label></td>';
        s += '<td><div id="' + name.replace(/\s/g, '') + '" class="slider"></div></td></tr></li>';
        $(container_id).append(s);
        $(container_id + ' div.slider:last').slider({
            min: min_,
            max: max_,
            value: variable,
            slide: function (event, ui) {
                onchangef(ui.value);
            }
        });
        if (disabled_) {
            $(container_id + ' div.slider:last').slider('disable')
            $('#' + name.replace(/\s/g, '') + '_label').css("color", "grey");
        }
    }

    function create_controls(div) {
        //Create controls and attach click functions 
        var tweaks, canvaspos = $(div + ' canvas').offset(),
            buttondiv = div + ' #graph_editor_button_container',
            canvas = $(div + ' canvas')[0];

        //$('#canvas_cont').prepend('<div id="graph_editor_button_container" class="btn-toolbar" role="toolbar"> </div>');
        // $('#canvas_cont').prepend('<input type="file" id="fileElem" style=" width: 0px; height: 0px; ">');

        $('#panel_head').prepend('<div id="graph_editor_button_container" class="btn-toolbar" role="toolbar"> </div>')
        //  $('<div id="graph_editor_button_container" class="btn-toolbar" role="toolbar"> </div>').appendTo('#panel_head');
        $('<input type="file" id="fileElem" style=" width: 0px; height: 0px; ">').appendTo('#panel_head');
        $('<div id="graph_editor_button_group" class="btn-group"></div>').appendTo('#graph_editor_button_container');

        $('<div class="btn-group"><button id="topology_button" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Topology <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#" id="catalog_button" data-toggle="modal" data-target="#myModalTopoCatalog"><span class="fa fa-archive"></span> Open from catalog...</a></li><li><a href="#" id="imp_button"><span class="fa fa-folder-open"></span> Import from file</a></li><li><a href="#" id="imp_paste_button"  data-toggle="modal" data-target="#myModalPaste"><span class="fa fa-clipboard "></span> Paste from clipboard</a></li><li><a href="#" id="random_button" data-toggle="modal" data-target="#myModalRandom"><span class="fa  fa-random"></span> Random</a></li><li role="presentation" class="divider"></li><li><a href="#" id="exp_button" data-toggle="modal" data-target="#myModalDownload"><span class="fa fa fa-floppy-o"></span> Export to file</a></li><li><a href="#" id="exp_copy_button" data-toggle="modal" data-target="#myModalCopy"><span class="fa fa-clipboard "></span> Copy to clipboard</a></li><li><a href="#" id="image_button"><span class="fa fa-picture-o"></span> Get Image</a></li></ul></div">').appendTo('#graph_editor_button_group');


        $('<button id="live_button" type="button" class="btn btn-default"> <span class="glyphicon glyphicon-play"></span> Live</button>').appendTo('#graph_editor_button_group');


        $('<div class="btn-group"><button id="vll_button_group" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">View <span class="caret"></span></button><ul class="dropdown-menu" role="menu"><li><a href="#" id="vll_button" ><span class="fa fa-sitemap"></span> View VLL Services</a></li><li><a href="#" id="viewTopo_button" ><span class="fa fa-sitemap"></span> View Topology</a></li></ul></div">').appendTo('#graph_editor_button_group');



        $('<button id="undo_button" type="button" class="btn btn-default"><span class="fa fa-undo"></span> Undo</button>').appendTo('#graph_editor_button_group');
        $('<button id="reset_button" type="button" class="btn btn-default"><span class="fa fa-eraser"></span> Reset</button>').appendTo('#graph_editor_button_group');

        $('<button id="legend_button" type="button" class="btn btn-default"> <span class="fa fa-minus-square-o "></span>Hide Legend</button>').appendTo('#graph_editor_button_group');

        $('<button id="credits_button" type="button" class="btn btn-default" data-toggle="modal" data-target="#myModalCredits"><span class="fa fa-info"></span> Credits</button>').appendTo('#graph_editor_button_group');

        $('<button id="help_button" type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal"><span class="fa fa-question"></span> Help</button>').appendTo('#graph_editor_button_group');



        $('#live_button').click(toggle_live);

        $('#viewTopo_button').click(hide_vllView);

        $('#vll_button').click(show_vllView);

        $('#legend_button').click(toggle_visibility_legend);

        $('#undo_button').click(undo_remove).toggleClass('graph_editor_undo_disabled');

        $('#reset_button').click(function () {
            if (confirm("The graph will be irreversibly erased. This operation cannot be undone.")) {
                erase_graph();
            }
        });

        $('#image_button').click(function () {
            //create a dummy CANVAS
            var destinationCanvas = document.createElement("canvas");
            destinationCanvas.width = canvas.width;
            destinationCanvas.height = canvas.height;
            var destCtx = destinationCanvas.getContext('2d');
            //create a rectangle with the desired color
            destCtx.fillStyle = "#FFFFFF";
            destCtx.fillRect(0, 0, canvas.width, canvas.height);

            //draw the original canvas onto the destination canvas
            destCtx.drawImage(canvas, 0, 0);

            var img = destinationCanvas.toDataURL("image/png");
            window.open(img, "Graph Editor Image", "menubar=false,toolba=false,location=false,width=" + SIZE.x + ",height=" + SIZE.y);
        });

        $('#imp_button').click(function (e) {
            // Use the native click() of the file input.
            document.querySelector('#fileElem').click();

        });
        $('input[id="fileElem"]').bind("change", function () {
            // Get a reference to the fileList
            var files = !!this.files ? this.files : [];

            // If no files were selected, or no FileReader support, return
            if (!files.length || !window.FileReader) return;
            // Only proceed if the selected file is a text 
            if (files[0].type == "application/json") {
                // Create a new instance of the FileReader
                var reader = new FileReader();

                //Read local file as text
                reader.readAsText(files[0]);

                reader.onloadend = function () {
                    import_from_JSON(this.result, false)
                    //console.log(this.result)

                }
            }

        });

        $('#exp_copy_button').click(function (e) {
            $('#sage').val(export_sage());
        });

        $('#exp_button').click(function (e) {


            var data = 'text/json;charset=utf-8, ' + encodeURIComponent(export_sage());

            var fake = document.getElementById('linkfake');
            if (fake) {
                fake.parentNode.removeChild(fake);
            }

            var d = new Date();
            $('#download_body').append('<a id = "linkfake" href="data:' + data + '" download="data.json" >Download ready - ' + d.toTimeString() + ' </a>');


        });

        add_slider('Canvas Dimension:', 0, '#tweaks_sidebar', 0, 600, false, function (newval) {
            var old_x = SIZE.x;
            var old_y = SIZE.y;
            SIZE = {
                x: MIN_X + newval,
                y: MIN_Y + newval
            };
            center = {
                x: SIZE.x / 2,
                y: SIZE.y / 2
            };
            ctx.canvas.height = SIZE.y;
            ctx.canvas.width = SIZE.x;
            node_repos(SIZE.x / old_x, SIZE.y / old_y);
        });


        $('<br><div id="sidebar_layout_button_group" class="btn-group"></div>').appendTo('#tweaks_sidebar');
        $('#sidebar_layout_button_group').append('<button id="circular" type="button" class="btn btn-default">Circular layout</button>');



        $('#circular').click(function () {
            if (confirm("All vertices will be irrevesably moved. This operation cannot be undone.")) {
                circular_layout();
            }
        });


        add_checkbox('Vertex numbers', NODE_NUMBERS, '#tweaks_sidebar', function () {
            NODE_NUMBERS = !NODE_NUMBERS;
            draw();
        });

        add_slider('Orientation', 0, '#tweaks_sidebar', 0, 360, false, change_orientation);

        add_slider('Vertex Size', NODE_RADIUS, '#tweaks_sidebar', 0, 30, false, function (newval) {
            NODE_RADIUS = newval;
            draw();
        });

        add_slider('Edge Strength', 50, '#tweaks_sidebar', 0, 100, true, function (newval) {
            SPRING = (1 - 1e-2) + 1e-4 * (100 - newval);
            SPEED = newval / 50.0;
            SPEED *= 2 * SPEED;
        });
        add_slider('Edge Length', FIXED_LENGTH, '#tweaks_sidebar', 0, 200, true, function (newval) {
            FIXED_LENGTH = newval;
        });


        var info_sidebar = '#info_sidebar'
        $(info_sidebar).append("");
        $(info_sidebar + ' .infobox #info').hide();
        $(info_sidebar + ' .infobox #s_label').mouseup(function () {
            var index = $(info_sidebar + ' .infobox #index').html(),
                title = $(info_sidebar + ' .infobox #title').html();
            if (title === "Vertex Info") {
                if (index < 9)
                    nodes[index].label = $(info_sidebar + ' .infobox #s_label').val() + "#0" + (parseInt(index) + 1);
                else
                    nodes[index].label = $(info_sidebar + ' .infobox #s_label').val() + "#" + (parseInt(index) + 1);
                $(info_sidebar + ' .infobox #s_label').val('');
                // $('.infobox #n_type').html(nodes[index].label.split("#")[0])

            } else if (title === "Edge Info") {
                //non entro piu qui!
                edge_list[index].label = $(info_sidebar + ' .infobox #label').val();
            }
            draw();
        });

        $(info_sidebar + ' .infobox #loopback_button').click(function () {
            var index = $(info_sidebar + ' .infobox #index').html();
            // title = $(div + ' .infobox #title').html();
            nodes[index].vertex_info.loopback = $(info_sidebar + ' .infobox #node_loopback').val();
            update_infobox(nodes[index]);
        });

        $(info_sidebar + ' .infobox #edge_inf_button').click(function () {
            var index = $(info_sidebar + ' .infobox #index').html(),
                title = $(info_sidebar + ' .infobox #title').html();
            edge_list[index].edge_info.labe_to_node1 = $(info_sidebar + ' .infobox #v1_label').val();
            edge_list[index].edge_info.labe_to_node2 = $(info_sidebar + ' .infobox #v2_label').val();
            draw();

        });

    }

    function update_infobox(obj) {
        var info_sidebar = '#info_sidebar'

        var pos, index, node, edge;
        if (obj && obj instanceof Vertex) {

            node = obj, pos = node.get_pos(), index = nodes.indexOf(node);
            $(info_sidebar + ' .infobox #title').html('Vertex Info');
            $(info_sidebar + ' .infobox #index').html(index);
            $(info_sidebar + ' .infobox #pos').show();
            $(info_sidebar + ' .infobox #posx').html(pos.x.toFixed(1));
            $(info_sidebar + ' .infobox #posy').html(pos.y.toFixed(1));
            $(info_sidebar + ' .infobox #node_inf').show();
            if (node.label.split("#")[0] == "COSHI" || node.label.split("#")[0] == "AOSHI")
                $(info_sidebar + ' .infobox #COSHI_node_inf').show();
            else
                $(info_sidebar + ' .infobox #COSHI_node_inf').hide();
            $(info_sidebar + ' .infobox #edge_inf').hide();
            $(info_sidebar + ' .infobox #vert').hide();
            $(info_sidebar + ' .infobox #label').html(node.label);
            $(info_sidebar + ' .infobox #loopback').html(node.vertex_info.loopback);
            $(info_sidebar + ' .infobox #node_loopback').val(node.vertex_info.loopback);
            $(info_sidebar + ' .infobox #n_type').html(node.label.split("#")[0]);
            $(info_sidebar + ' .infobox #none_selected').hide();
            $(info_sidebar + ' .infobox #info').show();
        } else if (obj && obj instanceof Edge) {
            edge = obj;
            var enodes = edge.get_nodes();
            index = edge_list.indexOf(edge);
            $(info_sidebar + ' .infobox #title').html('Edge Info');
            $(info_sidebar + ' .infobox #index').html(index);
            $(info_sidebar + ' .infobox #pos').hide();
            $(info_sidebar + ' .infobox #vert').show();
            // $(info_sidebar + ' .infobox #edge_inf').show(); in attesa di sapere i dati da associare 
            $(info_sidebar + ' .infobox #edge_inf').hide();

            $(info_sidebar + ' .infobox #node_inf').hide();

            //$(info_sidebar + ' .infobox #v1').html(nodes.indexOf(enodes.node1));
            //$(info_sidebar + ' .infobox #v2').html(nodes.indexOf(enodes.node2));
            $(info_sidebar + ' .infobox #v1').html(enodes.node1.label.replace("#", ""));
            $(info_sidebar + ' .infobox #v2').html(enodes.node2.label.replace("#", ""));
            $(info_sidebar + ' .infobox #v1_label').val(edge.edge_info.labe_to_node1 || "")
            $(info_sidebar + ' .infobox #v2_label').val(edge.edge_info.labe_to_node2 || "")
            $(info_sidebar + ' .infobox #label').val(edge.label || "none");
            $(info_sidebar + ' .infobox #none_selected').hide();
            $(info_sidebar + ' .infobox #info').show();
        } else {
            $(info_sidebar + ' .infobox #title').html('Select node for info!');
            $(info_sidebar + ' .infobox #none_selected').show();
            $(info_sidebar + ' .infobox #info').hide();
        }
    }

    function display_graph() {
        var i;
        if (LIVE & !VLLVIEW) {
            run_physics();
        }
        for (i = 0; i < edge_list.length; i += 1) {
            if (VLLVIEW) {
                if (edge_list[i].edge_info.vll) {
                    edge_list[i].display();
                }
            } else {
                if (edge_list[i].edge_info.vll != true) {
                    edge_list[i].display();
                }
            }

        }
        for (i = 0; i < nodes.length; i += 1) {
            if (VLLVIEW) {
                if (nodes[i].label.split("#")[0] == "EUH")
                    nodes[i].display();
            } else {
                nodes[i].display();
            }
        }
    }

    function start_loop(speed) {
        loop_interval = setInterval(draw, speed || 1000 / FPS);
    }

    function stop_loop() {
        clearInterval(loop_interval);
    }

    function draw() {
        var curtime = (new Date).getTime();
        ctx.clearRect(0, 0, SIZE.x, SIZE.y);
        display_graph();
        if (SHOWFPS) {
            ctx.fillText((1000 / (curtime - last_frame)).toFixed(1), 10, 10);
        }
        last_frame = curtime;
        //function is time intensive don't do it too often
        //if (lastcheck < curtime - 10000){
        //    controller.find_closest();
        //    lastcheck = curtime;
        //    console.log('recomp');
        //}
    }

    function show_vllView() {
        VLLVIEW = true;

        draw();
    }

    function hide_vllView(visible) {
        VLLVIEW = false;

        draw();
    }

    function toggle_live() {
        if (LIVE) {
            LIVE = false;
            stop_loop();
            $('#live_button').text('   Live')
            $('#live_button').prepend('<span class="glyphicon glyphicon-play"></span>')
            $('#EdgeLength').slider('disable');
            $('#EdgeStrength').slider('disable');
            $('#EdgeLength_label').css("color", "grey");
            $('#EdgeStrength_label').css("color", "grey");

        } else {
            LIVE = true;
            start_loop();
            $('#live_button').text(' Static')
            $('#live_button').prepend('<span class="glyphicon glyphicon-pause"></span>')
            $('#EdgeLength').slider('enable');
            $('#EdgeStrength').slider('enable');
            $('#EdgeLength_label').css("color", "rgb(51,51,51)");
            $('#EdgeStrength_label').css("color", "rgb(51,51,51)");
        }
        // $(div+' #live_button').toggleClass('graph_editor_button_on');
    }

    function toggle_visibility_legend() {
        if ($('#legend_button').text() == 'Show Legend') {
            $('#legend_button').text('Hide Legend')
            $('#legend_button').prepend('<span class="fa fa-minus-square-o "></span>')
        } else {
            $('#legend_button').text('Show Legend')
            $('#legend_button').prepend('<span class="fa fa-plus-square-o "></span>')
        }

        toggle_visibility('legenda')
    }

    function toggle_visibility(id) {

        var e = document.getElementById(id);

        if (e.style.display == 'block') {
            e.style.display = 'none';
        } else {
            e.style.display = 'block';
        }
    }

    function init() {
        //construction of GraphEditor
        controller = Controller();
        $(div).addClass('graph_editor_container');
        $(div).append('<canvas class="graph_editor_canvas" width = "' + SIZE.x + '" height = "' + SIZE.y + '" style="border: 2px black solid">Your browser does not support canvas.</canvas>');
        canvastag = $(div + ' canvas');
        $(div).css({
            'width': SIZE.x + 'px'
        });
        ctx = canvastag[0].getContext('2d');
        ctx.translate(0.5, 0.5); //makes everything prettier
        canvastag.attr('tabindex', '0');
        canvastag.keydown(function (e) {
            controller.keydown(e);
        });
        canvastag.keypress(function (e) {
            controller.keypress(e);
        });
        canvastag.keyup(function (e) {
            controller.keyup(e);
        });
        canvastag.dblclick(function (e) {
            controller.dblclick(e);
        });
        canvastag.mousedown(function (e) {
            controller.mousedown(e);
        });
        canvastag.mouseup(function (e) {
            controller.mouseup(e);
        });
        canvastag.mousemove(function (e) {
            controller.mousemove(e);
        });
        canvastag.mouseleave(function (e) {
            controller.mouseleave(e);
        });
        //fixes a problem where double clicking causes text to get selected on the canvas
        canvastag[0].onselectstart = function () {
            return false;
        }
        if (options.JSONdata) {
            import_from_JSON(options.JSONdata, false);
            draw();
        }
        if (options.controls !== false) {
            create_controls(div);
        }
        //$(div).dblclick(function (){return false;});
    }

    init();


    //an global object graph_editor is created containing all global functions
    return {
        import_from_JSON: import_from_JSON,
        import_catalog_top: import_catalog_top,
        export_tkz: export_tkz,
        export_sage: export_sage,
        get_raw_data: function () {
            return {
                nodes: nodes,
                edge_list: edge_list,
                SIZE: SIZE
            };
        },
        //destructive
        complete_graph: function (n) {
            nodes = [];
            edge_list = [];
            var i, j;
            for (i = 0; i < n; i++) {
                nodes.push(new Vertex());
                for (j = 0; j < i; j++) {
                    edge_list.push(new Edge(nodes[i], nodes[j]));
                }
            }
            circular_layout();
        },
        //destructive
        grid_graph: function (m, n) {
            n = n || m;
            nodes = [];
            edge_list = [];
            var i, j;
            for (i = 0; i < n * m; i++) {
                nodes.push(new Vertex());
            }
            for (i = 0; i < m; i++) {
                for (j = 0; j < n; j++) {
                    if (j != n - 1) {
                        edge_list.push(new Edge(nodes[i * n + j], nodes[i * n + j + 1]));
                    }
                    if (i != m - 1) {
                        edge_list.push(new Edge(nodes[i * n + j], nodes[i * n + j + n]));
                    }
                }
            }
            circular_layout();
        }
    };
};