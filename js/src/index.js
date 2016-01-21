(function() {

    var example = {
        'oshi': '{"vertices":{"cer1":{"pos":{"x":99.1,"y":45.9},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"CE","property":{"custom_label":"","vm":{"interfaces":"","mgt_ip":""}}}},"peo2":{"pos":{"x":200.37584830339324,"y":149.09124087591238},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"OSHI-PE","property":{"custom_label":"","domain-oshi":{"layer-Control":{"cluster_id":""}},"loopback":"","vm":{"interfaces":"","mgt_ip":""}}}},"cro3":{"pos":{"x":404.50998003992026,"y":253.62262773722628},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"OSHI-CR","property":{"custom_label":"","domain-oshi":{"layer-Control":{"cluster_id":""}},"loopback":"","vm":{"interfaces":"","mgt_ip":""}}}},"cro4":{"pos":{"x":684.0646057128907,"y":138.8475},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"OSHI-CR","property":{"custom_label":"","domain-oshi":{"layer-Control":{"cluster_id":""}},"loopback":"","vm":{"interfaces":"","mgt_ip":""}}}},"cro5":{"pos":{"x":136.30484008789062,"y":346.54499999999996},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"OSHI-CR","property":{"custom_label":"","domain-oshi":{"layer-Control":{"cluster_id":""}},"loopback":"","vm":{"interfaces":"","mgt_ip":""}}}},"peo6":{"pos":{"x":648.2049900199603,"y":359.49416058394155},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"OSHI-PE","property":{"custom_label":"","domain-oshi":{"layer-Control":{"cluster_id":""}},"loopback":"","vm":{"interfaces":"","mgt_ip":""}}}},"cer7":{"pos":{"x":891.9,"y":413.09999999999997},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"CE","property":{"custom_label":"","vm":{"interfaces":"","mgt_ip":""}}}},"ctr8":{"pos":{"x":385.86915146708964,"y":65.44158415841584},"v":{"x":0,"y":0},"info":{"frozen":false,"type":"OF Controller","property":{"custom_label":"","domain-oshi":{"layer-Control":{"cluster_id":""}},"tcp_port":"6633","vm":{"interfaces":"","mgt_ip":""}}}}},"edges":{"cer1&&peo2":{"links":[{"id":"","view":"Data"}]},"cer7&&peo6":{"links":[{"id":"","view":"Data"}]},"cro4&&peo6":{"links":[{"id":"","view":"Data"}]},"cro4&&peo2":{"links":[{"id":"","view":"Data"}]},"cro4&&cro3":{"links":[{"id":"","view":"Data"}]},"cro5&&peo2":{"links":[{"id":"","view":"Data"}]},"cro5&&peo6":{"links":[{"id":"","view":"Data"}]},"cro5&&cro3":{"links":[{"id":"","view":"Data"}]},"peo2&&cro3":{"links":[{"id":"","view":"Data"}]},"peo6&&cro3":{"links":[{"id":"","view":"Data"}]},"ctr8&&cro3":{"links":[{"id":"","view":"Data"}]},"cer1&&cer7":{"links":[{"id":"","view":"Vll"}]}},"graph_parameters":{"tunneling":"OPENVPN","vlan":"0","mapped":false,"generated":false,"testbed":"MININET"}}',
        'openflow': '{"vertices": {"ctr1": {"pos": {"x": 505.84375, "y": 53 }, "v": {"x": 0.08897036922190368, "y": -0.08766146058042479 }, "info": {"frozen": false, "type": "OF Controller", "property": {"custom_label": "", "domain-oshi": {}, "tcp_port": "6633", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw2": {"pos": {"x": 248.0142945653656, "y": 177.42845969092286 }, "v": {"x": 0.16358156321094758, "y": -0.02806032804937858 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw3": {"pos": {"x": 560.8945746158076, "y": 200.89755911189812 }, "v": {"x": 0.04498657148777874, "y": -0.00463921741443217 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw4": {"pos": {"x": 394.2273735984038, "y": 212.26171484803038 }, "v": {"x": 0.15573772102080247, "y": -0.05069131960333911 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "ofl2sw5": {"pos": {"x": 319.84375, "y": 288 }, "v": {"x": 0.2720931731798208, "y": -0.03350010086729627 }, "info": {"frozen": false, "type": "OFL2sw", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "host6": {"pos": {"x": 151.99090832059125, "y": 128.5633516717222 }, "v": {"x": 0.10627628854705545, "y": 0.05833132689683196 }, "info": {"frozen": false, "type": "Host", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "host7": {"pos": {"x": 675.4640718965175, "y": 176.8140562769553 }, "v": {"x": 0.029927440721427723, "y": 0.04859776280637498 }, "info": {"frozen": false, "type": "Host", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } }, "host8": {"pos": {"x": 435.84375, "y": 367 }, "v": {"x": 0.19175097214623776, "y": 0.03333368261462699 }, "info": {"frozen": false, "type": "Host", "property": {"custom_label": "", "vm": {"interfaces": "", "mgt_ip": ""} } } } }, "edges": {"ofl2sw4&&ofl2sw2": {"links": [{"id": "", "view": "Data"} ] }, "ofl2sw4&&ofl2sw5": {"links": [{"id": "", "view": "Data"} ] }, "ofl2sw4&&ofl2sw3": {"links": [{"id": "", "view": "Data"} ] }, "ctr1&&ofl2sw4": {"links": [{"id": "", "view": "Data"} ] }, "host6&&ofl2sw2": {"links": [{"id": "", "view": "Data"} ] }, "host7&&ofl2sw3": {"links": [{"id": "", "view": "Data"} ] }, "host8&&ofl2sw5": {"links": [{"id": "", "view": "Data"} ] } }, "graph_parameters": {"tunneling": "OPENVPN", "vlan": "", "mapped": "", "generated": "", "testbed": "MININET"} }',
        'ciscoapic': '{"vertices":{"1":{"pos":{"x":942.2708093470777,"y":241.21192973094708},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":290,"ctrl_y":97,"custom_label":"SDN-BRANCH-3750-STACK","devicetype":"SWITCH","family":"C3750X","fixed":true,"ip":"40.0.2.18","name":"SDN-BRANCH-3750-STACK","node_id":"7895a45f-47aa-42ee-9d06-c66d3b784594","nodetype":"device","ostype":"c3750e-universalk9-mz.152-1.E2.bin","platform_id":"WS-C3750X-48P","role":"Core","sw_ver":"15.2(1)E2","tag":"6500 TAG,caw,qos1"},"type":"Switch"}},"2":{"pos":{"x":690,"y":257},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":143,"ctrl_y":-62,"custom_label":"SDN-BRANCH-3850-TB1","devicetype":"SWITCH","family":"C3850","fixed":true,"ip":"40.0.2.1","name":"SDN-BRANCH-3850-TB1","node_id":"526c8fc6-f732-41a9-9faf-5876293a2e8c","nodetype":"device","ostype":"packages.conf","platform_id":"WS-C3850-48P","role":"Distribution","sw_ver":"03.02.02.SE","tag":"6500 TAG,3850,4500 TAG"},"type":"Switch"}},"3":{"pos":{"x":564,"y":304},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":121,"ctrl_y":33,"custom_label":"SDN-BRANCH-ASR1002","devicetype":"ROUTER","family":"ASR1002","fixed":true,"ip":"40.0.1.6","name":"SDN-BRANCH-ASR1002","node_id":"cceaf2fe-c3d9-4d37-bf14-fba071c27d6e","nodetype":"device","ostype":"asr1000rp1-adventerprisek9.03.07.03.S.152-4.S3.bin","platform_id":"ASR1002","role":"Access","sw_ver":"15.2(4)S3"},"type":"Router"}},"4":{"pos":{"x":327,"y":350},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":120,"ctrl_y":135,"custom_label":"SDN-BRANCH-C4K","devicetype":"SWITCH","family":"C4510R","fixed":true,"ip":"40.0.1.34","name":"SDN-BRANCH-C4K","node_id":"a36bc35a-94ed-4b2c-a66c-e46dddd5e037","nodetype":"device","platform_id":"WS-C4510R+E","role":"Distribution","sw_ver":"03.03.00.XO","tag":"4500 TAG"},"type":"Switch"}},"5":{"pos":{"x":452,"y":131},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":119,"ctrl_y":83,"custom_label":"SDN-BRANCH-C6K","devicetype":"SWITCH","family":"C6513","fixed":true,"ip":"40.0.1.22","name":"SDN-BRANCH-C6K","node_id":"7f0e9dec-fb57-4593-a48b-c4193371398a","nodetype":"device","ostype":"s2t54-adventerprisek9-mz.SPA.151-2.SY2.bin","platform_id":"WS-C6513-E","role":"Access","sw_ver":"15.1(2)SY2","tag":"6500 TAG"},"type":"Switch"}},"6":{"pos":{"x":825.5782908062533,"y":371.1239046228953},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":300,"ctrl_y":35,"custom_label":"SDN-BRANCH-ISR3945","devicetype":"ROUTER","family":"C3900-SPE150/K9","fixed":true,"ip":"40.0.2.6","name":"SDN-BRANCH-ISR3945","node_id":"a632c6e8-89bf-4949-8e4d-a249105f2c7c","nodetype":"device","ostype":"c3900-universalk9-mz.SPA.153-3.M.bin","platform_id":"C3900-SPE150/K9","role":"Access","sw_ver":"15.3(3)M"},"type":"Router"}},"7":{"pos":{"x":820.2003795290087,"y":153.6370806979113},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":260,"ctrl_y":34,"custom_label":"SDN-BRANCH-ISR4451","devicetype":"ROUTER","family":"ISR4451-X/K9","fixed":true,"ip":"40.0.2.2","name":"SDN-BRANCH-ISR4451","node_id":"2504be29-7684-43ae-8417-a75ca618287c","nodetype":"device","ostype":"isr4400-universalk9.03.11.00.S.154-1.S-std.SPA.bin","platform_id":"ISR4451-X/K9","role":"Core","sw_ver":"03.11.00.S"},"type":"Router"}},"8":{"pos":{"x":566.6496966402069,"y":193.8433846011427},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":36,"ctrl_y":32,"custom_label":"SDN-CAMPUS-ASR1002","devicetype":"ROUTER","family":"ASR1002","fixed":true,"ip":"40.0.1.2","name":"SDN-CAMPUS-ASR1002","node_id":"13f8aa58-4637-43bf-8ea6-6ff30899c12d","nodetype":"device","ostype":"asr1000rp1-adventerprisek9.03.07.03.S.152-4.S3.bin","platform_id":"ASR1002","role":"Core","sw_ver":"15.2(4)S3"},"type":"Router"}},"9":{"pos":{"x":225.9734638980605,"y":261.0679380654051},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":83,"ctrl_y":172,"custom_label":"SDN-CAMPUS-C3850","devicetype":"SWITCH","family":"C3850","fixed":true,"ip":"40.0.0.3","name":"SDN-CAMPUS-C3850","node_id":"f8c3fc68-cd26-4576-bcec-51f9b578f71e","nodetype":"device","ostype":"cat3k_caa-universalk9.SPA.03.03.02.SE.150-1.EZ2.bin","platform_id":"WS-C3850-48P","role":"Access","sw_ver":"03.03.02.SE","tag":"3850,caw"},"type":"Switch"}},"10":{"pos":{"x":328,"y":180},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":40,"ctrl_y":135,"custom_label":"SDN-CAMPUS-C4K","devicetype":"SWITCH","family":"C4507R","fixed":true,"ip":"40.0.1.30","name":"SDN-CAMPUS-C4K","node_id":"e5f93514-3ae5-4109-8b52-b9fa876e1eae","nodetype":"device","platform_id":"WS-C4507R+E","role":"Distribution","sw_ver":"03.03.02.SG"},"type":"Switch"}},"11":{"pos":{"x":460.9926944094184,"y":393.8235637023693},"v":{"x":0,"y":0},"info":{"frozen":false,"property":{"acl_applied":true,"ctrl_x":37,"ctrl_y":82,"custom_label":"SDN-CAMPUS-C6K-2","devicetype":"SWITCH","family":"C6513","fixed":true,"ip":"40.0.1.50","name":"SDN-CAMPUS-C6K-2","node_id":"da733ffb-e34b-4733-bd85-b615fb7e61f3","nodetype":"device","ostype":"s2t54-adventerprisek9-mz.SPA.151-2.SY2.bin","platform_id":"WS-C6513-E","role":"Access","sw_ver":"15.1(2)SY2"},"type":"Switch"}},"12":{"pos":{"x":1049.4,"y":45.9},"v":{"x":0,"y":0},"info":{"frozen":true,"property":{"ctrl_x":186,"ctrl_y":132,"custom_label":"40.0.5.12","devicetype":"WIRED","fixed":true,"ip":"40.0.5.12","name":"40.0.5.12","node_id":"8f41bef8-698c-4701-af14-471e910ed9ff","nodetype":"host","role":"host"},"type":"Host"}},"13":{"pos":{"x":1060,"y":397},"v":{"x":0,"y":0},"info":{"frozen":true,"property":{"ctrl_x":243,"ctrl_y":132,"custom_label":"40.0.5.13","devicetype":"WIRED","fixed":true,"ip":"40.0.5.13","name":"40.0.5.13","node_id":"c40e4287-4263-498a-852b-8944e089d427","nodetype":"host","role":"host"},"type":"Host"}},"14":{"pos":{"x":66,"y":334},"v":{"x":0,"y":0},"info":{"frozen":true,"property":{"ctrl_x":48,"ctrl_y":197,"custom_label":"40.0.0.15","devicetype":"WIRED","fixed":true,"ip":"40.0.0.15","name":"40.0.0.15","node_id":"51a75ce9-d5c9-4fe2-95a0-6fc01410e201","nodetype":"host","role":"host"},"type":"Host"}},"15":{"pos":{"x":71,"y":116},"v":{"x":0,"y":0},"info":{"frozen":true,"property":{"ctrl_x":112,"ctrl_y":199,"custom_label":"40.0.0.14","devicetype":"WIRED","fixed":true,"ip":"40.0.0.14","name":"40.0.0.14","node_id":"0b3639a5-d103-4db5-95c1-ffee7781d3fb","nodetype":"host","role":"host"},"type":"Host"}}},"edges":{"1&&12":{"links":[{"id":"0","view":"Data"}]},"1&&13":{"links":[{"id":"1","view":"Data"}]},"1&&6":{"links":[{"id":"2","view":"Data"}]},"1&&7":{"links":[{"id":"3","view":"Data"}]},"10&&11":{"links":[{"id":"19","view":"Data"}]},"10&&4":{"links":[{"id":"20","view":"Data"}]},"10&&5":{"links":[{"id":"21","view":"Data"}]},"11&&3":{"links":[{"id":"23","view":"Data"}]},"11&&8":{"links":[{"id":"22","view":"Data"}]},"3&&2":{"links":[{"id":"4","view":"Data"}]},"4&&11":{"links":[{"id":"5","view":"Data"}]},"4&&5":{"links":[{"id":"6","view":"Data"}]},"5&&11":{"links":[{"id":"8","view":"Data"}]},"5&&3":{"links":[{"id":"9","view":"Data"}]},"5&&8":{"links":[{"id":"7","view":"Data"}]},"6&&2":{"links":[{"id":"10","view":"Data"}]},"7&&2":{"links":[{"id":"11","view":"Data"}]},"7&&6":{"links":[{"id":"12","view":"Data"}]},"8&&2":{"links":[{"id":"13","view":"Data"}]},"8&&3":{"links":[{"id":"14","view":"Data"}]},"9&&10":{"links":[{"id":"15","view":"Data"}]},"9&&14":{"links":[{"id":"17","view":"Data"}]},"9&&15":{"links":[{"id":"18","view":"Data"}]},"9&&4":{"links":[{"id":"16","view":"Data"}]}},"graph_parameters":{"tunneling":"","vlan":0,"mapped":false,"generated":false,"testbed":"MININET"}}'
    };

    /**
     * mod is a global variable that is also accessed in graph_editor.js
     * it describes the status of the web front end:
     * DES = Design mode
     * EXP = Experiment running
     */
    mod = "DES";
    var info_nodes = {};
    var ctrlconsole;
    var popover = true;
    var th = new TableHelper();

    $(document).ready(function() {


        $('#myModalLoading').modal('show');
        my_graph_editor = new GraphEditor('#graph_ed', {
            example: example,
            node_radius: 18.0,
            multigraph: true
        });

        var json_editor_settings = {
            mode: "javascript",
            showCursorWhenSelecting: true,
            autofocus: true,
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            autoCloseBrackets: true,
            matchBrackets: true,
            extraKeys: {
                "F11": function(cm) {
                    cm.setOption("fullScreen", !cm.getOption("fullScreen"));
                },
                "Esc": function(cm) {
                    if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
                },
                "Ctrl-Q": function(cm) {
                    cm.foldCode(cm.getCursor());
                }
            },
            theme: "neat",
            keyMap: "sublime",
        }

        var cmjsoneditor = CodeMirror.fromTextArea(document.getElementById("jsonEditor"), json_editor_settings);

        var cmclustereditor = CodeMirror.fromTextArea(document.getElementById("clusterEditor"), json_editor_settings);

        var vmmappingreditor = CodeMirror.fromTextArea(document.getElementById("vmmappingEditor"), json_editor_settings);

        var vmmconfigeditor = CodeMirror.fromTextArea(document.getElementById("vmmconfigEditor"), json_editor_settings);


        $('#myModalCopy').on('shown.bs.modal', function() {
            cmjsoneditor.refresh();
        });
        $('#myModalCopy').on('show', function() {
            $('.modal-body', this).css({
                width: 'auto',
                height: 'auto',
                'max-height': '100%'
            });
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
                $('#layout_button_group').html(' Layout (Live) <span class="fa fa-sort-down"></span>')
                    //$('#layout_button_group').prepend('<span class="fa fa-pause"></span>')

                $('#EdgeLength_label').css("color", "rgb(138, 164, 175)");
                $('#EdgeStrength_label').css("color", "rgb(138, 164, 175)");

                $('#edgeLength').slider('enable');
                $('#edgeStrength').slider('enable');
            } else {
                //$('#layout_button_group').text(' Layout (Static)')
                $('#layout_button_group').html(' Layout (Static) <span class="fa fa-sort-down"></span>')
                    //$('#live_button').prepend('<span class="fa fa-play"></span>')

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
        my_graph_editor.addListener("open_console", function(a, args) {
            if (mod == "EXP" && args.selected == "Vertex") {
                ctrlconsole.addConsole(args.base_info.label);

            }
        });

        my_graph_editor.addListener("object_info", function(a, args) {
            if (mod == "EXP" && args.selected == "Vertex") {

                if (Object.keys(info_nodes).length > 0) {
                    //NodeTableDataSub
                    var params = info_nodes; //{ peo6 : {mgt_IP: "10.255.252.1", loopback_IP: "172.16.0.4", dpid: "00000000AC100004", interfaces : {'peo6-eth1' : {ip :"10.0.2.1/24", mac : "02:9e:fb:26:73:c4", peers : ["cro3"] }, 'peo6-eth0' : {ip :"10.255.252.1/24", mac : "8a:67:81:17:44:8e", peers : ["mgm1"] }}}};
                    var node_name = args.base_info.label;
                    console.log("node_popover");
                    $('#NodeTableData tr').remove();
                    var table = document.getElementById("NodeTableData");
                    my_add_row(table, ['Node', node_name]);
                    my_add_row(table, ['Mgt_IP', params[node_name].mgt_IP]);
                    my_add_row(table, ['Loopback IP', params[node_name].loopback_IP]);

                    if (params[node_name].dpid != undefined && params[node_name].dpid != "") {
                        my_add_row(table, ['DatapathID', params[node_name].dpid]);
                    }

                    $('#IntfsTableData tr').remove();
                    var table = document.getElementById("IntfsTableData");
                    var rowCount = table.rows.length;
                    var row = table.insertRow(rowCount);
                    var my_cells = ['IF name', 'IP addr', 'MAC addr', 'Dest'];

                    my_add_row(table, my_cells);


                    for (var key in params[node_name].interfaces) {
                        if (params[node_name].interfaces.hasOwnProperty(key)) {
                            my_cells = [];
                            my_cells.push(key);
                            my_cells.push(params[node_name].interfaces[key].ip);
                            my_cells.push(params[node_name].interfaces[key].mac);
                            my_cells.push(params[node_name].interfaces[key].peers[0]);
                            my_add_row(table, my_cells);
                        }
                    }

                    $('#element_to_pop_up').modal('show')
                } else {
                    //TODO show alert
                }

            } else if (mod == "DES") {
                if (args.selected == "Vertex") {
                    //show modal myModalNodeInfo
                    var base_info = args.base_info;
                    $('#index_node').html(base_info.index);
                    $('#index_node').hide();
                    $('#n_name').html(args.base_info.label);
                    $('#s_label').val(base_info.node_type)
                    if (args.model_info && Object.keys(args.model_info).length > 0) {

                        var clustval = ''
                        if (args.model_info['layer-Control']['cluster_id']) {
                            clustval = args.model_info['layer-Control']['cluster_id'];
                            $('#s_cluster').show();
                        }
                        $('#s_cluster').val(clustval);

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
                            $('#clabel_input').val(type_info['custom_label']);

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

                    $('#myModalNodeInfo').modal('show')
                } else if (args.selected == "Edge") {
                    //show modal myModalEdgeInfo
                    var base_info = args.base_info;

                    $('#index_edge').html(base_info.index);
                    $('#index_edge').hide();
                    $('#v1').html(base_info.nodes.node1);
                    $('#v2').html(base_info.nodes.node2);

                    $('#label').val(base_info.label || "none");

                    $('#myModalEdgeInfo').modal('show')
                } else if (args.selected == "graph_parameters") {
                    $("#tun_option").val(args.tunneling);
                    $("#tb_option").val(args.testbed);
                } else if (args.selected == "none") {
                    clearInfoBox();
                }
            }
        });


        my_graph_editor.addListener("INVALID_TOPOLOGY", function(a, args) {

            if (typeof args == "object") {
                $('#validationError_list').empty();
                var counter = 0;

                for (i in args) {
                    for (k in args[i]) {

                        $('#validationError_list').append('<div class="panel panel-default"><div class="panel-heading"> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#validationError_list" href="#collapse' + counter + '"> ' + k + ' </a> </h4> </div> <div id="collapse' + counter + '" class="panel-collapse collapse"> <div class="panel-body">' + args[i][k] + '</div></div></div>');
                        counter++;
                    }
                }

                $('#myModalValidationError').modal('show');
                $('#myModalLoading').modal('hide');
            } else {
                $('#close_mael_button').show();
                $('#reload_button').hide();

                $('#alert_error_body').append("Dreamer-Topology-and-Service-Validator has encountered a problem.");

                $('#myModalLoading').modal('hide');
                $('#myModalAlertErrorLoading').modal('show');
            }

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

            $('#close_mael_button').hide();
            $('#reload_button').show();

            $('#alert_error_body').append(args.message);

            $('#myModalLoading').modal('hide');
            $('#myModalAlertErrorLoading').modal('show');
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
            if (!args.error) {
                //rendo visibile la parte con le shell
                $('#console_div').css('display', 'block');
                $('#exp_msg').show();
                $('#power_off_button').show();

                //disattivo alcuni menu item 
                $('#deployment_button_group').hide();
                $('#topology_button').prop("disabled", true);
                $('#model_button').prop("disabled", true);
                $('#tool_button_group').prop("disabled", true);

                $('#box_info').hide();

                //hide command bar
                $('#panel_head').css('display', 'none');
                $('#collapsepalette').hide();
                //$('#collapsepalette').css('display', 'none');
                $('#accordion').css('display', 'none');
                var exp_name = (args.exp_id) ? args.exp_id : "";
                ctrlconsole = new dreamer.Ctrlfwc('myTab', exp_name);
                ctrlconsole.addConsole("deployment", true, true);
                ctrlconsole.addListenerToConsole("deployment", "info_nodes", function(a, data) {
                    console.log("info nodes arrivati" + data);
                    info_nodes = JSON.parse(data);
                    console.log("info nodes arrivati" + info_nodes);
                });
                mod = "EXP";
                $('.popover').hide();
                $('#myModalLoading').modal('hide');
                $('html, body').animate({
                    scrollTop: $(document).height()
                }, 'slow');
            } else {
                console.log("MALE MALE NEW EXP")
                $('#alert_error_body').replaceWith("Dreamer-Experiment-Handler has encountered a problem.");
                $('#reload_button').hide();
                $('#close_mael_button').show();
                $('.popover').hide();
                $('#myModalLoading').modal('hide');
                $('#myModalAlertErrorLoading').modal('show');
            }

        });

        /**
         * adds a row to a table
         * my_cells is an array of strings that contains the cells to be added
         */
        function my_add_row(my_table, my_cells) {
            var rowCount = my_table.rows.length;
            var row = my_table.insertRow(rowCount);
            var index = 0;
            var arrayLength = my_cells.length;
            for (var i = 0; i < arrayLength; i++) {
                if (index > 0) {
                    row.insertCell(index).innerHTML = '&nbsp;:&nbsp;';
                    index = index + 1;
                }
                row.insertCell(index).innerHTML = my_cells[i];
                index = index + 1;
            }
        }


        my_graph_editor.addListener("editor_ready", function(a, args) {




            ///

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

            // $("#drag_drop_toolbar_ul").append("<li  style=\"display: inline; list-style: none;\"><button id=\"undo_button\" type=\"button\" class=\"btn btn-default btn-group-sm navbar-btn\"><span class=\"fa fa-undo\"></span> Undo</button></li>");


            setTunnelLabel(args.graph_parameters.tunneling);
            setModelLabel(args.modelname);
            initClusterSelOption(args.domain_data.clustermap);

            $('#s_label').change(function() {
                console.log("s_label");
                var index = $('#index_node').html();

                console.log("s_label", index);
                my_graph_editor.set_properties({
                    node: {
                        index: index,
                        properties: {
                            type: $('#s_label').val()
                        }

                    }
                }, true);
            });

            $('#set_clabel').click(function() {
                //console.log("set_clabel")
                var index = $('#index_node').html();

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
                var index = $('#index_node').html();
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
                var index = $('#index_node').html();
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
                var index = $('#index_node').html();
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
                min: my_graph_editor.get_vertex_size() * 0.5,
                max: my_graph_editor.get_vertex_size() * 1.5,
                value: my_graph_editor.get_vertex_size(),
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
            $('#edgeLength').slider('disable');
            $('#edgeStrength').slider('disable');

            $("#layer-menu .dropdown-menu li a").click(function() {
                console.log("layer");
                var layer_selected = $(this).text().replace(/ /g, '');
                my_graph_editor.set_layer(layer_selected);
                setLayerView(layer_selected);


            });



            $("#layer_type_menu .dropdown-menu li a").click(function() {

                var layer_type_selected = $(this).text().replace(/ /g, '');
                console.log("layer_type", layer_type_selected);
                if (layer_type_selected == "Tabular") {
                    if (my_graph_editor.getcurmodelname() == "ciscoapic") {
                        $("#panel_big").hide();
                        $("#table_container").show();
                        var ciscoapic_data = my_graph_editor.export_json();
                        console.log(ciscoapic_data);
                        th.drawTableCiscoAPIC($('#table_container'), ['Id', 'Custom Label', 'Device Type', 'Device Role', 'Family'], ['custom_label', 'devicetype', 'role','family'], JSON.parse(ciscoapic_data), {
                            addKey: true,
                            clickCallback: function(event) {
                                var node_id = $(this).children('td:first').text();
                                console.log("node_id" + node_id);
                                console.log(JSON.stringify(my_graph_editor.getNodeInfo(node_id)))
                                fillNodeInfo(my_graph_editor.getNodeInfo(node_id));
                            }
                        });
                    }

                } else if (layer_type_selected == "Topology") {
                    if (my_graph_editor.getcurmodelname() == "ciscoapic") {
                        $("#panel_big").show();
                        $("#table_container").hide();
                    }
                }

            });

            $('#collapsepalette').click(function(t) {
                if ($(this).text() == " Hide Drawing Palette") {
                    $(this).html("<i class=\"fa fa-expand\"></i> <span>Show Drawing Palette</span>");
                    $('#panel_head').css('display', 'none');
                } else {
                    $(this).html("<i class=\"fa fa-compress\"></i> <span>Hide Drawing Palette</span>");
                    $('#panel_head').css('display', '');
                }
                resetCanvasDimensions();

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
                my_graph_editor.toggle_live(true);
            });

            $('#static_button').click(function() {
                my_graph_editor.toggle_live(false);
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
                open_catalogue_item('GARR_2014');
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
        $('.popover').hide();
        //riattivo alcuni menu item 
        $('#deployment_button_group').show();
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

    function fillNodeInfo(args) {
        //show modal myModalNodeInfo
        var base_info = args.base_info;
        $('#index_node').html(base_info.index);
        $('#index_node').hide();
        $('#n_name').html(args.base_info.label);
        $('#s_label').val(base_info.node_type)
        if (args.model_info && Object.keys(args.model_info).length > 0) {

            var clustval = ''
            if (args.model_info['layer-Control']['cluster_id']) {
                clustval = args.model_info['layer-Control']['cluster_id'];
                $('#s_cluster').show();
            }
            $('#s_cluster').val(clustval);

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
                $('#clabel_input').val(type_info['custom_label']);

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

        $('#myModalNodeInfo').modal('show')
    };

    function clearInfoBox() {
        var info_sidebar = '#info_sidebar';
        $('#title').html('');
        $(info_sidebar + ' .infobox #none_selected').show();
        $(info_sidebar + ' .infobox #info').hide();
        $('#box_info').hide();
    };

    function setLayerLabel(layer) {
        $('#layer_button_group').html('View (' + layer + ') <span class=\"fa fa-sort-down\"></span>');
    };

    function setTunnelLabel(tunnel) {
        $('#tunneling_cur').text("(" + tunnel + ")");
    };


    function setModelLabel(model) {
        $('#model_button_group').html('Model (' + model + ') <span class=\"fa fa-sort-down\"></span>');
    };

    function setDisplayLabel(display) {
        $('#model_button_group').html('Display (' + display + ') <span class=\"fa fa-sort-down\"></span>');
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