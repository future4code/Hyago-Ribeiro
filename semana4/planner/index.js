function novaTarefa() {

    let meuInput = document.getElementById("addTask")
    let tarefa = meuInput.value
    
    let diasDaSemana = document.getElementById("diaSemana")

    

    if(tarefa === ""){
        alert(`Não é possível adicionar uma lista vazia. Adicione algo.`)
    

    } else {  switch(diasDaSemana.value){
            
                case 'segunda' :

                    let elemento = document.getElementById("segunda");

                    elemento.innerHTML += `<li> ${tarefa} </li>`;

                    meuInput.value = " ";
                    break;

                case 'terca' :
                    
                    let elemento2 = document.getElementById("terca");

                    elemento2.innerHTML += `<li> ${tarefa} </li>`;

                    meuInput.value = " ";
                    break;

                case 'quarta' :

                    let elemento4 = document.getElementById("quarta");

                    elemento4.innerHTML += `<li> ${tarefa} </li>`;

                    meuInput.value = " ";
                    break;

                case 'quinta' :

                    let elemento5 = document.getElementById("quinta");

                    elemento5.innerHTML += `<li> ${tarefa} </li>`;

                    meuInput.value = " ";
                    break;

                case 'sexta' :

                    let elemento6 = document.getElementById("sexta");

                    elemento6.innerHTML += `<li> ${tarefa} </li>`;

                    meuInput.value = " ";
                    break;

                case 'sabado' :

                    let elemento7 = document.getElementById("sabado");

                    elemento7.innerHTML += `<li> ${tarefa} </li>`;

                    meuInput.value = " ";
                    break;

                case 'domingo' :

                    let elemento8 = document.getElementById("domingo");

                    elemento8.innerHTML += `<li> ${tarefa} </li>`;

                    meuInput.value = " ";
                    break;

        }
    
    }
    
}