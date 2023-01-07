var a = parseFloat(prompt("Nhập a: "));
var b = parseFloat(prompt("Nhập b: "));
console.log(a);
console.log(b);
// pt ax + b = 0

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