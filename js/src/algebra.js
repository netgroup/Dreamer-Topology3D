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

    function next_label(nodes) {
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