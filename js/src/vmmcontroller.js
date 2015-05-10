if (typeof dreamer === 'undefined') {
    var dreamer = {};
}


dreamer.VmmController = (function (global) {
    'use strict';
  

    function VmmController (nodeTypeList) {
        this.nodeTypeList = nodeTypeList;

        var example = '{"vlan":"700", "OSHI-CR":[["62.40.110.49", ["eth1"] ], ["62.40.110.16", ["eth1"] ], ["62.40.110.149", ["eth1"] ] ], "OSHI-PE":[["62.40.110.45", ["eth1"] ], ["62.40.110.8", ["eth1"] ], ["62.40.110.147", ["eth1"] ] ], "CE":[["62.40.110.51", ["eth1"] ], ["62.40.110.18", ["eth1"] ] ], "OF Controller":[["62.40.110.52", ["eth1"] ], ["62.40.110.20", ["eth1"] ], ["62.40.110.153", ["eth1"] ] ] }'; 
        var res = this.load(example);
        console.log("VmmController res: " + JSON.stringify(res));
    }

    VmmController.prototype.load = function (data){
        var result = {};
        try{
            this.vmmconfig = JSON.parse(data);
        }
        catch(e){
            console.log("VmmController:load Malformed JSON");
            result['error'] = "Malformed JSON!";
            this.vmmconfig = {};
        }
        return result;
    };

    VmmController.prototype.isConfigLoaded = function(){
        return (Object.keys(this.vmmconfig) > 0)
    }

    VmmController.prototype.getVmmConfig = function (){

        return JSON.stringify(this.vmmconfig, null, "\t");;
    };

    VmmController.prototype.selectMgtIP = function(nodetype, mgtip){
        var result = {};
        if(this.vmmconfig[nodetype] ){
            var ntlist = this.vmmconfig[nodetype];
            var founded= false;
            for(var     mip in ntlist){
                if(ntlist[mip][0] == mgtip){
                    founded = true;
                    if(ntlist[mip][2] == undefined || ntlist[mip][2] == ""){
                        result['interfaces'] = ntlist[mip][1];
                        ntlist[mip][2] = "selected";
                    }
                    else{
                        console.log("MgtIp already selected!");
                        result['error'] = "MgtIp already selected!";
                    }
                }
            }
            if(!result.error &&  founded == false){
                result['error'] = "The management IP address is not found in vmmconfig!"
            }

        }
        else{
            result['error'] = "Node Type is not found in vmmconfig!"
        }

        return result;
    };

        VmmController.prototype.isValidInterfaces = function(type, mgtip,interfaces){
        var result = {};
        var validInt = this.getInterfacesMgtIp(type, mgtip).interfaces;
        console.log(JSON.stringify(validInt))
        console.log(interfaces)
            if(interfaces != "" && (validInt.indexOf(interfaces) < 0)){
                result['error'] = "Invalid interface!"
                
            }
 
        
        return result;
    }

    VmmController.prototype.deselectMgtIP = function(nodetype, mgtip){
        var result = {};
        if(this.vmmconfig[nodetype] ){
            var ntlist = this.vmmconfig[nodetype];
            var founded= false;
            for(var mip in ntlist){
                if(ntlist[mip][0] == mgtip){
                    founded = true;
                    if(ntlist[mip][2] == undefined || ntlist[mip][2] == "selected"){
                        //result['interfaces'] = ntlist[mip][1];
                        console.log("DESELECT");
                        ntlist[mip][2] = "";

                    }
                    else{
                        result['error'] = "MgtIp not selected for the node!";
                    }
                }
            }
            if(!result.error &&  founded == false){
                result['error'] = "The management IP address is not found in vmmconfig!"
            }

        }
        else{
            result['error'] = "Node Type is not found in vmmconfig!"
        }

        return result;
    };

    VmmController.prototype.getNotSelectedMgtIp = function(nodetype){
        var result = {};
        if(this.vmmconfig[nodetype] ){
            var ntlist = this.vmmconfig[nodetype];
            //console.log(JSON.stringify(ntlist))
            var founded= false;
            result['list'] = [];
            for(var mip in ntlist){
               if(ntlist[mip][2] == undefined || ntlist[mip][2] == ""){
                console.log("ciao")
                result['list'].push(ntlist[mip][0]);
               }
            }

        }
        else{
            result['error'] = "Node Type is not found in vmmconfig!"
        }
        return result;
    }

    VmmController.prototype.getInterfacesMgtIp = function(nodetype, mgtip){
        var result = {};
        if(this.vmmconfig[nodetype] ){
            var ntlist = this.vmmconfig[nodetype];
            var founded= false;
            for(var mip in ntlist){
                if(ntlist[mip][0] == mgtip){
                    founded = true;
                    result['interfaces'] = ntlist[mip][1];                    
                }
            }
            if(!result.error &&  founded == false){
                result['error'] = "The management IP address is not found in vmmconfig!"
            }

        }
        else{
            result['error'] = "Node Type is not found in vmmconfig!"
        }
        return result;
    }

    return VmmController;
}());

if (typeof module === 'object') {
    module.exports = dreamer.VmmController;
}