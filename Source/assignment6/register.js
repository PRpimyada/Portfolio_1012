window.onload = function() {
    var form = document.getElementById("myRegister");
    form.onsubmit = function() {
        var fname = form["firstname"].value;
        var lname = form["lastname"].value;
        var genderElements = form["gender"];
        var gender = "";

        for (var i = 0; i < genderElements.length; i++) {
            if (genderElements[i].checked) {
                gender = genderElements[i].value;
                break;
            }
        }

        var bday = form["bday"].value;
        var email = form["email"].value;
        var username = form["username"].value;

        var passwords = document.getElementsByName("password");
        var password = passwords[0].value;
        var retype_password = passwords[1].value;

        var errorMsgElement = document.getElementById("errormsg");
        errorMsgElement.textContent = "";

        if (fname == "" || lname == "" || gender == "" || bday == "" || email == "" || username == "" || password == "" || retype_password == "") {
            errorMsgElement.style.color = "red";
            errorMsgElement.textContent = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            return false;
        }

        if (password != retype_password) {
            errorMsgElement.style.color = "red";
            errorMsgElement.textContent = "password ไม่ตรงกัน";
            alert("password ไม่ตรงกัน");
            return false;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        errorMsgElement.style.color = "green";
        errorMsgElement.textContent = "ลงทะเบียนสำเร็จ";
        return true;
    };
};