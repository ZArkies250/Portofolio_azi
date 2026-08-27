// 1. VARIABEL PENYIMPAN SKOR
let skorPemain = 0;
let skorKomputer = 0;

// Kamus Emoji agar teks pilihan otomatis berubah jadi bentuk emoji
const daftarEmoji = {
  batu: "✊",
  gunting: "✌️",
  kertas: "🖐️",
};

function main(pilihanPemain) {
  // A. Komputer Memilih Secara Acak
  const daftarOpsi = ["batu", "gunting", "kertas"];
  const indeksAcak = Math.floor(Math.random() * 3);
  const pilihanKomputer = daftarOpsi[indeksAcak];

  // B. Tampilkan Emoji Pilihan di Layar (DOM)
  document.getElementById("pilihan-pemain").innerText =
    daftarEmoji[pilihanPemain];
  document.getElementById("pilihan-komputer").innerText =
    daftarEmoji[pilihanKomputer];
  document.getElementById("pilihan-komputer").innerText =
    daftarEmoji[pilihanKomputer];
  // C. Menentukan Pemenang
  let hasil = "";

  if (pilihanPemain === pilihanKomputer) {
    hasil = "SERI! 🤝";
  } else if (
    (pilihanPemain === "batu" && pilihanKomputer === "gunting") ||
    (pilihanPemain === "gunting" && pilihanKomputer === "kertas") ||
    (pilihanPemain === "kertas" && pilihanKomputer === "batu")
  ) {
    hasil = "KAMU MENANG! 🎉";
    skorPemain++; // Tambah skor pemain sebesar 1
  } else {
    hasil = "KOMPUTER MENANG! 🤖";
    skorKomputer++; // Tambah skor komputer sebesar 1
  }

  // D. Update Tampilan Hasil dan Skor di Layar
  document.getElementById("teks-hasil").innerText = hasil;
  document.getElementById("skor-pemain").innerText = skorPemain;
  document.getElementById("skor-komputer").innerText = skorKomputer;
}

function resetSkor() {
  skorPemain = 0;
  skorKomputer = 0;

  document.getElementById("pilihan-pemain").innerText = "❓";
  document.getElementById("pilihan-komputer").innerText = "❓";
  document.getElementById("teks-hasil").innerText = "Pilih senjatamu!";
  document.getElementById("skor-pemain").innerText = skorPemain;
  document.getElementById("skor-komputer").innerText = skorKomputer;
}
