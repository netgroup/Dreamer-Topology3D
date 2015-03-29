![Alt text](repo_data/dreamer-logo.png "Optional title")

Dreamer-Topology3D
==================

Topology Designer For Dreamer Project (GÉANT Open Call).
Overview
-----------
It is a simple and intuitive JavaScript Web GUI ([demo](stud.netgroup.uniroma2.it/OSHI/TopoDesigner)), which allows to design an OSHI network topology and to configure the services. It can export the topologies in JSON format and then they can be deployed. It is also possible to synthetically generate a topology using Networkx. Topology-Designer is a customization of [JS GRAPH EDITOR](https://github.com/rkirov/graph-editor.js) written by Radoslav Kirov.

---------------------------

## Requires
- WebServer (apache2, nginx, etc..) (optional)
- Dreamer-Topology-and-Service-Validator [(can be foud here)](https://github.com/netgroup/Dreamer-Topology-and-Service-Validator) 
- Dreamer-Experiment-Handler [(can be foud here)](https://github.com/netgroup/Dreamer-Experiment-Handler.git) (optional)

 --------------------
Getting Started
---------------------

Assuming git installed:

```sh
$ git clone https://github.com/netgroup/Dreamer-Topology3D.git
```
**Set the address and the port of the server that runs the Dreamer-Topology-and-Service-Validator and the Dreamer-Experiment-Handler project.** By default Dreamer-Topology-and-Service-Validator endpoints are local (0.0.0.0:8001), otherwise modify the file **js/src/config.js** according to your deployment. 
By default:

		//Dreamer-Topology-and-Service-Validator
		this.top_ser_validator = {};
		this.top_ser_validator.host_port = 8080;
		this.top_ser_validator.host_name = "127.0.0.1";

		//Experiment Handler
		this.experiment_handler = {};
		this.experiment_handler.host_port = 3000;
		this.experiment_handler.host_name = "127.0.0.1";

A Demo of Dreamer-Topology3D can be found [here](stud.netgroup.uniroma2.it/OSHI/TopoDesigner).

---------------------

License
=======

This sofware is licensed under the Apache License, Version 2.0.

Information can be found here:
 [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).