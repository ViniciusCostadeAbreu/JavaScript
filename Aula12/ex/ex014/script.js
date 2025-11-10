function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 13//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora < 12){
        //Bom dia
        img.src = "imagens/manha.png"
        window.document.body.style.backgroundColor = "#99ABB5"
    }else if (hora >= 12 && hora < 18){
        //Boa Tarde
        img.src = "imagens/tarde.png"
        window.document.body.style.backgroundColor = "#F99421"
    }else{
        //Boa Noite
        img.src = "imagens/noite.png"
        window.document.body.style.backgroundColor = "#3E3152"
    }
}
