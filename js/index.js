(function (){

var cube = '{"vertices":["COSHI#00","COSHI#01","COSHI#02","AOSHI#03","AOSHI#04","COSHI#05","COSHI#06","COSHI#07"],"edges":[["COSHI#00","COSHI#02","::"],["COSHI#00","AOSHI#04","::"],["COSHI#01","COSHI#05","::"],["COSHI#02","AOSHI#03","::"],["COSHI#02","COSHI#06","::"],["AOSHI#03","COSHI#07","::"],["AOSHI#04","COSHI#05","::"],["COSHI#05","COSHI#07","::"],["AOSHI#04","COSHI#06","::"],["AOSHI#03","COSHI#01","::"],["COSHI#01","COSHI#00","::"],["COSHI#06","COSHI#07","::"]],"pos":{"COSHI#00":[710.8642402291878,80.14934104177337],"COSHI#01":[395,80.1875],"COSHI#02":[396.67424768579156,399.9195874014464],"AOSHI#03":[110,399.7573354725108],"AOSHI#04":[990,400.2419473975414],"COSHI#05":[703.334529728049,400.0797041899313],"COSHI#06":[710.414625440196,720],"COSHI#07":[389.12918033566314,719.8492316310616]},"loopbacks":["127.0.0.1","127.0.0.1","127.0.0.1","127.0.0.1","127.0.0.1","127.0.0.1","127.0.0.1","127.0.0.1"],"name":"G"}';


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
