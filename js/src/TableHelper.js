/*
 
IMPORTANT!  
REQUIRES:
    <script src="plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="plugins/datatables/dataTable.bootstrap.min.js"></script>
    <script src="js/src/TableHelper.js"></script>
AND
    <link rel="stylesheet" href="plugins/datatables/jquery.dataTables.css" />


JS EXAMPLE OF USE (GENERAL):

    var header_example = ['colonna1', 'colonna2', 'colonna3'];
        
    var data_example = [
        ['v11', 'v12', 'v13'] 
        , ['v21', 'v22', 'v23'] 
        , ['v31', 'v32', 'v33'] 
        , ['v41', 'v42', 'v43'] 
    ];

    var options = {};

    var th = new TableHelper();

    th.drawTable($('#container'), header_example, data_example, {});



JS EXAMPLE OF USE (CISCOAPIC)

    var ciscoapic_data = { 
            "vertices": {
		"1": {
			"pos": {
				"x": 989.6499595070892,
				"y": 219.646528468406
			},
			"v": {
				"x": 0,
				"y": 0
			},
			"info": {
				"frozen": false,
				"property": {
					"acl_applied": true,
					"ctrl_x": 290,
					"ctrl_y": 97,
					"custom_label": "SDN-BRANCH-3750-STACK",
					"devicetype": "SWITCH",
					"family": "C3750X",
					"fixed": true,
					"ip": "40.0.2.18",
					"name": "SDN-BRANCH-3750-STACK",
					"node_id": "7895a45f-47aa-42ee-9d06-c66d3b784594",
					"nodetype": "device",
					"ostype": "c3750e-universalk9-mz.152-1.E2.bin",
					"platform_id": "WS-C3750X-48P",
					"role": "Core",
					"sw_ver": "15.2(1)E2",
					"tag": "6500 TAG,caw,qos1"
				},
				"type": "Switch"
			}
		},
                "2": {
			"pos": {
				"x": 740.1201207243461,
				"y": 234.14403303902023
			},
			"v": {
				"x": 0,
				"y": 0
			},
			"info": {
				"frozen": false,
				"property": {
					"acl_applied": true,
					"ctrl_x": 143,
					"ctrl_y": -62,
					"custom_label": "SDN-BRANCH-3850-TB1",
					"devicetype": "SWITCH",
					"family": "C3850",
					"fixed": true,
					"ip": "40.0.2.1",
					"name": "SDN-BRANCH-3850-TB1",
					"node_id": "526c8fc6-f732-41a9-9faf-5876293a2e8c",
					"nodetype": "device",
					"ostype": "packages.conf",
					"platform_id": "WS-C3850-48P",
					"role": "Distribution",
					"sw_ver": "03.02.02.SE",
					"tag": "6500 TAG,3850,4500 TAG"
				},
				"type": "Switch"
			}
		},
		"3": {
			"pos": {
				"x": 615.489134808853,
				"y": 277.3021076616349
			},
			"v": {
				"x": 0,
				"y": 0
			},
			"info": {
				"frozen": false,
				"property": {
					"acl_applied": true,
					"ctrl_x": 121,
					"ctrl_y": 33,
					"custom_label": "SDN-BRANCH-ASR1002",
					"devicetype": "ROUTER",
					"family": "ASR1002",
					"fixed": true,
					"ip": "40.0.1.6",
					"name": "SDN-BRANCH-ASR1002",
					"node_id": "cceaf2fe-c3d9-4d37-bf14-fba071c27d6e",
					"nodetype": "device",
					"ostype": "asr1000rp1-adventerprisek9.03.07.03.S.152-4.S3.bin",
					"platform_id": "ASR1002",
					"role": "Access",
					"sw_ver": "15.2(4)S3"
				},
				"type": "Router"
			}
		}
            }
        };
        
        th.drawTableCiscoAPIC($('#container'),['Custom Label','Device Type','Family'], ['custom_label','devicetype','family'], ciscoapic_data, {});
    
 
 */


function TableHelper() {
            
    // this.header = header;
    // this.data = data;
    // this.options = options;
    
    // Contructor
    function TableHelper() {
        
    }


    this.TABLEID = 'curtable';

    /**
     * 
     * @returns {$}  JQuery object of table retrieved from DOM
     */
    this.getJQueryTable = function() {
        return $('#'+this.TABLEID) ;
    };

    /**
     * Internal function
     */
    this.getThead = function(header, options) {
        $thead = $("<thead></thead>");
        header.forEach(function(e, i, a) {
            $thead.append($('<th>').html(e+''));
        } );
        return $thead;
    };

    /**
     * Internal function
     */
    this.getTbody = function(data, options) {
        $tbody = $("<tbody></tbody>");
        data.forEach(function(rowData, i, a) {
            $tr = $("<tr>");
            rowData.forEach(function(e, i, a) {
                $tr.append($('<td>').html(e));
            });
            $tbody.append($tr);
        });
        return $tbody;
    };

    /**
     * Internal function
     */
    this.initTable = function () {
        $table = this.getJQueryTable();
        $table.dataTable();
    };
    
    
    /**
     * 
     * @param {Array} header as list of string (columns header)
     * @param {Bidimensional Array} array of values list
     * @param {Object} options 
     * @returns html code of adminLTE datatable
     */
    this.getHtml = function (header, data, options) {
        ret = $("<div>");
        $table = $("<table>"); 
        ret.append($table);
        $table.prop('id', this.TABLEID);
        $table.addClass('table').addClass('table-striped').addClass('table-bordered');
        $table.append(this.getThead(header, options));
        $table.append(this.getTbody(data, options));
        return ret.html();
    };


    /**
     * 
     * @param {JQuery Object} container
     * @param {Array} header
     * @param {Array of Array} data
     * @param {Object} options
     * @returns {undefined} Prepare and put into container html of table
     */
    this.drawTable = function(container, header, data, options) {
        container.html(this.getHtml(header, data, options));
        this.initTable();
    };
    
    
    /**
     * 
     * @param {Array} property_list
     * @param {Object} ciscoapic_data
     * @param {Object} options
     * @returns {ret|Array|$}
     */
    this.prepareDataFromCiscoAPIC = function(property_list, ciscoapic_data, options) {
        //data = JSON.parse(topology_json);
        data = ciscoapic_data;
        ret = [];
        for (var k in data['vertices']) {
            prop = data['vertices'][k]['info']['property'];
            x = [];
            property_list.forEach(function(e, i, a) {
                x.push(prop[e]);
            });
            //x = [prop['acl_applied'], prop['custom_label'], prop['devicetype']];
            console.log('PUSHING '+x);
            ret.push(x);
        }
        return ret;
        /*return data.map(function(topology_element, property_list) {
            property = topology_element.info.property;
            ret=[];
            properties.forEach(function(prop_element, i, a) {
               //console.log('PUSHING '+prop_element[property_list]);
               ret.push(prop_element[property_list]);
            } );
            return ret;
        });*/
    };
    
    
    /**
     * 
     * @param {JQuery Object} container
     * @param {Array} header
     * @param {Array} properties: list of properties keys into vertices
     * @param {Object} ciscoapic_data
     * @param {Object} options
     * @returns {undefined}
     */
    this.drawTableCiscoAPIC = function(container, header, properties, ciscoapic_data, options) {
        this.drawTable(
                container, header, 
                this.prepareDataFromCiscoAPIC(properties, ciscoapic_data, options), 
                options
        );
    };

}
        