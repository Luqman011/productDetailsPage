var productImg = document.getElementById("productImg");
var smalling = document.getElementsByClassName("small-img");


smalling[0].onclick = function(){
    productImg.src = smalling[0].src;
}
smalling[1].onclick = function(){
    productImg.src = smalling[1].src;
}
smalling[2].onclick = function(){
    productImg.src = smalling[2].src;
}
smalling[3].onclick = function(){
    productImg.src = smalling[3].src;
}