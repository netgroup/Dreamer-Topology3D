(function() {

    //var example = '{"vertices": {"3": {"pos": {"x": 477.3105529387208, "y": 359.5564421318443 }, "v": {"x": 0.0035644859802187456, "y": -0.0003678184322717711 }, "vertex_info": {"frozen": false } }, "OSHI-CR#01": {"pos": {"x": 571.645587789206, "y": 260.57006773541957 }, "v": {"x": -0.0005012924164955468, "y": -0.008078636265402117 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#02": {"pos": {"x": 343.46842265480825, "y": 265.1071814627707 }, "v": {"x": 0.0003789057184639122, "y": -0.0017395130358406896 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#03": {"pos": {"x": 430.39318093174245, "y": 199.05731743393878 }, "v": {"x": -0.002163273333355198, "y": -0.0028420946490407273 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#04": {"pos": {"x": 243.8844992787802, "y": 183.27015249856393 }, "v": {"x": -0.004556435119165703, "y": 0.000016304893190211 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-CR#05": {"pos": {"x": 529.2382245698698, "y": 173.06882694953057 }, "v": {"x": -0.0034116077547209356, "y": -0.005871884333641275 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR"} }, "OSHI-PE#06": {"pos": {"x": 640.3849197006057, "y": 339.19156652333174 }, "v": {"x": -0.00742332678703711, "y": 0.0003708985499277784 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "OSHI-PE#07": {"pos": {"x": 312.58904093980925, "y": 353.34617200846276 }, "v": {"x": 0.005391255918603288, "y": -0.00000590230079858256 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "OSHI-PE#08": {"pos": {"x": 303.91447641624836, "y": 110.06143678318273 }, "v": {"x": -0.005137044154760628, "y": -0.001232734466973251 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "OSHI-PE#09": {"pos": {"x": 582.1536223214617, "y": 65.852377971866 }, "v": {"x": -0.001482757906184684, "y": -0.0024401659616921645 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE"} }, "L2SW#10": {"pos": {"x": 729.7399333452596, "y": 283.445290257405 }, "v": {"x": -0.0008653721268885653, "y": 0.01443851734511814 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#11": {"pos": {"x": 338.949857882099, "y": 38.695333142850856 }, "v": {"x": -0.0023467513834182496, "y": 0.00012013969347424158 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#12": {"pos": {"x": 217.37206502183986, "y": 50.70980541461902 }, "v": {"x": -0.003724114635455855, "y": -0.0003094759959772764 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#13": {"pos": {"x": 221.32874070071674, "y": 352.0507559846285 }, "v": {"x": 0.007276436751229354, "y": 0.00102747353644074 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#14": {"pos": {"x": 398.85044697434125, "y": 361.74708348239415 }, "v": {"x": 0.004052367263665424, "y": -0.0003953079103612752 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "L2SW#15": {"pos": {"x": 504.2728676036877, "y": 40.183063551670266 }, "v": {"x": -0.002470467246925734, "y": -0.00045277093720762305 }, "vertex_info": {"frozen": false, "node-type": "L2SW"} }, "CE#16": {"pos": {"x": 124.27399147231507, "y": 58.74509547499744 }, "v": {"x": -0.0042285172653654945, "y": 0.0004570623048270467 }, "vertex_info": {"frozen": false, "node-type": "CE"} }, "CE#17": {"pos": {"x": 430.73011781981313, "y": 41.18049787164649 }, "v": {"x": -0.002547450215794278, "y": -0.00022835299889285756 }, "vertex_info": {"frozen": false, "node-type": "CE"} }, "CE#18": {"pos": {"x": 736.4952754707438, "y": 178.71981153966888 }, "v": {"x": 0.00030596100178620356, "y": 0.014412333046186554 }, "vertex_info": {"frozen": false, "node-type": "CE"} }, "CE#20": {"pos": {"x": 126.88083720945107, "y": 339.46679319440915 }, "v": {"x": 0.008556819703654461, "y": 0.0018314490720695437 }, "vertex_info": {"frozen": false, "node-type": "CE"} } }, "edges": {"OSHI-CR#05&&OSHI-CR#01": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-CR#03&&OSHI-CR#01": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-CR#03&&OSHI-CR#04": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-CR#03&&OSHI-CR#02": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#07&&OSHI-CR#02": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#08&&OSHI-CR#05": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#08&&OSHI-CR#04": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#09&&OSHI-CR#03": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "OSHI-PE#06&&OSHI-CR#01": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#12&&OSHI-PE#08": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#11&&OSHI-PE#08": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#13&&OSHI-PE#07": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#14&&OSHI-PE#07": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#10&&OSHI-PE#06": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#15&&OSHI-PE#09": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "L2SW#13&&CE#20": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "3&&L2SW#14": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "CE#18&&L2SW#10": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "CE#17&&L2SW#15": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "CE#16&&L2SW#12": {"links": [{"link_label": "ciao", "link-type": "Data"} ] } }, "graph_parameters": {} }';
    //  var example = '{"vertices": {"cro1": {"pos": {"x": 597.3531914893617, "y": 144.82758620689657 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro2": {"pos": {"x": 410.936170212766, "y": 241.3793103448276 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo3": {"pos": {"x": 649.7897838899805, "y": 310 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro4": {"pos": {"x": 232.07659574468084, "y": 360 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo5": {"pos": {"x": 211.92340425531913, "y": 166.89655172413794 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE", "property": {"domain-oshi": {"cluster_id": ""}, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cer6": {"pos": {"x": 103.6, "y": 40 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "CE", "property": {"domain-oshi": {"cluster_id": ""}, "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cer7": {"pos": {"x": 932.4, "y": 304.8275862068966 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "CE", "property": {"domain-oshi": {"cluster_id": ""}, "vm": {"interfaces": "", "mgt_ip": ""} } } } }, "edges": {"cer6&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cer7&&peo3": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo3&&cro1": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo3&&cro2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo3&&cro4": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro4&&cro2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro1&&cro2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro1&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro4&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro2&&peo5": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cer6&&cer7": {"links": [{"link_label": "ciao", "link-type": "Vll"} ] } }, "graph_parameters": {"tunneling": "VXLAN", "vlan": 0, "mapped": false, "generated": false, "testbed": "MININET"} }';
    var example = '{"vertices": {"cer1": {"pos": {"x": 102.4, "y": 40 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "CE", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo2": {"pos": {"x": 207.0483033932136, "y": 129.92700729927006 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro3": {"pos": {"x": 417.9800399201597, "y": 221.02189781021897 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro4": {"pos": {"x": 706.84375, "y": 121 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cro5": {"pos": {"x": 140.84375, "y": 302 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-CR", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "peo6": {"pos": {"x": 669.7900199600799, "y": 313.2846715328467 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "OSHI-PE", "property": {"custom_label": "", "domain-oshi": {"layer-Control": {"cluster_id": ""} }, "loopback": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "cer7": {"pos": {"x": 921.6, "y": 360 }, "v": {"x": 0, "y": 0 }, "vertex_info": {"frozen": false, "node-type": "CE", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } } }, "edges": {"cer1&&peo2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cer7&&peo6": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro4&&peo6": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro4&&peo2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro4&&cro3": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro5&&peo2": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro5&&peo6": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "cro5&&cro3": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo2&&cro3": {"links": [{"link_label": "ciao", "link-type": "Data"} ] }, "peo6&&cro3": {"links": [{"link_label": "ciao", "link-type": "Data"} ] } }, "graph_parameters": {"tunneling": "OPENVPN", "vlan": "0", "mapped": false, "generated": false, "testbed": "MININET"} }';
    var ctrlconsole;
    var mod = "DES";

    $(document).ready(function() {

        $('#myModalLoading').modal('show');
        my_graph_editor = new GraphEditor('#graph_ed', {
            JSONdata: example,
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


        my_graph_editor.resetCanvasDimension($('#panel_head').width() - 30, 500);

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
                console.log(JSON.stringify(args));
                $(info_sidebar + ' .infobox #title').html('Node Info');
                $(info_sidebar + ' .infobox #index').html(base_info.index);
                $(info_sidebar + ' .infobox #index').hide();
                $(info_sidebar + ' .infobox #index_label').hide();
                $(info_sidebar + ' .infobox #pos').hide();
                $(info_sidebar + ' .infobox #node_inf').show();
                $(info_sidebar + ' .infobox #edge_inf').hide();
                $(info_sidebar + ' .infobox #vert').hide();
                $(info_sidebar + ' .infobox #label').html(args.label);
                //console.log(args.base_info.label)
                $(info_sidebar + ' .infobox #n_name').html(args.base_info.label);
                $(info_sidebar + ' .infobox #none_selected').hide();
                $(info_sidebar + ' .infobox #info').show();
                $('#s_label').val(base_info.node_type)

                if (args.model_info) {
                    if (Object.keys(args.model_info).length > 0) {
                        $('#s_cluster').show();
                        console.log("mostra " + JSON.stringify(Object.keys(args.model_info)));
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
                        console.log(JSON.stringify(mgt_ip_list));

                       $("#s_mgtip").empty().append('<option value=""></option>')
                        for (i in mgt_ip_list) {
                            //console.log(mgt_ip_list[i]);
                             var val = mgt_ip_list[i];
                             $("#s_mgtip").append("<option value='" + val + "'>" + val + "</option>");
                        }
                        if(type_info.vm['mgt_ip'])
                            $("#s_mgtip").append("<option value='" + type_info.vm['mgt_ip'] + "' disabled>" + type_info.vm['mgt_ip'] + "</option>");
                        $('#s_mgtip').val(type_info.vm['mgt_ip']);

                        
                        $("#s_interfaces").empty().append('<option value=""></option>')
                        if(type_info.vm['mgt_ip'] != ""){
                        var interfaces = my_graph_editor.getInterfacesMgtIp(base_info.node_type, type_info.vm['mgt_ip']).interfaces;
                        console.log(JSON.stringify(interfaces));
                        for (var m in interfaces) {
                            console.log(interfaces[m])
                            var val = interfaces[m];
                            $("#s_interfaces").append("<option value='" + val + "'>" + val + "</option>");
                        }
                        if(type_info.vm['interfaces'])
                            $("#s_interfaces").append("<option value='" + type_info.vm['interfaces'] + "' disabled>" + type_info.vm['interfaces'] + "</option>");
                        $('#s_interfaces').val(type_info.vm['interfaces']);
                        }

                        
                        $('#vm').show();
                    } 
                    else {
                        $('#vm').hide();
                    }

                    if(type_info['custom_label'] != undefined){
                        $('#cldiv').show();
                       // if(type_info['custom_label'] != ""){
                           console.log("NON VUOTO")
                            $('#clabel_input').val(type_info['custom_label']);
                     //   }
                    }
                    else{
                        console.log("HIDE custom label")
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


                if(mod == "EXP"){
                        ctrlconsole.addConsole(args.base_info.label);
                        //ctrlconsole.addConsole("h2");
                }
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
            } else if (args.selected == "graph_parameters") {
                $("#tun_option").val(args.tunneling);
            } else if (args.selected == "none") {
                clearInfoBox();
            }

        });


        my_graph_editor.addListener("INVALID_TOPOLOGY", function(a, args) {
            console.log('INVALID_TOPOLOGY');
            console.log(args);

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
            console.log('VALID_TOPOLOGY')
            $('#alert_div').empty();
            $('#alert_div').append('<div id=\"alert_msg\"  class=\"alert alert-success alert-dismissible alert-franz-in \" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><strong>Well done!</strong> The topology is ready to be executed on the testbed.</div>');
            window.setTimeout(function() {
                $("#alert_msg").alert('close');
            }, 5000);
            $('#myModalLoading').modal('hide');
        });

        my_graph_editor.addListener("alert_warning_msg", function(a, args) {
            console.log('alert_msg')
            $('#alert_div').empty();
            $('#alert_div').append('<div id=\"warning_msg\" class=\"alert alert-danger alert-dismissible alert-franz-in \" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>' + args + '</div>');
            window.setTimeout(function() {
                $("#warning_msg").alert('close');
            }, 5000);
        });

        my_graph_editor.addListener("RANDOM_TOPOLOGY", function(a, args) {
            console.log('RANDOM_TOPOLOGY')
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

            console.log("Male")
        });

        my_graph_editor.addListener("topology_loaded", function(a, args) {

            clearInfoBox();

            //imposta layer
            setLayerLabel(args.curLayer);
            //imposta tunnel
            $("#tun_option").val(args.graph_parameters.tunneling);

            //imposta testbed

            //rileva pro domain
            //console.log(JSON.stringify(args.domain_data));
            initClusterSelOption(args.domain_data.clustermap);

        });

        my_graph_editor.addListener("EXP_MODE", function(a, args) {
            //rendo visibile la parte con le shell
            $('#console_div').css('display', 'block');

            //nasconodo la barra dei comandi
            $('#panel_head').css('display', 'none');
            var exp_name = "";//args.exp_name;
            ctrlconsole = new dreamer.Ctrlfwc('myTab', exp_name);
            ctrlconsole.addConsole("deployment");
            mod = "EXP";
            $('#myModalLoading').modal('hide');
        });


        my_graph_editor.addListener("editor_ready", function(a, args) {

            var layers = my_graph_editor.get_layers();

            for (i in layers) {
                $("#dropdown-menu-layer").append("<li> <a href=\"#\" > <span class=\"fa fa-sitemap\"></span> " + layers[i] + "</a> </li>");
            }



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
            




            $(info_sidebar + ' .infobox #s_label').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html(),
                    title = $(info_sidebar + ' .infobox #title').html();
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
                console.log("set_clabel")
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

                my_graph_editor.set_properties({
                    node: {
                        index: index,
                        properties: {
                            "domain-oshi": {
                                "layer-Control": {
                                    cluster_id: $('#s_cluster').val()
                                }
                            }
                        }

                    }
                }, true);


            });

            $('#s_mgtip').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html();

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


            });

            $('#s_interfaces').change(function() {
                var index = $(info_sidebar + ' .infobox #index').html();

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


            });


            my_graph_editor.addListener("RESETTED_CANVAS_DIMENSION", function(a, args) {
                console.log('RESETTED_CANVAS_DIMENSION')
                $("#canvdimension").slider('value', 0);
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



            $('#edit_topo_button').click(function(e) {

                cmjsoneditor.setValue(my_graph_editor.export_json());

            });


            $('#validate_button').click(function(e) {
                $('#myModalLoading').modal('show');
                my_graph_editor.validate();
            });


            $('#deploy_button').click(function(e) {
                //$('#myModalLoading').modal('show');
                
                //my_graph_editor.newExp();
                
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
                }, false);
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
                if (files[0].type == "application/json" || files[0].type == "") {
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

             $('#set_cfg_mapping').click(function() {
                console.log("set_cfg_mapping");

                var clset = vmmconfigeditor.getValue();

                my_graph_editor.setvmmcfg(clset);

                $('#myModalMappingCfg').modal('hide');

            });

            $('#editvmmcfg_button').click(function() {
                console.log("editvmmcfg_button");
                var list = my_graph_editor.getvmmcfg();
                console.log("list: " + JSON.stringify(list));
                vmmconfigeditor.setValue(list);

            });

            $('#set_json').click(function() {
                my_graph_editor.import_from_JSON(cmjsoneditor.getValue(), false);
                $('#myModalCopy').modal('hide');
            });

            $('#editvmmap_button').click(function() {
                console.log("editvmmap_button");
                var list = my_graph_editor.getNodesProperty("vm");
                console.log("list: " + JSON.stringify(list));
                vmmappingreditor.setValue(list);

            });

            $('#set_mapping').click(function() {
                console.log("set_mapping");

                var clset = JSON.parse(vmmappingreditor.getValue());
                for (n in clset) {
                    var cindex = n.match(/\d+$/)[0] - 1;
                    console.log(cindex)
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
                        console.log("Errore dati json set_cluster");
                    }

                }

                $('#myModalMapping').modal('hide');

            });



            $('#set_cluster_button').click(function() {
                console.log("setClusterButton");
                var list = my_graph_editor.getNodesProperty("domain-oshi.layer-Control.cluster_id");
                console.log("list: " + JSON.stringify(list));
                cmclustereditor.setValue(list);

            });

            $('#set_cluster_parse').click(function() {
                //my_graph_editor.import_from_JSON(cmjsoneditor.getValue(), true);
                console.log("set_cluster");

                var clset = JSON.parse(cmclustereditor.getValue());
                for (n in clset) {
                    var cindex = n.match(/\d+$/)[0] - 1;
                    console.log(cindex)
                    if ((cindex != undefined && cindex > -1) && (clset[n] != undefined)) {
                        my_graph_editor.set_properties({
                            node: {
                                index: cindex,
                                properties: {
                                    "domain-oshi": {
                                        "layer-Control": {
                                            cluster_id: clset[n]
                                        }
                                    }
                                }

                            }
                        }, false);
                    } else {
                        console.log("Errore dati json set_cluster");
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

            //my_graph_editor.newExp();
        }); ///



        my_graph_editor.load("oshi");

        $(window).resize(function() {
            console.log("RESIZE PAGINA")
            my_graph_editor.resetCanvasDimension($('#panel_head').width() - 30, 500);
        });

    });

    function initClusterSelOption(map) {
        for (m in map) {
            $("#s_cluster").append("<option value='" + m + "' style='color:" + map[m] + "''> Cluster" + m + "</option>");
        }
    }

    function clearInfoBox() {
        var info_sidebar = '#info_sidebar';
        $(info_sidebar + ' .infobox #title').html('Node / edge information');
        $(info_sidebar + ' .infobox #none_selected').show();
        $(info_sidebar + ' .infobox #info').hide();
    }

    function setLayerLabel(layer) {
        $('#layer-label').text("Current View: " + layer);
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




}());