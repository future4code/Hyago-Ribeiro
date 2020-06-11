let valorTotal = 0

let arrayDespesas = []


function inserirDespesas() {


    
    let valor = document.getElementById("valor")
    valorDespesa = valor.value

    let tipo = document.getElementById("tipo")
    tipoDespesa = tipo.value

    let descricao = document.getElementById("descricao")
    descricaoDespesa = descricao.value

    if(valorDespesa !== "" && tipoDespesa !== "" && descricaoDespesa !== "") {

        let objDespesas = {
            
            valor: parseInt(valorDespesa),
            tipo: tipoDespesa,
            descricao: descricaoDespesa
            
        }
        
        arrayDespesas.push(objDespesas)

        const listaDeDespesas = document.getElementById("lista-despesas")
        listaDeDespesas.innerHTML += `<h4>Despesa</h4><p>Valor: R$${objDespesas.valor}</p> <p>Tipo: ${objDespesas.tipo}</p> <p>Descricao: ${objDespesas.descricao}</p>`
        
    } else {

        alert("Preencha os campos das despesas.")

    }
        
}
    
    
    function filtrarDespesas() {
        
        let valor2 = document.getElementById("valor")
        valorDespesa2 = valor2.value

        let tipo2 = document.getElementById("tipo-despesa")
        tipoDespesa2 = tipo2.value

        let descricao2 = document.getElementById("descricao")
        descricaoDespesa2 = descricao2.value
        
        let listraFiltrada = []

        if(tipoDespesa2 === 'casa'){
            
             listaFiltrada = arrayDespesas.filter((lista, idx, array) => {
                
                
                if(lista.tipo === "casa"){
                    return true
                    
                } 
                
            })

            let listaDeDespesas = document.getElementById("lista-despesas")

            listraFiltrada.forEach((objeto, index, array) => {

            listaDeDespesas.innerHTML += `<h4>Despesa</h4><p>Valor: R$${objeto.valor}</p> <p>Tipo: ${objeto.tipo}</p> <p>Descricao: ${objeto.descricao}</p>`

            })

        

            console.log(listaFiltrada)
            
        } else if(tipoDespesa2 === 'viagem'){
            
            const listaFiltrada = arrayDespesas.filter((lista, idx, array) => {
                
                
                if(lista.tipo === "viagem"){
                    return true
                    
                } 
                
            })

            console.log(listaFiltrada)
            
        }

        

}

