// === Mengecek Panjang String === //
const teks = "Berapa Panjangnya ?";
console.log(teks.length); // 19, spasi termasuk

// === Operasi Penggabungan String === //
const nama = "Budi";
const umur = 20;
const makananKesukaan = "Nasi Padang";

const concatPertambahan =
  "Halo, nama saya " +
  nama +
  ", saya berumur " +
  umur +
  " tahun. Makanan favorit saya adalah " +
  makananKesukaan +
  ".";
console.log(concatPertambahan);

const templateLitteral = `Halo, nama saya ${nama}, saya berumur ${umur} tahun. Makanan favorit saya adalah ${makananKesukaan}.`;
console.log(templateLitteral);

console.log(concatPertambahan === templateLitteral); // true

const obj = {
  nama: "Ujang",
  umur: 17,
  makananKesukaan: "sayur kol"
};

const stringDariObject = `Halo, nama saya ${obj.nama}, saya berumur ${obj.umur} tahun. Makanan favorit saya adalah ${obj.makananKesukaan}.`;
console.log(stringDariObject);

// === Mengganti Isi Tulisan === //
console.log(templateLitteral.replace(nama, "Andi"));
console.log(stringDariObject.replace(obj.nama, "Ollie"));
