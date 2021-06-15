const form = document.getElementById('regForm');
/*const summary = document.getElementById('step-summary');
const clear = document.getElementById('step-clear');

// Remove all children of the summary list.
function clearSummary() {
    while (summary.firstElementChild) {
        summary.firstElementChild.remove();
    }
}
*/



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";






    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("prevBtn1").style.display = "none";
        document.querySelector(".shopKnap").style.display = "none";

        document.getElementById("doer").style.display = "none"
        document.getElementById("maaler").style.animationDirection = "reverse"
        $("#maaler").replaceWith($("#maaler").clone(true));





    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }



    //maaler
    if (n == 1) {



        document.getElementById("doer").style.animationDirection = "reverse"
        $("#doer").replaceWith($("#doer").clone(true));
        document.getElementById("doer2").style.display = "none"

        if (document.getElementById("maaler").style.display = "none") {



            document.getElementById("maaler").style.display = "inline"
            document.getElementById("maaler").style.animationDirection = "alternate"
        }




    }


    //doer/indbrud
    else if (n == 2) {

        document.getElementById("doer2").style.animationDirection = "reverse"
        $("#doer2").replaceWith($("#doer2").clone(true));
        document.getElementById("vindue").style.display = "none"



        document.getElementById("doer").style.display = "inline"
        document.getElementById("doer").style.animationDirection = "alternate"



    }
    //doer2
    else if (n == 3) {

        document.getElementById("vindue").style.animationDirection = "reverse"
        $("#vindue").replaceWith($("#vindue").clone(true));
        document.getElementById("kaele").style.display = "none"



        document.getElementById("doer2").style.display = "inline"
        document.getElementById("doer2").style.animationDirection = "alternate"

    }
    //vindue
    else if (n == 4) {

        document.getElementById("kaele").style.animationDirection = "reverse"
        $("#kaele").replaceWith($("#kaele").clone(true));

        document.getElementById("brand").style.display = "none"

        document.getElementById("vindue").style.display = "inline"
        document.getElementById("vindue").style.animationDirection = "alternate"

        //kæle
    } else if (n == 5) {

        document.getElementById("brand").style.animationDirection = "reverse"
        $("#brand").replaceWith($("#brand").clone(true));

        document.getElementById("postnum").style.display = "none"

        document.getElementById("kaele").style.display = "inline"
        document.getElementById("kaele").style.animationDirection = "alternate"
        $("#brand").replaceWith($("#brand").clone(true));

    }
    //brand
    else if (n == 6) {

        $("#post").replaceWith($("#postnum").clone(true));

        document.getElementById("postnum").style.animationDirection = "reverse"


        document.getElementById("mobil").style.display = "none"

        document.getElementById("brand").style.display = "inline"
        document.getElementById("brand").style.animationDirection = "alternate"
        $("#postnum").replaceWith($("#postnum").clone(true));

    }
    //mobil
    else if (n == 7) {

        document.getElementById("postnum").style.display = "inline"
        document.getElementById("postnum").style.animationDirection = "alternate"

        document.getElementById("mobil").style.animationDirection = "reverse"
        $("#mobil").replaceWith($("#mobil").clone(true));





        //postnum
    } else if (n == 8) {



        document.getElementById("mobil").style.display = "inline"
        document.getElementById("mobil").style.animationDirection = "alternate"
        //$("#").replaceWith($("#").clone(true));

    }




    console.log(currentTab)

    if (n == (x.length - 3)) {



        document.getElementById("nextBtn").innerHTML = "Beregn";



        document.getElementById("prevBtn1").style.display = "none";

        document.querySelector(".shopKnap").style.display = "none";

        document.getElementById("nextBtn").style.backgroundColor = "#1E73BE"
        document.getElementById("nextBtn").style.borderColor = "#1E73BE"





    } else if (n == (x.length - 2)) {

        const data = getData()
        delegation(data)

        document.querySelector(".shopKnap").style.display = "inline";

        document.getElementById("nextBtn").innerHTML = "Bliv kontaktet";

        document.getElementById("nextBtn").style.color = "white"
        document.getElementById("nextBtn").style.backgroundColor = "#4CAE50"
        document.getElementById("nextBtn").style.borderColor = "#4CAE50"

        document.getElementById("prevBtn").style.display = "none";

        document.getElementById("prevBtn1").style.display = "inline";



    } else if (n == (x.length - 1)) {





        document.getElementById("nextBtn").innerHTML = "Indsend";

        document.querySelector(".shopKnap").style.display = "none";

        document.getElementById("prevBtn1").style.display = "none";



    } else {
        document.getElementById("nextBtn").innerHTML = "Næste";

    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...

    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementsByName("nextBtn")[0].type = "submit";


        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, z, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    //z = x[currentTab].querySelector(".radio");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }

    /*for (i = 0; i < z.length; i++) {
     // If a radio is unchecked..
     if (z[i].checked = false) {
       // add an "invalid" class to the field:
       y[i].className += " invalid";
       // and set the current valid status to false
       valid = false;
     }
    }*/



    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function beregner(pakken) {



    const pakke = document.getElementById("pakke")
    const pris = document.getElementById("pris")
    const indhold = document.getElementById("indhold")
    const shopLink = document.getElementById("shopKnap")

    switch (pakken) {

        case "bronze":

            pakke.textContent = "bronze"
            pris.textContent = "2995 KR."
            indhold.innerHTML = `1 stk. Central 1 stk. <br> GSM sender (Indgår i central) <br> 1 stk. Betjeningspanel <br> 2 stk. PIR (rumføler) <br> 1 stk. Dørmagnet<br> 4 stk. Prox brikker<br> 4 stk. Alarmmærker<br> Mulighed for alarmsystem som er husdyrimmun (Op til 25kg)`
            shopLink.href = "https://vs-automatic.dk/vare/alarmpakke-bronze/"

            break

        case "soelv":


            pakke.textContent = "sølv"
            pris.textContent = "4995 KR."
            indhold.innerHTML = '1 stk. Centra 1 stk. <br> GSM sender<br> 1 stk. Betjeningspanel<br> 4 stk. PIR (rumføler) <br> 3 stk. Dørmagnet<br> 6 stk. Prox brikker<br> 2 stk. brandalarmer<br>6 Stk. Alarmmærker<br> evt. husdyrimmun (Op til 25kg)'
            shopLink.href = "https://vs-automatic.dk/vare/alarmpakke-soelv/"

            break

        case "guld":

            pakke.textContent = "guld"
            pris.textContent = "6995 KR."
            indhold.innerHTML = '1 stk. Central1 stk. GSM sender (Indgård i central)<br>1 stk. Betjeningspanel <br> 8 stk. PIR (rumføler)<br>5 stk. Dørmagnet<br>6 stk. Prox brikker<br>4 stk. brandalarmer<br>10 Stk. Alarmmærker Mulighed for alarmsystem som er husdyrimmun (Op til 25kg)'
            shopLink.href = "https://vs-automatic.dk/vare/alarmpakke-guld/"

            break

        case "overvaag":

            pakke.textContent = "overvågning"
            pris.textContent = "6995 KR."
            indhold.innerHTML = '1 stk. Central1 stk. GSM sender (Indgård i central)<br>1 stk. Betjeningspanel <br> 4 stk. PIR (rumføler)<br>3 stk. Dørmagnet<br>6 stk. Prox brikker<br>2 stk. brandalarmer<br>10 Stk. Alarmmærker Mulighed for alarmsystem som er husdyrimmun (Op til 25kg)'
            shopLink.href = "https://vs-automatic.dk/vare/videoovervaagningspakke/"

            break





    }




}


function getData() {
    const dataObject = {}
    const data = Array.from(new FormData(form))
    console.log(data)
    for (const [name, value] of data) {
        dataObject[name.toLowerCase()] = value

    }
    return dataObject
}



function delegation(dataObject) {

    console.log("hey")

    if (dataObject['stoerrelse'] && dataObject['sikring']) {
        if (dataObject['stoerrelse'] === 'mindre end 100m2' && dataObject['sikring'] === "indbrud") {
            console.log("hey1")
            beregner("bronze");

        } else if (dataObject['stoerrelse'] === 'mindre end 100m2' && dataObject['sikring'] === "indbrud og brand") {
            console.log("hey2")
            beregner("soelv");

        } else if (dataObject['stoerrelse'] === '100 - 150m2' && dataObject['sikring'] === "indbrud") {
            console.log("hey3")
            beregner("soelv");
            
        }
        
        else if (dataObject['stoerrelse'] === '100 - 150m2' && dataObject['sikring'] === "indbrud og brand") {
            console.log("hey3.5")
            beregner("soelv");
        }
        else if (dataObject['stoerrelse'] && dataObject['sikring'] === "indbrud, brand med videoovervågning") {
            console.log("hey5")
            beregner("overvaag");

        } else if (dataObject['stoerrelse'] === 'større end 150 m2' && dataObject['sikring'] === "indbrud og brand") {
            console.log("hey6")
            beregner("guld");

        }
        else if (dataObject['stoerrelse'] === 'større end 150 m2' && dataObject['sikring'] === "indbrud") {
            console.log("hey7")
            beregner("guld");
        }

        return
    }

}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}
