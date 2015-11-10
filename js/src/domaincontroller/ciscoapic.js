if (typeof dreamer === 'undefined') {
    var dreamer = {};
}

dreamer.CiscoApic = (function () {

	

	CiscoApic.prototype = new dreamer.DomainController();
	CiscoApic.prototype.constructor = CiscoApic;
	CiscoApic.prototype.parent = dreamer.DomainController.prototype;
	function CiscoApic(){
		console.log("CiscoApic-Constructor");
	}


	CiscoApic.prototype.setProperties = function(graph, args, layername) {
		
		var result = this.parent.setProperties.call(this, graph, args, layername);
		//console.log("CiscoApic-setProperties");

		if(result.error){
			return result;
		}

		if (args.node) {
			 if (args.node.properties['domain-CiscoApic']){
			 	if(graph.vertices[args.node.index]){
	 				 	var n_dCiscoApic = graph.vertices[args.node.index].info.property['domain-CiscoApic'];
	 				 	for(key in args.node.properties['domain-CiscoApic']){
	 				 		//console.log(key)
	 				 		n_dCiscoApic[key] = args.node.properties['domain-CiscoApic'][key];
	 				 	}
	 				 }
	 			else{
	 				result["error"] = "error !!";
	 			}
			 }

			 if (args.node.properties.type){
	
			 		var newp = this.buildNodeProperties(args.node.properties.type);
                    for( p in newp){
                        graph.vertices[args.node.index].info['property'][p] = newp[p];
                    }
			 }
		}
		//console.log(JSON.stringify(graph));
		return result;
	}

	CiscoApic.prototype.buildNodeProperties = function(ntype){ //TODO eliminare param inutili
		//console.log("CiscoApic:buildNodeProperties");
		
		var property = this.parent.buildNodeProperties.call(this,ntype);
		if(ntype != undefined){
        	//console.log(ntype)
        	for(p in this.spec.nodes[ntype]['properties']){
         			property[p] = JSON.parse(JSON.stringify(this.spec.nodes[ntype]['properties'][p])); 

         	}
         	
         	for(layer in this.spec['layer_constraints'] ){

         		if(this.isVisibleVertex(ntype, layer) && this.spec['layer_constraints'][layer]['nodes-properties']){
         			if(!property['domain-CiscoApic'])
         				property['domain-CiscoApic'] = {}
         			property['domain-CiscoApic']['layer-'+layer] = {};
         			for(p in this.spec['layer_constraints'][layer]['nodes-properties']){
         				property['domain-CiscoApic']['layer-'+layer][p] = JSON.parse(JSON.stringify(this.spec['layer_constraints'][layer]['nodes-properties'][p]));
         			}
         		}
         
         	}
		}
		//console.log("property: " + JSON.stringify(property));
        return property;
    };


	CiscoApic.prototype.getNodeProperties = function(node, nodes){
		//console.log("CiscoApic:getNodeProperties");
		//console.log(node instanceof dreamer.Vertex);
		//console.log("spec: " + JSON.stringify(this.spec.nodes));
		var info_data = this.parent.getNodeProperties.call(this,node, nodes);
		var ntype = node.getType();
		if(ntype != undefined){
        	info_data['type_info'] = {};

        	for(p in this.spec.nodes[ntype]['properties']){
         		if(p != "domain-CiscoApic"){
         			info_data['type_info'][p] = node['info']['property'][p];
         		}
         	}
         	info_data['model_info'] = {};
         	if(this.spec.nodes[ntype]['properties']["domain-CiscoApic"]){
         		//console.log("#####"+JSON.stringify(this.spec.nodes[ntype]['properties']["domain-CiscoApic"]));
         		for(p in this.spec.nodes[ntype]['properties']["domain-CiscoApic"]){
         			//console.log("dentrooo")
         		 	info_data['model_info'][p] = node['info']['property']["domain-CiscoApic"][p]
         		}
         	}

         	for(layer in this.spec['layer_constraints'] ){
         		if(this.isVisibleVertex(ntype, layer) && this.spec['layer_constraints'][layer]['nodes-properties']){
         			info_data['model_info']['layer-'+layer] = {};
         			for(p in this.spec['layer_constraints'][layer]['nodes-properties']){
         				if(node['info']['property']["domain-CiscoApic"] && node['info']['property']["domain-CiscoApic"]['layer-'+layer])
         					info_data['model_info']['layer-'+layer][p] = node['info']['property']["domain-CiscoApic"]['layer-'+layer][p];
         			}
         		}
         	}

		}

        return info_data;
    };

    CiscoApic.prototype.getNodeTypes = function() {
        //console.log("getNodeTypes CiscoApic")
        return this.spec['list_of_all_node_types'];
    };


    CiscoApic.prototype.getNodeDataView = function(node, is_closest, layer) {
        var empty_color = "#FFFFFF";
        var img = 'img/punto.png';
        var bgcolor;
        var b_color = "#FFFFFF";
        var h_color = "#A8A8A8";

        if (is_closest)
            bgcolor = h_color;
        else
           bgcolor = b_color;

        if (this.getNodeTypes().indexOf(node.getType()) > -1) {
            var name = node.getType().replace(/ /g, '');
            name = name.toLowerCase();
            img = 'img/' + name + '.png'
        } 
    	var nodeDView = {icon: img, bgcolor: bgcolor};

    	if(node['info']['property'] != undefined && node['info']['property']['domain-CiscoApic'] != undefined){
    		
    		if(layer == "Control" ){
    			
    			if(node['info']['property']['domain-CiscoApic']['layer-'+layer] != undefined && node['info']['property']['domain-CiscoApic']['layer-'+layer]['cluster_id'] != undefined){
    				var cluster_id = node['info']['property']['domain-CiscoApic']['layer-'+layer]['cluster_id'];
    				var newcolor = getClusterColorBYId(cluster_id);
    				if(newcolor != undefined)
    					nodeDView.bgcolor = newcolor;
    			}
    		}
    	}

    	return nodeDView;
    };


    CiscoApic.prototype.getDomainData = function() {
        var domaindata = this.parent.getDomainData.call(this);

        //domaindata['clustermap'] = clustermap;

        return domaindata;

    };

    function getClusterColorBYId(cluster_id){
    	if(clustermap[cluster_id] != undefined)
    		return clustermap[cluster_id];
    	
    	return undefined;
    };

    return CiscoApic;

}(this));

if (typeof module === 'object') {
    module.exports = dreamer.CiscoApic;
}