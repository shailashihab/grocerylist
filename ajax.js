function ajax(){

    var output="";  
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function (){
        if (this.readyState==4&&this.status==200) {
            var response = JSON.parse(this.responseText);
            var responseObj = response.products;
            
            var output = "";
            document.write("<table border = '2' >"+"<th width = 100 >"+"Sl.no."+"</th>"+"<th width = 100 >"+"name"+"</th>"+"<th width = 100 >"+"Quantity"+"</th>"+"<th width = 100 >"+"unit"+"</th>"+"<th width = 100 >"+"Department"+"</th>"+"<th width = 100 >"+"notes"+"</th>"
                )
            for (let i = 0; i < responseObj.length; i++) {
               output += "<tr height = 50>"+"<td width = 150>"+"<center>"+responseObj[i].snumber+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].name+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].quantity+"</center>"+"</td>"+"<td  width = 150 >"+"<center>"+responseObj[i].unit+"</td>"+"</center>"+"<td width = 150 >"+"<center>"+responseObj[i].deapartment+"</center>"+"</td>"+"<td width = 250 >"+"<center>"+responseObj[i].notes+"</center>"+"</td>"+"</tr>";   
            }
            document.write(output);
            document.write("</table>");
                }

    }
    xhttp.open("GET","list.json", true);
    xhttp.send();
    
}