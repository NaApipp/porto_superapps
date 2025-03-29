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

// Script Preloader
window.addEventListener("load", function () {
  setTimeout(function () {
      document.getElementById("preloader").style.opacity = "0";
      setTimeout(function () {
          document.getElementById("preloader").style.display = "none";
          document.getElementById("content").style.display = "block";
      }, 500); // Biarkan efek fade out berjalan sebelum menghilangkan elemen
  }, 1000); // Tambahkan jeda 1 detik sebelum menghilangkan preloader
});


//