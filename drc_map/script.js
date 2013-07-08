// Map layer text [for organization/editing sake, find a way to access these directly from the layer objects below by linking to external documents]
var intro = "<p>Afghanistan is rich in natural resources boasting over 400 different possibilities for extraction (both explored and unexplored). Yet, since the 1950’s only 20% of these minerals have been systematically explored. Three that have been and have the highest economic potential are copper, oil, and gas. Afghanistan has the second largest copper reserves in the world at 45 million tons valued at $43 billion (US) - this being it’s first major mining investment. </p>    <p>Mineral extraction plays a strong role in Afghanistan’s National Development Strategy and its goals to improve security, reduce poverty, and strengthen governance. Mining is set to be an alternative source of employment in some poppy regions. As of 2012, Afghanistan produces 64% of the world’s opium on roughly 154,000 hectares of land, with 95% of the cultivation in the most insecure provinces. Seventy-eight percent of Afghanistan’s labor force comes from agriculture, including opium cultivation, while only 5.7 % comes from industry. </p>    <p>In Afghanistan’s largely employed agricultural sector, 79% of opium cultivating villages receive agricultural assistance as opposed to only 69% of non-opium cultivating villages. Discrepancies also exist in income from agriculture. Farmer household net annual income per hectare from non-opium cultivation is roughly $3,300 (US) while net annual income per hectare from opium cultivation is roughly $5,200 (US).</p>";

var conflict = "<p>The 2008-2013 Afghanistan National Development Strategy states security as the first development priority of 50% of provinces in the country. Security represents the largest collective concern, particularly in the southern and western regions containing high opium cultivation such as Farah, Uruzgan, Kandahar, and Hilmand.</p>    <p>As of 2012, Afghanistan produces 64% of the world’s opium on roughly 154,000 hectares of land, with 95% of the cultivation in the most insecure provinces. Seventy-eight percent of Afghanistan’s labor force comes from agriculture, including opium cultivation, while only 5.7 % comes from industry. The map in this section explores recent areas of conflict from 2009/2010 that threaten security and major development priorities, which are given by province. This link to the <a href='http://infographiclist.files.wordpress.com/2012/10/afghanistan-moving-forward-to-the-future_506e891412771.jpg' target='_blank'>infographic from the Asian Development Bank</a> shows what activities security strains can potentially impact.</p>";

var extractives = "<p>Though over 400 occurrences of extractable minerals exist in Afghanistan, from 2008 to 2013 copper, oil, and gas have received major mostly foreign investments. Afghanistan’s copper reserves are valued at $3 billion (US) and there exists over 120 Billion cubic meters of exploitable oil and gas. Along with improved security, growth in the private extractive sector is a key avenue toward improvements in employment and poverty reduction. Investments in infrastructure are planned from Aynak copper extraction in Logar province by the Chinese Metallurgical Group.</p>    <p>Video: <a href='http://www.worldbank.org/en/news/video/2012/07/02/afghanistan-resource-corridor-video' target='_blank'>Afghanistan Resource Corridor</a></p>    <p>News: <a href='http://www.nytimes.com/2009/12/30/world/asia/30mine.html?pagewanted=all;' target='_blank'>China Mining Investments</a></p>";

var development = "<p>In Afghanistan, between 2008 and 2013, Afghanistan’s national emphasis is placed on improving vocational education through private sector investment. As copper extraction is the first major investment in the country, revenues from these resources will be the first toward private sector-educational development.</p>    <p>In 2008, although over 6 million school aged children attended school nearly half of young people did not out of Afghanistan’s 12 million under the age of 15. A number of reasons exist for school age children not to attend school including inadequate sanitation, security, and economic concerns.</p>    <p>This map explores a few of the current challenges the private sector and national government may face while implementing educational improvements. It looks at the causes preventing youth from attending school and its alignment with development priorities to help identify potential opportunities for investment in education.</p>    <p>News: <a href='http://www.guardian.co.uk/global-development-professionals-network/2013/jun/21/funding-education-in-afghanistan' target='_blank'>Funding Education in Afghanistan</a></p>";



// Build base layer, where id:[['map_id',z-index],...]
// Set background layers w/ low z-index and label layers w/ high z-index
baseLayer = {
	latlon:	[-3.4,21],
	zoom: 5,
	id: [
		['helsinki.drc_base_low_zoom',1],
		['helsinki.drc_base',2],
		['helsinki.drc_labels',100]
		],
	text: intro
}


// Build map objects, accessed via each button's html id attribute.  
mapLayers = {
	unemployment:{
		latlon:	[-3.4,21],
		zoom: 5,
		id: 'helsinki.drc_development_ii',
		text: development,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	poverty:{
		latlon:	[-3.4,21],
		zoom: 5,
		id: 'helsinki.drc_development',
		text: development,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	conflictMinerals:{
		latlon:	[-2.4,26.5],
		zoom: 6,
		id: 'helsinki.tantalite_supply_chain_dark',
		text: extractives,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	industrial:{
		latlon:	[-3.4,21],
		zoom: 5,
		id: 'helsinki.tantalite_supply_chain_dark',
		text: extractives,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	acled:{
		latlon:	[-3.4,21],
		zoom: 5,
		id: 'helsinki.drc_acled',
		text: conflict,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	idps:{
		latlon:	[-3.4,21],
		zoom: 5,
		id: 'helsinki.drc_idps',
		text: conflict,
		legend: document.getElementById('unemploymentLegend').innerHTML
	}
}



// Initialize Map
var map = L.map('map', {
	minZoom: 3,
	maxZoom: 10,
	//maxBounds: [[22,49.5],	//[[min-y, min-x],
	//			[46.5,83.5]], 	//[max-y, max-x]]
				//Note: w/ restrictive bounds (and/or w/ large monitors), map may not be able to be viewed at min/default zoom.  This would only be an issue if some layers have unique views at high level zooms that become unreachable.  
	zoomControl: false,
	attributionControl: false
})
	.setView(baseLayer["latlon"], baseLayer["zoom"]);

// Build Base Layer
for(i = 0; i < baseLayer["id"].length; i++){
	map.addLayer(L.mapbox.tileLayer(baseLayer["id"][i][0], {zIndex: baseLayer["id"][i][1]} ));
}

// Add Intro Text, Zoom Control, Initialize an empty Layer Group, and hide all dropdowns 
$('#text').html(baseLayer["text"]);

// var legendHtml = document.getElementById('legend-content').innerHTML;
// var mapLegend = L.mapbox.legendControl({
// 	position:'bottomright'
// })
// 	.addLegend(legendHtml)
// map.addControl(mapLegend);

new L.Control.Zoom({ position: 'topleft' }).addTo(map);

group = L.layerGroup().addTo(map);

$('.dropdown-menu').hide()



// Layer Switcher
$('.switcher').click(function(e) {
	e.preventDefault();
	e.stopPropagation();

	//remove all non-base layers and legends
	group.clearLayers();
	$('.active').removeClass('active');
	$('.map-legends').remove();

	//add new layer to group
	group.addLayer(L.mapbox.tileLayer(mapLayers[this.id]["id"]));
	var gridLayer = L.mapbox.gridLayer(mapLayers[this.id]["id"]);
	group.addLayer(gridLayer);
	map.addControl(L.mapbox.gridControl(gridLayer));
	$(this).addClass('active');
	
	// add legend
	var legendHtml = mapLayers[this.id]["legend"];
	var mapLegend = L.mapbox.legendControl({
		position:'bottomright'
	})
		.addLegend(legendHtml)
	map.addControl(mapLegend);

	//change content in #text 
	$('#text').html(mapLayers[this.id]["text"])

	//set view
	var layerLatLon = mapLayers[this.id]["latlon"];
	var layerZoom = mapLayers[this.id]["zoom"];
	map.setView(layerLatLon, layerZoom);
});



// Dropdown
// The .dropdown class applies to all buttons that cause a dropdown menu to appear.  Those menus are referred to as, and styled by, .dropdown-menu
// function will have the first layer appear by default
$('.dropdown').click(function() {

	// hide all existing dropdowns
	$('.dropdown-menu').hide();
	
	//remove all non-base layers and legends
	group.clearLayers();
	$('.active').removeClass('active');
	$('.map-legends').remove();
	
	// show hidden dropdown menu
	$('#' + this.id + '-dropdown').show();
	$(this).addClass('active');
	
	// display first layer of dropdown menu, change content in #text, and add legend
	var firstChild = $('#' + this.id + '-dropdown').children(':first');
	var firstChildId = firstChild.attr('id');
	firstChild.addClass('active');
	group.addLayer(L.mapbox.tileLayer(mapLayers[firstChildId]['id']));
	var gridLayer = L.mapbox.gridLayer(mapLayers[firstChildId]['id']);
	group.addLayer(gridLayer);
	map.addControl(L.mapbox.gridControl(gridLayer));
	var legendHtml = mapLayers[firstChildId]["legend"];
	var mapLegend = L.mapbox.legendControl({
		position:'bottomright'
	})
		.addLegend(legendHtml)
	map.addControl(mapLegend);
	
	// set map view
	var layerLatLon = mapLayers[firstChildId]["latlon"];
	var layerZoom = mapLayers[firstChildId]["zoom"];
	map.setView(layerLatLon, layerZoom);
	
	// change #text content and move down
	$('#text').css('top','140px');
	$('#text').html(mapLayers[firstChild.attr('id')]['text']);
});



// Layer Switcher [not in dropdown]
// Layer Switchers that are not in a dropdown [i.e. are in the first row] also need to be able to hide dropdowns that are shown.  Should be possible to combine this with the regular layer switcher somehow, yes?
$('.switcherFirstRow').click(function(e) {
	e.preventDefault();
	e.stopPropagation();

	//remove all non-base layers and legends
	group.clearLayers();
	$('.active').removeClass('active');
	$('.map-legends').remove();
	
	// remove legends
	$('.map-legends').remove();

	//add new layer to group
	group.addLayer(L.mapbox.tileLayer(mapLayers[this.id]["id"]));
	var gridLayer = L.mapbox.gridLayer(mapLayers[this.id]["id"]);
	group.addLayer(gridLayer);
	map.addControl(L.mapbox.gridControl(gridLayer));
	$(this).addClass('active');
	
	// add legend
	var legendHtml = mapLayers[this.id]["legend"];
	var mapLegend = L.mapbox.legendControl({
		position:'bottomright'
	})
		.addLegend(legendHtml)
	map.addControl(mapLegend);

	//change content in #text 
	$('#text').html(mapLayers[this.id]["text"])

	//set view
	var layerLatLon = mapLayers[this.id]["latlon"];
	var layerZoom = mapLayers[this.id]["zoom"];
	map.setView(layerLatLon, layerZoom);
	
	// hide all existing dropdowns
	$('.dropdown-menu').hide();
});



// Refresh Map
$('.refresher').click(function(e) {

	//remove all non-base layers and legends
	group.clearLayers();
	$('.active').removeClass('active');
	$('.map-legends').remove();
	
	//remove all dropdowns and move #text up
	$('.dropdown-menu').hide();
	$('#text').css('top','100px');
	
	//change text to intro text
	$('#text').html(baseLayer['text']);

	//reset view
	map.setView(baseLayer["latlon"], baseLayer["zoom"]);
	});

	
// Bug: tooltips are not always cleared from map when layer is switched.  Force .map-tooltip to hide on layer switcher click?

// Formatting Functions
function IntegerFormatted(amount)
{
	amount += '';
	x = amount.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function CurrencyFormatted(amount) {
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + 0.005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}



