var a = Number(prompt("Nhập a: "));
var b = Number(prompt("Nhập b: "));
console.log(a);
console.log(b);
// pt ax + b = 0

if(a == '' || b == ''){
    alert('Bạn cần nhập đầy đủ thông tin');
}else if(isNaN(a) || isNaN(b)){
    alert('Bạn cần phải nhập vào là số');
}else{
    if(a != 0){
        var x = (-b / a);
        alert("Nghiệm của phương trình: " + x);
        console.log("Nghiệm của phương trình: " , x)
    }else{
        if (b != 0){
            alert("Phương trình vô nghiệm.")
        }else{
            alert("Phương trình có vô số nghiệm.")
        }
    }
}