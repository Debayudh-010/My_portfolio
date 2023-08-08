var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname,event){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    console.log(event);
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab')

}

var sidemenu= document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right="0";
}


function closeMenu(){
    sidemenu.style.right="-200px";
}


const scriptURL = "https://script.google.com/macros/s/AKfycbyIUQFyduUHX2xU9p-0RxQLEx4RfsDBzWvvMuYGWu4GFuRxtcmI98tvXQQs9nj1XIOv/exec"
const form = document.forms['submit-to-google-sheet']
console.log(form);
form.addEventListener('submit', e => {
console.log(e);
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
