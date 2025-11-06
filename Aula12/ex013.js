

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

var data = new Date()
var diasem = data.getDay()
switch (diasem){

    case diasem = 0:
        console.log('Domingo!')
        break
    case diasem = 1:
        console.log('Segunda!')
        break       
    case diasem = 2:
        console.log('Terça!')
        break        
    case diasem = 3:
        console.log('Quarta!')
        break       
    case diasem = 4:
        console.log('Quinta!')
        break        
    case diasem = 5:
        console.log('Sexta!')
        break       
    case diasem = 6:
        console.log('Sabado!')
        break     
        
    default:
        console.log('Nenhum dia Encontrado')
        break
}