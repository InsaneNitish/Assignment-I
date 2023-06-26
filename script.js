let home=document.getElementById('home');
let about=document.getElementById('about');
let contact=document.getElementById('contact');
let list=document.querySelectorAll("li");
function Home() {
     home.style.display="block";
     about.style.display="none";
     contact.style.display="none";
     list[0].style.borderBottom="1px solid white";
  list[1].style.borderBottom="0px solid white";
  list[2].style.borderBottom="0px solid white";
}
function About() {
     home.style.display="none";
     about.style.display="block";
     contact.style.display="none";
list[0].style.borderBottom="0px solid white";
  list[1].style.borderBottom="1px solid white";
  list[2].style.borderBottom="0px solid white";
}
function Contact() {
     home.style.display="none";
     about.style.display="none";
     contact.style.display="block";
  list[0].style.borderBottom="0px solid white";
  list[1].style.borderBottom="0px solid white";
  list[2].style.borderBottom="1px solid white";
}
