var GraphEditor = this.GraphEditor = function GraphEditor(div, options) {
    "use strict";

    var modelToController = {
        "oshi": "Oshi",
        "openflow": "OpenFlow"
    }

    var Vertex = dreamer.Vertex;
    var Edge = dreamer.Edge;
    var GraphParameters = dreamer.GraphParameters;
    var CurLayer = dreamer.CurLayer;
    //var DomainController = dreamer.DomainController;
    var EventHandeler = dreamer.Event;
    var curmodelname;
   // var OSHI = dreamer.Oshi;

    //var provaoshi = new OSHI();



    var edge_list = [],
        nodes = [],
        graph_parameters,
        removed_edges = [],
        controller,
        domainctrl,
        curLayer,
        eventHandeler,
        Controller,
        removed_node,
        MIN_X = 800,
        MIN_Y = 800,
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
        NODE_LABEL = true,
        NODE_LABEL_C = true,
        SPRING = 0.999,
        SPEED = 2.0,
        FIXED_LENGTH = 100.0,
        ORIENTATION = Math.PI,
        SHOWFPS = false,
        SHIFT = false,
        LOOP = false,
        FPS = options.fps || 60,
        canvastag,
        ctx,
        loop_interval,
        last_frame;


    //Miscellaneous functions  
    function rand(a, b) {
        return a + Math.floor(Math.random() * (b - a));
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
        ctx.closePath();
        ctx.stroke();
    }

    function line(x1, y1, x2, y2) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
    }

    function line2(x1, y1, x2, y2, label) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        //ctx.textAlign = "end"
        // ctx.fillText("text", x1,y1)
        //ctx.textAlign = "start"
        ctx.strokeStyle = 'black'
        ctx.fillText(label, x2, y2)
        ctx.closePath();
        ctx.stroke();
    }

    function bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
        //ctx.closePath();
        ctx.stroke();
    }


    ///#
    function draw_arrow_tips(in1, in2, label) {
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

    }

    function draw_simple(edg) {
        var pos1 = edg.node1.get_pos(),
            pos2 = edg.node2.get_pos();

        if (edg.links[0].getLayer() == curLayer.getCurLayer())
            line(pos1.x, pos1.y, pos2.x, pos2.y);

    }

    ///#
    function draw_multi(edg) {
            var pos1 = edg.node1.get_pos(),
                pos2 = edg.node2.get_pos(),
                mid = scalarm(1 / 2, vectoradd(pos1, pos2)),
                dx = vectorsub(pos1, pos2),
                normal, control, i;
            normal = unit({
                x: dx.y,
                y: -dx.x
            });
            var y = 0;
            for (var i = -(edg.links.length -1 ) / 2; i <= (edg.links.length -1 ) / 2; i += 1) {
                
                if (edg.links[y].getLayer() == curLayer.getCurLayer()) {
                    control = vectoradd(mid, scalarm(norm(dx) * i / 10, normal));
                    bezier(pos1.x, pos1.y, control.x, control.y, control.x, control.y, pos2.x, pos2.y);
                }

                ++y;
            }
        }
        ///#

    function display_edge(edg) {

        var dv;
        if (edg.selected) {
            ctx.strokeStyle = "#CC0000";
        } else if (edg.closest) {
            ctx.strokeStyle = "#CCC000";
        } else if (edg.node1.selected || edg.node2.selected) {
            ctx.strokeStyle = "#0000C0";
        } else {
            ctx.strokeStyle = "#000000";
        }
        if (edg.node1 === edg.node2) {
            draw_loop(edg.node1);
        } else {
            if (edg.links.length < 2) {
                draw_simple(edg);
            } else {
               // console.log("draw_multi" + edg.node1.label + "-" + edg.node2.label)
                draw_multi(edg);
            }
        }
    }

    function inc_mult(edg) {
        if (MULTIGRAPH) {
            edg.addLink("", curLayer.getCurLayer());
        }
    }

    function dec_mult(edg) {
        console.log("dec_mult");
        if (edg.links.length > 1) {
            //TODO gestione caso multilink
            remove_edge(edg);
        } else if (edg.links.length === 1) {
            remove_edge(edg);
        }
    }



    //returns object {d: closest_distance, node: corresponding node}
    function get_closest_node(v) {
        var availablenodes = domainctrl.getNodeCurrentLayer(curLayer, nodes);
        return fmin(availablenodes.map(function(n) {
            return {
                d: d(n.get_pos(), v),
                node: n
            };
        }), function(a, b) {
            return a.d < b.d;
        });
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
                nodes[i].label = nodes[i].label.replace(/[0-9]/g, '') + (i + 1);
        }

        draw();
    }

    function undo_remove() {
        if (removed_node) {
            removed_node.label = next_label(nodes);
            nodes.push(removed_node);
            edge_list = edge_list.concat(removed_edges);
            removed_node = undefined;
            removed_edges = [];
            draw();
        }
    }

    //#
    function newEdgebetween(node1, node2) {
        if ( domainctrl.isValidEdge(node1, node2, edge_list,curLayer.getCurLayer()).error == true ) {
            eventHandeler.fire("alert_warning_msg", "New Edge from node type" + node1.getType() + " to node type " +node2.getType() + " not allowed.");
            console.log("invalid edge!!")
            return;
        };

        var edge, existing = false, updated = false,
            i;
        if (node1 === node2) {
            //loop!!
            return;
        }

        for (i = edge_list.length - 1; i > -1; i -= 1) {

            edge = edge_list[i];
           // edge.existBetween(node1, node2, curLayer.getCurLayer());
            if (edge.existBetween(node1, node2)) {
                if(edge.hasLink(curLayer.getCurLayer()))
                    existing = true;
                else{
                    //inserisco nuovo link
                    edge.addLink("", curLayer.getCurLayer());
                    updated = true;
                }
                break;
            }
        }

        if (existing) {
            console.log("edge already existing!!")
            //edge already existing!!
            return;
        } else if(updated == false) {
            console.log("edge not already existing!!")
            var newEdge = new Edge(node1, node2, curLayer.getCurLayer());
            edge_list.push(newEdge);
        }
    }

    function split(edge) {


        var enodes = edge.get_nodes(),
            new_v,
            newpos = scalarmi(1 / 2, vectoradd(enodes.node1.get_pos(), enodes.node2.get_pos()));


        new_v = new Vertex(nodes, newpos);


        var newedge1 = new Edge(new_v, enodes.node1, curLayer.getCurLayer());

        var newedge2 = new Edge(new_v, enodes.node2, curLayer.getCurLayer());

        newedge1.setConnecionList(edge.links);
        newedge2.setConnecionList(edge.links);


        // add new Vertex
        nodes.push(new_v);

        //remove edge
        remove_edge(edge);

        //add new Edges
        edge_list.push(newedge1);
        edge_list.push(newedge2);

        return new_v;
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

    function change_vertex_size(newval) {
        NODE_RADIUS = newval;
        draw();
    }


    function change_egde_strength(newval) {
        SPRING = (1 - 1e-2) + 1e-4 * (100 - newval);
        SPEED = newval / 50.0;
        SPEED *= 2 * SPEED;
    }

    function change_egde_length(newval){
        FIXED_LENGTH = newval;
    }


    function erase_graph() {
        nodes = [];
        edge_list = [];
        graph_parameters = new GraphParameters(domainctrl.getGraphSpecDomine());
        //console.log(JSON.stringify(graph_parameters));
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
            nodes[i].run(SPEED);
        }
    }

    Controller = function() {
        var hit_node, selected_object, dragging_node, dragging_frozen_flag, closest, mouse = new Point(),
            lastcheck = 0;
        return {
            select_object: function(obj) {
                if (selected_object === obj) {
                    this.unselect_object();
                    return;
                }
                if (selected_object) {
                    this.unselect_object();
                }
                selected_object = obj;
                obj.selected = true;
                console.log('selected_object');
                update_infobox(obj);
            },
            set_mouse: function(e) {
                var obj = e.currentTarget,
                    offset = $(obj).offset();
                mouse = {
                    x: e.pageX - offset.left,
                    y: e.pageY - offset.top
                };
            },
            unselect_object: function() {
                if (selected_object) {
                    selected_object.selected = false;
                    selected_object = undefined;
                    update_infobox();
                }
            },
            drag_node_start: function(node) {
                dragging_node = node;
                dragging_frozen_flag = node.get_frozen();
                if (!node.get_frozen()) {
                    node.toggle_freeze();
                }
                if (!LIVE) {
                    start_loop();
                }
            },
            update_drag: function(m) {
                dragging_node.set_pos(m);
                if (dragging_node === selected_object) {
                    update_infobox(dragging_node);
                }
            },

            drag_node_stop: function() {

                if (dragging_frozen_flag === false && dragging_node) {
                    dragging_node.toggle_freeze();
                }
                dragging_node = undefined;
                if (!LIVE) {
                    stop_loop();
                }
            },
            find_closest: function() {
                var closest_data, edge;
                closest_data = get_closest_node(mouse);
                if (closest_data && closest_data.d < NODE_RADIUS) {
                    this.update_closest(closest_data.node);
                    return;
                }
                var availableedges = domainctrl.getEdgeCurrentLayer(curLayer, edge_list);
                edge = first(availableedges, function(edge) {
                    var v = edge.get_nodes();
                    return in_tube(mouse, v.node1.get_pos(), v.node2.get_pos(), 15);
                });
                this.update_closest(edge);
            },
            update_closest: function(object) {
                if (closest && (closest !== object)) {
                    closest.closest = false;
                }
                closest = object;
                if (object) {
                    object.closest = true;
                }
            },
            mousedown: function() {
                if (closest && closest instanceof Vertex) {
                    hit_node = closest;
                }
                if (!LIVE) draw();
            },
            mouseup: function(e) {
                var new_v;
                if (dragging_node) {
                    this.drag_node_stop();
                } else if (hit_node && (selected_object === undefined)) {
                    console.log('mouseup1')
                    this.select_object(hit_node);
                } else if (hit_node && selected_object instanceof Vertex && (selected_object !== hit_node)) {
                    //toggle_edge(selected_object, hit_node);
                    if (!SHIFT) {

                        //  toggle_edge(selected_object, hit_node); //whr
                        this.unselect_object();
                    } else {
                        newEdgebetween(selected_object, hit_node);
                    }
                } else if (closest) {
                    console.log('mouseup1')
                    this.select_object(closest);
                } else {
                    if (SHIFT) {
                        /*if(domainctrl.isInsertEnabled(curLayer.getCurLayer())){
                            new_v = new Vertex(nodes, mouse);
                        //careful for edge case of user not moving mouse afterclick
                        //if live the vertex flies off 
                        if (!LIVE) {
                            this.update_closest(new_v);
                        }
                        nodes.push(new_v);
                        }
                        */
                    }
                }
                hit_node = undefined;
                if (!LIVE) {
                    draw();
                }
            },
            mousemove: function(e) {
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
            keydown: function(e) {
                if (e.keyCode === 16) {
                    SHIFT = true;
                }
            },
            keyup: function(e) {
                SHIFT = false;
            },
            keypress: function(e) {
                var pos, canvaspos, dialog;
                //charCode has browser problems, check with http://www.quirksmode.org/js/keys.html
                //console.log(e.charCode,String.fromCharCode(e.charCode));
                if (String.fromCharCode(e.charCode) === 'd' && selected_object) {
                    if (selected_object instanceof Vertex) {
                        remove_node(selected_object);
                    } else if (selected_object instanceof Edge) {
                        dec_mult(selected_object);
                    }
                    this.unselect_object();
                }
                if (String.fromCharCode(e.charCode) === 'l') {
                    toggle_live();
                }
                if (String.fromCharCode(e.charCode) === 'r') {
                    SHOWFPS = !SHOWFPS;
                }
                if (String.fromCharCode(e.charCode) === 'f' && selected_object instanceof Vertex) {
                    selected_object.toggle_freeze();
                    this.unselect_object();
                }
                if (String.fromCharCode(e.charCode) === '+' && selected_object instanceof Edge) {
                    inc_mult(selected_object);
                }
                if (String.fromCharCode(e.charCode) === 's' && selected_object instanceof Edge) {
                    this.select_object(split(selected_object));
                }
                if (!LIVE) draw();
            },
            mouseleave: function() {
                this.drag_node_stop();
            },
            dblclick: function() {}
        };
    };



    function import_from_JSON(JSONdata, live, catalog) {
        var i, dict = {},
            new_v, pos, vertex;
        if (catalog) {
            var data = JSONdata;
        } else {
            data = JSON.parse(JSONdata)
        }
        erase_graph();

        var resimport = domainctrl.import_from_JSON(data, SIZE);

        nodes = resimport.vertices;
        edge_list = resimport.edges;
        graph_parameters = resimport.graph_parameters;
                    
        var args = {
            graph_parameters: graph_parameters,
            curLayer: curLayer.getCurLayer(),
            domain_data: domainctrl.getDomainData() 

        };
        draw();
        eventHandeler.fire("topology_loaded", args);
        
        live = !nodes_have_position(nodes);
        console.log("live", live, LIVE, live!=LIVE);
        if(live != LIVE)
           toggle_live();
        
    }


    function export_json() {

        return domainctrl.exportJson({
            edges: edge_list,
            vertices: nodes,
            graph_parameters: graph_parameters
        });
    }

    function nodes_have_position(_nodes){
        for (var i in _nodes) {
            if (_nodes[i].get_pos().x == 0 && _nodes[i].get_pos().y == 0)
                return false;
                
        }

        return true;
    }

    function showEdgeLabel(show){
        NODE_LABEL = show;
        draw();
    }

    function showEdgeLabelC(show){
        NODE_LABEL_C = show;
        draw();
    }

    ///#
    function display_vertex(vert) {
        if (SHIFT) {
            // remove_illegal_edges(this.label);
        }

        var imageObj = new Image();
        var node_number;
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 1;

        if (vert.selected) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = NODE_RADIUS / 5;

            imageObj.src = fill_vert(1, vert);
        } else if (vert.closest) {
            imageObj.src = fill_vert(1, vert);
        } else {
            if (NODE_LABEL) {
                imageObj.src = fill_vert(0, vert);
            } else {
                imageObj.src = fill_vert(0, vert);
            }
        }
        circle(vert.pos.x, vert.pos.y, NODE_RADIUS);
        ctx.drawImage(imageObj, vert.pos.x - NODE_RADIUS / 1.45, vert.pos.y - NODE_RADIUS / 1.45, 1.4 * NODE_RADIUS, 1.4 * NODE_RADIUS)

        if (vert.vertex_info.frozen) {
            //imageObj.src = 'img/clipart-router-6edb-fixed.png'
            ctx.drawImage(imageObj, vert.pos.x - NODE_RADIUS / 1.45, vert.pos.y - NODE_RADIUS / 1.45, 1.4 * NODE_RADIUS, 1.4 * NODE_RADIUS)
                // ctx.drawImage(imageObj, this.pos.x-NODE_RADIUS/3,this.pos.y-NODE_RADIUS,NODE_RADIUS,NODE_RADIUS)
        }

        if (NODE_LABEL || NODE_LABEL_C) {
            ctx.fillStyle = "#000000";
            ctx.font = (NODE_RADIUS / 2) + "pt Helvetica"
            ctx.textAlign = "center"
            if(NODE_LABEL){
                node_number = vert.label; //nodes.indexOf(vert).toString();
                 ctx.fillText(node_number, vert.pos.x, vert.pos.y + (1.5*NODE_RADIUS));
            }
            if(NODE_LABEL_C)
                if(vert.getVertexInfo().property && vert.getVertexInfo().property['custom_label'])
                    ctx.fillText(vert.getVertexInfo().property['custom_label'], vert.pos.x, vert.pos.y + 1.5*(1.5*NODE_RADIUS));
        }
    }

    ///#
    function fill_vert(is_closest, vert) {

        var nodeDView = domainctrl.getNodeDataView(vert, is_closest,curLayer.getCurLayer());

        ctx.fillStyle = nodeDView.bgcolor;

        return nodeDView.icon;
    }

    ///#
    function draw_loop(vert) {
        var angle = vert.node_loop_angle(edge_list);
        circle(vert.pos.x + 1.5 * Math.cos(angle) * NODE_RADIUS, vert.pos.y - 1.5 * Math.sin(angle) * NODE_RADIUS, 2 * NODE_RADIUS, true);
    }

    function display_graph() {
        var i;
        if (LIVE) {
            run_physics();
        }
        for (i = 0; i < edge_list.length; i += 1) {

            display_edge(edge_list[i]);
        }

        for (i = 0; i < nodes.length; i += 1) {

            if (domainctrl.isVisible(nodes[i], curLayer.getCurLayer())) {
                display_vertex(nodes[i]);
            }
        }
    }



    function start_loop(speed) {
        loop_interval = setInterval(draw, speed || 1000 / FPS);
    }

    function stop_loop() {
        if(loop_interval)
            clearInterval(loop_interval);
    }

    function draw() {
        var curtime = (new Date).getTime();
        ctx.clearRect(0, 0, SIZE.x, SIZE.y);
        ctx.beginPath();
        display_graph();
        if (SHOWFPS) {
            ctx.fillText((1000 / (curtime - last_frame)).toFixed(1), 10, 10);
        }
        last_frame = curtime;

    }



    //////////////////////////

    function addListener(type, listener) {
        eventHandeler.addL(type, listener);
    }


    function toggle_live(value) {
        console.log("toggle_live");
        if(value != undefined)
            LIVE == value;
        else
            LIVE = !LIVE;
        
        if (LIVE) {
            start_loop();
        } else {
            stop_loop();
        }
        
        eventHandeler.fire("LiveStatus", {
            live: LIVE
        });
    }


    function set_layer(layer) {
        if (domainctrl.isValidLayers(layer)) {
            curLayer.setCurLayer(layer);
        }
        draw();
    }

    function update_infobox(obj) {


        var pos, index, node, edge;
        if (obj && obj instanceof Vertex) {
            var vertype = obj.vertex_info["node-type"] || "none";


            var info_data = domainctrl.getNodeProperties(obj, nodes);
            info_data['curLayer'] = curLayer.getCurLayer();
            //console.log(JSON.stringify(info_data));

            eventHandeler.fire("update_infobox", info_data);

        } else if (obj && obj instanceof Edge) {
            edge = obj;
            var enodes = edge.get_nodes();

            var info_data = {
                selected: "Edge",
                base_info: {
                    
                    index: edge_list.indexOf(edge),
                    nodes: {
                        node1: enodes.node1.label.replace("#", ""),
                        node2: enodes.node2.label.replace("#", "")
                    },
                    label: edge.label
                },
                type_info: {

                },
                model_info:{
                    
                }
            }

            eventHandeler.fire("update_infobox", info_data);

        } else {

            var data = {
                selected: "none"
            };
            eventHandeler.fire("update_infobox", data);

        }
    }

    function export_image() {
        //create a dummy CANVAS
        var canvas = $(div + ' canvas')[0];
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
    }

    function set_properties(args, updatebox) {
        console.log("set_properties: " + JSON.stringify(args));
        var resetprop = domainctrl.setProperties({
            edges: edge_list,
            vertices: nodes,
            graph_parameters: graph_parameters
        }, args, curLayer.getCurLayer());
        if(resetprop.error){
            console.log(resetprop.error);
             eventHandeler.fire("alert_warning_msg", resetprop.error);
        }else{
            if (args.node && updatebox) {
                update_infobox(nodes[args.node.index]);
            } else if (args.edge) {
                update_infobox(edge_list[args.edge.index]);
            }
            else if(args.graph_parameters){
                eventHandeler.fire("update_graph_parameters", args.graph_parameters);
            }
        }
        
       // console.log(JSON.stringify(graph_parameters))

        draw();
    }

    function get_layers() {
        return domainctrl.getAllLayers();
    }

    function get_nodeTypes() {
        console.log("graph_editor get_nodeTypes");
        return domainctrl.getNodeTypes();
    }


    function getNodesWithProperty(property){
        return domainctrl.getNodesWithProperty(property);
    };

    //////////////////////////


    function getDomainController(key) {
    
        if (key in modelToController)
            return modelToController[key];
        
        return "DomainController";
    
    }

    function init() {
        //construction of GraphEditor
        eventHandeler = new EventHandeler();
        curLayer = new CurLayer();
        
        controller = Controller();
        $(div).addClass('graph_editor_container');
        $(div).append('<canvas id="topocanvas" class="graph_editor_canvas" width = "' + SIZE.x + '" height = "' + SIZE.y + '" style="border: 2px black solid">Your browser does not support canvas.</canvas>');
        canvastag = $(div + ' canvas');
        $(div).css({
            'width': SIZE.x + 'px'
        });
        ctx = canvastag[0].getContext('2d');
        ctx.translate(0.5, 0.5); //makes everything prettier
        canvastag.attr('tabindex', '0');
        canvastag.keydown(function(e) {
            controller.keydown(e);
        });
        canvastag.keypress(function(e) {
            controller.keypress(e);
        });
        canvastag.keyup(function(e) {
            controller.keyup(e);
        });
        canvastag.dblclick(function(e) {
            controller.dblclick(e);
        });
        canvastag.mousedown(function(e) {
            controller.mousedown(e);
        });
        canvastag.mouseup(function(e) {
            controller.mouseup(e);
        });
        canvastag.mousemove(function(e) {
            controller.mousemove(e);
        });
        canvastag.mouseleave(function(e) {
            controller.mouseleave(e);
        });
        canvastag.droppable({
                drop: dropNewVertex
        });


        //fixes a problem where double clicking causes text to get selected on the canvas
        canvastag[0].onselectstart = function() {
                return false;
            }


    }

    function getNodesProperty(args){
        return domainctrl.getNodesProperty(args, nodes);
    }

    function dropNewVertex(e, ui){
        
        var type = ui.draggable.data("type");
        
        var allowed = domainctrl.isNewVertexAllowed(type ,curLayer.getCurLayer());
        if(allowed.error ){
            console.log(JSON.stringify(allowed))
            eventHandeler.fire("alert_warning_msg", allowed.error.message);
        }
        else
        {
            var offset =  canvastag.offset();
            var x = parseInt(ui.offset.left - offset.left);
            var y = parseInt(ui.offset.top - offset.top);
            var vertex_info = {};
            vertex_info["frozen"] = false;
            vertex_info["node-type"] = type;
            vertex_info["property"] =domainctrl.buildNodeProperties(type);
            
            var new_v = new Vertex(nodes, {x: x, y: y},"",vertex_info);
            if (!LIVE) {
                controller.update_closest(new_v);
            }
            nodes.push(new_v);
            new_v.label = domainctrl.getNodeLabel(type) + (nodes.indexOf(new_v) + 1)
            draw();
        }     
        
     }
     function getcurmodelname(){
        return curmodelname;
     }

    function load(modelname) {
        console.log("load");
        curmodelname = (modelname);
        domainctrl = new dreamer[getDomainController(modelname)];

        domainctrl.loadSpec(modelname, function(resload){
        //     console.log(JSON.stringify(resload));
        if (resload['error'] != undefined ) {
            console.log("erroreeeeeeeeeeeeee")
            eventHandeler.fire("error_load_spec", resload['error']);
        } else {
            if (options.example[modelname]) {
                import_from_JSON(options.example[modelname], false);
                draw();
            }else{
                erase_graph();
            }
            var args = {
                graph_parameters: graph_parameters,
                curLayer: curLayer.getCurLayer(),
                 domain_data: domainctrl.getDomainData(), 
                modelname: modelname

            };
            eventHandeler.fire("editor_ready", args);
        }
        });
        
    }

    function validate(){
        domainctrl.validateTopology({
            edges: edge_list,
            vertices: nodes,
            graph_parameters: graph_parameters
        }, function(resvalidate){
            //console.log(resvalidate['error'])
            if (resvalidate['error'] != undefined ) {
            console.log("erroreeeeeeeeeeeeee")
            eventHandeler.fire("INVALID_TOPOLOGY", resvalidate['error']['messages']);
        } else  {
           console.log(resvalidate)
            eventHandeler.fire("VALID_TOPOLOGY");
        }
        });
    }


    function getRandomTopology(n,p){
        domainctrl.getRandomTopology(n,p, function(resrandom){
            console.log(resrandom['error'])
            if (resrandom['error'] == undefined || resrandom['error'] == true) {
                eventHandeler.fire("RANDOM_TOPOLOGY", {'error': true});
            console.log("erroreeeeeeeeeeeeee")
        } else  {
           console.log(resrandom)
           import_from_JSON(JSON.stringify(resrandom.topology), true);
            eventHandeler.fire("RANDOM_TOPOLOGY", {'error': false});
            
        }
        });
    }

    function resizeCanvasWith(increment){
        resizeCanvas(MIN_X + increment, MIN_Y + increment);
    }


    function resizeCanvas(newx, newy){
        var old_x = SIZE.x;
        var old_y = SIZE.y;
        SIZE = {
            x: newx,
            y: newy
        };
        center = {
            x: SIZE.x / 2,
            y: SIZE.y / 2
        };
        ctx.canvas.height = SIZE.y;
        ctx.canvas.width = SIZE.x;
        node_repos(SIZE.x / old_x, SIZE.y / old_y);
    }

    function resetCanvasDimension(newx, newy){
       
        MIN_X = newx;
        MIN_Y = newy;
        resizeCanvas(newx, newy);
        eventHandeler.fire("RESETTED_CANVAS_DIMENSION");
    }

    function getvmmcfg(){
        return domainctrl.getVmmConfig();
    }


    function setvmmcfg(data){
        console.log("@@@", JSON.stringify(data));
        var res = domainctrl.setVmmConfig(data);
        
        if(res.error){
            console.log(res.error);
            eventHandeler.fire("alert_warning_msg", res.error);
        }
        return res;
    }

    function getNotSelectedMgtIp(type){
        return domainctrl.getNotSelectedMgtIp(type);
    }

    function getInterfacesMgtIp(type, mgtip){
        return domainctrl.getInterfacesMgtIp(type, mgtip);
    }

    function newExp () {
        var exp_id =  new Date().getTime();
        var res = domainctrl.newExp({
            edges: edge_list,
            vertices: nodes,
            graph_parameters: graph_parameters,
            exp_id: exp_id
        }, function(resneexp){
            console.log("resneexp", JSON.stringify(resneexp));
            if (resneexp['error'] != undefined ) {
                console.log("erroreeeeeeeeeeeeee" + JSON.stringify(resneexp));
                eventHandeler.fire("EXP_MODE", {exp_id: exp_id, error: resneexp['error']});
            } 
            else  {
                console.log("newExp fatto");
                console.log(resneexp)
                eventHandeler.fire("EXP_MODE", {exp_id: exp_id});
            }
        });
    }

    init();


    //an global object graph_editor is created containing all global functions
    return {
        set_properties: set_properties,
        import_from_JSON: import_from_JSON,
        export_json: export_json,
        addListener: addListener,
        toggle_live: toggle_live,
        set_layer: set_layer,
        get_layers: get_layers,
        get_nodeTypes: get_nodeTypes,
        undo_remove: undo_remove,
        erase_graph: erase_graph,
        export_image: export_image,
        circular_layout: circular_layout,
        load: load,
        validate: validate,
        getRandomTopology: getRandomTopology,
        resetCanvasDimension: resetCanvasDimension,
        resizeCanvasWith: resizeCanvasWith,
        change_orientation: change_orientation,
        change_vertex_size: change_vertex_size,
        change_egde_strength: change_egde_strength,
        change_egde_length: change_egde_length,
        showEdgeLabel: showEdgeLabel,
        showEdgeLabelC: showEdgeLabelC,
        getNodesProperty: getNodesProperty,
        getvmmcfg: getvmmcfg,
        setvmmcfg: setvmmcfg,
        getNotSelectedMgtIp: getNotSelectedMgtIp,
        getInterfacesMgtIp: getInterfacesMgtIp,
        newExp: newExp,
        getcurmodelname: getcurmodelname
    };
};
