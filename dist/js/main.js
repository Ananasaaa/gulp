document.addEventListener("DOMContentLoaded",()=>{let n=document.getElementById("contact-form");n.addEventListener("submit",function(e){e.preventDefault();var e=document.getElementById("name").value,t=document.getElementById("message").value;e&&t?(alert(`Thank you, ${e}, for your message: "${t}"`),n.reset()):alert("Please fill out all fields.")})});
//# sourceMappingURL=main.js.map
