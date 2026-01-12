function contavogal(p){
    p = p.toLowerCase()
    let array = p.split("")
    let cont = 0    
    for(let pos in array){
        if(array[pos] == 'a' ||
           array[pos] == 'e' ||
           array[pos] == 'i' ||
           array[pos] == 'o' ||
           array[pos] == 'u' 
        ){
            cont += 1
        }
    }

    return cont
}

console.log(contavogal("jAvascript"))