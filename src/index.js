document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); 
  
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const comments = document.getElementById("comments").value;
  

  const emailString = email;
  const nameString = name;
  const commentsString = comments;
  
  
  console.log("Email: " + emailString);
  console.log("Name: " + nameString);
  console.log("Comments: " + commentsString);
});