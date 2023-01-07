var a = prompt("nhap chieu dai: ");
var b = prompt('nhap chieu rong: ');
let dai = parseFloat(a);
let rong = parseFloat(b);
console.log(dai);
console.log(rong);
if(a === '' || b === ''){
    alert("Bạn cần nhập đầy đủ thông tin")
}else{
    if (dai > rong && dai > 0 && rong > 0) {
        var S = dai * rong;
        var C = (dai + rong) * 2;
        console.log('Dien tich: ', S);
        alert('Dien tich: ' + S);
        console.log('Chu vi: ', C);
        alert('Chu vi: ' + C);
    } else {
        alert("Bạn cần nhập đúng chiều dài và chiều rộng hoặc bạn cần phải nhập số.")
    }
}