function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Ano Invalido')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = (ano - Number(fano.value))
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('img', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/bebe-homem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else{
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade <= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            } else{
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }

        res.style.textAlign = 'center'
        res.style.margin = '15px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}