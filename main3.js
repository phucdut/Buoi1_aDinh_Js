var a = parseFloat(prompt("Nhập a: "));
var b = parseFloat(prompt("Nhập b: "));
console.log(a);
console.log(b);

// Cong
console.log("Cộng: ", a + b);
alert("Cộng: "+ (a + b))
// Tru
console.log("Trừ: ", a - b);
alert("Trừ: "+ (a - b))
// Nhan
console.log("Nhân: ", a * b);
alert("Nhân: " + (a * b))

if (a >= 0 && b != 0) {
    // Chia lay nguyen
    console.log("Chia lay nguyen: ", parseInt(a / b));
    alert("Chia lay nguyen: "+ parseInt(a / b))
    // Chia lay dư
    console.log("Chia lay dư: ", a % b);
    alert("Chia lay dư: "+ (a % b))
}else{
    alert('Nhập lại b: Số chia không được bằng không')
}
