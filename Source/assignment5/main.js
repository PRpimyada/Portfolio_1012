window.onload = function() {
    document.getElementById("top").innerText = "Welcome to the Forum";
};

let postCount = 0;

function postFunction() {
    const message = document.getElementById("message").value;
    if (message === "") {
        alert("กรุณาใส่ข้อความก่อนโพสต์");
        return;
    }

    postCount += 1;

    if (postCount === 1) {
        document.getElementById("topic").innerText = message;
    } else if (postCount === 2) {
        document.getElementById("reply1").innerText = message;
    } else if (postCount === 3) {
        document.getElementById("reply2").innerText = message;
    } else {
        alert("ไม่สามารถโพสต์เพิ่มเติมได้");
    }

    document.getElementById("message").value = "";
}

function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    postCount = 0;
}
