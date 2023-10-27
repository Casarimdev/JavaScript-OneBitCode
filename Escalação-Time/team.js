function Add(){
    const TeamPlace = document.getElementById("Team")
    let inputPos = document.getElementById("inputPos")
    var inputName = document.getElementById("inputName")
    let inputNum = document.getElementById("inputNum")
    let  inputRemoveNum = document.getElementById("inputRemoveNum")
    let NamePlayer = inputName.value
    let NumberPlayer = inputNum.value
    let PosicionPlayer = inputPos.value
    var listNumbers = []
    
    
    let confirmation = confirm(`Deseja adicionar ${NamePlayer} como ${PosicionPlayer} com a camisa de número ${NumberPlayer} em seu time?`)

    if (confirmation){

        // if (listNumbers.includes(NumberPlayer)){
        //     alert('Algum outro jogador já utiliza este número. Vefique!')

        // }

        listNumbers.push(NumberPlayer)
        console.log(listNumbers)



        alert('Adicionado')

        const newPlayer = document.createElement('h3')

        newPlayer.innerText = `${NumberPlayer} ${NamePlayer} - ${PosicionPlayer}\n`
        newPlayer.id = `${NumberPlayer}`
        TeamPlace.appendChild(newPlayer)
        
        
        
        inputName.value = ""
        inputNum.value = ""
        inputPos.value = ""


    }
}

function Remove(){

    let numberRemove = document.getElementById("inputRemoveNum").value
    let PlayerRemove = document.getElementById(numberRemove)
    
    let confirmation = confirm(`Deseja remover o jogador ${PlayerRemove.innerText}?`)

    if (confirmation){
        document.getElementById("Team").removeChild(PlayerRemove)
        document.getElementById("inputRemoveNum").value = ""
        
    }
}