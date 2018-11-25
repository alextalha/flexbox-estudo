
var elementos = JSON.parse(localStorage.getItem('list_todos')) || [];
var inserir = document.querySelector('.inserir');

inserir.onclick = () => {
    var valor = document.querySelector('.valor');
    Inserir(valor.value);
}

/* Iniciando o Local Storage caso já tenha dados */
if (elementos.length > 0) {
    var i = 0;
    for (elemento of elementos) {

        i = i + 1;
        var ul = document.querySelector('.todoList ul');
        var li = document.createElement('li');
        var excluir = document.createElement('button');
        excluir.textContent = 'Excluir';
        excluir.className = i;
        excluir.setAttribute('onclick', "remover(" + i + ",'" + elemento + "')")
        li.textContent = elemento;
        li.appendChild(excluir);
        ul.appendChild(li);

    }
}

function Inserir(valor) {

    var lis = document.querySelectorAll('.todoList ul li');

    elementos.push(valor);
    saveToStorage();

    [].forEach.call(lis, function (li) {
        li.remove();

    });

    var ul = document.querySelector('.todoList ul');

    var i = 0;
    for (elemento of elementos) {

        i = i + 1;

        var li = document.createElement('li');
        var excluir = document.createElement('button');
        excluir.textContent = 'Excluir';
        excluir.className = i;
        excluir.setAttribute('onclick', "remover(" + i + ",'" + elemento + "')")
        li.textContent = elemento;
        li.appendChild(excluir);
        ul.appendChild(li);

    }
}

function remover(obj, elemento) {

    var button_remover = document.getElementsByClassName(obj)
    var button_node = button_remover[0].parentNode;
    var index = elementos.indexOf(elemento);

    if (index > -1) {
        elementos.splice(index, 1);
        saveToStorage();
    }

    button_node.remove();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(elementos));
}
