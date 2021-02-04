
function data(){
    
var output="";  
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function (){
    if (this.readyState==4&&this.status==200) {
        var response = JSON.parse(this.responseText);
        var responseObj = response.products;
        
        
        for (let i = 0; i < responseObj.length; i++) {
            
               
            
        }
        
            }
}
xhttp.open("GET","list.json", true);
xhttp.send();

}
