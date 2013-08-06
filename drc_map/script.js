// DRC v1.0

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
	}
}

var radioButtons = [
	{
		mapId: 'helsinki.map-1itkgzof',
		elementId: 'radioConcessions',
		zIndex: 999
	}// ,
// 	{
// 		mapId: 'helsinki.drc_concessions',
// 		elementId: 'radioConcessions',
// 		zIndex: 998
// 	},
// 	{
// 		mapId: 'helsinki.drc_concessions',
// 		elementId: 'mineConcessions',
// 		zIndex: 997
// 	},
// 	{
// 		mapId: 'helsinki.drc_oil_concessions',
// 		elementId: 'oilConcessions',
// 		zIndex: 996
// 	},
// 	{
// 		mapId: 'helsinki.drc_forestry_concessions',
// 		elementId: 'forestConcessions',
// 		zIndex: 995
// 	}
]


var eventHandlers = {
	init: function() {
		$('.dropdown').on('click', this.dropdown);
		$('.addMapMenu').on('click', this.addMapMenu);
		$('.mapCheckboxMenu').on('click', this.mapCheckboxMenu);
		$('.panelCheckboxMenu').on('click', this.panelCheckboxMenu);
		$('.refresher').on('click', this.refresher);
		$('#text').on('click', '.navigate', this.navigate);
	},
	dropdown: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var firstChildElement = $('#' + this.id + '-dropdown').children(':first');

		// remove layers/legends and trigger first dropdown button event
		eventHandlers.removeAll();
		firstChildElement.trigger('click');

		// change z-index on dropdown menus and move dropdown
		eventHandlers.changeZ($(this));
		eventHandlers.textMenuDown();
	},
	addMapMenu: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var menu = $('#' + this.id + '-menu');
		
		eventHandlers.activateDeactivate($(this));
		eventHandlers.clearLayersLegends();
		$('.layerMenu').hide();
		menu.children(':first').trigger('click');
		menu.show();
	},
	mapCheckboxMenu: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var switcherElement = $(this);
		
		//remove layers/legends [but not mapMenus] and add new layer/legend
		eventHandlers.activateDeactivate($(this));
		eventHandlers.clearLayersLegends();
		eventHandlers.switchLayer(switcherElement);

		//change content in #text 
		$('#text').html(mapLayers[switcherElement.attr('id')]["text"])				
	},
	mapRadioMenu: function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		//display of radioLayers is handled outside of event handlers obj - here simply display legend
		var legendHtml = radioButtons[layerId]["legend"];
		var mapLegend = L.mapbox.legendControl({ position:'bottomright' }).addLegend(legendHtml)
		map.addControl(mapLegend);
	},
	panelCheckboxMenu: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var switcherElement = $(this);

		//remove layers/legends and add new layer/legend
		eventHandlers.activateDeactivate($(this));
		eventHandlers.clearLayersLegends();
		eventHandlers.switchLayer(switcherElement);
		
		// hide mapCheckboxMenu
		$('.layerMenu').hide();
		
		//change content in #text 
		$('#text').html(mapLayers[switcherElement.attr('id')]["text"])
	},
	refresher: function(e) {
		e.preventDefault();
		e.stopPropagation();

		// remove layers/legends, move dropdowns up, change text to intro, and reset view
		eventHandlers.removeAll();
			//remove mapRadioButtons
			radioGroup.clearLayers();
		eventHandlers.textMenuUp();
		$('#text').html(baseLayer['text']);
		map.setView(baseLayer["latlon"], baseLayer["zoom"]);
	},
	navigate: function(e) {
		e.preventDefault();
		e.stopPropagation();	

		var location = this.getAttribute('data-location').split(',');
		var latLon = [location[0],location[1]];
		var zoom = location[2];
		if (latLon && zoom){
			map.setView(latLon, zoom);
		}
	},
	textMenuDown: function() {
		$('.dropdownMenu').animate( { 'top': '96px' }, 150 );
		$('#text').animate( { 'top': '140px' }, 150 );
	},
	textMenuUp: function() {
		$('.dropdownMenu').animate( { 'top': '56px' }, 150 );
		$('#text').animate( { 'top': '100px' }, 150 );
	},
	removeAll: function() {
		eventHandlers.clearLayersLegends();
		$('.active').removeClass('active');
		$('.layerMenu').hide();
	},
	activateDeactivate: function(button) {
		button.addClass('active');
		button.siblings('.active').removeClass('active');
	},
	clearLayersLegends: function() {
		group.clearLayers();
		$('.map-legends').remove();
	},
	switchLayer: function(layer) {
		layerId = layer.attr('id');
		group.addLayer(L.mapbox.tileLayer(mapLayers[layerId]["id"]));
		var gridLayer = L.mapbox.gridLayer(mapLayers[layerId]["id"]);
		group.addLayer(gridLayer);
		map.addControl(L.mapbox.gridControl(gridLayer));

		var legendHtml = mapLayers[layerId]["legend"];
		var mapLegend = L.mapbox.legendControl({ position:'bottomright' }).addLegend(legendHtml)
		map.addControl(mapLegend);

// 		var layerLatLon = mapLayers[layerId]["latlon"];
// 		var layerZoom = mapLayers[layerId]["zoom"];
// 		map.setView(layerLatLon, layerZoom);
	},
	changeZ: function(layer) {
		$('.dropdownMenu').css('z-index', 1);
		$('#' + layer.attr('id') + '-dropdown').css('z-index', 2);
		layer.addClass('active');
	}
};

// Map Radio Buttons
function addRadioButton(mapId, elementId, zIndex) {
	var layer = L.mapbox.tileLayer(mapId)
    layer.setZIndex(zIndex);
	
    $('#' + elementId).on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (map.hasLayer(layer)) {
        	//map.removeLayer(layer);
            radioGroup.removeLayer(layer);
            $(this).removeClass('radioActive');
        } else {
            //map.addLayer(layer);
            radioGroup.addLayer(layer);
            this.className = 'radioActive';
        }
    });
};



// Initialize Map
var map = L.map('map', {
	minZoom: 3,
	maxZoom: 10,
	//maxBounds: [[22,49.5],	//[[min-y, min-x],
	//			[46.5,83.5]], 	//[max-y, max-x]],
	zoomControl: false,
	attributionControl: false
})
	.setView(baseLayer["latlon"], baseLayer["zoom"]);

// Build Base Layer
for(i = 0; i < baseLayer["id"].length; i++){
	map.addLayer(L.mapbox.tileLayer(baseLayer["id"][i][0], {zIndex: baseLayer["id"][i][1]} ));
}

// Add Intro Text, Zoom Control, Initialize an empty Layer Group, and hide all non-permanent menus
$('#text').html(baseLayer["text"]);
new L.Control.Zoom({ position: 'topleft' }).addTo(map);
var group = L.layerGroup().addTo(map);
var radioGroup = L.layerGroup().addTo(map);
$('.layerMenu').hide();

// bind event functions to their elements
$(document).ready(function() {
	eventHandlers.init();
});


// bind map radio buttons to elements
for(i = 0; i < radioButtons.length; i++){
	addRadioButton(radioButtons[i]["mapId"], radioButtons[i]["elementId"], radioButtons[i]["zIndex"]);
}

// addRadioButton('helsinki.map-s2s3eamy', 'radioArtisanal', 999);
// addRadioButton('helsinki.drc_concessions', 'radioConcessions', 998);