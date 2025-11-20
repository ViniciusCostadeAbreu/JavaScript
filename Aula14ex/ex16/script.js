function contar(){
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if ((ini.value == '' || fim.value == '' || pas.value == '')){
        window.alert('Por Favor informe os valores')
    } else if (ini.value < 0 || fim.value < 0 || pas.value < 0){
        window.alert('Não São permitidos Numeros Negativos')
    }else if (ini.value > fim.value){
        window.alert('O valor inical não pode ser maior que o valor final')
    }
    else{
        if(Number(pas.value) == 0){
            window.alert('Passo 0 Não é valido, considerando passo 1')
            //var c = Number(ini.value) 
            for(var c = Number(ini.value); c < (Number(fim.value) +1); c++){
                res.innerHTML = res.innerHTML + '👉' + c 
            }

            //ASSIM TAMBEM FUNCIONA
            /*while(c < (Number(fim.value) +1)){
                res.innerHTML = res.innerHTML + '👉' + c 
                c++
            }*/
        }else {
            for(var c = Number(ini.value); c < (Number(fim.value) +1); c+=Number(pas.value)){
                res.innerHTML = res.innerHTML + '👉' + c 
            }
        }
        
    }

}