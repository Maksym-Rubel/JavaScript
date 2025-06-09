
let Url = "https://api.github.com/users/";
function updateName() {
    const input = document.getElementById("nameInput").value;
    Url += input
    console.log(Url)
    searchProduct()

}



async function searchProduct() {
    const res = await fetch(Url);
    const data = await res.json();
    if (data != null) {
        document.getElementsByClassName("profile-img")[0].src = data.avatar_url;
        document.getElementById("userName").textContent = data.login
        document.getElementById("userName1").textContent = data.login
        document.getElementById("urlprof").innerHTML = `<a href="${data.html_url}">${data.html_url}</a>`
        document.getElementById("Email").textContent = data.email != null ? data.email : "None Email"
        document.getElementById("followers").textContent = data.followers
        document.getElementById("following").textContent = data.following
    }
    else {
        alert("Not Found 404")
    }


}



