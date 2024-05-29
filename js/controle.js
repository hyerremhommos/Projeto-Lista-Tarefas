let input = document.getElementById("valorEntrada");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("area-lista");
let contador = 0;

function addTarefa() {
  //Pegar o valor digitado no input
  let valorInput = input.value;

  //Se o valor do campo input for diferente de vazio/nulo/undefined, então faça (...)
  if (valorInput !== " " && valorInput !== null && valorInput !== undefined) {

    ++contador;

    let novoItem = `<div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="item-icone">
      <i id="icone_${contador}" class="fa fa-circle-o" aria-hidden="true"></i>
    </div>
    <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
    </div>
    <div class="item-botao">
      <button onclick="deletarTarefa(${contador})" class="delete">
        <i class="fa fa-trash" aria-hidden="true"></i> Deletar
      </button>
    </div>
  </div>`;

    //Vai adicionar o novo item (bloco HTML) ao documento que já existe (main.innerHTML)
    main.innerHTML += novoItem;

    //Zerar o campinho input e dar um foco nele
    input.value = "";
    input.focus();

  }
}

function deletarTarefa(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    //Verificar qual a classe de nosso item
    var classe = item.getAttribute('class');
    
    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-circle-o');
        icone.classList.add('fa-check-circle');

        //Jogar o item riscado para o final da lista
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-check-circle');
        icone.classList.add('fa-circle-o');
    }
}

//Código prestar atenção(ouvir) quando algum evento acontecer no input, realiza uma função(...)
input.addEventListener("keyup", function(event){ 
    //Se teclou enter (tecla 13)
    if(event.keyCode === 13){
        //Previnir caso o enter for fazer qualquer outra coisa
        event.preventDefault();
        //Vai ser a mesma coisa que clicar no botão
        btnAdd.click();
    }
}); 