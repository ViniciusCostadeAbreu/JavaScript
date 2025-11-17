function contar(){
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (ini.value == '' || fim.value == '' || pas.value == ''){
        window.alert('Por Favor informe os valores')
    }else{
        if(Number(pas.value) == 0){
            var c = Number(ini.value) 
            while(c < (Number(fim.value) +1)){
                res.innerHTML = res.innerHTML + '👉' + c 
                c++
            }
        }
        
    }

}