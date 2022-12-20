function checkBrowser(elemento) {
    let opcao1 = document.getElementById("primeiro");
    let opcao2 = document.getElementById("segundo");
    let opcao3 = document.getElementById("terceiro");
    if ((elemento.id.localeCompare("primeiro") !== 0) && (elemento.value ===
    opcao1.value)){
    opcao1.value= "";
    }
    if ((elemento.id.localeCompare("segundo") !== 0) && (elemento.value ===
    opcao2.value)){
    opcao2.value= "";
    }
    if ((elemento.id.localeCompare("terceiro") !== 0) && (elemento.value ===
    opcao3.value)){
    opcao3.value= "";
    }
}

function Write_Text() {
    let x = document.forms["fdpessoais"]["pimg"].value;
    if (x == "Não") {
    document.forms["fdpessoais"]["outros_pimg"].disabled
    =true;
    document.forms["fdpessoais"]["outros_pimg"].value="";
    } else {
    document.forms["fdpessoais"]["outros_pimg"].disabled
    =false;
    }
}
function which(){
    let info = document.getElementById("nao");
    let info2 = document.getElementById("quais");
    if(info.checked) info2.disabled = true;
    else info2.disabled = false;
}
/**
function validateForm() {
    console.log(document.forms["fdpessoais"]["sexo"].value);
    let d = new Date();
    localStorage.setItem(d.getTime(),
    document.forms["fdpessoais"]["sexo"].value);
    location.href = "Tarefas.html";
}
 */



function validateForm() {

    let xml = "<Questionário>";
    let d = new Date();

    let name1 = document.getElementById("name1");
    let name2 = document.getElementById("name2");
    let name3 = document.getElementById("name3");
    let name4 = document.getElementById("name4");

    let masc = document.getElementById("masc");
    let fem = document.getElementById("fem");

    let freq1 = document.getElementById("daily");
    let freq2 = document.getElementById("semi-weekly");
    let freq3 = document.getElementById("weekly");
    let freq4 = document.getElementById("semi-monthly");

    let sel1 = document.getElementById("primeiro").value;
    let sel2 = document.getElementById("segundo").value;
    let sel3 = document.getElementById("terceiro").value;

    let no = document.getElementById("nao");
    let which = document.getElementById("quais");

   /**  if(name1.checked) localStorage.setItem("age",name1.value);
    else if(name2.checked) localStorage.setItem("age",name2.value);
    else if(name3.checked) localStorage.setItem("age",name3.value);
    else if(name4.checked) localStorage.setItem("age",name4.value);

    if(masc.checked) localStorage.setItem("sex",masc.value);
    else if(fem.checked) localStorage.setItem("sex",fem.value);

    if(freq1.checked) localStorage.setItem("freq",freq1.value);
    else if(freq2.checked) localStorage.setItem("freq",freq2.value);
    else if(freq3.checked) localStorage.setItem("freq",freq3.value);
    else if(freq4.checked) localStorage.setItem("freq",freq4.value);

    if(sel1 != "") localStorage.setItem("browser1",sel1);
    if(sel2 != "") localStorage.setItem("browser2",sel2);
    if(sel3 != "") localStorage.setItem("browser3",sel3);
    
    if(no.checked) localStorage.setItem("Other", no.value);
    else localStorage.setItem("Other", which.value);
    */
    if(name1.checked) xml += '<q id="q1">' + 18 + '</q>';
    else if(name2.checked) xml += '<q id="q1">' + name2.value + '</q>';
    else if(name3.checked) xml += '<q id="q1">' + name3.value + '</q>';
    else if(name4.checked) xml += '<q id="q1">' + 35 + '</q>';

    if(masc.checked) xml += '<q id="q2">' + masc.value + '</q>';
    else if(fem.checked) xml += '<q id="q2">' + fem.value + '</q>';

    if(freq1.checked) xml += '<q id="q3">' + freq1.value + '</q>';
    else if(freq2.checked) xml += '<q id="q3">' + freq2.value + '</q>';
    else if(freq3.checked) xml += '<q id="q3">' + freq3.value + '</q>';
    else if(freq4.checked) xml += '<q id="q3">' + freq4.value + '</q>';

    if(sel1 != "") xml += '<q id="q4">' + sel1 + '</q>';
    if(sel2 != "") xml += '<q id="q4">' + sel2 + '</q>';
    if(sel3 != "") xml += '<q id="q4">' + sel3 + '</q>';
    
    if(no.checked) xml += '<q id="q5">' + no.value + '</q>';
    else xml += '<q id="q5">' + which.value + '</q>';

    localStorage.setItem(d.getTime(),xml);

    console.log(localStorage);
    location.href = "Tarefas.html";
}

function validateForm2(){

    let data = localStorage.key(localStorage.length-1);
    xml = localStorage.getItem(data);
    let text1 = document.getElementById("Text1");
    let text2 = document.getElementById("Text2");
    let text3 = document.getElementById("Text3");
    let text4 = document.getElementById("Text4");
    let text5 = document.getElementById("Text5");

  
    xml += '<q id="q6">' + text1.value + '</q>';
    xml += '<q id="q7">' + text2.value + '</q>';
    xml += '<q id="q8">' + text3.value + '</q>';
    xml += '<q id="q9">' + text4.value + '</q>';
    xml += '<q id="q10">' + text5.value + '</q>';

    localStorage.setItem(data,xml);

    console.log(localStorage);
    location.href = "Avaliacao.html";
}
 
function validateForm3(){

    let data = localStorage.key(localStorage.length-1);
    xml = localStorage.getItem(data);

    let a1 = document.getElementById("av1");
    let a2 = document.getElementById("av2");
    let a3 = document.getElementById("av3");
    let a4 = document.getElementById("av4");
    let a5 = document.getElementById("av5");
    let a6 = document.getElementById("av6");
    let a7 = document.getElementById("av7");

    let b1 = document.getElementById("bv1");
    let b2 = document.getElementById("bv2");
    let b3 = document.getElementById("bv3");
    let b4 = document.getElementById("bv4");
    let b5 = document.getElementById("bv5");
    let b6 = document.getElementById("bv6");
    let b7 = document.getElementById("bv7");

    let c1 = document.getElementById("cv1");
    let c2 = document.getElementById("cv2");
    let c3 = document.getElementById("cv3");
    let c4 = document.getElementById("cv4");
    let c5 = document.getElementById("cv5");
    let c6 = document.getElementById("cv6");
    let c7 = document.getElementById("cv7");

    let d1 = document.getElementById("dv1");
    let d2 = document.getElementById("dv2");
    let d3 = document.getElementById("dv3");
    let d4 = document.getElementById("dv4");
    let d5 = document.getElementById("dv5");
    let d6 = document.getElementById("dv6");
    let d7 = document.getElementById("dv7");

    let e1 = document.getElementById("ev1");
    let e2 = document.getElementById("ev2");
    let e3 = document.getElementById("ev3");
    let e4 = document.getElementById("ev4");
    let e5 = document.getElementById("ev5");
 
    let f1 = document.getElementById("fv1");
    let f2 = document.getElementById("fv2");
    let f3 = document.getElementById("fv3");
    let f4 = document.getElementById("fv4");
    let f5 = document.getElementById("fv5");

    let g1 = document.getElementById("gv1");
    let g2 = document.getElementById("gv2");
    let g3 = document.getElementById("gv3");
    let g4 = document.getElementById("gv4");
    let g5 = document.getElementById("gv5");

    let h1 = document.getElementById("hv1");
    let h2 = document.getElementById("hv2");
    let h3 = document.getElementById("hv3");
    let h4 = document.getElementById("hv4");
    let h5 = document.getElementById("hv5");

    let i1 = document.getElementById("iv1");
    let i2 = document.getElementById("iv2");
    let i3 = document.getElementById("iv3");
    let i4 = document.getElementById("iv4");
    let i5 = document.getElementById("iv5");

    let j1 = document.getElementById("jv1");
    let j2 = document.getElementById("jv2");
    let j3 = document.getElementById("jv3");
    let j4 = document.getElementById("jv4");
    let j5 = document.getElementById("jv5");

    if(a1.checked)  xml += '<q id="q11">' + a1.value + '</q>';
    else if(a2.checked) xml += '<q id="q11">' + a2.value + '</q>';
    else if(a3.checked) xml += '<q id="q11">' + a3.value + '</q>';
    else if(a4.checked) xml += '<q id="q11">' + a4.value + '</q>';
    else if(a5.checked) xml += '<q id="q11">' + a5.value + '</q>';
    else if(a6.checked) xml += '<q id="q11">' + a6.value + '</q>';
    else if(a7.checked) xml += '<q id="q11">' + a7.value + '</q>';

    if(b1.checked) xml += '<q id="q12">' + b1.value + '</q>';
    else if(b2.checked) xml += '<q id="q12">' + b2.value + '</q>';
    else if(b3.checked) xml += '<q id="q12">' + b3.value + '</q>';
    else if(b4.checked) xml += '<q id="q12">' + b4.value + '</q>';
    else if(b5.checked) xml += '<q id="q12">' + b5.value + '</q>';
    else if(b6.checked) xml += '<q id="q12">' + b6.value + '</q>';
    else if(b7.checked) xml += '<q id="q12">' + b7.value + '</q>';

    if(c1.checked) xml += '<q id="q13">' + c1.value + '</q>';
    else if(c2.checked) xml += '<q id="q13">' + c2.value + '</q>';
    else if(c3.checked) xml += '<q id="q13">' + c3.value + '</q>';
    else if(c4.checked) xml += '<q id="q13">' + c4.value + '</q>';
    else if(c5.checked) xml += '<q id="q13">' + c5.value + '</q>';
    else if(c6.checked) xml += '<q id="q13">' + c6.value + '</q>';
    else if(c7.checked) xml += '<q id="q13">' + c7.value + '</q>';

    if(d1.checked)  xml += '<q id="q14">' + d1.value + '</q>';
    else if(d2.checked) xml += '<q id="q14">' + d2.value + '</q>';
    else if(d3.checked) xml += '<q id="q14">' + d3.value + '</q>';
    else if(d4.checked) xml += '<q id="q14">' + d4.value + '</q>';
    else if(d5.checked) xml += '<q id="q14">' + d5.value + '</q>';
    else if(d6.checked) xml += '<q id="q14">' + d6.value + '</q>';
    else if(d7.checked) xml += '<q id="q14">' + d7.value + '</q>';

    if(e1.checked) xml += '<q id="q15">' + e1.value + '</q>';
    else if(e2.checked) xml += '<q id="q15">' + e2.value + '</q>';
    else if(e3.checked) xml += '<q id="q15">' + e3.value + '</q>';
    else if(e4.checked) xml += '<q id="q15">' + e4.value + '</q>';
    else if(e5.checked) xml += '<q id="q15">' + e5.value + '</q>';


    if(f1.checked) xml += '<q id="q16">' + f1.value + '</q>';
    else if(f2.checked) xml += '<q id="q16">' + f2.value + '</q>';
    else if(f3.checked) xml += '<q id="q16">' + f3.value + '</q>';
    else if(f4.checked) xml += '<q id="q16">' + f4.value + '</q>';
    else if(f5.checked) xml += '<q id="q16">' + f5.value + '</q>';


    if(g1.checked) xml += '<q id="q17">' + g1.value + '</q>';
    else if(g2.checked) xml += '<q id="q17">' + g2.value + '</q>';
    else if(g3.checked) xml += '<q id="q17">' + g3.value + '</q>';
    else if(g4.checked) xml += '<q id="q17">' + g4.value + '</q>';
    else if(g5.checked) xml += '<q id="q17">' + g5.value + '</q>';


    if(h1.checked) xml += '<q id="q18">' + h1.value + '</q>';
    else if(h2.checked) xml += '<q id="q18">' + h2.value + '</q>';
    else if(h3.checked) xml += '<q id="q18">' + h3.value + '</q>';
    else if(h4.checked) xml += '<q id="q18">' + h4.value + '</q>';
    else if(h5.checked) xml += '<q id="q18">' + h5.value + '</q>';


    if(i1.checked) xml += '<q id="q19">' + i1.value + '</q>';
    else if(i2.checked) xml += '<q id="q19">' + i2.value + '</q>';
    else if(i3.checked) xml += '<q id="q19">' + i3.value + '</q>';
    else if(i4.checked) xml += '<q id="q19">' + i4.value + '</q>';
    else if(i5.checked) xml += '<q id="q19">' + i5.value + '</q>';

    if(j1.checked) xml += '<q id="q20">' + j1.value + '</q>';
    else if(j2.checked) xml += '<q id="q20">' + j2.value + '</q>';
    else if(j3.checked) xml += '<q id="q20">' + j3.value + '</q>';
    else if(j4.checked) xml += '<q id="q20">' + j4.value + '</q>';
    else if(j5.checked) xml += '<q id="q20">' + j5.value + '</q>';

    xml += "</Questionário>";
    localStorage.setItem(data,xml);

    console.log(localStorage);

    getdataForm();
    
}
 
/** 
function validateForm2() {
    let d = new Date();
    let xmlRowString = “<Questionario>”;
    let Rq= document.forms["fdpessoais"]["idade"].value;
    xmlRowString += '<q id="q1">' + Rq + '</q>';
    let Rq1= document.forms["fdpessoais"]["sexo"].value;
    xmlRowString += '<q id="q2">' + Rq1 + '</q>';
    xmlRowString += "</Questionario>";
    window.localStorage.setItem(d.getTime(), xmlRowString);
}
    */
function getdataForm() {
    let todo_index = window.localStorage.length;
    for (let i = 0; i < todo_index; i++) {
    let info =
    window.localStorage.getItem(window.localStorage.key(i));
    console.log(info);
    }
}
    

