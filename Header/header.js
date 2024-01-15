window.addEventListener('scroll', function(){
    let header = document.getElementById('#header')
    header.classList.toggle('rolagem' , window.scrollY > 0)// o toggle diz o seguinte: se a class existir, remova, se nao existir adicone.
})