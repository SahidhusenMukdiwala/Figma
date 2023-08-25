// const { default: swal } = require("sweetalert");

// import swal from "sweetalert";
Check_info = () => {
    let email = document.getElementById('mail').value;
    let psw = document.getElementById('psw').value;

    let local_mail = localStorage.getItem('U_mail');
    let local_psw = localStorage.getItem('pass');

    if (email === local_mail && psw === local_psw) {
        swal("Congratulations!", "You LogedIn Successfully!", "success", {
        });
        window.location.href = "index.html";
    }

    else {
        swal({
            title: "Check your email or password",
            icon: "warning",
        })
        // alert("Please check your email or password")
    }
}


savedata = () => {
    let new_data = document.getElementById("e-mail").value;
    let new_data1 = document.getElementById("psw1").value;
    let new_data2 = document.getElementById("psw2").value;


    if (new_data1 != new_data2) {
        swal("Sorry!", "Check Your password!", "warning",);
    }

    // for single value
    else{
        localStorage.setItem("U_mail", new_data);
        localStorage.setItem("pass", new_data1);

        swal("Congratulations!", "Your email and password save Successfully!", "success", {
        });
        window.location.href = "login.html";
    }

    // for  multiple values 

    // if (localStorage.getItem('U_mail') == "" || localStorage.getItem('pass' == "")) {
    //     localStorage.setItem('U_mail', '[]')
    //     localStorage.setItem('pass', '[]')
    // }

    // var old_data = localStorage.getItem('U_mail')
    // var old_data1 = localStorage.getItem('pass')
    
    // localStorage.setItem('U_mail', JSON.stringify(old_data))
    // localStorage.setItem('pass', JSON.stringify(old_data1))

    // var old_data = JSON.parse(localStorage.getItem('U_mail'))
    // var old_data1 = JSON.parse(localStorage.getItem('pass'))

    // old_data.push(new_data)
    // old_data1.push(new_data1)



    // swal("Congratulations!", "Your email and password save Successfully!", "success", {
    // });
    // window.location.href = "login.html";
}
