(function (){

var cube = '{"vertices":["COSHI#01","AOSHI#02","COSHI#03","AOSHI#04","AOSHI#05","COSHI#06","COSHI#07","COSHI#08","L2SW#09","EUH#10","EUH#11","L2SW#12","EUH#13","L2SW#14","EUH#15","EUH#16","L2SW#17","EUH#18","EUH#19"],"edges":[["COSHI#01","COSHI#03",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#01","AOSHI#05",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#02","COSHI#06",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#03","AOSHI#04",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#03","COSHI#07",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#04","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#05","COSHI#06",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#06","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["AOSHI#05","COSHI#07",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["COSHI#07","COSHI#08",{"labe_to_node1":"","labe_to_node2":"","edge_label":"edge_label"}],["L2SW#12","AOSHI#04",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#09","AOSHI#04",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#13","L2SW#12",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#11","L2SW#09",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#10","L2SW#09",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#14","AOSHI#05",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["AOSHI#02","COSHI#01",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["L2SW#17","AOSHI#02",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#19","L2SW#17",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#18","L2SW#17",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["AOSHI#02","COSHI#03",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#16","L2SW#14",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}],["EUH#15","L2SW#14",{"labe_to_node1":"","labe_to_node2":"","edge_label":""}]],"pos":{"COSHI#01":[748,424.1875],"AOSHI#02":[602.4255319148936,544.2105263157894],"COSHI#03":[540.6382978723404,306.3157894736842],"AOSHI#04":[394.59574468085106,406.31578947368416],"AOSHI#05":[793.4042553191489,206.31578947368422],"COSHI#06":[643.6170212765958,323.1578947368421],"COSHI#07":[583.891914384589,93.61150353479427],"COSHI#08":[427.7382160249973,204.90998412462906],"L2SW#09":[279.4468085106383,549.4736842105264],"EUH#10":[157.74468085106383,683.1578947368421],"EUH#11":[320.63829787234044,696.8421052631579],"L2SW#12":[180.2127659574468,230.5263157894737],"EUH#13":[110,80],"L2SW#14":[908,208.1875],"EUH#15":[1031,119.1875],"EUH#16":[1015,359.1875],"L2SW#17":[781.2340425531914,606.3157894736842],"EUH#18":[902.936170212766,604.2105263157894],"EUH#19":[808.3829787234042,720]},"node_properties":{"COSHI#01":{"frozen":false,"loopback":""},"AOSHI#02":{"frozen":false,"loopback":""},"COSHI#03":{"frozen":false,"loopback":""},"AOSHI#04":{"frozen":false,"loopback":""},"AOSHI#05":{"frozen":false,"loopback":""},"COSHI#06":{"frozen":false,"loopback":""},"COSHI#07":{"frozen":false,"loopback":""},"COSHI#08":{"frozen":false,"loopback":""},"L2SW#09":{"frozen":false,"loopback":""},"EUH#10":{"frozen":false,"loopback":""},"EUH#11":{"frozen":false,"loopback":""},"L2SW#12":{"frozen":false,"loopback":""},"EUH#13":{"frozen":false,"loopback":""},"L2SW#14":{"frozen":false,"loopback":""},"EUH#15":{"frozen":false,"loopback":""},"EUH#16":{"frozen":false,"loopback":""},"L2SW#17":{"frozen":false,"loopback":""},"EUH#18":{"frozen":false,"loopback":""},"EUH#19":{"frozen":false,"loopback":""}},"name":"G"}';

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
