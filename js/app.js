
let btn1=document.querySelector(".section >.container > .row > .prt2 >form > .register>div >.btn1 ");
let FORM=document.querySelector(".section >.container > .row > .prt2 >form");
let register=document.querySelector(".section >.container > .row > .prt2 >form >.register");
let formGruop=document.querySelectorAll("#formgroup");
let label=document.querySelectorAll("#label_form");
let input_name=document.getElementById("name");
let input_Email=document.getElementById("email");
let input_Phone=document.getElementById("phone");
let page2=document.querySelector("#page2");
let page3=document.querySelector("#page3");
let page4=document.querySelector("#page4");
let page5=document.querySelector("#page5");

let row2=document.querySelector("#row2");
let row3=document.querySelector("#row3");
let row4=document.querySelector("#row4");
let row5=document.querySelector("#row5");
let planes=document.querySelectorAll("#planes");
let paragraphs=document.querySelectorAll("#Paragraph");
let monthly1=document.querySelector("#pay1");
let monthly2=document.querySelector("#pay2");
let monthly3=document.querySelector("#pay3");
let Header=document.querySelector("#header");
let info=document.querySelector("#info");
let span1=document.getElementById("#span1");
let span2=document.getElementById("#span2");
let span3=document.getElementById("#span3");
let span4=document.getElementById("#span4");
let Valid_Name=document.querySelector("#Valid_Name");
let Valid_Email=document.querySelector("#Valid_Email");
let Valid_Phone=document.querySelector("#Valid_Phone");
let toggler=document.querySelector(".section > .container > .row > .prt2 form >.page2 >.row >.toggle> .togglebar");
let toggle_indecator=document.querySelector(".section > .container > .row > .prt2 form >.page2 >.row >.toggle> .togglebar > .indecator");
let span_indecator=document.querySelectorAll("#span_indecator");
let p3_inputs=document.querySelectorAll("#p3_input");
let p3_divs=document.querySelectorAll("#p3_div");
let p3_labels=document.querySelectorAll("#p3_label");
let p4_divs=document.querySelectorAll("#p4_div");
let payment1=document.querySelector("#payment1");
let payment2=document.querySelector("#payment2");
let payment3=document.querySelector("#payment3");
let p4_p1=document.querySelector("#p4_p1");
let p4_p2=document.querySelector("#p4_p2");
let p4_p3=document.querySelector("#p4_p3");
let p4_p4=document.querySelector("#p4_p4");
let p4_span1=document.querySelector("#p4_span1");
let p4_span2=document.querySelector("#p4_span2");
let p4_span3=document.querySelector("#p4_span3");
let p4_span4=document.querySelector("#p4_span4");
let btn2=document.querySelector(".section > .container > .row > .prt2 form >.page2 > .btns2 > .btn2");
let btn3=document.querySelector(".section > .container > .row > .prt2 form >.page2 > .btns2 > .btn3");
let btn4=document.querySelector("#btn4");
let btn5=document.querySelector("#btn5");
let btn6=document.querySelector("#btn6");
let btn7=document.querySelector("#btn7");
console.log(planes);
console.log(paragraphs);
console.log(Header);
console.log(toggler);
console.log(toggle_indecator);
console.log(span_indecator);
console.log(btn2);
console.log(monthly2);
console.log(monthly3);
console.log(btn5);
console.log(row3);
console.log(page3);
console.log(p3_inputs);
console.log(p4_p1);
console.log(paragraphs[1]);
console.log(monthly1);
console.log(p4_span1);
console.log(planes[0]);
console.log(payment1);
console.log(p3_divs[0]);
console.log(p3_labels[0]);
console.log(FORM);

btn1.onclick=function(){
    if (input_name.value==null || input_name.value==""){  
        Valid_Name.innerHTML="Please Enter Your Name" ;
    }
    else if (input_name.value.length <3 ){  
        Valid_Name.innerHTML=" Name must be  more than 2 Characters" ;
    }
    else if (input_name.value.length >10 ){  
        Valid_Name.innerHTML="Name must be less than 10 Characters" ;
    }
    if(input_Email.value==null || input_Email.value==""){
        Valid_Email.innerHTML="Please Enter Your Email";
    }
    else if(!input_Email.value.includes('@')){
        Valid_Email.innerHTML=  " Email must end with @Example.com";
    }
    if (input_Phone.value==null || input_Phone.value==""){  
        Valid_Phone.innerHTML="Please Enter Your Phone Number" ;
    }
    else{
        
        register.classList.add('hide');
        span1.classList.remove('span_bg');
        span2.classList.add('span_bg');
        page2.classList.remove('hide');
        page2.classList.add('show');
        row2.classList.add('d_flex');
        Header.innerHTML="Select Your Plane";
        info.innerHTML="You Havethe Option of monthly or yearly billing"
        for(let i=0;i<planes.length;i++){
            planes[i].classList.add('show');
        }
        planes[0].classList.add('planes_bg')
        for(let i=0;i<paragraphs.length;i++){
            paragraphs[i].classList.add('show');
        }
        planes[0].classList.add('planes_bg');
        planes[1].classList.remove('planes_bg');
        planes[2].classList.remove('planes_bg');
    }      
    
}
btn2.onclick=function(){

    register.classList.remove('hide');
    page2.classList.add('hide');
    page2.classList.remove('show');
    span1.classList.add('span_bg');
    span2.classList.remove('span_bg');
    Header.innerHTML="Personal Info";
    info.innerHTML="Please Provide Your name,email address and phone number";
    Valid_Name.innerHTML="";
    Valid_Email.innerHTML="";
    Valid_Phone.innerHTML="";

}
planes[0].onclick=function(){
    planes[0].classList.toggle('planes_bg');
    planes[1].classList.remove('planes_bg');
    planes[2].classList.remove('planes_bg');
    


}
planes[1].onclick=function(){
    planes[1].classList.toggle('planes_bg');
    planes[0].classList.remove('planes_bg');
    planes[2].classList.remove('planes_bg');
}
planes[2].onclick=function(){
    planes[2].classList.toggle('planes_bg');
    planes[0].classList.remove('planes_bg');
    planes[1].classList.remove('planes_bg');
}
toggler.onclick=function(){
    toggle_indecator.classList.toggle('moveindecator');
    for(let i=0;i<span_indecator.length;i++){
        span_indecator[i].classList.toggle('span_indecator');   
    }
    if(monthly1.innerHTML=="$9/mo"){
        monthly1.innerHTML="$90 /yr  2months free"
    }
    else{
        monthly1.innerHTML="$9/mo"

    }
    if(monthly2.innerHTML=="$12/mo"){
        monthly2.innerHTML="$120/yr 2months free";
    }
    else{
        monthly2.innerHTML="$12/mo";
    }
    if(monthly3.innerHTML=="$15/mo"){
        monthly3.innerHTML="$150/yr 2months free"
    }
    else{
        monthly3.innerHTML="$15/mo"
    }
}
btn3.onclick=function(){
    page3.classList.remove('hide');
    row3.classList.add('d_flex');
    page2.classList.add('hide');
    page2.classList.remove('show');
    span3.classList.add('span_bg');
    span2.classList.remove('span_bg');
    if(monthly1.innerHTML=="$9/mo"&&monthly2.innerHTML=="$12/mo"){
        payment1.innerHTML="+$1/mo";
        payment2.innerHTML="+$2/mo";
        payment3.innerHTML="+$2/mo";
    }
    else{
        payment1.innerHTML="$10/yr";
        payment2.innerHTML="$20/yr";
        payment3.innerHTML="$20/yr";
    }
    Header.innerHTML="Pick add-ons";
    info.innerHTML="Add-ons help enhance your gaming experience";
}
p3_inputs[0].onclick=function(){
    p3_divs[0].classList.toggle('add_bg');
}
p3_inputs[1].onclick=function(){
    p3_divs[1].classList.toggle('add_bg');
}
p3_inputs[2].onclick=function(){
    p3_divs[2].classList.toggle('add_bg');
}
btn4.onclick=function(){
    page3.classList.add('hide');
    page2.classList.remove('hide');
    page2.classList.add('show');
    row2.classList.add('d_flex');
    span2.classList.add('span_bg');
    span3.classList.remove('span_bg');
    Header.innerHTML="Select Your Plane";
    info.innerHTML="You Havethe Option of monthly or yearly billing";
}
btn5.onclick=function(){
    page3.classList.add('hide');
    page4.classList.remove('hide');
    span4.classList.add('span_bg');
    span3.classList.remove('span_bg');
    row4.classList.add('d_flex');
    if(planes[0].classList.contains('planes_bg')){
        p4_p1.innerHTML=paragraphs[1].innerHTML;
        p4_span1.innerHTML=monthly1.innerHTML;

    }else{

    }
    if(planes[1].classList.contains('planes_bg')){
        p4_p1.innerHTML=paragraphs[3].innerHTML;
        p4_span1.innerHTML=monthly2.innerHTML;

    }else{

    }
    if(planes[2].classList.contains('planes_bg')){
        p4_p1.innerHTML=paragraphs[5].innerHTML;
        p4_span1.innerHTML=monthly2.innerHTML;

    }else{

    }
    if(p3_divs[0].classList.contains('add_bg')){
        p4_p2.innerHTML=p3_labels[0].innerHTML;
        p4_span2.innerHTML=payment1.innerHTML;
    }else{
        
    }
    if(p3_divs[1].classList.contains('add_bg')){
        p4_p3.innerHTML=p3_labels[1].innerHTML;
        p4_span3.innerHTML=payment2.innerHTML;

    }else{

    }
    if(p3_divs[2].classList.contains('add_bg')){
        p4_p4.innerHTML=p3_labels[2].innerHTML;
        p4_span4.innerHTML=payment3.innerHTML;

    }else{

    }
    Header.innerHTML="Finishing up";
    info.innerHTML="Double-check everything looks ok before confirming.";
}
btn6.onclick=function(){
    page3.classList.remove('hide');
    page4.classList.add('hide');
    span4.classList.remove('span_bg');
    span3.classList.add('span_bg');
    row3.classList.add('d_flex');
}
btn7.onclick=function(){
    page4.classList.add('hide');
    page5.classList.remove('hide');
    row5.classList.add('d_flex');
    Header.innerHTML="";
    info.innerHTML=""

}
function submitForm(event){
    event.preventDefault();
}

FORM.addEventListener('submit',submitForm);