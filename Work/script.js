// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Cool";

// const p = document.getElementsByTagName("p");

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "blue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "This changed from javascript";

// const p4 = document.querySelector('#b p');
// p4.style.color = "red";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = "orange";

// const p2 = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++ ) {
//   p2[i].style.backgroundColor = "lightblue";
// }
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');

// pBaru.appendChild(teksPBaru);

// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('item baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2Baru = document.querySelector('section#b ul li:nth-child(2)');
// ul.insertBefore(liBaru, li2Baru);

const ul = document.querySelector("ul");
const paragraf4 = document.querySelector("#b p");

const tombol = document.createElement("button");
tombol.textContent = "Tambah";

paragraf4.after(tombol);

tombol.addEventListener("click", function () {

  const namaItem = prompt("Masukkan nama item baru:");

  if (namaItem) {
    const liBaru = document.createElement("li");
    liBaru.textContent = namaItem;
    ul.appendChild(liBaru);
  }
});