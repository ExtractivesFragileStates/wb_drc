//   -- DRC - Map Content --

// Map layer text -- how to access local html docs via ajax?
var intro = "<p>Intro Text To Come...</p>";

var conflict = "<p>Conflict Text To Come...</p>";

var extractives = "<p>Extractives Text To Come...</p>";

var development = "<p>Development Text To Come...</p>";



// Build base layer, where id:[['map_id',z-index],...]
// Set background layers w/ low z-index and label layers w/ high z-index
var baseLayer = {
	latlon:	[-3.4,21],
	zoom: 5,
	id: [
		['helsinki.map-nsp2qpsa',-1000],
		['helsinki.drc_labels',1000]
		],
	text: intro
}


// Build map objects, accessed via each button's html id attribute.  
//would it be better/faster to build these via a custom object constructor?
var mapLayers = {
	unemployment:{
		id: 'helsinki.drc_development_ii',
		text: development,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	poverty:{
		id: 'helsinki.drc_development',
		text: development,
		legend: document.getElementById('povertyLegend').innerHTML
	},
	mineralogy:{
		id: 'helsinki.drc_mineralogy',
		text: extractives,
		legend: document.getElementById('mineralogyLegend').innerHTML
	},
	mineConcessions:{
		id: 'helsinki.drc_concessions',
		text: extractives,
		legend: document.getElementById('concessionsLegend').innerHTML
	},
	oilConcessions:{
		id: 'helsinki.drc_oil_concessions',
		text: extractives,
		legend: document.getElementById('concessionsLegend').innerHTML
	},
	forestConcessions:{
		id: 'helsinki.drc_forestry_concessions',
		text: extractives,
		legend: document.getElementById('concessionsLegend').innerHTML
	},
	conflictMinerals:{
		id: 'helsinki.map-s2s3eamy',
		text: extractives,
		legend: document.getElementById('conflictMineralsLegend').innerHTML
	},
	acled:{
		id: 'helsinki.drc_acled',
		text: conflict,
		legend: document.getElementById('acledLegend').innerHTML
	},
	idps:{
		id: 'helsinki.drc_idps',
		text: conflict,
		legend: document.getElementById('idpLegend').innerHTML
	},
	biodiversity:{
		id: 'helsinki.drc_idps',
		text: conflict,
		legend: document.getElementById('idpLegend').innerHTML
	},
	forestCover:{
		id: 'helsinki.drc_forest_cover',
		text: conflict,
		legend: document.getElementById('idpLegend').innerHTML
	},
	forestLoss:{
		id: 'helsinki.drc_forest_deforestation',
		text: conflict,
		legend: document.getElementById('idpLegend').innerHTML
	}
}

var checkboxButtons = [
// 	{
// 		mapId: 'helsinki.map-1itkgzof',
// 		elementId: 'checkboxConcessions',
// 		zIndex: 999
// 	},
	{
		mapId: 'helsinki.drc_concessions',
		elementId: 'checkboxMineConcessions',
		zIndex: 997
	},
	{
		mapId: 'helsinki.drc_oil_concessions',
		elementId: 'checkboxOilConcessions',
		zIndex: 996
	},
	{
		mapId: 'helsinki.drc_forestry_concessions',
		elementId: 'checkboxTimberConcessions',
		zIndex: 995
	}
]