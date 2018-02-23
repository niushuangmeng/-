// JavaScript Document
var left = document.getElementById("left");
var right = document.getElementById("right");
var img = document.getElementsByClassName("img");
window.setInterval(play(),3000);
var sy = 0;
function play(){
	var i = 0;
	i++;
	if(i>2){
		i=0;	
	}
	huan();
}
function huan(){
	for(var i=0;i<img.length;i++){
		img[i].style.display = "none";
	}
	img[sy].style.display = "block";	
}
left.onclick = function(){
        sy--;
        if(sy<0)
        {
            sy = 3;
        }
        huan();
}
right.onclick = function()
    {
        sy++;
        if(sy>3)
        {
            sy = 0;
        }
        huan();
    }
	var ord = document.getElementsByClassName("ord");
    for(var i=0;i<ord.length;i++)
    {
        ord[i].onclick = function()
        {
            var syh = parseInt(this.getAttribute("attr"));
            sy = syh ;
            huan();
        }
    }
