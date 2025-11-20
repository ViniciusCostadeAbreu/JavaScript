function gerartabuada(){
    var txtnum = document.getElementById('txtnum')
    var select = document.getElementById('ressel')
    var num = Number(txtnum.value)

    if(txtnum.value == ''){
        window.alert('Por favor informe um numero')
    } else{
        select.innerHTML=''
        for(var c = 1; c <= 10; c++){
            var valor = String(c);
            var texto = `${num} X ${c} = ${(num*c)} `;

            select.add(new Option(texto, valor));
        }
    }
}