
const apiKey = 'pk.eyJ1IjoiY21hcmVsbGFubyIsImEiOiJja3ZweHZvYXE4YTRrMnVxdzRpYmZneTlkIn0.rgwiK0txDZxOTK1GiNC0cw'


// <!-- CENTER MAP  -->


var map = L.map('map', {
	center: [47.800, 13.05],
	zoom: 11.75
});

map.flyTo([47.808, 13.045], 14.41);



// <!-- DATA  -->


var asianmrkt1_Json = {"type":"FeatureCollection","name":"asian_MARKETS_3","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"name":"Asia Indo Pak - Orientalischer, Indischer Laden","lat":47.81152179,"lon":13.04349457,"lat_D":47.81152179,"lon_D":13.04349457,"street":"Saint-Julien-Straße","hausno":17,"code":5020,"area":"Salzburg","time_s1":"10:00 AM","time_e1":"8:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43664312457,"website":"-","online":null,"instore":"In-store Shopping","tag1":"Indian","tag2":"Asian","stars":4.5,"reviews":25,"zgis_ddist":1.61,"zgis_dt":4.46,"zgis_wdist":1.61,"zgis_wt":"19.32","plus_ddist":4.46,"plus_wt":12.82,"plus_wdist":1.95,"plus_wt_1":23.29,"img":"https://i.ibb.co/GpyyTzt/asiaindo.png"},"geometry":{"type":"Point","coordinates":[13.043494570000064,47.81152179000003]}},{"type":"Feature","properties":{"name":"AEKSHEA FOODS","lat":47.80987899,"lon":13.04782902,"lat_D":47.80987899,"lon_D":13.04782902,"street":"Gabelsbergerstraße","hausno":11,"code":5020,"area":"Salzburg","time_s1":"10:00 AM","time_e1":"6:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662880138,"website":"https://www.aeksheafoods.at/","online":"Online Store","instore":"In-store Shopping","tag1":"Indian","tag2":"Asian","stars":4.7,"reviews":51,"zgis_ddist":2.23,"zgis_dt":5.79,"zgis_wdist":2.19,"zgis_wt":"26.23","plus_ddist":4.32,"plus_wt":13.12,"plus_wdist":1.84,"plus_wt_1":22.13,"img":"https://i.ibb.co/0cJVzhg/aekshea1.jpg"},"geometry":{"type":"Point","coordinates":[13.047829020000052,47.80987899000007]}},{"type":"Feature","properties":{"name":"Look! Asia Supermarkt","lat":47.80676616,"lon":13.05495296,"lat_D":47.80676616,"lon_D":13.05495296,"street":"Schallmooser Hauptstraße","hausno":29,"code":5020,"area":"Salzburg","time_s1":"9:00 AM","time_e1":"6:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662874751,"website":"-","online":null,"instore":"In-store Shopping","tag1":"Asian","tag2":null,"stars":4.6,"reviews":34,"zgis_ddist":2.91,"zgis_dt":6.99,"zgis_wdist":2.79,"zgis_wt":"33.44","plus_ddist":4.44,"plus_wt":13.24,"plus_wdist":1.69,"plus_wt_1":20.27,"img":"https://i.ibb.co/qxzt2Ss/look.jpg"},"geometry":{"type":"Point","coordinates":[13.054952960000037,47.80676616000005]}},{"type":"Feature","properties":{"name":"Asiatischer Spezialitäten Markt","lat":47.80530518,"lon":13.0443777,"lat_D":47.80530518,"lon_D":13.0443777,"street":"Schrannengasse","hausno":2,"code":5020,"area":"Salzburg","time_s1":"9:00 AM","time_e1":"6:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662873668,"website":"http://www.asiamarkt-salzburg.com/","online":null,"instore":"In-store Shopping","tag1":"Asian","tag2":null,"stars":4.6,"reviews":396,"zgis_ddist":2.58,"zgis_dt":7.22,"zgis_wdist":2.24,"zgis_wt":"26.89","plus_ddist":3.7,"plus_wt":11.14,"plus_wdist":1.24,"plus_wt_1":14.84,"img":"https://i.ibb.co/dLmqG6Q/asiatischer.png"},"geometry":{"type":"Point","coordinates":[13.044377700000041,47.80530518000006]}},{"type":"Feature","properties":{"name":"Oriental Asia Shop","lat":47.80510825,"lon":13.04527988,"lat_D":47.80510825,"lon_D":13.04527988,"street":"Faberstraße","hausno":2,"code":5020,"area":"Salzburg","time_s1":"9:00 AM","time_e1":"6:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662880452,"website":"-","online":null,"instore":"In-store Shopping","tag1":"Asian","tag2":null,"stars":4.7,"reviews":3,"zgis_ddist":2.47,"zgis_dt":6.81,"zgis_wdist":2.33,"zgis_wt":"28.01","plus_ddist":3.59,"plus_wt":10.73,"plus_wdist":1.21,"plus_wt_1":14.46,"img":"https://i.ibb.co/V9wptbr/oriental.png"},"geometry":{"type":"Point","coordinates":[13.045279880000066,47.805108250000046]}},{"type":"Feature","properties":{"name":"Cheung Kwok Man","lat":47.80506225,"lon":13.04557992,"lat_D":47.80506225,"lon_D":13.04557992,"street":"Faberstraße","hausno":2,"code":5020,"area":"Salzburg","time_s1":"9:00 AM","time_e1":"6:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662880452,"website":"-","online":null,"instore":"In-store Shopping","tag1":"Asian","tag2":null,"stars":4.3,"reviews":26,"zgis_ddist":2.47,"zgis_dt":6.79,"zgis_wdist":2.38,"zgis_wt":"28.6","plus_ddist":3.59,"plus_wt":10.71,"plus_wdist":1.21,"plus_wt_1":14.48,"img":"https://i.ibb.co/sPs5Npz/cheungkwok.jpg"},"geometry":{"type":"Point","coordinates":[13.045579920000023,47.80506225000005]}},{"type":"Feature","properties":{"name":"Asia Food - LongLong","lat":47.79712624,"lon":13.02710566,"lat_D":47.79712624,"lon_D":13.02710566,"street":"Maxglaner Hauptstraße","hausno":12,"code":5020,"area":"Salzburg","time_s1":"9:00 AM","time_e1":"6:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662820393,"website":"https://asia-salzburg.at/","online":"Online Store","instore":"In-store Shopping","tag1":"Asian","tag2":null,"stars":4.7,"reviews":136,"zgis_ddist":4.22,"zgis_dt":10.91,"zgis_wdist":4.5,"zgis_wt":null,"plus_ddist":3.62,"plus_wt":9.68,"plus_wdist":2.15,"plus_wt_1":25.74,"img":"https://i.ibb.co/BcGKj3p/longlomg.png"},"geometry":{"type":"Point","coordinates":[13.027105660000075,47.79712624000007]}},{"type":"Feature","properties":{"name":"AEKSHEA FOODS","lat":47.81893942,"lon":13.07416357,"lat_D":47.81893942,"lon_D":13.07416357,"street":"Linzer Bundesstraße","hausno":68,"code":5020,"area":"Salzburg","time_s1":"10:00 AM","time_e1":"7:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662661186,"website":"https://www.aeksheafoods.at/","online":"Online Store","instore":"In-store Shopping","tag1":"Indian","tag2":"Asian","stars":4.5,"reviews":70,"zgis_ddist":3.86,"zgis_dt":8.58,"zgis_wdist":3.83,"zgis_wt":"45.98","plus_ddist":5.51,"plus_wt":13.59,"plus_wdist":3.85,"plus_wt_1":46.23,"img":"https://i.ibb.co/HtHJkqP/aekshea2.png"},"geometry":{"type":"Point","coordinates":[13.074163570000053,47.81893942000005]}},{"type":"Feature","properties":{"name":"Daya Indian Shop","lat":47.81001506,"lon":13.04730572,"lat_D":47.81001506,"lon_D":13.04730572,"street":"Gabelsbergerstraße","hausno":7,"code":5020,"area":"Salzburg","time_s1":"10:00 AM","time_e1":"7:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662871431,"website":"-","online":null,"instore":"In-store Shopping","tag1":"Indian","tag2":"Asian","stars":3.7,"reviews":21,"zgis_ddist":2.22,"zgis_dt":5.77,"zgis_wdist":2.18,"zgis_wt":"26.11","plus_ddist":4.31,"plus_wt":13.1,"plus_wdist":1.84,"plus_wt_1":22.1,"img":"https://i.ibb.co/2kQgWWB/daya.jpg"},"geometry":{"type":"Point","coordinates":[13.047305720000054,47.81001506000007]}},{"type":"Feature","properties":{"name":"Asiatische Spezialitäten Panda","lat":47.8064851,"lon":13.04900134,"lat_D":47.8064851,"lon_D":13.04900134,"street":"Paris-Lodron-Straße","hausno":17,"code":5020,"area":"Salzburg","time_s1":"9:00 AM","time_e1":"6:00 PM","M":"M","T":"T","W":"W","TH":"TH","F":"F","SAT":"Sa","SUN":"-","tel":43662876396,"website":"-","online":null,"instore":"In-store Shopping","tag1":"Asian","tag2":null,"stars":4.4,"reviews":20,"zgis_ddist":2.69,"zgis_dt":9.1,"zgis_wdist":2.65,"zgis_wt":"30.31","plus_ddist":4.25,"plus_wt":12.03,"plus_wdist":1.45,"plus_wt_1":17.62,"img":"https://i.ibb.co/DCf9g9j/panda.jpg"},"geometry":{"type":"Point","coordinates":[13.049001340000075,47.80648510000003]}}]};

	var asianmrkt_icon = L.icon({
		iconUrl: 'css/images/cart.png',
		iconSize: [28,28]
	});


var asianmrkt = L.geoJson(asianmrkt1_Json, {
	pointToLayer: function(feature, latlng) {
		return  L.marker(latlng, {icon:asianmrkt_icon, title: "Asian Market in Salzburg"});
	},
	onEachFeature: function(feature, marker) {
		marker.bindPopup( 
		'<img src="'+ feature.properties.img +'" style="width:200px;height:150px;">' + "<br>" + "<br>" +
		'<b> '+ feature.properties.name +' </b>'+  "<br>" + "<br>" + 


		'<i> '+ feature.properties.tag1 +' </i>'+  "<br>" +
		"Address: "  + feature.properties.street + "  " + feature.properties.hausno + "<br>" +
		" Area: " + feature.properties.code + "  " + feature.properties.area + "<br>" + "<br>" +
		"Days Open: " + feature.properties.M + " " + feature.properties.T + " " + feature.properties.W + " " + feature.properties.TH + " " + feature.properties.F + " " + feature.properties.SAT + " " + feature.properties.SUN + " "  + "<br>" + 
		"Opening Hours: " + feature.properties.time_s1 + " to " + feature.properties.time_e1 + "<br>" +
		"Phone: "+ feature.properties.tel +  "<br>" + 
		"Website: "+ '<a href="' + feature.properties.website +'" > '+ feature.properties.website + ' </a>' + " " + "<br>" + "<br>" + "<br>" + 
		
		"from Techno-Z: " + "<br>" +
		'<img src="https://i.ibb.co/WvTKs1H/car.png" style="width:17px;height:17px;">' + "   " + feature.properties.zgis_dt + " mins" +  "<br>" +
		'<img src="https://i.ibb.co/f1gn8sd/walk.png" style="width:17px;height:17px;">' + "   " + feature.properties.zgis_wt + " mins" +  "<br>" + "<br>" +

		"from University of Salzburg: " + "<br>" +
		'<img src="https://i.ibb.co/WvTKs1H/car.png" style="width:17px;height:17px;">' + "   " + feature.properties.plus_wt + " mins" +  "<br>" +
		'<img src="https://i.ibb.co/f1gn8sd/walk.png" style="width:17px;height:17px;">' + "   " + feature.properties.plus_wt_1 + " mins" +  "<br>" + "<br>" 

		 );
	}

});
asianmrkt.addTo(map);



var asian_restau_Json = {
"type":"FeatureCollection","name":"asian_RESTAU_2","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"FID_":1,"name":"Yaoyao","tag1":"Asian","tag2":null,"lon":13.00842313,"lat":47.81651812,"street":"Europastraße 1","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"10:00 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"-","website":"http://www.yaoyao.at/","phone":"43662257447","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":4.6,"review":1074},"geometry":{"type":"Point","coordinates":[13.00842313000004,47.81651812000007]}},{"type":"Feature","properties":{"FID_":2,"name":"Kim 168","tag1":"Asian","tag2":null,"lon":13.04266684,"lat":47.80010836,"street":"Getreidegasse 14","zip":5020,"city":"Salzburg","time_s1":"12:00 PM","time_e1":"11:00 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"-","phone":"436607700798","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€","stars":4.3,"review":561},"geometry":{"type":"Point","coordinates":[13.042666840000038,47.80010836000008]}},{"type":"Feature","properties":{"FID_":3,"name":"Asia Kitchen","tag1":"Asian","tag2":null,"lon":13.04121612,"lat":47.80831611,"street":"Ernest-Thun-Straße 13","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:30 PM","time_s2":"5:30 PM","time_e2":"10:00 PM","mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.asia-kitchen.com/","phone":"43662871600","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":4.4,"review":1058},"geometry":{"type":"Point","coordinates":[13.041216120000058,47.80831611000008]}},{"type":"Feature","properties":{"FID_":4,"name":"Happy Asia Restaurant","tag1":"Asian","tag2":null,"lon":13.04248372,"lat":47.81003955,"street":"Rainerstraße 24","zip":5020,"city":"Salzburg","time_s1":"10:00 AM","time_e1":"12:00 AM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.happyasia-salzburg.at/","phone":"43662873396","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":null,"stars":2.3,"review":168},"geometry":{"type":"Point","coordinates":[13.042483720000064,47.810039550000056]}},{"type":"Feature","properties":{"FID_":5,"name":"Yiyami","tag1":"Chinese","tag2":"Asian","lon":13.04834539,"lat":47.80581524,"street":"Franz-Josef-Straße 24","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:30 PM","time_s2":"5:30 PM","time_e2":"10:00 PM","mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"https://www.yiyami.at/","phone":"43662882154","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":null,"stars":4.3,"review":117},"geometry":{"type":"Point","coordinates":[13.048345390000065,47.80581524000007]}},{"type":"Feature","properties":{"FID_":6,"name":"Wang Cooking","tag1":"Chinese","tag2":"Asian","lon":13.04353247,"lat":47.81475338,"street":"Südtiroler Pl. 13","zip":5020,"city":"Salzburg","time_s1":"10:00 AM","time_e1":"8:00 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"-","website":"-","phone":"-","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€","stars":3.9,"review":158},"geometry":{"type":"Point","coordinates":[13.04353247000006,47.81475338000007]}},{"type":"Feature","properties":{"FID_":7,"name":"Mister Le","tag1":"Asian","tag2":null,"lon":13.03780996,"lat":47.79794472,"street":"Hildmannpl. 2A","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"9:00 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.misterle.at/","phone":"436602264909","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€","stars":4.7,"review":282},"geometry":{"type":"Point","coordinates":[13.037809960000061,47.79794472000003]}},{"type":"Feature","properties":{"FID_":8,"name":"Pan Asia","tag1":"Chinese","tag2":"Asian","lon":13.00143738,"lat":47.80738609,"street":"Siezenheimer Str. 62","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:30 PM","time_s2":"5:30 PM","time_e2":"11:00 PM","mon":"-","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.pan-asia.at/","phone":"43662434291","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":null,"stars":4.6,"review":308},"geometry":{"type":"Point","coordinates":[13.001437380000027,47.80738609000008]}},{"type":"Feature","properties":{"FID_":9,"name":"Mr Wen Asia Food","tag1":"Chinese","tag2":"Asian","lon":13.04413666,"lat":47.81185334,"street":"Rainerstraße 30","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"10:00 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.mrwenasiafood.com/","phone":"43662873189","delivery":"Delivery","dinein":"Dine-in","takeout":"Takeout","price":"€","stars":4.6,"review":213},"geometry":{"type":"Point","coordinates":[13.04413666000005,47.81185334000003]}},{"type":"Feature","properties":{"FID_":10,"name":"Kolala Asia Buffet Restaurant","tag1":"Asian","tag2":null,"lon":13.00832396,"lat":47.79801317,"street":"Karolingerstraße 1","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:30 PM","time_s2":"5:30 PM","time_e2":"10:30 PM","mon":"M","tue":"T","wed":"W","thur":"-","fri":"F","sat":"Sa","sun":"Su","website":"http://www.kolala.at/","phone":"43662825895","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":3.9,"review":163},"geometry":{"type":"Point","coordinates":[13.008323960000041,47.79801317000005]}},{"type":"Feature","properties":{"FID_":11,"name":"Akakiko Forum 1 - Sushi & Asian Fusion","tag1":"Japanese","tag2":"Asian","lon":13.04333222,"lat":47.8141519,"street":"Südtiroler Pl. 11","zip":5020,"city":"Salzburg","time_s1":"10:30 AM","time_e1":"11:00 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.akakiko.at/","phone":"4357333270","delivery":"Delivery","dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":4.3,"review":423},"geometry":{"type":"Point","coordinates":[13.043332220000025,47.81415190000007]}},{"type":"Feature","properties":{"FID_":12,"name":"Nippo Japanese Restaurant","tag1":"Japanese","tag2":"Asian","lon":13.05234457,"lat":47.78653135,"street":"Hofhaymer Allee 17","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:00 PM","time_s2":"5:00 PM","time_e2":"9:30 PM","mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"https://www.nippo-japanese-restaurant.at/","phone":"43662420105","delivery":"Delivery","dinein":"Dine-in","takeout":"Takeout","price":null,"stars":4.4,"review":5},"geometry":{"type":"Point","coordinates":[13.05234457000006,47.786531350000075]}},{"type":"Feature","properties":{"FID_":13,"name":"Maneki Neko Salzburg","tag1":"Asian","tag2":null,"lon":13.05059502,"lat":47.79662878,"street":"Kaigasse 34","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"7:30 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"-","sun":"-","website":"http://www.manekineko.at/","phone":"43662840898","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":4.4,"review":314},"geometry":{"type":"Point","coordinates":[13.05059502000006,47.79662878000005]}},{"type":"Feature","properties":{"FID_":14,"name":"Yuen Restaurant","tag1":"Chinese","tag2":"Asian","lon":13.04179337,"lat":47.80026467,"street":"Getreidegasse 24","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"3:00 PM","time_s2":"5:30 PM","time_e2":"10:00 PM","mon":"-","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.yuen.at/","phone":"43662843770","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":4.5,"review":548},"geometry":{"type":"Point","coordinates":[13.04179337000005,47.80026467000005]}},{"type":"Feature","properties":{"FID_":15,"name":"Tasty Asia China-Restaurant Asia","tag1":"Asian","tag2":null,"lon":13.06935799,"lat":47.77513942,"street":"Alpenstraße 107, 5020 Salzburg","zip":5020,"city":"Salzburg","time_s1":"9:00 AM","time_e1":"7:00 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"-","website":"-","phone":"-","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":null,"stars":3.2,"review":12},"geometry":{"type":"Point","coordinates":[13.069357990000071,47.77513942000007]}},{"type":"Feature","properties":{"FID_":16,"name":"China-Restaurant An Bing","tag1":"Chinese","tag2":"Asian","lon":13.04608533,"lat":47.7992731,"street":"Goldgasse 13","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:30 PM","time_s2":"5:30 PM","time_e2":"10:00 PM","mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://anbing.at/","phone":"43662841779","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":3.8,"review":222},"geometry":{"type":"Point","coordinates":[13.04608533000004,47.79927310000005]}},{"type":"Feature","properties":{"FID_":17,"name":"Bangkok Restaurant","tag1":"Thai","tag2":"Asian","lon":13.05041311,"lat":47.8105001,"street":"Bayerhamerstraße 33","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:30 PM","time_s2":"5:30 PM","time_e2":"11:00 PM","mon":"-","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"http://www.restaurant-bangkok.at/","phone":"43662873688","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":4.5,"review":605},"geometry":{"type":"Point","coordinates":[13.050413110000022,47.81050010000007]}},{"type":"Feature","properties":{"FID_":18,"name":"Canton China-Restaurant","tag1":"Chinese","tag2":"Asian","lon":13.03742825,"lat":47.7974462,"street":"Neutorstraße 9","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"2:30 PM","time_s2":"5:30 PM","time_e2":"10:00 PM","mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"Sa","sun":"Su","website":"-","phone":"43662845464","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€€","stars":3.8,"review":188},"geometry":{"type":"Point","coordinates":[13.037428250000062,47.79744620000008]}},{"type":"Feature","properties":{"FID_":19,"name":"Sa`s Thai Küche","tag1":"Thai","tag2":"Asian","lon":13.04447377,"lat":47.82141629,"street":"Itzlinger Hauptstraße 28","zip":5020,"city":"Salzburg","time_s1":"11:30 AM","time_e1":"7:30 PM","time_s2":null,"time_e2":null,"mon":"M","tue":"T","wed":"W","thur":"TH","fri":"F","sat":"-","sun":"-","website":"http://www.sasthaikueche.jimdofree.com/","phone":"4.36607E+11","delivery":null,"dinein":"Dine-in","takeout":"Takeout","price":"€","stars":4.9,"review":212},"geometry":{"type":"Point","coordinates":[13.044473770000025,47.82141629000006]}}]};


	var asian_restau_icon = L.icon({
			iconUrl: 'css/images/ramen.png',
			iconSize: [22,22]
	});

var asian_restau = L.geoJson(asian_restau_Json, {
	pointToLayer: function(feature, latlng) {
		return  L.marker(latlng, {icon:asian_restau_icon, title: "Asian Restaurant in Salzburg"});
	},
	onEachFeature: function(feature, marker) {
		marker.bindPopup(


		'<b> '+ feature.properties.name + ' </b>'+ "<br>" + "<br>" + 
		'<i> '+ feature.properties.tag1 +' </i>'+  "<br>" +
		"Address: "  + feature.properties.street + "<br>" +
		"Area: " + feature.properties.zip+ "  " + feature.properties.city + "<br>" + "<br>" + 
		"Days Open: " + feature.properties.mon + " " + feature.properties.tue + " " + feature.properties.wed + " " + feature.properties.thur + " " + feature.properties.fri + " " + feature.properties.sat + " " + feature.properties.sun + " "  + "<br>" + 
		"Opening Hours: " + feature.properties.time_s1 + " to " + feature.properties.time_e1 + "<br>" +
		"Phone:"+ feature.properties.phone +  "<br>" + 
		"Website: "+ '<a href="' + feature.properties.website +'" > '+ feature.properties.website + ' </a>' + " " + "<br>" + "<br>"  
		
);
	}
});




var zgis_Json = {
	"type":"FeatureCollection","name":"zgis","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"name":"Techno-Z (Z_GIS)","lat":47.823657,"lon":13.039115,"street":"Schillerstraße 30","zip":5020,"city":"Salzburg","website":"http://www.zgis.at/","phone":4366280447510},"geometry":{"type":"Point","coordinates":[13.039115,47.823657]}}]};

	var zgis_icon = L.icon({
			iconUrl: 'css/images/school.png',
			iconSize: [21,21]
	});

var zgis = L.geoJson(zgis_Json, {
	pointToLayer: function(feature, latlng) {
		return  L.marker(latlng, {icon:zgis_icon, title: "Techno-Z ZGIS"});
	},
	onEachFeature: function(feature, marker) {
		marker.bindPopup(feature.properties.name +  "<br>" + 
		feature.properties.street + "<br>" +
		feature.properties.zip+ "  " + feature.properties.city +  "<br>" + 
		feature.properties.phone +  "<br>" + 
		feature.properties.website);
	}
});



var plus_Json = {
	"type":"FeatureCollection","name":"plus","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"name":"University of Salzburg","lat":47.79751436,"lon":13.04803975,"street":"Kapitelgasse 4/6","zip":5020,"city":"Salzburg","website":"https://www.plus.ac.at/","phone":4366280440},"geometry":{"type":"Point","coordinates":[13.048039750000044,47.79751436000004]}}]};
	
	var plus_icon = L.icon({
			iconUrl: 'css/images/uni.png',
			iconSize: [25,25]
	});

var plus = L.geoJson(plus_Json, {
	pointToLayer: function(feature, latlng) {
		return  L.marker(latlng, {icon:plus_icon, title: "University of Salzburg"});
	},
	onEachFeature: function(feature, marker) {
		marker.bindPopup(feature.properties.name +  "<br>" + 
		feature.properties.street + "<br>" +
		feature.properties.zip+ "  " + feature.properties.city +  "<br>" + 
		feature.properties.phone +  "<br>" + 
		feature.properties.website);
	}
});


var features = {
	"Asian Markets": asianmrkt,
	"Asian Restaurants": asian_restau,
	"Techno-Z": zgis,
	"PLUS": plus
}





//   <!-- BASEMAP --> https://leaflet-extras.github.io/leaflet-providers/preview/

var landscape = L.tileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
	attribution: 'Tiles from Thunderforest'});
var Thunderforest_Neighbourhood = L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '<your apikey>',
	maxZoom: 22});
var Jawg_Sunny = L.tileLayer('https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: '<your accessToken>'});
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'});
var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, '});
var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16});
var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20});    //.addTo(map);
var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/cmarellano/ckvpznof02v0h14pdhdm0j13m/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY21hcmVsbGFubyIsImEiOiJja3ZweHZvYXE4YTRrMnVxdzRpYmZneTlkIn0.rgwiK0txDZxOTK1GiNC0cw', {
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);



var baseMaps = {
	"Landscape": landscape,
	"Roads": Esri_WorldTopoMap,
	"Mapbox"  : mapbox
}

L.control.layers(baseMaps, features).addTo(map);



// <!--  SCALE BAR -->

L.control.scale({position:'bottomright',imperial:false}).addTo(map);



//  MORE


map.on('click', onClick);


















