
// function obterEstatisticas(numeros: number[]) {

//     const numerosOrdenados: number[] = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//a)As entradas dessa função é o parametro numeros, e a saída é o objeto estatisticas.

//b)Temo as variávens
// - numerosOrdenados que é um array de números
// - soma que é um number
// - estatisticas, que eu poderia criar um tipo específico para ela. Mas como todos os elementos dentro dela estão tipados, achei desnecessário e redundante.

//c)

const amostraDeIdade = {
    numeros: [21, 18, 65, 15, 18],
    obterEstatisticas: (numeros: number[]) => {
        const numerosOrdenados: number[] = numeros.sort(
            (a, b) => a - b
        )
    
        let soma: number = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
    
        return estatisticas
    }
}

console.log(
    amostraDeIdade.obterEstatisticas(amostraDeIdade.numeros)
)