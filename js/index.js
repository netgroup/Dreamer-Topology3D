(function (){

var cube = '{"vertices":["COSHI#01","AOSHI#02","COSHI#03","AOSHI#04","AOSHI#05","COSHI#06","COSHI#07","COSHI#08","L2SW#09","EUH#10","EUH#11","L2SW#12","EUH#13","L2SW#14","EUH#15","EUH#16","L2SW#17","EUH#18","EUH#19"],"edges":[["COSHI#01","COSHI#03",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#01","AOSHI#05",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#02","COSHI#06",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#03","AOSHI#04",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#03","COSHI#07",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#04","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#05","COSHI#06",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#06","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#05","COSHI#07",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#07","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["L2SW#12","AOSHI#04",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#09","AOSHI#04",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#13","L2SW#12",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#11","L2SW#09",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#10","L2SW#09",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#14","AOSHI#05",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#14","EUH#16",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#14","EUH#15",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["AOSHI#02","COSHI#01",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#17","AOSHI#02",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#19","L2SW#17",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#18","L2SW#17",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["AOSHI#02","COSHI#03",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}]],"pos":{"COSHI#01":[773,433.1875],"AOSHI#02":[617,549.1875],"COSHI#03":[551,323.1875],"AOSHI#04":[395,418.1875],"AOSHI#05":[821,228.1875],"COSHI#06":[661,339.1875],"COSHI#07":[597.2027267289928,121.11842835805456],"COSHI#08":[430.40218529942894,226.85198491839762],"L2SW#09":[272,554.1875],"EUH#10":[142,681.1875],"EUH#11":[316,694.1875],"L2SW#12":[166,251.1875],"EUH#13":[91,108.1875],"L2SW#14":[956.7680648531606,269.37307103719866],"EUH#15":[1031,180.1875],"EUH#16":[1014,420.1875],"L2SW#17":[808,608.1875],"EUH#18":[938,606.1875],"EUH#19":[837,716.1875]},"node_properties":{"COSHI#01":{"frozen":false,"loopback":""},"AOSHI#02":{"frozen":false,"loopback":""},"COSHI#03":{"frozen":false,"loopback":""},"AOSHI#04":{"frozen":false,"loopback":""},"AOSHI#05":{"frozen":false,"loopback":""},"COSHI#06":{"frozen":false,"loopback":""},"COSHI#07":{"frozen":false,"loopback":""},"COSHI#08":{"frozen":false,"loopback":""},"L2SW#09":{"frozen":false,"loopback":""},"EUH#10":{"frozen":false,"loopback":""},"EUH#11":{"frozen":false,"loopback":""},"L2SW#12":{"frozen":false,"loopback":""},"EUH#13":{"frozen":false,"loopback":""},"L2SW#14":{"frozen":false,"loopback":""},"EUH#15":{"frozen":false,"loopback":""},"EUH#16":{"frozen":false,"loopback":""},"L2SW#17":{"frozen":false,"loopback":""},"EUH#18":{"frozen":false,"loopback":""},"EUH#19":{"frozen":false,"loopback":""}},"name":"G"}';
$(document).ready(function () {
    my_graph_editor = new GraphEditor('#graph_ed', { JSONdata : cube, 
    width : 1100,
    height : 800,
    node_radius : 18.0,
    multigraph: true});
        $('#set_json').click( function () {
            my_graph_editor.import_from_JSON($('#json').val());
        });
        $('#get_sage').click( function () {
            $('#sage').val(my_graph_editor.export_sage);
        });
        $('#get_latex').click( function () {
            $('#latex').val(my_graph_editor.export_tkz);
        });
	$('#rest').css('clear','both');
});
}());
