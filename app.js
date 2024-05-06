function Total(){
    var sub1 = parseInt(document.getElementById("eng").value)
    var sub2 = parseInt(document.getElementById("mat").value)
    var sub3 = parseInt(document.getElementById("sci").value)
    var sub4 = parseInt(document.getElementById("phy").value)
    var sub5 = parseInt(document.getElementById("bio").value)
    
    if(sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100){
        alert("Please Enter mark in range of 100")
    }else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "English marks : " + sub2 + "<br> Mathermatic marks " 
        + sub3 + "<br> Science marks : "  + sub4 + "<br> Physic marks : "  + sub5 + "<br> Biology marks : " + sub1 
        + "<br> _______________ <br> Total marks : " + total;
    }
}

function Average(){
    var sub1 = parseInt(document.getElementById("eng").value)
    var sub2 = parseInt(document.getElementById("mat").value)
    var sub3 = parseInt(document.getElementById("sci").value)
    var sub4 = parseInt(document.getElementById("phy").value)
    var sub5 = parseInt(document.getElementById("bio").value)

    if(sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100){
        alert("Please Enter mark in range of 100")
    }else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var Average = total/5;
        document.getElementById("average").innerHTML = "Your average marks is : " + Average
    }
}

function Grade(){
    var sub1 = parseInt(document.getElementById("eng").value)
    var sub2 = parseInt(document.getElementById("mat").value)
    var sub3 = parseInt(document.getElementById("sci").value)
    var sub4 = parseInt(document.getElementById("phy").value)
    var sub5 = parseInt(document.getElementById("bio").value)

    if(sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100){
        alert("Please Enter mark in range of 100")
    }else{
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var Average = total/5;
        if(Average>=80 && Average<=100){
            document.getElementById("grade").innerHTML="Your grade is A"
        }
        else if(Average>=70 && Average<=79){   
            document.getElementById("grade").innerHTML="Your grade is B"
        }
        else if(Average>=60 && Average<=69){   
            document.getElementById("grade").innerHTML="Your grade is C"
        }
        else if(Average>=50 && Average<=59){   
            document.getElementById("grade").innerHTML="Your grade is D"
        }
        else if(Average>=45 && Average<=50){   
            document.getElementById("grade").innerHTML="Your grade is F"
        }
        else{
            document.getElementById("grade").innerHTML="You are fail in exam"
        }
        }
    }
