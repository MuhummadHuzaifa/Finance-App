var inp =document.getElementById('inp');
var tol_income =document.getElementById('tol_income');
var tol_expence =document.getElementById('tol_expence');
var balance =document.getElementById('balance');
var saving =document.getElementById('saving');

var value = inp.value;


function income() {
    tol_income.innerText = inp.value;
    tol_income. style.color = "lightgreen";
    saving.innerText = inp.value
    saving.style.color = "lightgreen";
    inp.value ="";

}



function expence() {
    tol_expence.innerText = inp.value;
    tol_expence. style.color = "rgb(133, 37, 37)";
    saving.innerText = tol_income.innerText - inp.value;
    inp.value ="";

    if (saving.innerText <= 0) {
        saving.style.color = "rgb(133, 37, 37)";
    } else {
        saving.style.color = "lightgreen";
    }

}