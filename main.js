// Popover 

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Gender Select

// if(window.location.pathname === "/"){      //only run this if user is in home/login page
   const radiobtn1 = document.querySelector("#flexRadioDefault1")
   const radiobtn2 = document.querySelector("#flexRadioDefault2")
   const radiobtn3 = document.querySelector("#flexRadioDefault3")     // initialisng varibles with radio buttons
   const genderSelect = document.querySelector("#genderSelect")

   radiobtn1.addEventListener("change", () => {
      genderSelect.classList.add("d-none");
   });     
                                                                     // Making display none when male or female is selected
   radiobtn2.addEventListener("change", () => {
      genderSelect.classList.add("d-none");
   });

   radiobtn3.addEventListener("change", () => {
      genderSelect.classList.remove("d-none");
   });
// }


// login form validation



function user1() {
      var user = document.getElementById('username').value
      var pass = document.getElementById('password').value
      if (user == "rishikesh@gmail.com" && pass == "Rsk@2000") {
        window.open("feed.html")
        alert('correct username')
      } else {
        alert('incorrect username or password')
      }
    }
