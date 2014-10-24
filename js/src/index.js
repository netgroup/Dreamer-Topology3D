(function() {

    //var example = '{"vertices": {"3": {"pos": {"x": 477.3105529387208, "y": 359.5564421318443 }, "v": {"x": 0.0035644859802187456, "y": -0.0003678184322717711 }, "vertex_info": {"frozen": false } }, "OSHI-CR#01": {"pos": {"x": 571.645587789206, "y": 260.57006773541957 }, "v": {"x": -0.0005012924164955468, "y": -0.008078636265402117 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#02": {"pos": {"x": 343.46842265480825, "y": 265.1071814627707 }, "v": {"x": 0.0003789057184639122, "y": -0.0017395130358406896 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#03": {"pos": {"x": 430.39318093174245, "y": 199.05731743393878 }, "v": {"x": -0.002163273333355198, "y": -0.0028420946490407273 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#04": {"pos": {"x": 243.8844992787802, "y": 183.27015249856393 }, "v": {"x": -0.004556435119165703, "y": 0.000016304893190211 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#05": {"pos": {"x": 529.2382245698698, "y": 173.06882694953057 }, "v": {"x": -0.0034116077547209356, "y": -0.005871884333641275 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-PE#06": {"pos": {"x": 640.3849197006057, "y": 339.19156652333174 }, "v": {"x": -0.00742332678703711, "y": 0.0003708985499277784 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "OSHI-PE#07": {"pos": {"x": 312.58904093980925, "y": 353.34617200846276 }, "v": {"x": 0.005391255918603288, "y": -0.00000590230079858256 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "OSHI-PE#08": {"pos": {"x": 303.91447641624836, "y": 110.06143678318273 }, "v": {"x": -0.005137044154760628, "y": -0.001232734466973251 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "OSHI-PE#09": {"pos": {"x": 582.1536223214617, "y": 65.852377971866 }, "v": {"x": -0.001482757906184684, "y": -0.0024401659616921645 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "L2SW#10": {"pos": {"x": 729.7399333452596, "y": 283.445290257405 }, "v": {"x": -0.0008653721268885653, "y": 0.01443851734511814 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#11": {"pos": {"x": 338.949857882099, "y": 38.695333142850856 }, "v": {"x": -0.0023467513834182496, "y": 0.00012013969347424158 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#12": {"pos": {"x": 217.37206502183986, "y": 50.70980541461902 }, "v": {"x": -0.003724114635455855, "y": -0.0003094759959772764 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#13": {"pos": {"x": 221.32874070071674, "y": 352.0507559846285 }, "v": {"x": 0.007276436751229354, "y": 0.00102747353644074 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#14": {"pos": {"x": 398.85044697434125, "y": 361.74708348239415 }, "v": {"x": 0.004052367263665424, "y": -0.0003953079103612752 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#15": {"pos": {"x": 504.2728676036877, "y": 40.183063551670266 }, "v": {"x": -0.002470467246925734, "y": -0.00045277093720762305 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "CE#16": {"pos": {"x": 124.27399147231507, "y": 58.74509547499744 }, "v": {"x": -0.0042285172653654945, "y": 0.0004570623048270467 }, "vertex_info": {"frozen": false, "node-type": "CE"} }, "CE#17": {"pos": {"x": 430.73011781981313, "y": 41.18049787164649 }, "v": {"x": -0.002547450215794278, "y": -0.00022835299889285756 }, "vertex_info": {"frozen": false, "node-type": "CE"} }, "CE#18": {"pos": {"x": 736.4952754707438, "y": 178.71981153966888 }, "v": {"x": 0.00030596100178620356, "y": 0.014412333046186554 }, "vertex_info": {"frozen": false, "node-type": "CE"} }, "CE#20": {"pos": {"x": 126.88083720945107, "y": 339.46679319440915 }, "v": {"x": 0.008556819703654461, "y": 0.0018314490720695437 }, "vertex_info": {"frozen": false, "node-type": "CE"} } }, "edges": {"OSHI-CR#05&&OSHI-CR#01": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-CR#03&&OSHI-CR#01": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-CR#03&&OSHI-CR#04": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-CR#03&&OSHI-CR#02": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#07&&OSHI-CR#02": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#08&&OSHI-CR#05": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#08&&OSHI-CR#04": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#09&&OSHI-CR#03": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#06&&OSHI-CR#01": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#12&&OSHI-PE#08": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#11&&OSHI-PE#08": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#13&&OSHI-PE#07": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#14&&OSHI-PE#07": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#10&&OSHI-PE#06": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#15&&OSHI-PE#09": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#13&&CE#20": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "3&&L2SW#14": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "CE#18&&L2SW#10": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "CE#17&&L2SW#15": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "CE#16&&L2SW#12": {"links": [{"link_label": "ciao", "link-type": "Data"} ] } }, "graph_parameters": {} }';
        var example = '{"vertices": {"cro1": {"pos": {"x": 586.9744680851064, "y": 144.82758620689657 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro2": {"pos": {"x": 403.7963525835866, "y": 241.3793103448276 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo3": {"pos": {"x": 638.5, "y": 310 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro4": {"pos": {"x": 228.04437689969603, "y": 360 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo5": {"pos": {"x": 208.24133738601822, "y": 166.89655172413794 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cer6": {"pos": {"x": 101.8, "y": 40 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "CE", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cer7": {"pos": {"x": 916.1999999999999, "y": 304.82758620689657 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "CE", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } } }, "edges": {"cer6&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cer7&&peo3": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo3&&cro1": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo3&&cro2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo3&&cro4": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro4&&cro2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro1&&cro2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro1&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro4&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro2&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cer6&&cer7": {"links": [{"link_label": "ciao", "link-type": "Vll"} ] } }, "graph_parameters": {"tunneling": "VXLAN", "vlan": 0, "mapped": false, "generated": false, "testbed": "MININET"} }';
        $(document).ready(function() {

        $('#myModalLoading').modal('show');
        my_graph_editor = new GraphEditor('#graph_ed', {
            JSONdata: example,
            node_radius: 18.0,
            multigraph: true
        });


       

         my_graph_editor.resetCanvasDimension($('#panel_head').width()-30,400); 

        my_graph_editor.addListener("LiveStatus", function(a, args) {
            console.log("Fired con successoooo " + JSON.stringify(args));
            if (args.live) {
                $('#live_button').text(' Static')
                $('#live_button').prepend('<span class="glyphicon glyphicon-pause"></span>')
                $('#edgeLength').slider('enable');
                $('#edgeStrength').slider('enable');
                $('#EdgeLength_label').css("color", "rgb(51,51,51)");
                $('#EdgeStrength_label').css("color", "rgb(51,51,51)");
            } else {
                $('#live_button').text('   Live')
                $('#live_button').prepend('<span class="glyphicon glyphicon-play"></span>')
                $('#edgeLength').slider('disable');
                $('#edgeStrength').slider('disable');
                $('#EdgeLength_label').css("color", "grey");
                $('#EdgeStrength_label').css("color", "grey");
            }
        });


        my_graph_editor.addListener("update_infobox", function(a, args) {
            var info_sidebar = '#info_sidebar';

            if (args.selected == "Vertex") {

                var base_info = args.base_info;

                $(info_sidebar + ' .infobox #title').html('Vertex Info');
                $(info_sidebar + ' .infobox #index').html(base_info.index);
                $(info_sidebar + ' .infobox #pos').show();
                $(info_sidebar + ' .infobox #posx').html(base_info.pos.x);
                $(info_sidebar + ' .infobox #posy').html(base_info.pos.y);
                $(info_sidebar + ' .infobox #node_inf').show();
               // if (base_info.label == "COSHI" || base_info.label == "AOSHI")
                //    $(info_sidebar + ' .infobox #COSHI_node_inf').show();
                //else
                //    $(info_sidebar + ' .infobox #COSHI_node_inf').hide();
                $(info_sidebar + ' .infobox #edge_inf').hide();
                $(info_sidebar + ' .infobox #vert').hide();
                $(info_sidebar + ' .infobox #label').html(args.label);
                //$(info_sidebar + ' .infobox #loopback').html(node.vertex_info.loopback);
                //$(info_sidebar + ' .infobox #node_loopback').val(node.vertex_info.loopback);
                $(info_sidebar + ' .infobox #n_type').html(base_info.node_type);
                $(info_sidebar + ' .infobox #none_selected').hide();
                $(info_sidebar + ' .infobox #info').show();
                $('#s_label').val('')

            } else if (args.selected == "Edge") {
                var base_info = args.base_info;

                $(info_sidebar + ' .infobox #title').html('Edge Info');
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
            }else if(args.selected == "graph_parameters"){
                $("#tun_option").val(args.tunneling);
            }
             else if (args.selected == "none") {
                $(info_sidebar + ' .infobox #title').html('Select node for info!');
                $(info_sidebar + ' .infobox #none_selected').show();
                $(info_sidebar + ' .infobox #info').hide();
            }

        });


        my_graph_editor.addListener("INVALID_TOPOLOGY", function(a, args) {
            console.log('INVALID_TOPOLOGY');
            console.log(args);
         
            $('#myModalLoading').modal('hide');
           // for()
           $('#validationError_list').empty();
           var counter = 0;
            for(i in args){
                for (k in args[i]){

                    $('#validationError_list').append('<div class="panel panel-default"><div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#validationError_list" href="#collapse'+counter+'"> '+k+' </a> </h4> </div> <div id="collapse'+counter+'" class="panel-collapse collapse"> <div class="panel-body">'+args[i][k]+'</div></div></div>');
                    counter++;
                }

            }


             $('#myModalValidationError').modal('show');
            
            
        });

        my_graph_editor.addListener("VALID_TOPOLOGY", function(a, args) {
            console.log('VALID_TOPOLOGY')
            $('#alert_div').empty();
            $('#alert_div').append('<div class=\"alert alert-success alert-dismissible alert-franz\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><strong>Well done!</strong> The topology is ready to be executed on the testbed.</div>'); 
            $('#myModalLoading').modal('hide');
        });

        my_graph_editor.addListener("alert_warning_msg", function(a, args) {
            console.log('alert_msg')
            $('#alert_div').empty();
            $('#alert_div').append('<div id=\"warning_msg\" class=\"alert alert-danger alert-dismissible alert-franz\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>'+args+'</div>'); 
            window.setTimeout(function() { $("#warning_msg").alert('close'); }, 5000);
        });

         my_graph_editor.addListener("RANDOM_TOPOLOGY", function(a, args) {
             console.log('RANDOM_TOPOLOGY')
            if(args.error == true){
                
                $('#erRandomAlert').append('<div id="alertdiv" class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>There was an error! Please try again!</span></div>')
                $('#randomprogbar').hide();
            }
            else{
                
                $('#myModalRandom').modal('hide');
                $('#randomprogbar').hide();
                $('.modal-backdrop').remove();
            }
           return false;
        });


        my_graph_editor.addListener("error_load_spec", function(a, args) {
            console.log("Male")
        });


        my_graph_editor.addListener("editor_ready", function(a, args) {

            var layers = my_graph_editor.get_layers();

            for (i in layers) {
                $("#dropdown-menu-layer").append("<li> <a href=\"#\" > <span class=\"fa fa-sitemap\"></span>" + layers[i] + "</a> </li>");
            }



            var info_sidebar = '#info_sidebar'
            $(info_sidebar).append("");
            $(info_sidebar + ' .infobox #info').hide();

            var nodeTypes = my_graph_editor.get_nodeTypes();
            $("#drag_drop_toolbar").append("<ul style=\"white-space: nowrap;\">");
            for (n in nodeTypes) {
                //set option value 
                var ntype = nodeTypes[n];
               
                $("#s_label").append("<option value='" + ntype + "'>" + ntype + "</option>");
                var clntype = ntype.toLowerCase();
                clntype = clntype.replace(/ /g, '');
                
                //build drag and drop tool bar #drag_drop_toolbar
                $("#drag_drop_toolbar").append("<li  style=\"display: inline; list-style: none;\"><img class='draggable_node' id='drag_"+ clntype + "' src='img/"+clntype+".png' width='50' height='50'></li>");
                $("#drag_drop_toolbar").append("<li  style=\"display: inline; list-style: none;\"><img id='drag_"+ clntype + "_det' src='img/"+clntype+"_det.png' width='50' height='50'></li>");
                $("#drag_"+clntype).draggable({
                    helper: 'clone',
                });
                //set the data payload
                //cosi quando catturo l'evento del drop posso sapere il tipo di nodo considerato
                $("#drag_"+clntype).data("type", ntype);

            }
            $("#drag_drop_toolbar").append("</ul>");

            $(info_sidebar + ' .infobox #s_label').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html(),
                    title = $(info_sidebar + ' .infobox #title').html();
                if (title === "Vertex Info") {
                    my_graph_editor.set_properties({
                        node: {
                            index: index,
                            properties: {
                                type: $(info_sidebar + ' .infobox #s_label').val()
                            }

                        }
                    });
                }

            });


            my_graph_editor.addListener("RESETTED_CANVAS_DIMENSION", function(a, args) {
                console.log('RESETTED_CANVAS_DIMENSION')
                $("#canvdimension").slider('value', 0);
            });


            $("#canvdimension").slider({
                min: 0,
                max: 100,
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
            });



            $('#exp_copy_button').click(function(e) {
                $('#sage').val(my_graph_editor.export_json());
            });


            $('#validate_button').click(function(e) {
                $('#myModalLoading').modal('show');
                my_graph_editor.validate();
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


            $('#tun_option').click(function() {
                my_graph_editor.set_properties({
                    graph_parameters: {
                        tunneling: $('#tun_option').val()
                    }
                });
            });


            $('#imp_button').click(function(e) {
                // Use the native click() of the file input.
                document.querySelector('#fileElem').click();

            });
            $('input[id="fileElem"]').bind("change", function() {
                console.log("CIAOOOO")
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

                    reader.onloadend = function() {
                        my_graph_editor.import_from_JSON(this.result, false)
                        console.log(this.result)

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

            $('#imp_cat_butt_1').click(function(id) {
                id = 1;

                $.getJSON("topocatalogjson/cat" + id + ".json", function(data) {
                    //console.log(data);
                    my_graph_editor.import_from_JSON(data, true, true);
                    //TODO
                    $('#myModalTopoCatalog').modal('hide');
                });

            });
            $('#imp_cat_butt_2').click(function(id) {
                id = 2;

                $.getJSON("topocatalogjson/cat" + id + ".json", function(data) {
                    //console.log(data);
                    my_graph_editor.import_from_JSON(data, true, true);
                    //TODO
                    $('#myModalTopoCatalog').modal('hide');
                });

            });
            $('#imp_cat_butt_3').click(function(id) {
                id = 3;

                $.getJSON("topocatalogjson/cat" + id + ".json", function(data) {
                    //console.log(data);
                    my_graph_editor.import_from_JSON(data, true, true);
                    //TODO
                    $('#myModalTopoCatalog').modal('hide');
                });

            });


            $('#set_json').click(function() {
                my_graph_editor.import_from_JSON($('#json').val(), true);
                $('#myModalPaste').modal('hide');
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
                my_graph_editor.getRandomTopology(n,p);
            });

            // $("#topocanvas").droppable({
            //     drop: function() {
            //         console.log("CIAOOOO---DROPPPP");           
            //     }
            // });


            $('#myModalLoading').modal('hide');
        }); ///



        my_graph_editor.load("oshi");

         $(window).resize(function(){
            console.log("RESIZE PAGINA")     
            my_graph_editor.resetCanvasDimension($('#panel_head').width()-30,400);        
        });  

    });




}());