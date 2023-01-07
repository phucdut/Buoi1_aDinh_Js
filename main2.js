var a = prompt("Nhập bán kính:");
var R = parseFloat(a);
const Pi = 3.14;
console.log("Ban kính là: " + R)
if(a == ''){
    alert("Bạn cần nhập đầy đủ thông tin")
}else{
    if(R > 0){
        var C =  2*Pi*R;
        alert("Chu vi: " + C.toFixed(4));
        var S =  Pi*R*R;
        alert("Dien tich: " + S.toFixed(4));
        console.log("Chu vi: " + C.toFixed(4));
        console.log("Dien tich: " + S.toFixed(4));
    }else{
        
        alert("Bạn cần nhập bán kính vào là chữ số");
    }

}