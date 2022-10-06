/**
 * Menentukan apakah password yang digunakan kuat atau tidak.
 *
 * Algoritma Regex :
 * 
 * .{8} Melakukan pengecekan apakah digit password berjumlah 8 atau lebih
 * (?=.*[A-Z]) Melakukan pengecekan apakah terdapat minimal 1 karakter huruf kapital
 * (?=.*[a-z]) Melakukan pengecekan apakah terdapat minimal 1 karakter huruf kecil
 * (?=.*[0-9]) Melakukan pengecekan apakah terdapat minimal 1 karakter angka
 * (?=.*[!_@#$&*].*[!_@#$&*]) Melakukan pengecekan apakah terdapat minimal 2 karakter simbol
 */

const password = "H3ll0w0rld**";
const password2 = "helloworld*";

const isStrongPassword = (password) => {
    const pattern = /(?=.*[A-Z])(?=.*[!_@#$&*].*[!_@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/;
    return pattern.test(password) ? true : false;
};

console.log(`Password : ${password}\nStrong password : ${isStrongPassword(password)}\n`);
console.log(`Password : ${password2}\nStrong password : ${isStrongPassword(password2)}\n`);
