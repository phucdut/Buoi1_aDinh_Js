var R = Number(prompt("Nhập bán kính:"));
const PI = 3.14;
console.log("Ban kính là: " + R)
if(R == ''){
    alert("Bạn cần nhập đầy đủ thông tin")
}else{
    if(isNaN(R)){
        alert("Bạn cần nhập bán kính vào là chữ số");
        
    }else{
        if(R>=0){
            var C =  2*PI*R;
        alert("Chu vi: " + C.toFixed(4));
        var S =  PI*R*R;
        alert("Dien tich: " + S.toFixed(4));
        console.log("Chu vi: " + C.toFixed(4));
        console.log("Dien tich: " + S.toFixed(4));
        }else{
            alert("Bán kính không hợp lệ");
        }
    }

}