document.getElementById("fill").addEventListener("click", function(){
  document.getElementById("popup").style.display = "flex";
  document.querySelector(".intro").style.display = "none";
  document.getElementById("fill").style.display = "none";
})

  document.querySelector(".close-button").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
    document.querySelector(".intro").style.display = "block";
    document.getElementById("fill").style.display = "block";
  })

  function displayAlert(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let about = document.getElementById("about").value;
    let grade = document.getElementById("grade").value;
    let notifications = document.getElementById("notifications");

    if(notifications.checked) {
      notifications = "On";
    }
    else{
      notifications = "Off";
    }
      
    let data = "Here's what was received:" + "\n";
    data += "Name: " + name.charAt(0).toUpperCase() + name.slice(1, name.indexOf(" ")) + " " + name.charAt(name.indexOf(" ") + 1).toUpperCase() + name.slice(name.indexOf(" ") + 2) + "\n";
    data += "Email: " + email + "\n";
    data += "Date of Birth: " + date + "\n";
    data += "Tell us about yourself: " + about.charAt(0).toUpperCase() + about.slice(1) + "\n";
    data += "Grade: " + grade + "\n";
    data += "Notifications: " + notifications.charAt(0).toUpperCase() + notifications.slice(1);

    event.preventDefault();
    
  if(!name.includes(" ")){
    window.alert("Please enter your full name.")
  }
  else if(!email.includes(".")){
    window.alert("Please follow the given email format: Xyz@abc.com")
  }
  else{
    window.alert(data)
    document.getElementById("popup").style.display = "none";
    document.getElementById("thanks").style.display = "block";
    document.querySelector(".intro").style.display = "none";
    document.getElementById("fill").style.display = "none";
  }
}
