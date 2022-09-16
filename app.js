function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "") {
      alert("Vui lòng nhập tên!");
      return false;
    }
    if (password == "") {
      alert("Vui lòng nhập mật khẩu!");
      return false;
    } else if (username == "wather149"){
      if (password == "1234") {
        window.location.href = "/Login/Home/index.html";
      }
    }
  }