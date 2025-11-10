/* Fungsi untuk BUKA, TUTUP, dan TOGGLE sidebar navigasi.
  Ini adalah satu-satunya file script yang Anda perlukan.
*/

function openSidebar() {
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("mySidenav").style.left = "-250px"; 
    document.getElementById("overlay").style.display = "none";
}

function toggleSidebar() {
    var sidebar = document.getElementById("mySidenav");
    var style = window.getComputedStyle(sidebar); 

    if (style.left === "0px") {
        closeSidebar();
    } else {
        openSidebar();
    }
}

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        contents.forEach((c) => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

/* 1. [DIMODIFIKASI] Pilih elemen yang kita butuhkan
Kita sekarang memilih gambar, BUKAN lagi div .profile-area */
const profileButton=document.getElementById('profilePictureButton');
const profileMenu=document.getElementById('profileMenu');

/* 2. [DIMODIFIKASI] Tambahkan event 'click' ke tombol GAMBAR */
profileButton.addEventListener('click', function (event) {
        profileMenu.classList.toggle('show');
        event.stopPropagation();
    });

/* 3. (Sama) Menutup dropdown jika klik di luar area menu */
window.addEventListener('click', function (event) {
        if (profileMenu.classList.contains('show')) {

            // Cek apakah klik BUKAN di dalam menu DAN BUKAN di tombol gambar
            if ( !profileMenu.contains(event.target) && !profileButton.contains(event.target)) {
                profileMenu.classList.remove('show');
            }
        }
    });