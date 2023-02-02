var a = Number(prompt("nhap chieu dai: "));
var b = Number(prompt('nhap chieu rong: '));
console.log(a);
console.log(b);
if(a == '' || b == ''){
    alert("Bạn cần nhập đầy đủ thông tin")
}else{
    if (isNaN(a) || isNaN(b)) {
        alert("Bạn cần nhập đúng chiều dài và chiều rộng hoặc bạn cần phải nhập số.")
        
    } else {
        if(a >= 0 && b >= 0){
            var S = a * b;
        var C = (a + b) * 2;
        console.log('Dien tich: ', S);
        alert('Dien tich: ' + S);
        console.log('Chu vi: ', C);
        alert('Chu vi: ' + C);
        }else{
            alert('Chiều dài và rộng phải lớn hơn 0')
        }
    }
}