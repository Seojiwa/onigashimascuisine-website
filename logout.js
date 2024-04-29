const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", logout);

function logout() {
  localStorage.clear();
  window.alert("Are You Sure?")
  window.location.href = "home.html";
}