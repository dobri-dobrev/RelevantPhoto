function query(){
	var name= $("#POI").val();
	var lat= $("#lat").val();
	var lon= $("#long").val();
	var urlJSON= createURL(name, lat, lon);
	console.log(urlJSON);
	$.getJSON(urlJSON, displayImages);
}
function displayImages(data) {
	console.log($("#textId").val());
	var photos = document.getElementById('photos');
	console.log(data.query.results.photo.length);
	for(var i=0; i<data.query.results.photo.length; i++){
		var ph=data.query.results.photo[i];
		var url="http://farm"+ph.farm+".staticflickr.com/"+ph.server+"/"+ph.id+"_"+ph.secret+".jpg";
		var oImg= createImg(url);
		photos.appendChild(oImg);
	}

function createURL(name, lat, lon){
	
	name=name.replace(/\s/g, "%20");
	var urlJ= "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.search%20where%20has_geo%3D%22true%22%20and%20text%3D%22";
	urlJ+=name;
	urlJ+="%22%20and%20lat%3D%22";
	urlJ+=lat;
	urlJ+="%22%20and%20lon%3D%22-";
	urlJ+=lon;
	urlJ+="%22%20and%20api_key%3D%";
	urlJ+="APIKEY";
	urlJ+="%22%20and%20sort%3D%22relevance%22%20and%20media%3D%22photos%22%20and%20radius%3D%222%22&format=json&diagnostics=true&callback=?";
	return urlJ;
}
   
}
function createImg(url){
	var img= document.createElement("img");
	img.setAttribute('src', url);
	img.setAttribute('alt', "fail");
	img.setAttribute('width', "300");
	img.setAttribute('height', "300");
	return img;
}


