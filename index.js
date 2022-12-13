function checkEligibility() {

    let age = document.getElementById("age").value;

    if(age > 100) {
        document.getElementById("p1").innerHTML="plese Enter valid age";
        document.getElementById("p1").style.color="red";
        // return false;
    }

    if(age >=  18) {
        document.getElementById("p1").innerHTML="you are eligible for vote";
        document.getElementById("p1").style.color="black";
    } else {

         document.getElementById("p1").innerHTML="you are not eligible for vote";
         document.getElementById("p1").style.color="black";
    }

}

function checkGrade() {
    let marks = document.getElementById("marks").value;

    
    if(marks>100 || marks < 0 ) {
        document.getElementById("p2").innerHTML = "plese enter valid marks";
        document.getElementById("p2").style.color="red";
        return false;

    }
    if(marks >75) {
        document.getElementById("p2").innerHTML="first class with Distinction";

    } else if(marks >60) {
         document.getElementById("p2").innerHTML="first class";

    } else if(marks >50){
         document.getElementById("p2").innerHTML="second class";

    }else if(marks >35){
        document.getElementById("p2").innerHTML="pass"

    }else{
        document.getElementById("p2").innerHTML="fail";
        document.getElementById("p2").style.color="red";
    }

    }

    function check() {
        let gender = document.getElementById("gender").value;
        let age1 = document.getElementById("age1").value;

        if(gender =="male") {
            if(age1 >26) {
                document.getElementById("p3").innerHTML="Eligible for wedding";
           
            } else {
                document.getElementById("p3").innerHTML= "Not eligible for wedding";
            }


        }else {
            if(age1 >24) {
                document.getElementById("p3").innerHTML ="eligible for wedding";

            } else { 
                document.getElementById("p3").innerHTML= "eligible not wedding";
            }
        }
         
    
        
    }

