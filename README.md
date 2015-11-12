![OSHI and DREAMER logos](http://netgroup.uniroma2.it/twiki/pub/Oshi/WebHome/dreamer-oshi-logo-github-2.png "http://netgroup.uniroma2.it/OSHI")

Dreamer-Topology3D
==================

Topology 3D (Designer Deployer & Director) a web GUI to design and control SDN experiments.
It is a part of the [Mantoo suite](https://github.com/netgroup/Dreamer-Mantoo), a result of the [DREAMER project](http://netgroup.uniroma2.it/DREAMER/). 

Addtional documentation is available at http://netgroup.uniroma2.it/OSHI/ .

----------------------------------------
Overview
----------------------------------------
Topology 3D is a simple and intuitive JavaScript Web GUI  ([demo](http://stud.netgroup.uniroma2.it/OSHI/TopoDesigner)), which allows to design an network topology and to configure the services. It can support different "models" (i.e. technology domains) in an exendible way: currently it supports a network of standard OpenFlow device and a network made by OSHI (Open Source Hybrid IP/SDN) nodes. It can export the topologies in JSON format and then they can be deployed. It is also possible to synthetically generate a topology using Networkx. Topology-Designer is is based on [JS GRAPH EDITOR](https://github.com/rkirov/graph-editor.js) written by Radoslav Kirov.

----------------------------------------
SW Requirements
----------------------------------------

## Requires
- WebServer (apache2, nginx, etc..) (optional)
- Dreamer-Topology-and-Service-Validator [(here)](https://github.com/netgroup/Dreamer-Topology-and-Service-Validator)
- Dreamer-Experiment-Handler [(here)](https://github.com/netgroup/Dreamer-Experiment-Handler.git) (optional)

----------------------------------------
Getting Started
----------------------------------------

Assuming git installed:

```sh
$ git clone https://github.com/netgroup/Dreamer-Topology3D.git
```
**Set the address and the port of the server that runs the Dreamer-Topology-and-Service-Validator and the Dreamer-Experiment-Handler project.** By default Dreamer-Topology-and-Service-Validator endpoints are local (0.0.0.0:8090), otherwise modify the file **js/src/config.js** according to your deployment. 
By default:

		//Dreamer-Topology-and-Service-Validator
		this.top_ser_validator = {};
		this.top_ser_validator.host_port = 8090;
		this.top_ser_validator.host_name = "127.0.0.1";

		//Experiment Handler
		this.experiment_handler = {};
		this.experiment_handler.host_port = 3000;
		this.experiment_handler.host_name = "127.0.0.1";

A Demo of Dreamer-Topology3D can be found [here](http://stud.netgroup.uniroma2.it/OSHI/TopoDesigner).

----------------------------------------
License
----------------------------------------

This sofware is licensed under the Apache License, Version 2.0.

Information can be found here:
 [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

----------------------------------------
Development documentation (partial...)
----------------------------------------

- Extending the system with new models

1)
the logic related to a model (e.g. node properties and constraints) can be found
Dreamer-Topology-and-Service-Validator/TopologyDjango/lib/TopoModels/oshi/model.py

e.g. you will find oshi.py and openflow.py for the two models that are currently defined

2) the corresponding js files that deal with the model representation in the GUI are:

2.1)
in Dreamer-Topology3D/js/src/index.js
the function:
my_graph_editor.addListener("update_infobox", function(a, args) {
deals with the visualization and update of nodes and links properties in the left panel of the GUI

2.2)
Dreamer-Topology3D/js/src/domaincontroller/model.js 

e.g. oshi.js and openflow.js

2.3)
in Dreamer-Topology3D/js/src/graph_editor.js
the list of active models is defined as follows
 var modelToController = {
    "oshi": "Oshi",
    "openflow": "OpenFlow"
}

2.4) 
the logic related to a model (e.g. node properties and constraints) can be found in
Dreamer-Topology-and-Service-Validator/TopologyDjango/lib/TopoModels/...

in /home/user/workspace/Dreamer-Topology-and-Service-Validator/TopologyDjango/lib/TopoModels/
create a new folder like oshi or openflow and edit the file named your_model.py
with the node types and constraints

e.g. you will find oshi.py and openflow.py for the two models that are currently defined

in /home/user/workspace/Dreamer-Topology3D/img/ put the image files corresponding to your node names
node.png and a 128x128 png named node_det.png with the text of the node name
