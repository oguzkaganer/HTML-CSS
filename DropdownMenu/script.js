function showHideItems(clsName){
    var itemsHolder=document.getElementsByClassName(clsName)[0];
    var itemStyle=itemsHolder.style;
    itemStyle.display=="block"?itemStyle.display="none":itemStyle.display="block";
}
function slideBg(index){
   
    var slider=document.getElementsByClassName("slider")[0];
  
    var itemsHolder=document.getElementsByClassName("dropdown-items")[0];
    
    var ul=itemsHolder.children[1];
   
    var listItems=ul.children;

    var clicked = listItems[index].firstElementChild;

    var distance = clicked.offsetTop;

    console.log(distance);
   
    

   
}