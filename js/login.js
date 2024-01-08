    const loginform = document.querySelector('#loginform')
    loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert('Bienvenid@ ${validUser.name} a la comunidad fGreat!')
    window.location.href = 'index.html'
})