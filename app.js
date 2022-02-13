let idInput = document.getElementById("idnumber");
let button = document.getElementById("button");

button.addEventListener("click", inputFunc);

idInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
   button.click();
  }
});

let count = 1;
function inputFunc() {
  let arrId = idInput.value.split("").map(Number);

  /*let arrId = [];
  idInput.value.split("").forEach(e => arrId.push(+e)); */

  console.log(arrId);

  let sumOddsTo9 = 0;
  for (let i = 0; i < 9; i += 2) {
    sumOddsTo9 += arrId[i];
  }
  console.log(sumOddsTo9);

  let sumEvensTo9 = 0;
  for (let i = 1; i < 9; i += 2) {
    sumEvensTo9 += arrId[i];
  }
  console.log(sumEvensTo9);

  let valid =
    arrId.length == 11 &&
    arrId[0] != 0 &&
    arrId[9] == (sumOddsTo9 * 7 - sumEvensTo9) % 10 &&
    arrId[10] == (sumEvensTo9 + sumOddsTo9 + +arrId[9]) % 10;

if(valid){ 
  alert("Valid input. Welcome to your page");
  count = 1;
}else if(count != 5) {
  alert(`Invalid Input. You have ${5 - count} left. Please try again!`);
  count++;
  inputFunc; 
} else{
  alert("You have no more rights. Goodbye. ")
};
}


/*
let idNumber = document.getElementById("idnumber");

//console.log(typeof idNumber.value);

let button = document.getElementById("button");

button.addEventListener("click", () => {
  let arrayIdNumber = idNumber.value.split("");
  //console.log(arrayIdNumber);

  if (arrayIdNumber.length != 11) {
    alert(
      "Hatalı girdiniz. Tekrar giriniz " + "TC no su 11 hane olmak zorunda"
    );
    return;
  }
  let toplam =
    (+arrayIdNumber[0] +
      +arrayIdNumber[2] +
      +arrayIdNumber[4] +
      +arrayIdNumber[6] +
      +arrayIdNumber[8]) *
      7 -
    (+arrayIdNumber[1] +
      +arrayIdNumber[3] +
      +arrayIdNumber[5] +
      +arrayIdNumber[7]);

  toplam = toplam % 10;

  // The ID number cannot start with 0.
  if (+arrayIdNumber[0] == 0) {
    alert("Hatalı girdiniz. Tekrar giriniz " + "0 hatası");
    return;
  }
  // Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th digits.
  // The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.

  if (toplam != +arrayIdNumber[9]) {
    alert("Hatalı girdiniz. Tekrar giriniz " + "10 karakter eşleşmedi");
    return;
  }

  // When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit.

  let toplam1 = 0;
  for (let index = 0; index < 9; index++) {
    toplam1 += +arrayIdNumber[index];
  }
  toplam1 = toplam1 + toplam;
  if (toplam1 % 10 != +arrayIdNumber[10]) {
    alert("Hatalı girdiniz. Tekrar giriniz " + "11 karakter eşleşmedi");
    return;
  }

  alert("Başarılı bir giriş yaptınız");
});
*/



