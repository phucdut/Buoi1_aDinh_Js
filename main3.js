var a = Number(prompt("Nhập a: "));
var b = Number(prompt("Nhập b: "));
console.log(a);
console.log(b);

if (isNaN(a) || isNaN(b)) {
    alert("Bạn cần nhập vào là chữ số")
} else if (a != '' && b!= ''){
    // Cong
    console.log("Cộng: ", a + b);
    alert("Cộng: " + (a + b))
    // Tru
    console.log("Trừ: ", a - b);
    alert("Trừ: " + (a - b))
    // Nhan
    console.log("Nhân: ", a * b);
    alert("Nhân: " + (a * b))

    if (a >= 0 && b != 0) {
        // Chia lay nguyen
        console.log("Chia lay nguyen: ", parseInt(a / b));
        alert("Chia lay nguyen: " + parseInt(a / b))
        // Chia lay dư
        console.log("Chia lay dư: ", a % b);
        alert("Chia lay dư: " + (a % b))
    } else {
        alert('Nhập lại b: Số chia không được bằng không')
    }

}else{
    alert('Bạn cần nhập đầy đủ thông tin')
}