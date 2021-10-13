var map;
function init(){
	map = L.map("map").setView([30.56486,114.353622 ], 10);  
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	foo: 'bar'}).addTo(map);
	
	//服务地址
	var url='http://39.100.31.4:8080/geoserver/LightWebGIS/wms' 
	//构建图层属性
	const bounderLayer = L.tileLayer.wms(url, {
		//图层名称
		layers: 'LightWebGIS:Search_Polygon', 
		//图层格式
		format: "image/png",
		//投影坐标系类型
		crs: L.CRS.EPSG4326,
		//透明度
		opacity: 0.5,
		transparent: true
	}).addTo(map);
}
