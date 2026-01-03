var select = document.getElementById('sel')
var res = document.getElementById('res')

function adicionar(){
    res.innerHTML = ''
    var txtnum = document.getElementById('txtnum')
    if(txtnum.value == '' || Number(txtnum.value) > 100 || Number(txtnum.value) < 1 || (opcaoExiste(select, txtnum.value))){
        window.alert('Opção invalida ou ja existente')
        txtnum.value = ''
    } else{
        var c = 1
        var num = Number(txtnum.value)
        var valor = String(num)
        var texto = `Valor ${num} adicionado`

        select.add(new Option(texto, valor));
        txtnum.value = ''
    }
}

function finalizar(){
    if (select.options.length === 0){
        window.alert('Por favor informe um numero')
    } else{
        if (select.options.length === 1){
            res.innerHTML = `Ao todo temos ${select.options.length} numero cadastrado`
        } else {
            res.innerHTML = `Ao todo temos ${select.options.length} numeros cadastrados`
        }
         
    }
}

function opcaoExiste(select, value){
    return Array.from(select.options)
    .some(option => option.value === value);
}