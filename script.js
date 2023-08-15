let buttonSubmit = document.getElementById("btn");

buttonSubmit.addEventListener("click", afficher);

function afficher(e){
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
     var lastName = document.getElementById("lastName").value;
     var birthday = document.getElementById("Birthday").value;
     var email = document.getElementById("email").value;
     var gender = document.getElementById("gender11").value;
     var linkedin = document.getElementById("linkedin").value;
    var github = document.getElementById("github").value;












    document.getElementById("first").textContent="First Name: "+ firstName;
     document.getElementById("last").textContent="Last  Name: "+ lastName;
     document.getElementById("birth").textContent="Birthday: "+ birthday;
     document.getElementById("email1").textContent="Email: "+ email;
     document.getElementById("gender1").textContent="Gender: "+ gender;
     document.getElementById("linkedin1").textContent="Linkedin: "+ linkedin ;
     document.getElementById("github1").textContent="Github: "+ github;

};


