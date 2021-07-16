function add(val){
    document.getElementById("cal").value+=val;
 
}
function solve(){
    var x= document.getElementById("cal").value;
    var y =eval(x);
    document.getElementById("cal").value=y;
}
function clr()
{
document.getElementById("cal").value = "";
}