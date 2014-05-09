#!/usr/bin/python

# enable debugging
import cgitb
import networkx as nx
import json
import cgi 

cgitb.enable()



print "Content-Type: application/json"
print 
n = 8
p = 0.2
arguments = cgi.FieldStorage()
if(arguments.has_key('n') and arguments.has_key('p')):
	n = int(arguments['n'].value)
	p = float(arguments['p'].value)
else:
	print "{error:'No parameter'}"
	exit()




def addEdge(lhs, rhs):
	coppia = []
	coppia.append(lhs)
	coppia.append(rhs)
	edges.append(coppia)

def getJson():
	json_res = {}
	vertices = aoshis + oshis + euhs
	json_res['vertices'] = vertices
	json_res['edges'] = edges
	default_properties = {"frozen": False,"loopback":""}
	json_res['node_properties'] = {}
	for n in range(len(vertices)):
		json_res['node_properties'].update({vertices[n]:default_properties})
	print json.JSONEncoder().encode(json_res)


oshis = []
aoshis = []
euhs = []
edges = []

g = nx.erdos_renyi_graph(n, p)

for i in g.nodes():
	i = i + 1
	oshi = ('COSHI#%s' % (i))
	oshis.append(oshi)

for (n1, n2) in g.edges():
	n1 = n1 + 1
	n2 = n2 + 1
	lhs = ('COSHI#%s' % n1)
	rhs = ('COSHI#%s' % n2)
	addEdge(lhs, rhs)
	#print "*** Connect", lhs, "To", rhs

for i in range(n):
	aoshi = ("AOSHI#%s" % (i+n+1))
	aoshis.append(aoshi)
	addEdge(oshis[i], aoshi)
	#print "*** Connect", oshis[i], "To", aoshi
   
for i in range(n):
	euh = ("EUH#%s" % (i+1))
	euhs.append(euh)
	addEdge(euh, aoshis[i])
	#print "*** Connect", aoshis[i], "To", euh
		
getJson()
