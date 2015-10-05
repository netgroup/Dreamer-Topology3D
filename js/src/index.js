(function() {

    var example = {
        'oshi': '{"vertices": {"cer1": {"pos": {"x": 102.4, "y": 40 }, "v": {"x": 0, "y": 0 }, "info": {"frozen": false, "type": "CE", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo2": {"pos": {"x": 207.0483033932136, "y": 129.92700729927006 }, "v": {"x": 0, "y": 0 }, "info": {"frozen": false, "type": "OSHI-PE", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro3": {"pos": {"x": 417.9800399201597, "y": 221.02189781021897 }, "v": {"x": 0, "y": 0 }, "info": {"frozen": false, "type": "OSHI-CR", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro4": {"pos": {"x": 706.84375, "y": 121 }, "v": {"x": 0, "y": 0 }, "info": {"frozen": false, "type": "OSHI-CR", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro5": {"pos": {"x": 140.84375, "y": 302 }, "v": {"x": 0, "y": 0 }, "info": {"frozen": false, "type": "OSHI-CR", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo6": {"pos": {"x": 669.7900199600799, "y": 313.2846715328467 }, "v": {"x": 0, "y": 0 }, "info": {"frozen": false, "type": "OSHI-PE", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cer7": {"pos": {"x": 921.6, "y": 360 }, "v": {"x": 0, "y": 0 }, "info": {"frozen": false, "type": "CE", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } } }, "edges": {"cer1&&peo2": {"links": [{"id": "", "view": "Data"} ] }, "cer7&&peo6": {"links": [{"id": "", "view": "Data"} ] }, "cro4&&peo6": {"links": [{"id": "", "view": "Data"} ] }, "cro4&&peo2": {"links": [{"id": "", "view": "Data"} ] }, "cro4&&cro3": {"links": [{"id": "", "view": "Data"} ] }, "cro5&&peo2": {"links": [{"id": "", "view": "Data"} ] }, "cro5&&peo6": {"links": [{"id": "", "view": "Data"} ] }, "cro5&&cro3": {"links": [{"id": "", "view": "Data"} ] }, "peo2&&cro3": {"links": [{"id": "", "view": "Data"} ] }, "peo6&&cro3": {"links": [{"id": "", "view": "Data"} ] } }, "graph_parameters": {"tunneling": "OPENVPN", "vlan": "0", "mapped": false, "generated": false, "testbed": "MININET"} }',
        'openflow': '{"vertices": {"ctr1": {"pos": {"x": 505.84375, "y": 53 }, "v": {"x": 0.08897036922190368, "y": -0.08766146058042479 }, "info": {"frozen": false, "type": "OF Controller", "property": {"custom_label": "", "domain-oshi": {}, "tcp_port": "6633", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw2": {"pos": {"x": 248.0142945653656, "y": 177.42845969092286 }, "v": {"x": 0.16358156321094758, "y": -0.02806032804937858 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw3": {"pos": {"x": 560.8945746158076, "y": 200.89755911189812 }, "v": {"x": 0.04498657148777874, "y": -0.00463921741443217 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw4": {"pos": {"x": 394.2273735984038, "y": 212.26171484803038 }, "v": {"x": 0.15573772102080247, "y": -0.05069131960333911 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw5": {"pos": {"x": 319.84375, "y": 288 }, "v": {"x": 0.2720931731798208, "y": -0.03350010086729627 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "host6": {"pos": {"x": 151.99090832059125, "y": 128.5633516717222 }, "v": {"x": 0.10627628854705545, "y": 0.05833132689683196 }, "info": {"frozen": false, "type": "Host", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "host7": {"pos": {"x": 675.4640718965175, "y": 176.8140562769553 }, "v": {"x": 0.029927440721427723, "y": 0.04859776280637498 }, "info": {"frozen": false, "type": "Host", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "host8": {"pos": {"x": 435.84375, "y": 367 }, "v": {"x": 0.19175097214623776, "y": 0.03333368261462699 }, "info": {"frozen": false, "type": "Host", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } } }, "edges": {"ofl2sw4&&ofl2sw2": {"links": [{"id": "", "view": "Data"} ] }, "ofl2sw4&&ofl2sw5": {"links": [{"id": "", "view": "Data"} ] }, "ofl2sw4&&ofl2sw3": {"links": [{"id": "", "view": "Data"} ] }, "ctr1&&ofl2sw4": {"links": [{"id": "", "view": "Data"} ] }, "host6&&ofl2sw2": {"links": [{"id": "", "view": "Data"} ] }, "host7&&ofl2sw3": {"links": [{"id": "", "view": "Data"} ] }, "host8&&ofl2sw5": {"links": [{"id": "", "view": "Data"} ] } }, "graph_parameters": {"tunneling": "OPENVPN", "vlan": "", "mapped": "", "generated": "", "testbed": "MININET"} }'
    };
    var ctrlconsole;
    var mod = "DES";

    $(document).ready(function() {

        $('#myModalLoading').modal('show');
        my_graph_editor = new GraphEditor('#graph_ed', {
            // JSONdata: example,
            example: example,
            node_radius: 18.0,
            multigraph: true
        });

        var cmjsoneditor = CodeMirror.fromTextArea(document.getElementById("jsonEditor"), {
            mode: "javascript",
            lineNumbers: true,
        });

        var cmclustereditor = CodeMirror.fromTextArea(document.getElementById("clusterEditor"), {
            mode: "javascript",
            lineNumbers: true,
        });

        var vmmappingreditor = CodeMirror.fromTextArea(document.getElementById("vmmappingEditor"), {
            mode: "javascript",
            lineNumbers: true,
        });

        var vmmconfigeditor = CodeMirror.fromTextArea(document.getElementById("vmmconfigEditor"), {
            mode: "javascript",
            lineNumbers: true,
        });

        $('#myModalCopy').on('shown.bs.modal', function() {
            cmjsoneditor.refresh();
        });

        $('#myModalCluster').on('shown.bs.modal', function() {
            cmclustereditor.refresh();
        });

        $('#myModalMapping').on('shown.bs.modal', function() {
            vmmappingreditor.refresh();
        });

        $('#myModalMappingCfg').on('shown.bs.modal', function() {
            vmmconfigeditor.refresh();
        });

        //resetCanvasDimensions();
        //my_graph_editor.resetCanvasDimension($('#panel_head').width() - 30, 500);

        my_graph_editor.addListener("LiveStatus", function(a, args) {
            //console.log("Fired con successoooo " + JSON.stringify(args));
            if (args.live) {
                $('#live_button').text(' Static')
                $('#live_button').prepend('<span class="fa fa-pause"></span>')

                $('#EdgeLength_label').css("color", "rgb(51,51,51)");
                $('#EdgeStrength_label').css("color", "rgb(51,51,51)");

                $('#edgeLength').slider('enable');
                $('#edgeStrength').slider('enable');
            } else {
                $('#live_button').text('   Live')
                $('#live_button').prepend('<span class="fa fa-play"></span>')

                $('#EdgeLength_label').css("color", "grey");
                $('#EdgeStrength_label').css("color", "grey");

                $('#edgeLength').slider('disable');
                $('#edgeStrength').slider('disable');
            }
        });

        my_graph_editor.addListener("update_graph_parameters", function(a, args) {
            if (args.tunneling) {
                setTunnelLabel(args.tunneling);
            }
        });
        //update_infobox
        my_graph_editor.addListener("open_console", function(a, args) {
            if (mod == "EXP" && args.selected == "Vertex") {
                ctrlconsole.addConsole(args.base_info.label);

            }
        });
        my_graph_editor.addListener("update_infobox", function(a, args) {
            var info_sidebar = '#info_sidebar';
            //if(mod != "EXP"){
            if (args.selected == "Vertex") {
                if (mod != "EXP")
                    $('#box_info').show();

                var base_info = args.base_info;
                //console.log(JSON.stringify(args));
                $('#title').html('Node Info');
                $(info_sidebar + ' .infobox #index').html(base_info.index);
                $(info_sidebar + ' .infobox #index').hide();
                $(info_sidebar + ' .infobox #index_label').hide();
                $(info_sidebar + ' .infobox #pos').hide();
                $(info_sidebar + ' .infobox #node_inf').show();
                $(info_sidebar + ' .infobox #edge_inf').hide();
                $(info_sidebar + ' .infobox #vert').hide();
                $(info_sidebar + ' .infobox #label').html(args.label);
                ////console.log(args.base_info.label)
                $(info_sidebar + ' .infobox #n_name').html(args.base_info.label);
                $(info_sidebar + ' .infobox #none_selected').hide();
                $(info_sidebar + ' .infobox #info').show();
                $('#s_label').val(base_info.node_type)

                if (args.model_info) {
                    if (Object.keys(args.model_info).length > 0) {
                        $('#s_cluster').show();
                        //console.log("mostra " + JSON.stringify(Object.keys(args.model_info)));
                        var clustval = ''
                        if (args.model_info['layer-Control']['cluster_id']) {
                            clustval = args.model_info['layer-Control']['cluster_id'];
                        }
                        $('#s_cluster').val(clustval);
                    }

                } else {
                    $('#model_inf').hide();
                }


                var type_info = args.type_info;
                if (type_info) {
                    if (type_info.vm) {


                        var mgt_ip_list = my_graph_editor.getNotSelectedMgtIp(base_info.node_type).list;
                        //console.log(JSON.stringify(mgt_ip_list));

                        $("#s_mgtip").empty().append('<option value=""></option>')
                        for (i in mgt_ip_list) {
                            ////console.log(mgt_ip_list[i]);
                            var val = mgt_ip_list[i];
                            $("#s_mgtip").append("<option value='" + val + "'>" + val + "</option>");
                        }
                        if (type_info.vm['mgt_ip'])
                            $("#s_mgtip").append("<option value='" + type_info.vm['mgt_ip'] + "' >" + type_info.vm['mgt_ip'] + "</option>");
                        $('#s_mgtip').val(type_info.vm['mgt_ip']);


                        $("#s_interfaces").empty().append('<option value=""></option>')
                        if (type_info.vm['mgt_ip'] != "") {
                            var interfaces = my_graph_editor.getInterfacesMgtIp(base_info.node_type, type_info.vm['mgt_ip']).interfaces;
                            //console.log(JSON.stringify(interfaces));
                            for (var m in interfaces) {
                                //console.log(interfaces[m])
                                var val = interfaces[m];
                                $("#s_interfaces").append("<option value='" + val + "'>" + val + "</option>");
                            }
                            if (type_info.vm['interfaces'])
                                $("#s_interfaces").append("<option value='" + type_info.vm['interfaces'] + "' >" + type_info.vm['interfaces'] + "</option>");
                            $('#s_interfaces').val(type_info.vm['interfaces']);
                        }


                        $('#vm').show();
                    } else {
                        $('#vm').hide();
                    }

                    if (type_info['custom_label'] != undefined) {
                        $('#cldiv').show();
                        // if(type_info['custom_label'] != ""){
                        //console.log("NON VUOTO")
                        $('#clabel_input').val(type_info['custom_label']);
                        //   }
                    } else {
                        //console.log("HIDE custom label")
                        $('#cldiv').hide();
                    }




                } else {
                    $('#type_inf').hide();
                }


                var curlayer = args.curLayer;
                if (curlayer == "Data") {
                    $('#model_inf_Data').show();
                    $('#model_inf_Control').hide();
                    $('#model_inf_Vll').hide();
                } else if (curlayer == "Vll") {
                    $('#model_inf_Vll').show();
                    $('#model_inf_Control').hide();
                    $('#model_inf_Data').hide();
                } else if (curlayer == "Control") {
                    $('#model_inf_Control').show();
                    $('#model_inf_Vll').hide();
                    $('#model_inf_Data').hide();
                }
                //}
                /*
                if (mod == "EXP") {
                    ctrlconsole.addConsole(args.base_info.label);
                    //ctrlconsole.addConsole("h2");
                }*/
            } else if (args.selected == "Edge") {
                if (mod != "EXP")
                    $('#box_info').show();

                var base_info = args.base_info;

                $('#title').html('Edge Info');
                $(info_sidebar + ' .infobox #index').html(base_info.index);
                $(info_sidebar + ' .infobox #pos').hide();
                $(info_sidebar + ' .infobox #vert').show();

                $(info_sidebar + ' .infobox #edge_inf').hide();

                $(info_sidebar + ' .infobox #node_inf').hide();

                $(info_sidebar + ' .infobox #v1').html(base_info.nodes.node1);
                $(info_sidebar + ' .infobox #v2').html(base_info.nodes.node2);

                $(info_sidebar + ' .infobox #label').val(base_info.label || "none");
                $(info_sidebar + ' .infobox #none_selected').hide();
                $(info_sidebar + ' .infobox #info').show();
            } else if (args.selected == "graph_parameters") {
                $("#tun_option").val(args.tunneling);
                $("#tb_option").val(args.testbed);
            } else if (args.selected == "none") {
                clearInfoBox();
            }

        });


        my_graph_editor.addListener("INVALID_TOPOLOGY", function(a, args) {
            //console.log('INVALID_TOPOLOGY');
            //console.log(args);

            $('#myModalLoading').modal('hide');
            // for()
            $('#validationError_list').empty();
            var counter = 0;
            for (i in args) {
                for (k in args[i]) {

                    $('#validationError_list').append('<div class="panel panel-default"><div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#validationError_list" href="#collapse' + counter + '"> ' + k + ' </a> </h4> </div> <div id="collapse' + counter + '" class="panel-collapse collapse"> <div class="panel-body">' + args[i][k] + '</div></div></div>');
                    counter++;
                }

            }

            $('#myModalValidationError').modal('show');


        });

        my_graph_editor.addListener("VALID_TOPOLOGY", function(a, args) {
            //console.log('VALID_TOPOLOGY')
            $('#alert_div').empty();
            $('#alert_div').append('<div id=\"alert_msg\"  class=\"alert alert-success alert-dismissible alert-franz-in \" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><strong>Well done!</strong> The topology is ready to be executed on the testbed.</div>');
            window.setTimeout(function() {
                $("#alert_msg").alert('close');
            }, 5000);
            $('#myModalLoading').modal('hide');
        });

        my_graph_editor.addListener("alert_warning_msg", function(a, args) {
            //console.log('alert_msg')
            $('#alert_div').empty();
            $('#alert_div').append('<div id=\"warning_msg\" class=\"alert alert-danger alert-dismissible alert-franz-in \" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>' + args + '</div>');
            window.setTimeout(function() {
                $("#warning_msg").alert('close');
            }, 5000);
        });

        my_graph_editor.addListener("RANDOM_TOPOLOGY", function(a, args) {
            //console.log('RANDOM_TOPOLOGY')
            if (args.error == true) {

                $('#erRandomAlert').append('<div id="alertdiv" class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>There was an error! Please try again!</span></div>')
                $('#randomprogbar').hide();
            } else {

                $('#myModalRandom').modal('hide');
                $('#randomprogbar').hide();
                $('.modal-backdrop').remove();
            }
            return false;
        });


        my_graph_editor.addListener("error_load_spec", function(a, args) {

            //console.log("Male")
        });

        my_graph_editor.addListener("topology_loaded", function(a, args) {
            //console.log("topology_loaded")
            clearInfoBox();

            //imposta layer
            setLayerLabel(args.curLayer);
            //imposta tunnel
            $("#tun_option").val(args.graph_parameters.tunneling);
            $("#tb_option").val(args.graph_parameters.testbed);
            setTunnelLabel(args.graph_parameters.tunneling);

            //imposta testbed

            //rileva pro domain
            //console.log("@@@@@@@@@@@@@@@@@");
            //console.log(JSON.stringify(args.domain_data));
            initClusterSelOption(args.domain_data.clustermap);

        });

        my_graph_editor.addListener("EXP_MODE", function(a, args) {
            //rendo visibile la parte con le shell
            $('#console_div').css('display', 'block');
            $('#exp_msg').show();
            $('#power_off_button').show();

            //disattivo alcuni menu item 
            $('#deployment_button_group').prop("disabled", true);
            $('#topology_button').prop("disabled", true);
            $('#model_button').prop("disabled", true);
            $('#tool_button_group').prop("disabled", true);

            $('#box_info').hide();

            //nasconodo la barra dei comandi
            $('#panel_head').css('display', 'none');
            $('#collapsepalette').css('display', 'none');
            $('#accordion').css('display', 'none');
            var exp_name = (args.exp_id) ? args.exp_id : "";
            ctrlconsole = new dreamer.Ctrlfwc('myTab', exp_name);
            ctrlconsole.addConsole("deployment", true, true);
            mod = "EXP";
            $('#myModalLoading').modal('hide');
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 'slow');
        });

        my_graph_editor.addListener("editor_ready", function(a, args) {

            var layers = my_graph_editor.get_layers();

            for (i in layers) {
                $("#dropdown-menu-layer").append("<li> <a href=\"#\" > <span class=\"fa fa-sitemap\"></span> " + layers[i] + "</a> </li>");
            }

            $('#exp_msg').hide();
            $('#power_off_button').hide();

            var info_sidebar = '#info_sidebar'
            $(info_sidebar).append("");
            $(info_sidebar + ' .infobox #info').hide();

            var nodeTypes = my_graph_editor.get_nodeTypes();
            $("#drag_drop_toolbar").append("<ul style=\"padding-left: 0px;\" id=\"drag_drop_toolbar_ul\"></ul>");
            for (n in nodeTypes) {
                //set option value 
                var ntype = nodeTypes[n];

                $("#s_label").append("<option value='" + ntype + "'>" + ntype + "</option>");
                var clntype = ntype.toLowerCase();
                clntype = clntype.replace(/ /g, '');

                //build drag and drop tool bar #drag_drop_toolbar
                $("#drag_drop_toolbar_ul").append("<li  style=\"display: inline; list-style: none;\"><img class='draggable_node' id='drag_" + clntype + "' src='img/" + clntype + ".png' width='50' height='50'></li>");
                $("#drag_drop_toolbar_ul").append("<li  style=\"display: inline; list-style: none;\"><img id='drag_" + clntype + "_det' src='img/" + clntype + "_det.png' width='50' height='50'></li>");
                $("#drag_" + clntype).draggable({
                    helper: 'clone',
                });
                //set the data payload
                //cosi quando catturo l'evento del drop posso sapere il tipo di nodo considerato
                $("#drag_" + clntype).data("type", ntype);

            }

            $("#drag_drop_toolbar_ul").append("<li  style=\"display: inline; list-style: none;\"><button id=\"undo_button\" type=\"button\" class=\"btn btn-default btn-group-sm navbar-btn\"><span class=\"fa fa-undo\"></span> Undo</button></li>");


            setTunnelLabel(args.graph_parameters.tunneling);
            setModelLabel(args.modelname);
            initClusterSelOption(args.domain_data.clustermap);

            $(info_sidebar + ' .infobox #s_label').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html(),
                    title = $('#title').html();
                if (title === "Node Info") {
                    my_graph_editor.set_properties({
                        node: {
                            index: index,
                            properties: {
                                type: $(info_sidebar + ' .infobox #s_label').val()
                            }

                        }
                    }, true);
                }

            });

            $('#set_clabel').click(function() {
                //console.log("set_clabel")
                var index = $(info_sidebar + ' .infobox #index').html();

                my_graph_editor.set_properties({
                    node: {
                        index: index,
                        properties: {
                            "custom_label": $('#clabel_input').val()
                        }

                    }
                }, true);


            });

            $('#s_cluster').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html();
                var modelname = "domain-" + my_graph_editor.getcurmodelname();
                var newpro = {
                    node: {
                        index: index,
                        properties: {

                        }

                    }
                };
                newpro.node.properties[modelname] = {
                    "layer-Control": {
                        cluster_id: $('#s_cluster').val()
                    }
                };
                my_graph_editor.set_properties(newpro, true);


            });

            $('#s_mgtip').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html();
                //console.log($("#s_mgtip").val());
                my_graph_editor.set_properties({
                    node: {
                        index: index,
                        properties: {
                            "vm": {
                                "mgt_ip": $("#s_mgtip").val(),
                                "interfaces": $('#s_interfaces').val()
                            }
                        }

                    }
                }, true);


            });

            $('#s_interfaces').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html();
                //console.log($("#s_mgtip").val());
                //console.log($("#s_label").val());
                my_graph_editor.set_properties({
                    node: {
                        index: index,
                        properties: {
                            "vm": {
                                "mgt_ip": $('#s_mgtip').val(),
                                "interfaces": $('#s_interfaces').val()
                            }
                        }

                    }
                }, true);

                //console.log($("#s_mgtip").val());
            });


            my_graph_editor.addListener("RESETTED_CANVAS_DIMENSION", function(a, args) {
                //console.log('RESETTED_CANVAS_DIMENSION')
                $("#canvdimension").slider('value', 0);
            });

            $('#accordion').on('hidden.bs.collapse', function() {
                //$('#collapsesettings').text(' Static')
                $('#collapsesettings').find('span').toggleClass('fa-sort-down fa-sort-up')

            });
            $('#accordion').on('show.bs.collapse', function() {

                $('#collapsesettings').find('span').toggleClass('fa-sort-up fa-sort-down')
            });

            $("#canvdimension").slider({
                min: 0,
                max: 600,
                value: 50,
                slide: function(event, ui) {
                    my_graph_editor.resizeCanvasWith(ui.value);
                }
            });

            $("#orientation").slider({
                min: 0,
                max: 360,
                value: 0,
                slide: function(event, ui) {
                    my_graph_editor.change_orientation(ui.value);
                }
            });

            $("#vertexSize").slider({
                min: 0,
                max: 30,
                value: 10,
                slide: function(event, ui) {
                    my_graph_editor.change_vertex_size(ui.value);
                }
            });

            $("#edgeStrength").slider({
                min: 0,
                max: 100,
                value: 50,
                slide: function(event, ui) {
                    my_graph_editor.change_egde_strength(ui.value);
                }
            });

            $("#edgeLength").slider({
                min: 0,
                max: 100,
                value: 50,
                slide: function(event, ui) {
                    my_graph_editor.change_egde_length(ui.value);
                }
            });

            $("#layer-menu .dropdown-menu li a").click(function() {
                my_graph_editor.set_layer($(this).text().replace(/ /g, ''));
                setLayerView($(this).text().replace(/ /g, ''));


            });

            $('#collapsepalette').click(function(t) {

                if ($(this).text() == "Drawing Palette-Hide") {
                    $(this).text("Drawing Palette-Show");
                    $('#panel_head').css('display', 'none');
                } else {
                    $(this).text("Drawing Palette-Hide");
                    $('#panel_head').css('display', '');
                }


            });

            $('#edit_topo_button').click(function(e) {

                cmjsoneditor.setValue(my_graph_editor.export_json());

            });


            $('#validate_button').click(function(e) {
                $('#myModalLoading').modal('show');
                my_graph_editor.validate();
            });



            $('#deploy_button').click(function(e) {
                if (location.hostname != "stud.netgroup.uniroma2.it") {
                    $('#myModalLoading').modal('show');
                    my_graph_editor.newExp();
                } else {
                    $('#myModalAlert').modal('show');
                }
            });



            $('#exp_button').click(function(e) {


                var data = 'text/json;charset=utf-8, ' + encodeURIComponent(my_graph_editor.export_json());

                var fake = document.getElementById('linkfake');
                if (fake) {
                    fake.parentNode.removeChild(fake);
                }

                var d = new Date();
                $('#download_body').append('<a id = "linkfake" href="data:' + data + '" download="data.json" >Download ready - ' + d.toTimeString() + ' </a>');


            });

            $('#power_off_button').click(function() {

                setDesigneMod(ctrlconsole);

            });

            $('#tun_option').click(function() {
                my_graph_editor.set_properties({
                    graph_parameters: {
                        tunneling: $('#tun_option').val()
                    }
                }, false);
            });

            $('#tb_option').click(function() {
                my_graph_editor.set_properties({
                    graph_parameters: {
                        testbed: $('#tb_option').val()
                    }
                }, false);
            });


            $('#imp_button').click(function(e) {
                // Use the native click() of the file input.
                document.querySelector('#fileElem').click();

            });
            $('input[id="fileElem"]').bind("change", function() {

                // Get a reference to the fileList
                var files = !!this.files ? this.files : [];

                // If no files were selected, or no FileReader support, return
                if (!files.length || !window.FileReader) return;
                // Only proceed if the selected file is a text 
                if (files[0].type == "application/json" || files[0].type == "") {
                    // Create a new instance of the FileReader
                    var reader = new FileReader();

                    //Read local file as text
                    reader.readAsText(files[0]);

                    reader.onloadend = function() {
                        my_graph_editor.import_from_JSON(this.result, false)
                        //console.log(this.result)

                    }
                }

            });

            $('#circular').click(function() {
                if (confirm("All vertices will be irrevesably moved. This operation cannot be undone.")) {
                    my_graph_editor.circular_layout();
                }
            });

            $('#image_button').click(function() {
                my_graph_editor.export_image();
            });

            $('#undo_button').click(function() {
                my_graph_editor.undo_remove();
            });


            $('#reset_button').click(function() {
                if (confirm("The graph will be irreversibly erased. This operation cannot be undone.")) {
                    my_graph_editor.erase_graph();
                }
            });

            $('#live_button').click(function() {
                my_graph_editor.toggle_live();
            });

            var open_catalogue_item = function(id) {
                if (confirm("Warning, you will loose unsaved changes in the current topology - are you sure ?")) {
                    $.getJSON("topocatalogjson/" + id + ".json", function(data) {
                        ////console.log(data);
                        my_graph_editor.import_from_JSON(data, false, true);
                        //TODO
                        $('#myModalTopoCatalog').modal('hide');
                    });
                }
            };


            $('#imp_OSHI_base_7N').click(function(id) {
                open_catalogue_item('OSHI_base_7N');
            });

            $('#imp_OSHI_12N').click(function(id) {
                open_catalogue_item('OSHI_12N');
            });

            $('#imp_GARR_2014').click(function(id) {
                open_catalogue_item('GARRR_2014');
            });

            $('#imp_cat_butt_3').click(function(id) {
                open_catalogue_item(3);
            });

            $('#imp_5').click(function(id) {
                open_catalogue_item('5');
            });

            $('#imp_6').click(function(id) {
                open_catalogue_item('6');
            });

            $('#imp_7').click(function(id) {
                open_catalogue_item('7');
            });

            $('#imp_8').click(function(id) {
                open_catalogue_item('8');
            });

            $('#imp_9').click(function(id) {
                open_catalogue_item('9');
            });

            $('#imp_cat_butt_10').click(function(id) {
                open_catalogue_item(10);
            });


            $('#set_cfg_mapping').click(function() {
                //console.log("set_cfg_mapping");

                var clset = vmmconfigeditor.getValue();

                my_graph_editor.setvmmcfg(clset);

                $('#myModalMappingCfg').modal('hide');

            });

            $('#editvmmcfg_button').click(function() {
                //console.log("editvmmcfg_button");
                var list = my_graph_editor.getvmmcfg();
                ////console.log("list: " + JSON.stringify(list));
                vmmconfigeditor.setValue(list);

            });

            $('#set_json').click(function() {
                my_graph_editor.import_from_JSON(cmjsoneditor.getValue(), false);
                $('#myModalCopy').modal('hide');
            });

            $('#editvmmap_button').click(function() {
                //console.log("editvmmap_button");
                var list = my_graph_editor.getNodesProperty("vm");
                ////console.log("list: " + JSON.stringify(list));
                vmmappingreditor.setValue(list);

            });

            $('#set_mapping').click(function() {
                //console.log("set_mapping");

                var clset = JSON.parse(vmmappingreditor.getValue());
                for (n in clset) {
                    var cindex = n.match(/\d+$/)[0] - 1;
                    ////console.log(cindex)
                    if ((cindex != undefined && cindex > -1) && (clset[n] != undefined)) {
                        my_graph_editor.set_properties({
                            node: {
                                index: cindex,
                                properties: {
                                    vm: clset[n]
                                }

                            }
                        }, false);
                    } else {
                        //console.log("Errore dati json set_cluster");
                    }

                }

                $('#myModalMapping').modal('hide');

            });



            $('#set_cluster_button').click(function() {
                //console.log("setClusterButton");
                var modelname = my_graph_editor.getcurmodelname();

                var list = my_graph_editor.getNodesProperty("domain-" + modelname + ".layer-Control.cluster_id");
                ////console.log("list: " + JSON.stringify(list));
                cmclustereditor.setValue(list);

            });

            $('#set_cluster_parse').click(function() {
                //my_graph_editor.import_from_JSON(cmjsoneditor.getValue(), true);
                //console.log("set_cluster");

                var clset = JSON.parse(cmclustereditor.getValue());
                for (n in clset) {
                    var cindex = n.match(/\d+$/)[0] - 1;
                    //console.log(cindex)
                    if ((cindex != undefined && cindex > -1) && (clset[n] != undefined)) {

                        var modelname = "domain-" + my_graph_editor.getcurmodelname();
                        var newpro = {
                            node: {
                                index: cindex,
                                properties: {

                                }

                            }
                        };
                        newpro.node.properties[modelname] = {
                            "layer-Control": {
                                cluster_id: clset[n]
                            }
                        };
                        my_graph_editor.set_properties(newpro, false);
                    } else {
                        //console.log("Errore dati json set_cluster");
                    }

                }

                $('#myModalCluster').modal('hide');
            });

            $('#help_button').click(function() {
                $('#myModal').modal('show');
            });

            $('#rest').css('clear', 'both');
            $("[data-toggle=popover]").popover({
                container: 'body',
                html: 'true'
            })

            $("#coreslider").slider({
                min: 1,
                max: 10,
                value: 5,
                slide: function(event, ui) {
                    $("#corenum").val(" " + ui.value);
                    //onchangef(ui.value);
                }
            });

            $("#probslider").slider({
                min: 1,
                max: 10,
                value: 5,
                slide: function(event, ui) {
                    $("#prob").val(" " + ui.value / 10);
                    //onchangef(ui.value);
                }
            });

            $("#prob").val($("#coreslider").slider("option", "value") / 10);
            $("#corenum").val($("#probslider").slider("option", "value"));


            $('#start_random_button').click(function(e) {
                var n = $("#coreslider").slider("option", "value");
                var p = $("#probslider").slider("option", "value") / 10;
                $('#randomprogbar').modal('show');
                my_graph_editor.getRandomTopology(n, p);
            });

            $('#showLabelCheckbox').click(function(e) {
                my_graph_editor.showEdgeLabel(this.checked);
            });

            $('#showCustomLabelCheckbox').click(function(e) {
                my_graph_editor.showEdgeLabelC(this.checked);
            });


            setLayerView(args.curLayer);

            $('#myModalLoading').modal('hide');

            //var prova = new dreamer.Ctrlfwc('myTab', '');
            // prova.addConsole("h1");

            resetCanvasDimensions();
            setDesigneMod();
        }); ///


        var model_param = getURLParameter("model");
        if (model_param != undefined)
            my_graph_editor.load(model_param);
        else
            my_graph_editor.load("oshi");

        $(window).resize(function() {
            //console.log("RESIZE PAGINA")
            resetCanvasDimensions();
        });


    });

    function setDesigneMod(ctrlconsole) {
        //rendo visibile la parte con le shell
        $('#console_div').css('display', 'none');
        $('#exp_msg').hide();
        $('#power_off_button').hide();

        //riattivo alcuni menu item 
        $('#deployment_button_group').prop("disabled", false);
        $('#topology_button').prop("disabled", false);
        $('#model_button').prop("disabled", false);
        $('#tool_button_group').prop("disabled", false);


        //rattivo la barra dei comandi
        $('#panel_head').css('display', '');
        $('#collapsepalette').css('display', '');
        $('#accordion').css('display', '');
        if (ctrlconsole)
            ctrlconsole.closeAll();
        mod = "DES";
        $('#myModalLoading').modal('hide');
    }

    function resetCanvasDimensions() {
        //console.log("resetCanvasDimensions", $('#container_fluid').height(), $('#panel_head').height(), ($('#panel_head').css('display') != 'none'));

        var height_to_remove = 30 + $('#container_fluid').height() + (($('#panel_head').css('display') != 'none') ? $('#panel_head').height() : 0);


        my_graph_editor.resetCanvasDimension($('#canvas_cont').width(), $(window).height() - height_to_remove);
    }

    function initClusterSelOption(map) {
        $("#s_cluster").empty();
        for (m in map) {
            $("#s_cluster").append("<option value='" + m + "' style='color:" + map[m] + "''> Cluster" + m + "</option>");
        }
    }

    function clearInfoBox() {
        var info_sidebar = '#info_sidebar';
        $('#title').html('');
        $(info_sidebar + ' .infobox #none_selected').show();
        $(info_sidebar + ' .infobox #info').hide();
        $('#box_info').hide();
    }

    function setLayerLabel(layer) {
        $('#layer_button_label').text("View (" + layer + ")");
    };

    function setTunnelLabel(tunnel) {
        $('#tunneling_cur').text("(" + tunnel + ")");
    };


    function setModelLabel(model) {
        $('#model_button_label').text("Model (" + model + ")");
    };

    function setLayerView(layer) {
        setLayerLabel(layer);
        setToolsDropMenu(layer);
    };


    function setToolsDropMenu(layer) {
        // $('#dropdown-menu-tool').empty();
        if (layer == "Data") {
            $("#impexpmap").show();
            $("#editmap").show();

            $("#setcl").hide();
        } else if (layer == "Control") {
            $("#setcl").show();

            $("#impexpmap").hide();
            $("#editmap").hide();
        } else {
            $("#impexpmap").hide();
            $("#editmap").hide();

            $("#setcl").hide();
        }
    };

    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
    };

}());