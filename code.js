const calculate3 = document.getElementById('calculate3');
calculate3.addEventListener('click',()=>{
    let age = document.getElementById('age').value;
    let total = (age * 365);
    document.getElementById('display3').innerHTML = total + 'days.';
}
);
