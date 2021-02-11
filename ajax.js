var output=""; 
var flag=0;
function myajax(){
     
    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            if (flag===1) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                                 if (responseObj[i].department==="Dry/Baking Goods") {
                                     output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                                 }
                             }
                           
            }
            else if (flag===2) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="Canned/Jarred Goods") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                    }
                }
               
            }
            else if (flag===3) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="Diary") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===4) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="Frozen Section") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===5) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="Bread/ Bakery") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===6) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="Meat") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===7) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="The Health and Beauty Dept") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===8) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="The Produce") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===9) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="Dry Fruits Section") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===10) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    if (responseObj[i].department==="The SeaFood Dept.") {
                        output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                
                    }
                }
            }
            else if (flag===11) {
                var output="";
                for (let i = 0; i < responseObj.length; i++) {
                    output += "<tr>"+"<th scope='row'>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
                 }
                
            }
            document.getElementById("demo").innerHTML="<table class='table'>"+"<thead>"+"<th scope='col'>"+"Sl.no."+"</th>"+"<th scope='col' >"+"name"+"</th>"+"<th scope='col' >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th scope='col' >"+"Department"+"</th>"+"<th scope='col' >"+"notes"+"</th>"+"</thead>"+"<tbody>"+output+"</tbody>"+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
            
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();
      
}

function dry(){ 
    flag=1;
    myajax();    
}
function canned(){ 
    flag=2;
    myajax();
}
function diary(){ 
    flag=3;
    myajax();    
}
function frozen(){
    flag=4;
    myajax();    
}
function bread(){
    flag=5;
    myajax();   
}
function meat(){
    flag=6;
    myajax();    
}
function health(){
    flag=7;
    myajax();   
}
function produce(){
    flag=8;
    myajax();    
}
function dryfruits(){
    flag=9;
    myajax();    
}
function seafood(){
    flag=10;
    myajax();   
}
function ajax(){
    flag=11;
    myajax();    
    }   


