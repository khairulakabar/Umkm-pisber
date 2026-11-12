
"use strict";

// ===================================
// KONFIGURASI WHATSAPP PISBER
// ===================================

// Ganti dengan nomor WhatsApp pemilik UMKM.
// Gunakan kode negara 62 tanpa tanda + dan tanpa angka 0 di depan.
const nomorWhatsApp = "6281234567890";

// ===================================
// FUNGSI PESAN WHATSAPP
// ===================================

function pesanWhatsApp(namaProduk) {
    const pesan = `Halo PISBER! Saya ingin memesan ${namaProduk}. Apakah produknya tersedia?`;

    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}

// ===================================
// TOMBOL PESAN PRODUK
// ===================================

const tombolPesan = document.querySelectorAll(".pesan");

tombolPesan.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const namaProduk = this.dataset.produk;

        if (namaProduk) {
            pesanWhatsApp(namaProduk);
        }
    });
});

// ===================================
// TOMBOL KONTAK WHATSAPP
// ===================================

const tombolKontak = document.getElementById("kontakBtn");

if (tombolKontak) {
    tombolKontak.addEventListener("click", function () {
        pesanWhatsApp("produk PISBER");
    });
}

// ===================================
// TAHUN OTOMATIS PADA FOOTER
// ===================================

const elemenTahun = document.getElementById("tahun");

if (elemenTahun) {
    elemenTahun.textContent = new Date().getFullYear();
}

// ===================================
// MENU NAVIGASI MOBILE
// ===================================

const tautanMenu = document.querySelectorAll("#menu .nav-link");

tautanMenu.forEach(function (tautan) {
    tautan.addEventListener("click", function () {
        const menu = document.getElementById("menu");

        if (
            menu &&
            menu.classList.contains("show") &&
            typeof bootstrap !== "undefined"
        ) {
            bootstrap.Collapse
                .getOrCreateInstance(menu)
                .hide();
        }
    });
});

// ===================================
// EFEK TOMBOL PESAN
// ===================================

tombolPesan.forEach(function (tombol) {
    tombol.addEventListener("mouseenter", function () {
        this.style.transition = "0.3s";
    });
});

console.log("JavaScript PISBER berhasil dimuat!");
