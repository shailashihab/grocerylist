function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if (this.readyState===4&&this.status===200) {
           
            var response = JSON.parse(this.responseText);
            console.log(response);
            var Glist = response.products;
            console.log(Glist);
           
            var i=0;
      
            
            document.writeln("<table border = '2' width = 1400><th><h1>Sl.No.</h1></th><th><h1>Name</h1></th><th><h1>Quantity</h1></th><th><h1>Unit</h1></th><th><h1>Department</h1></th><th><h1>Notes</h1></th>>");
            
            for ( i = 0; i < Glist.length; i++) {
                    document.writeln("<tr height =50>>");
                 
                    document.writeln("<td width = 200>" + Glist[i].snumber+"</td>");
                    document.writeln("<td width = 200>" + Glist[i].name +"</td>");
                    document.writeln("<td width = 200>" + Glist[i].quantity +"</td>");
                    document.writeln("<td width = 200>" + Glist[i].unit +"</td>");
                    document.writeln("<td width = 200>" + Glist[i].department +"</td>");
                    document.writeln("<td width = 200>" + Glist[i].notes +"</td>");
                   
                    document.writeln("</tr>");


                
            }
            document.writeln("</table>");

        }
    }
    xhttp.open("GET","list.json", true);
    xhttp.send();
}