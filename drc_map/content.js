//   -- DRC - Map Content --

// Map layer text -- how to access local html docs via ajax?
var intro = "<div class='dashboard'><ul class='majorStats'><li><div><span class='key'>GDP</span><sub style='left: 66px; top: 40px;'><em>per capita</em></sub> <span class='val'>$236</span></div></li><li><div><span class='key'>HDI</span> <span class='val'>0.304 (186<sup>th</sup>)</span></div></li></ul><ul class='wbStats'><li style='border:0'><div><span></span> <span class='val'></span></div></li><li><div><span class='key'>EITI Status</span> <span class='val' style='color: #f42; font-weight: bold;'>Suspended</span></div></li><li><div><span class='key'>Government Revenue</span> <span class='val'>$876mil</span></div></li><li><div><span class='key'>Company Payments</span> <span class='val'>$773mil</span></div></li></ul><ul class='eitiStats'><li style='border: 0'><div><span class='key title'>Worldwide Governance Indicators</span><sup style='left: 282px; top:8px;'>†</sup></div></li><li><div><span class='key'>Voice & Accountability</span><span class='val'>8.0</span></div></li><li><div><span class='key'>Political Stability</span> <span class='val'>2.4</span></div></li><li><div><span class='key'>Government Effectiveness</span><span class='val'>1.9</span></div></li><li><div><span class='key'>Regulatory Quality</span> <span class='val'>5.7</span></div></li><li><div><span class='key'>Rule of Law</span> <span class='val'>1.9</span></div></li><li><div><span class='key'>Control of Corruption</span> <span class='val'>3.3</span></div></li></ul></div><p>The <strong>Democratic Rebpulic of the Congo</strong> is a poster child of the complexities and contradictions of extractive resource wealth.  The country is home to massive extractive reserves, estimated in value to be upwards of <strong>$24 trillion</strong>, including as much as <strong>80%</strong> of the world's reserves of <strong>Coltan</strong>.  However, these natural riches have been a key focal point of conflict.  Following on two successive civil wars from <strong>'96 - '97</strong> and <strong>'98 - '02</strong> that decimated the country's governmental and civil society capacities, the DRC has made strides in reconstruction.  However, challenges to development posed by corruption and regional unrest remain, often fueled in part by the extractives trade.<p><h1>The Map</h1><p>Use the tabs above to view the data that explores the complex dynamics of extractive industries in the DRC: their <strong>developmental potential</strong>, their <strong>environmental impact</strong>, and their linkages to <strong>conflict and fragility.</strong></p><br><em><sup>†: <a href='http://info.worldbank.org/governance/wgi/index.asp' target='_blank'>The Worldwide Governance Indicators</a> are a collection of six indicators measuring levels of governance around the world, aggregating data from upwards of 40 different sources.  The project is developed and maintained by the World Bank</em></div></sup>";

var unemploymentText = "<p>The DRC's legacy of instability and civil war has taken a massive tole on the country's level of development.  In '12, it tied for last place on the <strong>Human Development Index</strong>.  Because the last census conducted in the DRC was in '84, reliable developmental indicators by province are difficult to obtain; here all data was collected by the UNDP's work on the Millenium Development Goals.</p><h1>Unemployment</h1><p>While unemployment is an issue throughout the country, development strategies for the extractive sector must consider the broad job creation as a central objective.  In of themselves, while generating a significant level of revenue, industrial mine operations create only limited employment opportunities.  For this reason, it is essential to develope <strong>area-based development programs</strong>  that expand the DRC's emerging social economy and create job opportunities.</p><p>Emerging as an important local source of livelihood towards the end of the Mobutu regime and during the civil war the informal economy built around the <strong>artisanal mining sector</strong> employs many hundreds of thousands of Congolese.  While the <strong>artisanal mining</strong> sector is often abused by armed militias--who extort money from occupied mines--it is essential that efforts to formalize the trade do not ignore the rights of the miners themselves, which would only exacerbate further the issue of unemployment.</p></div>";
	
var povertyText = "<h1>Poverty</h1><p>Dangerously high levels of poverty threaten the stability of the DRC throughout the country.  Ongoing violent conflicts, particularly in the east, south east, and north east, have resulted in the displacement of hundreds of thousands, raised issues related to rapid and unplanned urbanization, and put massive strains on the ability to deliver basic services like housing and sanitation in many urban centers.</p><p>The DRC has made significant developmental gains since '04 as it rebounds from conflict.  Improvements in macroeconomic management have helped improve economic growth, while social indicators such as primary education enrollment, literacy, infant mortality, and poverty have improved [fact check].  With mineral reserves estimated in the many trillions of dollars, much of the DRC's developmental needs could be addressed through proper stewardship of its extractive industries.  However, the country's history has shown that these industries can be engines of underdevelopment as much as they can be of development.</p>";

var deforestationText = "<p>With the world's <strong>second largest rainforest</strong> and <strong>third largest river</strong>, the DRC hosts one of the world's most vibrant ecosystems.  These resources, if managed well, can be a massive developmental asset; sustainable farming on the DRC's <strong>80 mil hectares</strong> of <strong>arable land</strong> could potentially make the country the <strong>granary of Africa</strong>.  Mining and timber industries are not necessarily a threat to the country's ecosystem.  However, development of these extractive industries without strong governmental oversight risks squandering this natural capital.</p><h1>Deforestation</h1><p>[insert deforestation text]</p></div>";
	
	
var biodiversityText = "<h1>Biodiversity</h1><p>The DRC is home to five natural <strong>World Heritage Sites</strong>, hosting a level of biodiversity unparalled in Africa.  The mountains of the <span class='navigate' data-location='-3.349,27.828,6'>Arlbertine Rift</span>, along the country's eastern boarder, are home to more endemic species than any other region in Africa.  The volcanic and seismic activity that created this massif also generated the region's significant mineral and oil reserves.  Although mineral concession owners hold the rights to much of the region's mineral wealth, instability means that most of these reserves are mined by local <strong>artisanal miners</strong> whose livelihood depends on the small wages paid.</p><h1>Biodiversity and Extractives</h1><p>[insert text on oil exploration concessions along the lakes of the Albertine Rift]</p>";
	

var mineralogyText = "<p>The DRC has an immensely rich mineral reserve, with a valuation potentially as high as <strong>$24 trill</strong>.  In 2011, <strong>Cobalt</strong> production accounted for <strong>53%</strong> of global production, while <strong>Diamond</strong> production accounted for 34%.  Additionally, the country also has globally significant reserves in <strong>Copper</strong>, <strong>Tantalum</strong>, and <strong>Tin</strong>, as well as smaller reserves of many other valuable minerals.</p><p>Nevertheless, the country's extractives have a troubled history.  Mismanagement and blatant corruption under the 3 decade Mobutu regime decimated national production, while control of vast untapped reserves was a prime motivation of many actors over the country's two civil wars from '96 - '03.  Trade in <strong>Conflict Minerals</strong> continue to fuel conflict in the east of the country.</p><h1>Regional Mineralogy</h1><p>Industrial-scale exploitation of the <strong>Central Africa Copperbelt</strong> is already underway, as is the extraction of similar <strong>Cobalt</strong> reserves.  Tin deposits dot the east of the country, along with <strong>Gold</strong> and <strong>Tungsten</strong> reserves, much of which have active artisanal and small-scale mines.  The artisanal mining sector also accounts for the majority of diamond extraction, primarily in <strong>Kasai-Occidental</strong>, <strong>Kasai-Oriental</strong>, and <strong>Orientale Provinces</strong>.  Petroleum exploration is underway in the Lake Albert Basin in the east of Orientale Province, as well as the boarder between North Kivu and Uganda.  Forestry concessions cover significant areas across the Congo Basin.</p>";

var artisanalMinesText = "<h1>Artisanal Mines</h1><p>Although the root of the ongoing unrest in the east of the country stems from ethnic disputes over land and refugee status, a major contribting factor to the violence stems from the region's vast mineral wealth.  The extensive informal mineral trade, which employs anywhere from <strong>500k</strong> to <strong>2 mil</strong> Congolese, accounts for an estimated <strong>90%</strong> of mineral production.  However, the informal mining sector is a prime target for exploitation by armed groups, who occupy the mines or levy taxes in order to fund their ongoing activities.</p><p>Following on the model established by the <strong>Kimberly Process</strong> for conflict diamonds, much work has been done to clean up the trade in four conflict minerals--<strong>tin</strong>, <strong>tantalum</strong>, <strong>tungsten</strong>, and <strong>gold</strong>--with initiatives focused at all levels of the supply chain.  Below is a broad overview of these interventions, from the <strong>upstream</strong> mine site to <strong>downstream</strong> manufacturers.</p><div style='position: relative'><div class='rotate upstream'>UPSTREAM</div><div class='rotate downstream'>DOWNSTREAM</div></div><div class='cmBox'><div class='cmInitiative'><img src='https://dl.dropboxusercontent.com/u/49790262/dot_8.png'><h1 class='navigate' data-location='-2.6234,27.4617,9'>Mine</h1><p class='cmDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a>exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div class='cmInitiative'><img src='https://dl.dropboxusercontent.com/u/49790262/dot_8.png'><h1 class='navigate' data-location='-2.227,27.070,8'>Comptoirs/Negociants</h1><p class='cmDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p></div><div class='cmInitiative'><img src='https://dl.dropboxusercontent.com/u/49790262/dot_8.png'><h1 class='navigate' data-location='-3.853,28.070,6'>Exporter</h1><p class='cmDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a>exercitation</a> ullamco</p></div><div class='cmInitiative'><img src='https://dl.dropboxusercontent.com/u/49790262/dot_8.png'><h1 class='navigate' data-location='16.89,21.71,3'>Smelter</h1><p class='cmDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a>exercitation</a> ullamco laboris nisi ut.</p></div><div class='cmInitiative'><img src='https://dl.dropboxusercontent.com/u/49790262/dot_8.png'><h1 class='navigate' data-location='16.89,21.71,3'>Producer/Manufacturer</h1><p class='cmDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a>exercitation</a> ullamco laboris nisi ut.</p></div></div>";

var conflictText = "<p>Since the end of the Second Congo War in '03, the DRC continues to experience chronic instability around the country.  This conflict density map layer aggregates violent incidents captured by the <strong>ACLED</strong> database taking place between '08 and '10.  Violence is concentrated in the eastern <span class='navigate' data-location='-2.641,25.549,7'>Kivu provinces</span>, where local militias and rebel groups fund their activities in part through the black market trade in <strong>Conflict Minerals</strong>.  Conflict density is also high in the <span class='navigate' data-location='3.431,25.604,7'>north east Oriental Province</span>, where the Lords Resistance Army (<strong>LRA</strong>), led by Joseph Kony, continues to terrorize local populations.</p><h1>Land Rights</h1><p>Ethnic tensions over land rights, inflamed by the country's two successive civil wars, are a major flash point for violence, often resulting in a cycle reprisals and the creation of ethnic-based civilian militias.  The situation is further aggrevated by conflicts between customary and official land claims, which given the weakness of both customary and state structures, often results in corrupt practices and inter-communal violence.  Mediation between small landholders with competing claims has had some successes in resolving these confrontations, however comprehensive landreform remains as a massive undertaking.</p><h1>M23</h1><p>In early spring, '12, nearly 300 soldiers recently integrated into the Congolese Army (<strong>FARDC</strong>) rebelled against the government, calling their movement <strong>M23</strong>.  Active mainly in <span class='navigate' data-location='-0.972,26.043,7'>North Kivu province</span>, the group grew over the subsequent year, and in Fall '12 succeeded in capturing the eastern boarder city of Goma.  In March '13, Bosco Ntaganda, the leader of <strong>M23</strong> who was wanted by the ICC for alleged war crimes, surrendered to the US Embacy in Kigali, likely due to infighting in the group.  Since then, the group's power has declined, though instability in the east remains endemic.</p>";

var idpText = "<h1>IDPs</h1><p>The number of <strong>IDPs</strong> increased to over 2.6 mil in April '13 due to the presence of various armed groups, including a 500% increase in Katanga province from 12 months earlier.  The <strong>M23</strong> insurgency has forced many residents of the <span class='navigate' data-location='-2.641,25.549,7'>Kivu provinces</span> to flee to refugee camps and spontaneous settlements, while the continued existence of the <strong>LRA</strong> along the <span class='navigate' data-location='3.431,25.604,7'>northern boarder</span> with South Sudan is responsible for the IDP concentrations in the north.</p>"



// Build base layer, where id:[['map_id',z-index],...]
// Set background layers w/ low z-index and label layers w/ high z-index
var baseLayer = {
	latlon:	[-4.062,15.842],
	zoom: 5,
	id: [
		['helsinki.map-co3d3zgz',-1000],
		['helsinki.drc_labels',1000]
		],
	text: intro
}


// Build map objects, accessed via each button's html id attribute.  
//would it be better/faster to build these via a custom object constructor?
var mapLayers = {
	unemployment:{
		id: 'helsinki.drc_development_ii',
		text: unemploymentText,
		legend: document.getElementById('unemploymentLegend').innerHTML
	},
	poverty:{
		id: 'helsinki.drc_development',
		text: povertyText,
		legend: document.getElementById('povertyLegend').innerHTML
	},
	mineralogy:{
		id: 'helsinki.drc_mineralogy',
		text: mineralogyText,
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
		id: 'helsinki.map-z2x5mbb1',
		text: artisanalMinesText,
		legend: document.getElementById('conflictMineralsLegend').innerHTML
	},
	acled:{
		id: 'helsinki.drc_acled',
		text: conflictText,
		legend: document.getElementById('acledLegend').innerHTML
	},
	idps:{
		id: 'helsinki.drc_idps',
		text: idpText,
		legend: document.getElementById('idpLegend').innerHTML
	},
	biodiversity:{
		id: 'helsinki.drc_biodiversity',
		text: biodiversityText,
		legend: document.getElementById('biodiversityLegend').innerHTML
	},
	forestCover:{
		id: 'helsinki.drc_forest_cover',
		text: deforestationText,
		legend: document.getElementById('forestryLegend').innerHTML
	},
	forestLoss:{
		id: 'helsinki.drc_forest_deforestation',
		text: deforestationText,
		legend: document.getElementById('forestryLegend').innerHTML
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