//1
let reg1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/

document.getElementById('btn1').onclick = (e) => {
    e.preventDefault();
    if (reg1.test(document.getElementById('inp1').value)) {
        alert('ok');
    } else {
        alert('ne ok');
    }
}

//2
let reg2 = /\s/gi;
let txt2 = document.getElementById('txt2').innerHTML;

document.getElementById('btn2').onclick = (e) => {
    e.preventDefault();
    document.getElementById('ans2').innerHTML = txt2.replace(reg2, '_');
}

//3
let inp3 = document.getElementById('inp3');
let txt3 = document.getElementById('txt3').innerHTML;

document.getElementById('btn3').onclick = (e) => {
    e.preventDefault();
    let reg3 = new RegExp(`\\b${inp3.value}[a-z]+\\b`, 'gi')
    document.getElementById('ans3').innerHTML = txt3.match(reg3);
}

//4
let inp4 = document.getElementById('inp4');
let reg4 = /^[0-2][0-9][0-9][0-9]-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

document.getElementById('btn4').onclick = (e) => {
    e.preventDefault();
    if (reg4.test(inp4.value)) {
        alert('date correct')
    } else {
        alert('date error')
    }
}

//5
let reg5 = /\b[a-z]+\b/gi;
let txt5 = document.getElementById('txt5').innerHTML;

document.getElementById('btn5').onclick = (e) => {
    e.preventDefault();
    document.getElementById('ans5').innerHTML = txt5.match(reg5);
}

//6
let reg6 = /\bhttp[^\s]+\b/g;
let txt6 = document.getElementById('txt6').innerHTML;

document.getElementById('btn6').onclick = (e) => {
    e.preventDefault();
    document.getElementById('ans6').innerHTML = txt6.match(reg6);
}

//7
let inp7 = document.getElementById('inp7');
let txt7 = document.getElementById('txt7').innerHTML;

document.getElementById('btn7').onclick = (e) => {
    e.preventDefault();
    let reg7 = new RegExp(`\\b[a-z]+${inp7.value}\\b`, 'gi')
    document.getElementById('ans7').innerHTML = txt7.match(reg7);
}

//8
let txt8 = document.getElementById('txt8').innerHTML;
let reg8 = /#[a-z0-9а-я\-_]+/gi

document.getElementById('btn8').onclick = (e) => {
    e.preventDefault();
    document.getElementById('ans8').innerHTML = txt8.match(reg8);
}
