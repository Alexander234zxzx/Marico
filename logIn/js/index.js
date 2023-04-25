function checkForm(el) {
    const userName = document.querySelector('.user-name-js')
    if (userName.value === '') return alert('Please fill out the form name')
    console.log('Name: ' + userName.value)
    userName.value = ''

    const passwordJs = document.querySelector('.password-js')
    if (passwordJs.value === '') return alert('Please fill out the form password')
    console.log('Password: ' + passwordJs.value)
    passwordJs.value = ''

    

    return false;
}