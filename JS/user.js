
let links = document.getElementById("links")
let userData = document.getElementById("user_info")
let user = document.getElementById("user")
let logout = document.getElementById("logout")

if(localStorage.getItem("loggedInUser")){
    if(links){
        links.remove()
    }
    userData.style.display="flex";
    user.innerHTML = localStorage.getItem("loggedInUser")
    user.style.textTransform = "capitalize";
}

if(logout){
    logout.onclick = function(){
        localStorage.removeItem("loggedInUser")
        window.location = "register.html"
    }
}