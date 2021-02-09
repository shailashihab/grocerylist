function ajax(){

    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
            for (let i = 0; i < responseObj.length; i++) {
               output += "<tr height = 75>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
            
                }

    }
    xhttp.open("GET","list.json", true);
    xhttp.send();

    
    
}
function dry(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
           
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="Dry/Baking Goods") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
           
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function canned(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
          
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="Canned/Jarred Goods") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
           
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function diary(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
            
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="Diary") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function frozen(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
 
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="Frozen Section") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function bread(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
            
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="Bread/ Bakery") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function meat(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";

            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="Meat") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function health(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="The Health and Beauty Dept") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function produce(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="The Produce") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function dryfruits(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";
            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="Dry Fruits Section") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}
function seafood(){
    var output="";  
    var xhttp = new XMLHttpRequest();
    var dept = [];
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            var output = "";

            for (let i = 0; i < responseObj.length; i++) {
                if (responseObj[i].department==="The SeaFood Dept.") {
                    output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].department+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            
                }
            }
            document.getElementById("demo").innerHTML="<table border = '5' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"+output+"</table>";
            document.getElementById("demo").style.backgroundColor="yellow";
                }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();    
}


