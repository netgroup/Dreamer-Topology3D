if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.DomainController = (function() {

    function DomainController() {

    }

    DomainController.prototype.loadSpec = function(modelname, callback) {



        var self = this;
        $.ajax({
            url: "http://127.0.0.1:8080/getSpecModel/?model=" + modelname,


            success: function(result) {
            	 console.log(JSON.stringify(result));
                var response = {};
                //response['error'] = false;
                if(! result.error){
                	self.spec = result;
                }
                callback(result);
            },
            error: function(xhr, status, errore) {
                var response = {};
                response['error'] = {"message": status};
                callback(response);
            }

        });


    };

    DomainController.prototype.validateTopology = function(graph, callback) {
        var modelname = this.spec["model_name"];
        var topology = this.exportJson(graph);
        var self = this;
        $.ajax({
            url: "http://127.0.0.1:8080/validateTopology",
            type: "POST",
            dataType: "json",
            //contentType: 'application/json; charset=utf-8;',	
            data: {
                "topology": this.exportJson(graph),
                "modelname": this.spec["model_name"]
            },
            success: function(result) {
                var response = {};
                //response['error'] = false;
                response = result;
                console.log(response);
                callback(response);
            },
            error: function(xhr, status, errore) {
                var response = {};
                response['error'] = {"message": errore};
                console.log(errore);
                callback(response);
            }

        });


    };

    DomainController.prototype.getRandomTopology = function(n, p, callback) {


        $.ajax({
            url: "http://127.0.0.1:8080/getRandom/?n=" + n + "&p=" + p,

            beforeSend: function() {
                $('#randomprogbar').show();
            },
            success: function(result) {

                var response = {};
                response['error'] = false;
                response['topology'] = result;
                callback(response);
            },
            error: function(xhr, status, errore) {
                var response = {};
                response['error'] = true;
                callback(response);

            }

        });
    };

    DomainController.prototype.isVisible = function(element, layer) {
        if (element instanceof dreamer.Vertex) {
            var layername = layer.getCurLayer();
            var layer_constraints = this.spec['layer_constraints'];
            if (this.spec['list_of_all_layer'].indexOf(layername) > -1 && (element.getType() == undefined || layer_constraints[layername]['list_of_nodes_layer'] === undefined || layer_constraints[layername]['list_of_nodes_layer'].indexOf(element.getType()) > -1)) {

                return true;
            }
            return false;

        } else if (element instanceof dreamer.Edge) {
            var layername = layer.getCurLayer();
            for (l in element.links) {
                if (element.links[l].layer == layername) {
                    return true;
                }
            }
        }
        return false;

    };

    DomainController.prototype.isValidEdge = function(from_type, to_type, layername) {
        var lnae = this.spec['layer_constraints'][layername]['not_allowed_edge'];

        for (i in lnae) {

            if (lnae[i].source == from_type) {
                if (lnae[i].not_allowed_des.indexOf(to_type) > -1) {

                    return false;

                }

            }

        }

        return true;

    };

    DomainController.prototype.getNodeCurrentLayer = function(layer, nodes) {
        var available = [];
        for (i in nodes) {
            if (this.isVisible(nodes[i], layer))
                available.push(nodes[i]);
        }
        return available;
    };


    DomainController.prototype.getEdgeCurrentLayer = function(layer, edges) {
        var available = [];
        for (i in edges) {
            if (this.isVisible(edges[i], layer))
                available.push(edges[i]);
        }
        return available;
    };

    DomainController.prototype.getNodeTypes = function() {
        return this.spec['list_of_all_node_types'];
    };

    DomainController.prototype.getAllLayers = function() {
        return this.spec['list_of_all_layer'];
    };

    DomainController.prototype.isValidLayers = function(layer) {
        if (this.spec['list_of_all_layer'].indexOf(layer) > -1) {
            return true;
        }
        return false;
    };


    DomainController.prototype.isInsertEnabled = function(layername) {

        if (this.spec['layer_constraints'][layername]['insert_new_node'] == undefined || this.spec['layer_constraints'][layername]['insert_new_node'] == true)
            return true;

        return false;
    };

    DomainController.prototype.getNodeSpecDomine = function(node) {
        var properties = {};
        return properties;
    };

    DomainController.prototype.getNodeIcon = function(node) {

        //TODO da insere nelle specifiche di dominio
        var aoshi_img = 'img/oshiPE.png';
        var coshi_img = 'img/oshiCR.png';
        var euh_img = 'img/oshiCE.png';
        var l2sw_img = 'img/l2.png';
        var empty_color = "#FFFFFF";
        var img = 'img/punto.png';

        if (this.getNodeTypes().indexOf(node.getType()) > -1) {
            var name = node.getType().replace(/ /g, '');
            name = name.toLowerCase();
            return 'img/' + name + '.png'
        } else {
            return img;
        }

    };

    DomainController.prototype.setProperties = function(graph, args, layername) {
        var result = {};

        if (args.node) {
            if (args.node.properties.type && (this.spec['layer_constraints'][layername].changing_nodes_type == undefined || this.spec['layer_constraints'][layername].changing_nodes_type == true)) {
                if (args.node.index < 9) {

                    graph.vertices[args.node.index].label = args.node.properties.type + "#0" + (parseInt(args.node.index) + 1);

                } else {
                    graph.vertices[args.node.index].label = args.node.properties.type + "#" + (parseInt(args.node.index) + 1);
                }
                graph.vertices[args.node.index].vertex_info["node-type"] = args.node.properties.type
            }
            else{
                result['error'] = "Changing nodes type not allowed in " + layername;
            }
        } else if (args.edge) {

        } else if (args.graph_parameters) {
            if (args.graph_parameters.tunneling) {
                if (graph.graph_parameters instanceof dreamer.GraphParameters) {
                    graph.graph_parameters.setTunneling(args.graph_parameters.tunneling);
                } else {

                    graph.graph_parameters = new dreamer.GraphParameters({
                        tunneling: args.graph_parameters.tunneling
                    });
                }

            }

        }
        return result;
    };

    DomainController.prototype.exportJson = function(graph, pure) {

        var jsongraph = {};
        jsongraph['vertices'] = {};
        jsongraph['edges'] = {};
        var edges = graph.edges;
        var vertices = graph.vertices;

        for (v in vertices) {
            var curvert = vertices[v];
            jsongraph['vertices'][curvert.label] = {};
            jsongraph['vertices'][curvert.label]['pos'] = curvert.pos;
            jsongraph['vertices'][curvert.label]['v'] = curvert.v;
            jsongraph['vertices'][curvert.label]['vertex_info'] = curvert.vertex_info;

        }

        for (e in edges) {

            var label = edges[e].node1.label + "&&" + edges[e].node2.label;
            jsongraph['edges'][label] = {};
            jsongraph['edges'][label]['links'] = [];
            for (index in edges[e].links) {
                var tmplink = {};
                tmplink['link_label'] = edges[e].links[index].edge_label;
                tmplink['link-type'] = edges[e].links[index]['layer'];
                tmplink['IP-RHS'] = edges[e].links[index]['IP-RHS'];
                tmplink['IP-LHS'] = edges[e].links[index]['IP-LHS'];
                //var domainname = 'domain-'+this.spec['model_name'];
                //tmplink[]


                jsongraph['edges'][label]['links'].push(tmplink);
            }


        }
        jsongraph.graph_parameters = graph.graph_parameters;
        //console.log(JSON.stringify(jsongraph));
        if (pure) {
            return JSON.stringify(jsongraph);
        }
        return JSON.stringify(jsongraph, null, "\t");
    }

    DomainController.prototype.import_from_JSON = function(graph, size) {
        var nodes = [];
        var edges = [];
        var graph_parameters;
        var tmpdict = {};
        var nopos = false;
        var vertnumber = 0;

        var maxx = -Infinity,
            minx = Infinity,
            maxy = -Infinity,
            miny = Infinity,
            newx, newy, dx, dy;
        for (var vertex in graph.vertices) {
            if (graph.vertices[vertex].pos) {
                maxx = Math.max(maxx, graph.vertices[vertex].pos['x']);
                maxy = Math.max(maxy, graph.vertices[vertex].pos['y']);
                minx = Math.min(minx, graph.vertices[vertex].pos['x']);
                miny = Math.min(miny, graph.vertices[vertex].pos['y']);
                dx = maxx - minx;
                dy = maxy - miny;
            } else {
                nopos = true;
            }
            vertnumber++;
        }

        for (var vertex in graph.vertices) {


            if (nopos == false) {
                newx = (graph.vertices[vertex].pos['x'] - minx) / dx;
                newx = newx * 8 * size.x / 10 + size.x / 10;
                newy = (graph.vertices[vertex].pos['y'] - miny) / dy;
                newy = newy * 8 * size.y / 10 + size.y / 10;
            } else {
                newx = size.x / 2 + (2 * size.x / 5) * Math.sin(2 * Math.PI * vertex / vertnumber);
                newy = size.y / 2 - (2 * size.y / 5) * Math.cos(2 * Math.PI * vertex / vertnumber);
            }


            var new_v = new dreamer.Vertex(nodes, {
                x: newx,
                y: newy
            }, vertex, graph.vertices[vertex].vertex_info);

            nodes.push(new_v);
            tmpdict[vertex] = new_v;
        }

        for (var edge in graph.edges) {
            var n = edge.split("&&");
            var new_e = new dreamer.Edge(tmpdict[n[0]], tmpdict[n[1]]);

            for (link in graph.edges[edge].links) {
                new_e.addLink(graph.edges[edge].links[link].link_label, graph.edges[edge].links[link]['link-type']);
            }

            edges.push(new_e);

        }

        graph_parameters = new dreamer.GraphParameters(graph.graph_parameters);
        return {
            'vertices': nodes,
            'edges': edges,
            'graph_parameters': graph_parameters
        };
    }

    return DomainController;

}(this));

if (typeof module === 'object') {
    module.exports = dreamer.DomainController;
}