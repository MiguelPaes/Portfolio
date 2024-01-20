window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem' , window.scrollY > 100)// o toggle diz o seguinte: se a class existir, remova, se nao existir adicone.
})




