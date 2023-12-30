document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); 
  
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const comments = document.getElementById("comments").value;
  
  
  const emailString = email;
  const nameString = name;
  const commentsString = comments;
  
  
  const guest = {
    email: emailString,
    name: nameString,
    comments: commentsString
  };
  
  
  const guestList = JSON.parse(localStorage.getItem("guestList")) || [];
  
  
  guestList.push(guest);
  
  
  localStorage.setItem("guestList", JSON.stringify(guestList));
  

  console.log("Guest information stored successfully!");
});