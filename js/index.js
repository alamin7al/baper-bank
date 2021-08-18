document.getElementById('login-submit').addEventListener('click', function () {
    const eamailField = document.getElementById('user-email')
    const userEmial = eamailField.value

    const userField = document.getElementById('user-password')
    const userPassword = userField.value

    if(userEmial=='alamin@gmail.com' && userPassword=='alamin'){
       window.location.href='banking.html'
    }
})



































