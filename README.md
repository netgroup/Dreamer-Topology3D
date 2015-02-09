![Alt text](repo_data/dreamer-logo.png "Optional title")

Dreamer-Topology-Designer
==================

Topology Designer For Dreamer Project (GÉANT Open Call).

It is a simple and intuitive JavaScript Web GUI, which allows to design an OSHI network topology and to configure the services. It can export the topologies in JSON format and then they can be deployed. It is also possible to synthetically generate a topology using Networkx. Topology-Designer is a customization of [JS GRAPH EDITOR](https://github.com/rkirov/graph-editor.js) written by Radoslav Kirov.

License
=======

This sofware is licensed under the Apache License, Version 2.0.

Information can be found here:
 [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

Tips
==============

Set the address and the port of the server that runs the Dreamer-Topology-and-Service-Validator project. By default Dreamer-Topology-and-Service-Validator endpoints are local (0.0.0.0:8001), otherwise modify the file js/src/domaincontroller/domaincontroller.js according to your deployment.

Topololgy Designer Dependencies
=============================

1) WebServer (apache2, nginx, etc..)

2) [Dreamer-Topology-and-Service-Validator](https://github.com/netgroup/Dreamer-Topology-and-Service-Validator) (git)

#####Start the Dreamer-Topology-and-Service-Validator project:

		cd Dreamer-Topology-and-Service-Validator/
		python manage.py runserver 0.0.0.0:8001
