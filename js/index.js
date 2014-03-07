(function (){

var cube = '{"vertices":["COSHI#01","COSHI#02","COSHI#03","AOSHI#04","AOSHI#05","COSHI#06","COSHI#07","COSHI#08"],"edges":[["COSHI#01","COSHI#03",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#01","AOSHI#05",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#02","COSHI#06",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#03","AOSHI#04",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#03","COSHI#07",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#04","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#05","COSHI#06",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#06","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#05","COSHI#07",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#04","COSHI#02",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#02","COSHI#01",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#07","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}]],"pos":{"COSHI#01":[710,83.1875],"COSHI#02":[395,80.0381678645214],"COSHI#03":[396.67424768579156,399.8448806841844],"AOSHI#04":[110,399.6825908856744],"AOSHI#05":[990,400.167315919051],"COSHI#06":[703.334529728049,400.00503484390214],"COSHI#07":[710.414625440196,720],"COSHI#08":[389.12918033566314,719.8491964417483]},"node_properties":{"COSHI#01":{"frozen":false,"loopback":""},"COSHI#02":{"frozen":false,"loopback":""},"COSHI#03":{"frozen":false,"loopback":""},"AOSHI#04":{"frozen":false,"loopback":""},"AOSHI#05":{"frozen":false,"loopback":""},"COSHI#06":{"frozen":false,"loopback":""},"COSHI#07":{"frozen":false,"loopback":""},"COSHI#08":{"frozen":false,"loopback":""}},"name":"G"}';

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
