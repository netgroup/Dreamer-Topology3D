(function (){

var cube = '{"vertices":["COSHI#0","COSHI#1","COSHI#2","AOSHI#3","AOSHI#4","COSHI#5","COSHI#6","COSHI#7"],"edges":[["COSHI#0","COSHI#2","::"],["COSHI#0","AOSHI#4","::"],["COSHI#1","COSHI#5","::"],["COSHI#2","AOSHI#3","::"],["COSHI#2","COSHI#6","::"],["AOSHI#3","COSHI#7","::"],["AOSHI#4","COSHI#5","::"],["COSHI#5","COSHI#7","::"],["AOSHI#4","COSHI#6","::"],["AOSHI#3","COSHI#1","::"],["COSHI#1","COSHI#0","::"],["COSHI#6","COSHI#7","::"]],"pos":{"COSHI#0":[603.1959235622934,133.4427000251026],"COSHI#1":[397.1946851783363,133.34158743667223],"COSHI#2":[401.7441405169235,349.9457920653282],"AOSHI#3":[217.93485403394905,349.8359380538811],"AOSHI#4":[782.1716957132389,350.16404856886214],"COSHI#5":[598.3680371169276,350.0542004622606],"COSHI#6":[602.9076403480741,566.6588847248378],"COSHI#7":[396.90640759431665,566.5568057527363]},"name":"G"}';


$(document).ready(function () {
    my_graph_editor = new GraphEditor('#graph_ed', { JSONdata : cube, 
    width : 1000,
    height : 700,
    node_radius : 30.0,
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
