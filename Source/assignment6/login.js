window.onload = function() {
    var form = document.getElementById("myLogin");
    form.onsubmit = function() {
        var username = document.getElementById("username").value;
        var password = form["password"].value;

        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");

        var errorMsgElement = document.getElementById("errormsg");
        if (errorMsgElement) {
            errorMsgElement.parentNode.removeChild(errorMsgElement);
        }

        var errorMsg = document.createElement("span");
        errorMsg.id = "errormsg";

        if (username == storedUsername && password == storedPassword) {
            errorMsg.style.color = "green";
            errorMsg.textContent = "เข้าสู่ระบบสำเร็จ";
            alert("เข้าสู่ระบบสำเร็จ");
            form.appendChild(errorMsg);
            return true;
        } else {
            errorMsg.style.color = "red";
            errorMsg.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
            form.appendChild(errorMsg);
            return false;
        }
    };
};