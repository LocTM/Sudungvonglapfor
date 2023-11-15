// for (let i = 0; i < 6; i++){
//     document.write(`The number is ${i} <br>`)
// }

let i = 1;
let num;
let total= 0;
num = prompt("nhap vao day 1 so bat ki")
for (; i <= num; i++ ){
    total += i;
}
alert(`Tong cac so tu 0 den ${num} la: ${total}`);