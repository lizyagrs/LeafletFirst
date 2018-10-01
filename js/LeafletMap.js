var map;
function init(){
	map = L.map("map").setView([30.56486,114.353622 ], 10);  
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
}
