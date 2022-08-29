

const Main = {
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },
    cacheSelectors: function() {
        this.botaoMais = document.querySelector('#mais')
        this.listas = document.querySelector('#listas')
        this.botaoMinimizar = document.querySelectorAll('#minimizar')
        this.Tarefas = document.querySelectorAll('#tarefas')
        this.ContainerInput = document.querySelectorAll('#containerInput')
    },
    bindEvents: function() {
        const self = this

        this.botaoMais.onclick = self.Events.adicionarLista.bind(this)

        this.botaoMinimizar.forEach(function(botao) {
            botao.onclick = self.Events.minimizarLista.bind(this)
        });
    },
    Events: {
        adicionarLista: function() {
            quantidadeLista = this.calcularQuantidade

            this.listas.innerHTML += `
        <section class="listas">
            <div class="listaCabecalho">
                <h1 class="listaTitulo">Lista Nova</h1>
                <button id="minimizar">V</button>
            </div>
            <ul id="tarefas">
                <li>
                    <div></div>
                    <label>Tarefa 01</label>
                    <button>X</button>
                </li>
                <li>
                    <div></div>
                    <label>Tarefa 01</label>
                    <button>X</button>
                </li>
                <li>
                    <div></div>
                    <label>Tarefa 01</label>
                    <button>X</button>
                </li>
            </ul>
            <div class="containerInput" id="containerInput">
                <input type="text" placeholder="Digite sua tarefa aqui...">
                <button>Salvar</button>
            </div>
    
        </section>`

        this.cacheSelectors()
        this.bindEvents()
        
        },
        minimizarLista: function(e) {
            console.log(e)
            listaDeTarefas = e.target.parentElement.offsetParent.children.tarefas
            containerInput = e.target.parentElement.offsetParent.children.containerInput

            temSumir = listaDeTarefas.classList.contains('sumir')

            


            if (temSumir) {
                listaDeTarefas.classList.remove('sumir')
                containerInput.classList.remove('sumir')
                
                return
            }

            listaDeTarefas.classList.add('sumir')
            containerInput.classList.add('sumir')
            
        }
    }
}

Main.init()