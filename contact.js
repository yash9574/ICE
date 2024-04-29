
// console.log("oki"); 

function handleSubmit() {
   let name = document.getElementById("s-name").value;
   let email = document.getElementById("s-email").value;
   let msg = document.getElementById("s-email").value;
  
   if (name.trim() === "" || email.trim() === "" || msg.trim() === "") {
    alert("Please fill in all fields...")
}
else{
   alert("Thanks for feedback");}
   
   document.getElementById("s-form").reset();
}
document.getElementById("s-form").addEventListener("submit", handleSubmit);
