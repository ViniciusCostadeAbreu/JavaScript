function contar(){
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if ((ini.value == '' || fim.value == '' || pas.value == '')){
        window.alert('Por Favor informe os valores')
    }
    else{
        res.innerHTML = 'Contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        

        if(p <= 0){
            window.alert('Passo 0 Não é valido, considerando passo 1')
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c+=p){
            res.innerHTML += `${c} \u{1F449}` 
            }
        } else{
            for(var c = i; c >= f; c-=p){
            res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
        
    }

}