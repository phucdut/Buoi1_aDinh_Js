const a = parseInt(prompt("Nhập a: "));
const b = Number(prompt("Nhập b: "));
const c = Number(prompt("Nhập c: "));
console.log("so a: ", a);
console.log('so b', b);
console.log('so c', c);

// pt ax*x + bx + c = 0 
if (a == '' || b == '' || c == '') {
    alert("Bạn cần nhập đầy đủ thông tin")
} else {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Bạn cần nhập vào là chữ số")
    } else {
        if (a != 0) {
            var delTa = (b * b - 4 * a * c);
            if (delTa > 0) {
                x1 = ((-b + Math.sqrt(delTa)) / (2 * a));
                alert("Nghiệm của phương trình x1: " + x1);
                console.log("Nghiệm của phương trình x1: ", x1)
                x2 = ((-b - Math.sqrt(delTa)) / (2 * a));
                alert("Nghiệm của phương trình x2: " + x2);
                console.log("Nghiệm của phương trình x2: ", x2)

            } else if (delTa = 0) {
                var x = (-b / (2 * a));
                alert("Nghiệm của phương trình x1 = x2: " + x);
                console.log("Nghiệm của phương trình x1 = x2: ", x)
            } else {
                alert("Phương trình vô nghiệm:")
            }
        } else {
            if (b != 0) {
                var x = (-c / b);
                alert("Nghiệm của phương trình: " + x);
                console.log("Nghiệm của phương trình: ", x)
            } else {
                if (c != 0) {
                    alert("Phương trình vô nghiệm.")
                } else {
                    alert("Phương trình có vô số nghiệm.")
                }
            }
        }
    }

}
