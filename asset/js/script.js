const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


document.addEventListener("DOMContentLoaded", function () {
  console.log("Halaman My Skill berhasil dimuat.");
});


// Hyperlink To Discord di chat-dc
function redirectToDiscord() {
  window.location.href = "./contact.html"; 
}


// Tunggu sampai halaman selesai dimuat
window.addEventListener("load", function() {
  let preloader = document.getElementById("preloader");
  let content = document.getElementById("content");

  // Sembunyikan preloader setelah 1.5 detik
  setTimeout(function() {
      preloader.style.display = "none";
      content.style.display = "block";
  }, 1500);
});
