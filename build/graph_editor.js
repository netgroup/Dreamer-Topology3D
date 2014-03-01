var GraphEditor = this.GraphEditor = function GraphEditor(div, options){
"use strict";

var edge_list = [], nodes = [], removed_edges = [],
    controller,
    Controller, Vertex, Edge, 
    graph_name,
    removed_node, 
    SIZE = { 
        x : options.width || 500,
        y : options.height || 500
    },
    center = {x: SIZE.x/2, y: SIZE.y/2},
    DIRECTED = options.directed || true,
    MULTIGRAPH = options.multigraph || false,
    NODE_RADIUS = options.node_radius || 10.0,
    LIVE = false,
    AUTO_MAXIMIZE = true,
    NODE_NUMBERS = true,
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

function sort_num(a,b){
    return a-b;
}

// first element in array such that f(i) is true;
// If f(i) is always false returns undefined
function first(array,f){
    var i = 0,l = array.length;
    for(; i < l; ++i){
        if (f(array[i])){
            return array[i];
        }
    }
}

function nonundef(x){
    return x !== undefined;
}

//functional min, could be done with recursion but this is faster
function fmin(a, lessthan){
    var i, l = a.length, best = 0;
    for(i = 0; i < l; i++){
        if (lessthan(a[i],a[best])){
            best = i;
        }
    }
    return a[best];
}

//Drawing functions
function circle(x,y,r,nofillFlag){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.closePath();
    if(!nofillFlag){
        ctx.fill();
    }
    ctx.stroke();
}

function line(x1,y1,x2,y2){
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    //ctx.closePath();
    ctx.stroke();
}

function line2(x1,y1,x2,y2,label){
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    //ctx.closePath();
    ctx.textAlign = "end"
   // ctx.fillText("text", x1,y1)
    //ctx.textAlign = "start"

   ctx.fillText(label, x2,y2)
    ctx.stroke();
}

function bezier(x1,y1,cx1,cy1,cx2,cy2,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.bezierCurveTo(cx1,cy1,cx2,cy2,x2,y2);
    //ctx.closePath();
    ctx.stroke();
}
//Library for doing basic vector algebra in 2D
function Point(x,y){
    return {x: x||0, y: y||0};
}
// Vector algebra operations
function scalarm(a, v){
    return {x: a*v.x, y: a*v.y};
}
function vectoradd(v1, v2){
    return {x: v1.x + v2.x, y: v1.y + v2.y};
}

function vectorsub(v1, v2){
    return {x: v1.x - v2.x, y: v1.y - v2.y};
}
//in-place versions
function vectorsubi(v1, v2){
    v1.x -= v2.x;
    v1.y -= v2.y;
    return v1;
}
function scalarmi(a, v){
    v.x *= a;
    v.y *= a;
    return v;
}

function norm(v){
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
}
function unit(v){
    return scalarm(1/norm(v),v);
}
function d(v,w){
    return norm(vectoradd(v,scalarm(-1,w)));
}

function dot(v,w){
    return v.x*w.x + v.y*w.y;
}

//project v onto w
function project(v,w){
    return scalarm(dot(v,w)/dot(w,w),w);
}

//shorest vector from point v to the line given by origin and w 
function normal_vector_point_to_line(v,w){
    return vectorsub(v,project(v,w));
}

//tests if p is in the tube defined along the segment v1-v2 of radius rad
function in_tube(p,v1,v2,rad){
    var v = vectorsub(p,v1), w = vectorsub(v2,v1);
    return norm(normal_vector_point_to_line(v,w)) < rad && dot(w,v) > 0  && dot(scalarm(-1,w),vectorsub(p,v2)) > 0; 
}
function neighbors_of(node){
    var neighbor, neighbors_list = [], i;
    for (i = 0; i < edge_list.length; i += 1) {
        neighbor = edge_list[i].connects_to(node);
        if (neighbor && neighbor !== node) {
            neighbors_list.push(neighbor);
        }
    }    
    return neighbors_list;
}

function next_label(){
    var i = 0, j, good = false; 
    while(!good){
        good = true;
        for(j = 0; j < nodes.length; j++){
            if (nodes[j].label === i.toString()){
                i++;
                good = false; 
                break;
            }
        }
    }
    return i.toString();
}

Vertex = function(pos, label){
    //copy for objects would be nice
    this.pos = pos? Point(pos.x, pos.y) : Point();
    this.v = Point();
    this.frozen = false;
    this.label = label || next_label(); 
};

Vertex.prototype = {
    node_loop_angle: function(){
        var angles = [], angle = 0, i, diff, bestdiff = 0, edge, npos, thispos = this.pos,
            neighbors_list = neighbors_of(this);
        angles = neighbors_list.map(function(node){
            var npos = node.get_pos(); 
            return Math.atan2(-npos.y + thispos.y, npos.x - thispos.x);
        });
        angles.sort(sort_num);
        for (i = 0; i < angles.length-1; i+=1){
            diff = angles[i+1] - angles[i];
            if (diff > bestdiff){
                angle = angles[i] + diff/2;
                bestdiff = diff;
            }
        }
        diff = Math.PI * 2 + angles[0] - angles[angles.length - 1];
        if (diff > bestdiff){
            angle = angles[angles.length - 1] + diff/2;
        } 
        return angle;
    },
    display: function () {
        var node_number;
        ctx.strokeStyle = "#808080";
        if (this.selected) {
            ctx.fillStyle = "#FF0000";
        } else if (this.closest){
            ctx.fillStyle = "#CCC000";
        } else {
            if (NODE_NUMBERS) {
                if (this.label.split("#")[0]=="AOSHI"){
                    ctx.fillStyle = "#00FF00";
                }else if (this.label.split("#")[0]=="COSHI"){
                    ctx.fillStyle = "#FF00FF";
                }else{
                ctx.fillStyle = "#808080";
                }
            } else if (this.frozen){
                ctx.fillStyle = "#C0C0C0";
            } else {
                if (this.label.split("#")[0]=="AOSHI"){
                    ctx.fillStyle = "#00FF00";
                }else if (this.label.split("#")[0]=="COSHI"){
                    ctx.fillStyle = "#FF00FF";
                }else{
                ctx.fillStyle = "#808080";
                }
            }
        }
        circle(this.pos.x, this.pos.y, NODE_RADIUS);
        if (NODE_NUMBERS) {
            ctx.fillStyle = "#000000";
            ctx.font = (NODE_RADIUS / 2)+"pt Helvetica"
            ctx.textAlign ="center"
            node_number = nodes.indexOf(this).toString();
            ctx.fillText(node_number, this.pos.x , this.pos.y+(NODE_RADIUS / 4));
        }
    },
    vector_from: function (v) {
        return {x: this.pos.x-v.x, y: this.pos.y - v.y};
    },
    change_vel: function (deltax,deltay) {
        if(!this.frozen){
            this.v.x += deltax;
            this.v.y += deltay;            
        }
    },
    get_pos: function (){
        return this.pos;
    },
    set_pos: function (new_pos){
        this.pos = new_pos;
    },
    toggle_freeze: function(){
        this.frozen = !this.frozen;
    },
    get_frozen: function(){
        return this.frozen;
    },
    draw_loop: function (){
        var angle = this.node_loop_angle();
        circle(this.pos.x + 1.5 * Math.cos(angle) * NODE_RADIUS, this.pos.y - 1.5 * Math.sin(angle) * NODE_RADIUS, 2 * NODE_RADIUS, true);
    },
    run: function (){
        this.pos.x += Math.min(Math.max(SPEED * this.v.x, -20), 20);
        this.pos.y += Math.min(Math.max(SPEED * this.v.y, -20), 20);
        this.v.x *= 0.5;
        this.v.y *= 0.5;
    }
};

Edge = function (node1, node2, multi, label) {
    this.node1 = node1;
    this.node2 = node2;
    this.multi = multi || 1;
    this.label = label || '::';
};

Edge.prototype = {
    draw_arrow_tips: function(in1,in2,label){
        var dv = { 
            x: in2.x - in1.x,
            y: in2.y - in1.y
        },
        lenv = norm(dv), 
        v1 = vectoradd(in1,{ 
            x: dv.x*(1-NODE_RADIUS/lenv),
            y: dv.y*(1-NODE_RADIUS/lenv)
        }),
        angle = Math.PI + Math.atan2(dv.y,dv.x),
        newangle1 = angle + Math.PI/6,
        newangle2 = angle - Math.PI/6,
        smallv1 = { 
            x: (NODE_RADIUS+10)*Math.cos(newangle1),  
            y: (NODE_RADIUS+10)*Math.sin(newangle1)  
        },
        smallv2 = { 
            x: NODE_RADIUS*Math.cos(newangle2),  
            y: NODE_RADIUS*Math.sin(newangle2)  
        },
        tip1 = vectoradd(v1,smallv1),
        tip2 = vectoradd(v1,smallv2);

        line2(v1.x,v1.y,tip1.x,tip1.y,label);
       // line2(v1.x,v1.y,tip2.x,tip2.y);
    },
    draw_simple: function(){
        var pos1 = this.node1.get_pos(), pos2 = this.node2.get_pos();
        line(pos1.x,pos1.y,pos2.x,pos2.y);
       // this.label
        if (DIRECTED){
            this.draw_arrow_tips(pos1,pos2,this.label.split("::")[0]);
            this.draw_arrow_tips(pos2,pos1,this.label.split("::")[1]);

        }
    },
    draw_multi: function(){
        var pos1 = this.node1.get_pos(), pos2 = this.node2.get_pos(),
        mid = scalarm(1/2,vectoradd(pos1, pos2)), 
        dx = vectorsub(pos1, pos2), normal, control, i;
        normal = unit({x : dx.y , y: -dx.x});
        for (i = -(this.multi-1)/2; i <= (this.multi-1)/2; i += 1){
            control = vectoradd(mid, scalarm(norm(dx)*i/10, normal));
            bezier(pos1.x, pos1.y, control.x, control.y, control.x, control.y, pos2.x, pos2.y);
            if (DIRECTED){
                this.draw_arrow_tips(control,pos2,this.label.split("::")[1]);
                bezier(pos2.x, pos2.y, control.x, control.y, control.x, control.y, pos1.x, pos1.y);
                this.draw_arrow_tips(control,pos1,this.label.split("::")[0]);
 //               this.draw_arrow_tips(control,pos2);
            }
        }
    },
    display: function(){
        var dv;
        if (this.selected){
            ctx.strokeStyle = "#CC0000";
        } else if (this.closest){
            ctx.strokeStyle = "#CCC000";
        } else if (this.node1.selected || this.node2.selected) {
            ctx.strokeStyle = "#0000C0";
        } else {
            ctx.strokeStyle = "#000000";
        }
        if (this.node1 === this.node2) {
            this.node1.draw_loop(); 
        } else {
            if (this.multi < 2){
                this.draw_simple();
            } else {
                this.draw_multi();
            }
        }
    },
    is_touching: function (node){
        return node === this.node1 || node === this.node2;
    },
    is_loop: function (node){
        return node === this.node1 && node === this.node2;
    },
    connects_to: function (node){
        var neighbor;
        if (this.node1 === node) {
            neighbor = this.node2;
        }
        if (this.node2 === node) {
            neighbor = this.node1;
        }
        return neighbor;
    },
    get_nodes: function (){
        return {node1:this.node1, node2:this.node2};
    },
    inc_mult: function(){
        if (MULTIGRAPH){
           this.multi += 1;
        }
    },
    dec_mult: function(){
        if(this.multi > 0) {
            this.multi -= 1;
        }
        if(this.multi === 0){
            remove_edge(this);
        }
    }
};

//returns object {d: closest_distance, node: corresponding node}
function get_closest_node(v){
    return fmin(nodes.map(function (n){
        return {d: d(n.get_pos(), v), node:n};
    }), function (a,b){
        return a.d < b.d;
    });
}

function remove_edge(edge){
    edge_list.splice(edge_list.indexOf(edge),1);
}

function remove_node(node){
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
        nodes[i].label = nodes[i].label.split("#")[0]+"#"+i;
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

function toggle_loop(node){
    var edge, 
    existing = first(edge_list, function (edge){
        return edge.is_loop(node);
    });
    if (existing) {
        edge_list.splice(edge_list.indexOf(existing), 1);
    } else {
        edge_list.push(new Edge(node, node));
    }
}

function toggle_edge(node1, node2) {
    var edge, existing = false, i;

    if (node1 === node2){
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
    if (existing){
            edge_list.splice(i, 1);
        } else {
            edge_list.push(new Edge(node1, node2));
        }
}

function centerize(maximize){
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
                newp = { x :(SIZE.x / 2) + ((SIZE.x * 9 / 10) * (pos.x - min_x) - (SIZE.x * 9 / 20) * width) / scaling_factor,
                    y : (SIZE.y / 2) + ((SIZE.y * 9 / 10) * (pos.y - min_y) - (SIZE.y * 9 / 20) * height) / scaling_factor};
            } else {
                newp = {x : (SIZE.x - width) / 2 + pos.x - min_x, y : newy = (SIZE.y - height) / 2 + pos.y - min_y};
            }
            nodes[i].set_pos(newp);
        }
    }
}

function circular_layout() {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].set_pos({
            x : SIZE.x / 2 + (2 * SIZE.x / 5) * Math.sin(2 * Math.PI * i / nodes.length),
            y : SIZE.y / 2 - (2 * SIZE.y / 5) * Math.cos(2 * Math.PI * i / nodes.length)
            });
    }
    draw();
}

function change_orientation(newval) {
    var new_orientation = Math.PI *(1- newval / 180.0),
        n_x, n_y, r, theta, i, pos;
    for (i = 0; i < nodes.length; i += 1) {
        pos = nodes[i].get_pos();
        n_x = pos.x - SIZE.x / 2;
        n_y = pos.y - SIZE.y / 2;
        r = Math.sqrt(n_x * n_x + n_y * n_y);
        theta = Math.atan2(n_y, n_x) + new_orientation - ORIENTATION;
        nodes[i].set_pos({x : SIZE.x / 2 + r * Math.cos(theta),
                          y : SIZE.y / 2 + r * Math.sin(theta)});
    }
    ORIENTATION = new_orientation;
    draw();
}

function split(edge){
    var enodes = edge.get_nodes(), new_v, 
    newpos = scalarmi(1/2,vectoradd(enodes.node1.get_pos(), enodes.node2.get_pos()));
    new_v = new Vertex(newpos);
    nodes.push(new_v);
    toggle_edge(new_v, enodes.node1);
    toggle_edge(new_v, enodes.node2);
    remove_edge(edge);
    return new_v;
}

function erase_graph(){
    nodes = [];
    edge_list = [];
    draw();
}
//most time crucial function according to profiler, hand-optimized
function add_force(node1, node2, force_function, k){
    var sqr_d, force, n1 = node1.get_pos(), n2 = node2.get_pos();
    var deltax = - n2.x + n1.x, deltay = - n2.y + n1.y;
    sqr_d = Math.max(Math.sqrt(deltax * deltax + deltay * deltay), 0.01);
    force = force_function(sqr_d, k) / sqr_d;
    deltax *= force;
    deltay *= force;
    node1.change_vel(deltax,deltay);
    deltax = -deltax;
    deltay = -deltay;
    node2.change_vel(deltax,deltay);
}


function spring_force(sqr_d, k) {
    return -Math.sqrt(sqr_d) / k;
}

function repulsive_force(sqr_d, k) {
    var k2 = k*k;
    return k2 * k2 / (sqr_d * sqr_d);
}

function border_repulse(node){
    var p = node.get_pos(), d = (Math.min(p.x,p.y,SIZE.x-p.x,SIZE.y-p.y)), v;
    v = scalarm(20/(d*d),vectorsub(center,p));
    node.change_vel(v.x,v.y);
}

function run_physics() {
    var k = Math.max(Math.sqrt(FIXED_LENGTH), 0.01), i, j, edge, l; 
    for (i = 0, l = nodes.length; i < l; ++i){
        border_repulse(nodes[i]);
        for (j = i + 1; j < l; j += 1) {
            add_force(nodes[i], nodes[j], repulsive_force, k);
        }
    }
    for (i = 0, l = edge_list.length; i < l; ++i){
        edge = edge_list[i].get_nodes();
        add_force(edge.node1, edge.node2, spring_force, k);
    }

    for (i = 0, l = nodes.length ; i < l; ++i){
        nodes[i].run();
    }
}
Controller = function(){
    var hit_node, selected_object, dragging_node, dragging_frozen_flag, closest, mouse = new Point(), lastcheck = 0; 
    return {        
        select_object: function (obj) {
            if (selected_object === obj){
                this.unselect_object();
                return;
            }
            if (selected_object){
                this.unselect_object();
            }
            selected_object = obj;
            obj.selected = true;
            update_infobox(obj);
        },
        set_mouse: function(e){
            var obj = e.currentTarget, offset = $(obj).offset();
            mouse = {x : e.pageX - offset.left, y: e.pageY - offset.top};
        },
        unselect_object: function (){
            if (selected_object){
                selected_object.selected = false;
                selected_object = undefined;
                update_infobox();
            }
        },
        drag_node_start: function (node){
            dragging_node = node;
            dragging_frozen_flag = node.get_frozen();
            if (!node.get_frozen()){
                node.toggle_freeze();
            }
            if (!LIVE) {
                start_loop();
            }
        },
        update_drag: function (m){
            dragging_node.set_pos(m);
            if(dragging_node === selected_object){
                update_infobox(dragging_node);
            }
        },
        drag_node_stop: function (){
            if (dragging_frozen_flag === false ){
                dragging_node.toggle_freeze();
            }
            dragging_node = undefined;
            if(!LIVE){
                stop_loop();
            }
        },
        find_closest: function (){
            var closest_data, edge;
            closest_data = get_closest_node(mouse);
            if (closest_data && closest_data.d < NODE_RADIUS){
                this.update_closest(closest_data.node);
                return;
            }
            edge = first(edge_list, function(edge){
                var v = edge.get_nodes();
                return in_tube(mouse, v.node1.get_pos(), v.node2.get_pos(), 15);
            });
            this.update_closest(edge);
        },
        update_closest: function(object){
            if (closest && (closest !== object)){
                closest.closest = false;
            }
            closest = object;
            if (object){
                object.closest = true;
            }
        },
        mousedown: function () {
            if (closest && closest instanceof Vertex){ 
                hit_node = closest;
            } 
            if (!LIVE) draw();
        },
        mouseup: function (e){
            var new_v;
            if (dragging_node){
                this.drag_node_stop();
            } else if (hit_node && (selected_object === undefined)){
                    this.select_object(hit_node);
            } else if (hit_node && selected_object instanceof Vertex && (selected_object !== hit_node)) {
                toggle_edge(selected_object, hit_node);
                if (!SHIFT){
                    toggle_edge(selected_object, hit_node); //whr
                    this.unselect_object();
                }
            } else if (closest){ 
                this.select_object(closest);
            } else {
                new_v = new Vertex(mouse); 
                //careful for edge case of user not moving mouse afterclick
                //if live the vertex flies off 
                if(!LIVE){
                    this.update_closest(new_v);
                }
                nodes.push(new_v);
            }
            hit_node = undefined;
            if (!LIVE) draw();
        },
        mousemove: function (e) {
            this.set_mouse(e);
            if (hit_node && !dragging_node) {
                this.drag_node_start(hit_node);
            }
            if (dragging_node){
                this.update_drag(mouse);
            }
            this.find_closest();
            if (!LIVE) draw();
        },
        keydown: function (e){
            if (e.keyCode === 16){
                SHIFT = true;
            }
        },
        keyup: function (e){
            SHIFT = false;
        },
        keypress: function (e) {
            var pos, canvaspos, dialog;
            //charCode has browser problems, check with http://www.quirksmode.org/js/keys.html
            //console.log(e.charCode,String.fromCharCode(e.charCode));
            if (String.fromCharCode(e.charCode) === '-' && selected_object){
                if (selected_object instanceof Vertex){
                    remove_node(selected_object);
                } else if (selected_object instanceof Edge){
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
        dblclick: function (){
        }
    };
};
//JSONdata has the format
//This format is compatible with sage
//{"vertices" : [v0.label, v1.label, .... , vn.label],
//"edges" : [ [e0v0.label, e0v1label, edgelabel], ... ],
//"pos"" : [ [v0x, v0y], [v1x, v1y], ... ],
//"name" : "a_graph"
//} 
function import_from_JSON(JSONdata) {
    var i, data = JSON.parse(JSONdata), dict = {}, new_v, pos, vertex;
    erase_graph();
    for (i = 0; i < data.vertices.length; i += 1){
        new_v = new Vertex({x:0,y:0}, data.vertices[i]);
        dict[data.vertices[i]] = new_v;
        nodes.push(new_v);
    }
	if(data.pos){
        var maxx = -Infinity, minx = Infinity, 
        maxy = -Infinity, miny = Infinity, newx, newy, dx, dy;
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
            vertex.set_pos({x: newx, y: newy});
        }
	} else {
	    circular_layout();
	}
    for (i = 0; i < data.edges.length; i += 1) {
        edge_list.push(new Edge(dict[data.edges[i][0]], dict[data.edges[i][1]], 1, dict[data.edges[i][2]]));
    }
    graph_name = data.name;
    draw();
}

function positions_dict() {
    var i, out, pos;
    out = "{";
    out += nodes.map(function (n,i){
        var pos = n.get_pos();
        return i + ":[" + [pos.x, (SIZE.y - pos.y)].join(',') + "]";
    }).join(',');
    return out + "}";
}

function adjacency_lists_dict() {
    var edge, empty, i, j, node, out;
    out = "{";
    out += nodes.map( function (node,i){
        return i + ":[" + edge_list.map(function (e){
            var enodes = e.get_nodes();
            if (enodes.node1 === node) {
                return nodes.indexOf(enodes.node2);
            }
            if (enodes.node2 === node) {
                return nodes.indexOf(enodes.node1);
            }
            }).filter(nonundef).join(',')+']';
            // add filter i>j to only get neighbors with smaller index. which was the old functionality.
        });
    return out + "}";
}

function export_tkz(){
    var pos, edge, i, j, out, px2pt;
    px2pt=0.75;        
    out="";
    out +="\\begin{tikzpicture}\n\n";
    for (i = 0;i<nodes.length;i++){
        out+="\\Vertex";                
        pos = nodes[i].get_pos();
        out+="[x="+px2pt*pos.x+"pt,y="+px2pt*(SIZE.y-pos.y)+"pt]";
        out+="{"+i+"};\n";
    }
    out +="\n";
    for (j = 0;j<edge_list.length;j++){
        out+="\\Edge";              
        edge = edge_list[j].get_nodes();
        out+="("+nodes.indexOf(edge.node1)+")";
        out+="("+nodes.indexOf(edge.node2)+")";
        out+="\n";                
    }
    out+="\n";        
    out+="\\end{tikzpicture}\n";
    return out;
}

function export_sage(){
    var data = {}, pos, i, exec = '';
    data.vertices = nodes.map(function (n){
        return n.label;
    }); 
    data.edges = edge_list.map(function (e){
        return [e.node1.label, e.node2.label, e.label];
    }); 
    data.pos = {};
    for (i = 0; i < nodes.length; i++){
        pos = nodes[i].get_pos();
        data.pos[nodes[i].label] = [pos.x, pos.y];
    }
    data.name = graph_name;
    return JSON.stringify(data);
}
var UIside_panel_opened;
function add_checkbox(name, variable, container_id, onclickf){
    var s ='<tr><td>'+name+'</td>';
    s +='<td><input type="checkbox"'; //+' id="'+name+'_check"'
    s +=' value="'+variable+'"';
    if (variable){
        s+='checked';
    }
    s += '/></td></tr>';
    $(container_id).append(s);
    $(container_id+' input:last').click(onclickf);
}    

function add_button(name, container_id, onclickf){
    var s ='<input type="button" id="'+name+'_button" value="'+name+'"';
s += '/>';
    $(container_id).append(s);
    $(container_id+' input:last').click(onclickf);
}

function add_slider(name, variable, container_id, min, max, onchangef){
    var s = '<tr><td>'+name+'</td>';
    s += '<td><div class="slider"></div></td></tr>';    
    $(container_id).append(s);
    $(container_id+' div.slider:last').slider({
        min: min,
        max: max,
        value: variable,
        slide: function (event, ui) {
            onchangef(ui.value);
        }
    });
}

function create_controls(div){
    //Create controls and attach click functions 
    var tweaks, canvaspos = $(div +' canvas').offset(), buttondiv = div + ' #graph_editor_button_container',
    canvas = $(div +' canvas')[0];
    $(div).prepend('<div id="graph_editor_button_container"></div>');
    $('<div id="live_button" class="graph_editor_button">live</div>').appendTo(buttondiv).click(toggle_live);
    $('<div id="tweaks_button" class="graph_editor_button">tweaks</div>').appendTo(buttondiv)
    .toggle(function () {
        $(div).animate({'width': SIZE.x + 310 + 'px'},
            {queue: true, duration: 'fast', easing: 'linear', complete: function (){
                $(div + ' #graph_editor_tweaks').slideToggle('fast');
                UIside_panel_opened = true;
            }
        });
        $(div+' #tweaks_button').toggleClass('graph_editor_button_on');
    },
    function () {
        $(div + ' #graph_editor_tweaks').slideToggle('fast', function (){
            $(div).animate({'width': SIZE.x +'px'},
            {queue: true, duration: 'fast', easing: 'linear'});
            UIside_panel_opened = undefined;
        });
        $(div+' #tweaks_button').toggleClass('graph_editor_button_on');
    });

    $('<div id="help_button" class="graph_editor_button">?</div>').appendTo(buttondiv)
    .click(function(){
        $('#help_dialog').dialog('open');
    });

    $('<div id="undo_button" class="graph_editor_button">undo</div>').appendTo(buttondiv)
    .click(undo_remove).toggleClass('graph_editor_undo_disabled');

    $('<div id="reset_button" class="graph_editor_button">reset</div>').appendTo(buttondiv)
    .click(function (){
        if (confirm("The graph will be irreversibly erased. This operation cannot be undone.")) {
            erase_graph();
        }
    });

    $('<div id="image_button" class="graph_editor_button">image</div>').appendTo(buttondiv)
    .click(function (){
        var img = canvas.toDataURL("image/png");
        window.open(img, "Graph Editor Image"
        ,"menubar=false,toolba=false,location=false,width="
        + SIZE.x + ",height=" + SIZE.y);
    });

    $(div).append('<div id="graph_editor_tweaks"></div>');
    tweaks = div+' #graph_editor_tweaks';

    $(tweaks).append("<div class='infobox'><h4 id='title'>Info</h4>\
    <div id='info'>Index: <span id='index'></span><br>\
    <span id='pos'>Position: (<span id='posx'></span>, <span id='posy'></span>)<br></span>\
    <span id='vert'>Vertices: <span id='v1'></span>-><span id='v2'></span><br></span>\
    <div id='edge_inf'>\
    Node <span id='v1'></span> label</br>\
    <input type='text' id='v1_label'></br>\
    Node <span id='v2'></span> label</br>\
    <input type='text' id='v2_label'></br>\
    <button type='text' id='edge_inf_button'>Set edge label!</button></div>\
    <div id='node_inf'>\
    Select Node Type: <select id='s_label' >\
    <option value=''></option>\
    <option value='COSHI'>COSHI</option>\
    <option value='AOSHI'>AOSHI</option>\
    </select>\<br>\
    Node Type: <span id='n_type'></span><br>\
    Node index: <span id='index'></span><br></div> </div>\
    <div id='none_selected'>No node is selected</div></div>");
    $(div + ' .infobox #info').hide();
    $(div + ' .infobox #s_label').click(function (){
        var index = $(div + ' .infobox #index').html(),
        title = $(div + ' .infobox #title').html();
        if (title === "Vertex Info"){
            nodes[index].label = $(div + ' .infobox #s_label').val()+"#"+index;
            $('.infobox #n_type').html(nodes[index].label.split("#")[0])

        } else if (title === "Edge Info"){
            //non entro piu qui!
            edge_list[index].label = $(div + ' .infobox #label').val();
        }
    });

    $(div + ' .infobox #edge_inf_button').click(function (){
        var index = $(div + ' .infobox #index').html(),
        title = $(div + ' .infobox #title').html();
        edge_list[index].label = $(div + ' .infobox #v1_label').val()+"::"+$(div + ' .infobox #v2_label').val();
    });


    $(tweaks).append("<h4>Tweaks</h4>");
    add_button('Circular layout', tweaks, function (){
        if (confirm("All vertices will be irrevesably moved. This operation cannot be undone.")) {
            circular_layout();
        }
    });

    $(tweaks).append('<table>');    
    add_checkbox('Vertex numbers', NODE_NUMBERS, tweaks, function (){
                NODE_NUMBERS = !NODE_NUMBERS;
                draw();
                }); 

    add_slider('Vertex Size', NODE_RADIUS, tweaks, 0, 30, function (newval) {
        NODE_RADIUS = newval; 
        draw();
        });
    
    add_slider('Edge Strength', 50, tweaks, 0, 100, function (newval){
        SPRING = (1 - 1e-2) + 1e-4 * (100 - newval);
        SPEED = newval / 50.0;
        SPEED *= 2 * SPEED;
    });
    add_slider('Edge Length', FIXED_LENGTH, tweaks, 0, 200, function (newval){
        FIXED_LENGTH = newval; 
    });
    
    add_slider('Orientation', 0, tweaks, 0, 360, change_orientation);
    $(tweaks).append('</table>').hide();    

    $(div).append("<div id='help_dialog'> <ul><li><h3>create vertex</h3>Click on empty space not too close to existing vertices. <li><h3>create/erase edge</h3>Hold 'SHIFT' and select the first vertex. Click on another vertex (different than the selected one) to turn on/off (toggle) the edge between them. <li><h3>increase/decrease multiplicity</h3> Use +/-. When multiplicity is 0 the edge disappears.<li><h3>remove a vertex</h3>Press '-' when vertex is selected.<li><h3>split an edge</h3> press 's' when esge is selected<li><h3>freeze a vertex</h3> pressing 'r' freezes the selected vertex (it will not move in live mode)<li><h3>add/remove loop</h3> press 'o'<li><h3>undo vertex deletion</h3>Click on the Undo button. Only the last deleted vertex can be recovered.  <li><h3>turn on realtime spring-charge model</h3>Press 'l' or click on the live checkbox.  </ul> </div>");
    $('#help_dialog').dialog({
        autoOpen : false,
        width : 700,
        title : "Graph Editor Help",
        modal : true 
    });
}

function update_infobox(obj){
    if (!UIside_panel_opened){
        return;
    }
    var pos, index, node, edge;
    if (obj && obj instanceof Vertex){
        node = obj, pos = node.get_pos(), index = nodes.indexOf(node);
        $(div + ' .infobox #title').html('Vertex Info');
        $(div + ' .infobox #index').html(index);
        $(div + ' .infobox #pos').show();
        $(div + ' .infobox #posx').html(pos.x.toFixed(1));
        $(div + ' .infobox #posy').html(pos.y.toFixed(1));
        $(div + ' .infobox #node_inf').show();
        $(div + ' .infobox #edge_inf').hide();
        $(div + ' .infobox #vert').hide();
        $(div + ' .infobox #label').html(node.label);
        $(div + ' .infobox #n_type').html(node.label.split("#")[0]);
        $(div + ' .infobox #none_selected').hide();
        $(div + ' .infobox #info').show();
    } else if (obj && obj instanceof Edge){
        edge = obj;
        var enodes = edge.get_nodes();
        index = edge_list.indexOf(edge);
        $(div + ' .infobox #title').html('Edge Info');
        $(div + ' .infobox #index').html(index);
        $(div + ' .infobox #pos').hide();
        $(div + ' .infobox #vert').show();
        $(div + ' .infobox #edge_inf').show();
        $(div + ' .infobox #node_inf').hide();

        //$(div + ' .infobox #v1').html(nodes.indexOf(enodes.node1));
        //$(div + ' .infobox #v2').html(nodes.indexOf(enodes.node2));
        $(div + ' .infobox #v1').html(enodes.node1.label);
        $(div + ' .infobox #v2').html(enodes.node2.label);
        $(div + ' .infobox #v1_label').val(edge.label.split("::")[0]||"none")
        $(div + ' .infobox #v2_label').val(edge.label.split("::")[1]||"none")
        $(div + ' .infobox #label').val(edge.label||"none");
        $(div + ' .infobox #none_selected').hide();
        $(div + ' .infobox #info').show();
    } else {
        $(div + ' .infobox #title').html('Info');
        $(div + ' .infobox #none_selected').show();
        $(div + ' .infobox #info').hide();
    }
}
function display_graph() {
    var i;
    if (LIVE) {
        run_physics();
    }
    for (i = 0; i < edge_list.length; i += 1) {
        edge_list[i].display();
    }
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].display();
    }
}

function start_loop(speed){
    loop_interval = setInterval(draw, speed || 1000/FPS); 
}

function stop_loop(){
    clearInterval(loop_interval);
}

function draw(){
    var curtime = (new Date).getTime();
    ctx.clearRect(0,0,SIZE.x,SIZE.y);
    display_graph();
    if (SHOWFPS) {
        ctx.fillText((1000/(curtime - last_frame)).toFixed(1), 10, 10);
    }
    last_frame = curtime;
    //function is time intensive don't do it too often
    //if (lastcheck < curtime - 10000){
    //    controller.find_closest();
    //    lastcheck = curtime;
    //    console.log('recomp');
    //}
}

function toggle_live() {
        if (LIVE) {
            LIVE = false;
            stop_loop();
        } else {
            LIVE = true;
            start_loop();
        }
        $(div+' #live_button').toggleClass('graph_editor_button_on');
    }


function init(){
    //construction of GraphEditor
    controller = Controller();
    $(div).addClass('graph_editor_container');
    $(div).append('<canvas class="graph_editor_canvas" width = "'+SIZE.x+'" height = "'+SIZE.y+'" >Your browser does not support canvas.</canvas>');
    canvastag = $(div+' canvas');
    $(div).css({'width' : SIZE.x+'px'}); 
    ctx = canvastag[0].getContext('2d');
    ctx.translate(0.5,0.5); //makes everything prettier
    canvastag.attr('tabindex','0');
    canvastag.keydown(function (e){controller.keydown(e);});
    canvastag.keypress(function (e){controller.keypress(e);});
    canvastag.keyup(function (e){controller.keyup(e);});
    canvastag.dblclick(function (e){controller.dblclick(e);});
    canvastag.mousedown(function (e){controller.mousedown(e);});
    canvastag.mouseup(function (e){controller.mouseup(e);});
    canvastag.mousemove(function (e){controller.mousemove(e);});
    canvastag.mouseleave(function (e){controller.mouseleave(e);});
    //fixes a problem where double clicking causes text to get selected on the canvas
    canvastag[0].onselectstart = function () { return false; }
    if(options.JSONdata){
        import_from_JSON(options.JSONdata);
        draw();
    }
    if (options.controls !== false){
        create_controls(div);
    }
    //$(div).dblclick(function (){return false;});
}

init();

//an global object graph_editor is created containing all global functions
return { 
    import_from_JSON: import_from_JSON,
    export_tkz: export_tkz,
    export_sage: export_sage,
    get_raw_data : function (){
        return {
            nodes: nodes,
            edge_list: edge_list,
            SIZE : SIZE
        };
    },
    //destructive
    complete_graph: function(n){
        nodes = []; 
        edge_list = [];
        var i,j;
        for (i = 0; i < n; i++){
            nodes.push(new Vertex());
            for (j = 0; j < i; j++){
                edge_list.push(new Edge(nodes[i],nodes[j]));
            }
        }
	    circular_layout();
    },
    //destructive
    grid_graph: function(m,n){
        n = n || m;
        nodes = []; 
        edge_list = [];
        var i,j;
        for (i = 0; i < n*m; i++){
            nodes.push(new Vertex());
        }
        for (i = 0; i < m; i++){
            for (j = 0; j < n; j++){
                if (j != n-1){
                    edge_list.push(new Edge(nodes[i*n+j],nodes[i*n+j+1]));
                }
                if (i != m-1){
                    edge_list.push(new Edge(nodes[i*n+j],nodes[i*n+j+n]));
                }
            }
        }
	    circular_layout();
    }
};
};
