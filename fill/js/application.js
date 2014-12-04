/**
 * Created by tanj on 2014/12/4.
 */
var grids = document.querySelectorAll(".grid-cell");
var size=4;
var gridColour=new Array();

initState();
refreshState();
for(var i=0;i<grids.length;i++)
{
    grids[i].addEventListener('click',function(){
        var currentIndex=parseInt(this.getAttribute("index"));
        changeAround(currentIndex);
        refreshState();
    })
};

function refreshState(){
    window.requestAnimationFrame(function () {
        for (i = 0; i < grids.length; i++) {
            var temp = Math.random();
            if(gridColour[i]){
                grids[i].setAttribute("class","grid-cell grid-cell-red");
            }
            else{
                grids[i].setAttribute("class","grid-cell grid-cell-blue");
            }
            grids[i].setAttribute("index",i);
        }
        ;
    })
}

function initState() {
    for(var i=0;i<size;i++){
        for(var j=0;j<size;j++){
            gridColour[i*4+j]=Math.random()>1;
        }
    }
}

function changeAround(index){
    gridColour[index]=!gridColour[index];
    if(index-4>=0)
    {
        gridColour[index-4]=!gridColour[index-4];
    }
    if(index%4>0)
    {
        gridColour[index-1]=!gridColour[index-1];
    }
    if(index+4>0){
        gridColour[index+4]=!gridColour[index+4];
    }
    if(index%4<3){
        gridColour[index+1]=!gridColour[index+1];
    }
}