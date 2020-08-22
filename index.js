//Password show and hide

let show_password = document.querySelector("#view_password")

$("#view_password").on('click',function () { 
    if (show_password.className == "far fa-eye") {
        show_password.className = "far fa-eye-slash";
        document.querySelector(".password").type = "text"
    } else {
        show_password.className = "far fa-eye";
        document.querySelector(".password").type = "password"
    }
})


// Password Validation check 

$("#input_password").on('keyup change', function () { 
    let password_field = $(this).val();
    
    //Capital letter check
    if (password_field.match(/[A-Z]/) != null) {
        document.querySelector("#capital").className = "far fa-check-circle"
    } else {
        document.querySelector("#capital").className = "far fa-times-circle"
    }

    //Special character check
    if (password_field.match(/[!@#$%^&*]/) != null) {
        document.querySelector("#special").className = "far fa-check-circle"
    } else {
        document.querySelector("#special").className = "far fa-times-circle"
    }

    //numeric check
    if (password_field.match(/[0-9]/) != null) {
        document.querySelector("#number").className = "far fa-check-circle"
    } else {
        document.querySelector("#number").className = "far fa-times-circle"
    }


    //length check
    if (password_field.length > 6) {
        document.querySelector("#length").className = "far fa-check-circle"
    } else {
        document.querySelector("#length").className = "far fa-times-circle"
    }

})