//   -- DRC slim: no permanent checkbox buttons- Map Functionality --

var eventHandlers = {
	init: function() {
		$('.dropdown').on('click', this.dropdown);
		$('.addMapMenu').on('click', this.addMapMenu);
		$('.mapRadioMenu').on('click', this.mapRadioMenu);
		$('.panelLayerSwitcher').on('click', this.panelLayerSwitcher);
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
	mapRadioMenu: function(e) {
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
	panelLayerSwitcher: function(e) {
		e.preventDefault();
		e.stopPropagation();
		var switcherElement = $(this);

		//remove layers/legends and add new layer/legend
		eventHandlers.activateDeactivate($(this));
		eventHandlers.clearLayersLegends();
		eventHandlers.switchLayer(switcherElement);
		
		// hide map Menu
		$('.layerMenu').hide();
		
		//change content in #text 
		$('#text').html(mapLayers[switcherElement.attr('id')]["text"])
	},
	refresher: function(e) {
		e.preventDefault();
		e.stopPropagation();

		// remove layers/legends, move dropdowns up, change text to intro, and reset view
		eventHandlers.removeAll();
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

// Add Intro Text, Zoom Control, Initialize an empty Layer Group
$('#text').html(baseLayer["text"]);
new L.Control.Zoom({ position: 'topleft' }).addTo(map);
var group = L.layerGroup().addTo(map);
$('.layerMenu').hide();

// bind event functions to their elements
$(document).ready(function() {
	eventHandlers.init();
});
