let valorTotal = 0

let arrayDespesas = []


function inserirDespesas() {


    let extrato = document.getElementById("extrato")
    extrato.innerHTML = ""
    
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

    
    valorTotal += parseInt(valor.value)
        
    extrato.innerHTML += `${valorTotal}`

    valor.value = ""
    tipo.value = ""
    descricao.value = ""

}
    
    
    function filtrarDespesas() {
        
        let listaDoDespesas = document.getElementById("lista-despesas")

        listaDoDespesas.innerHTML = ""

        let max = document.getElementById("valor-max")

        let min = document.getElementById("valor-min")

        let valor2 = document.getElementById("valor")
        valorDespesa2 = valor2.value

        let tipo2 = document.getElementById("tipo-despesa")
        tipoDespesa2 = tipo2.value

        let descricao2 = document.getElementById("descricao")
        descricaoDespesa2 = descricao2.value
        
        let listraFiltrada = []


        listaFiltrada = arrayDespesas.filter((lista, idx, array) => {

            return lista.tipo === tipo2.value && min.value <= lista.valor && max.value >= lista.valor

        })


        listaFiltrada.forEach((objeto, index, array) => {
                    
                    
                    listaDoDespesas.innerHTML += `<h4>Despesa</h4><p>Valor: R$${objeto.valor}</p> <p>Tipo: ${objeto.tipo}</p> <p>Descricao: ${objeto.descricao}</p>`
                    
                })



        
        

    }

    function limpar(){


        let listaDaDespesas = document.getElementById("lista-despesas")
        listaDaDespesas.innerHTML = ""

    }

