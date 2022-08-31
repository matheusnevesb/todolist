

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
        this.botaoSalvar = document.querySelectorAll('#botaoSalvar')
        this.$listaTitulo = document.querySelectorAll('#listaTitulo')
        this.$inputListaTitulo = document.querySelectorAll('#inputListaTitulo')
        this.$botaoSalvarCabecalho = document.querySelectorAll('#botaoSalvarCabecalho')
    },
    bindEvents: function() {
        const self = this

        this.botaoMais.onclick = self.Events.adicionarLista.bind(this)

        this.botaoMinimizar.forEach(function(botao) {
            botao.onclick = self.Events.minimizarLista.bind(this)
        });

        this.botaoSalvar.forEach(function (salvar) {
            salvar.onclick = self.Events.adicionarTarefa.bind(this)
        })

        this.$listaTitulo.forEach(function(titulo) {
            titulo.onclick = self.Events.trocarNomeLista.bind(this)
        })

        this.$botaoSalvarCabecalho.forEach( function(botao) {
            botao.onclick = self.Events.salvarInputLista.bind(this)
        })
    },
    Events: {
        adicionarLista: function() {
            quantidadeLista = this.calcularQuantidade

            this.listas.innerHTML += `
        <section class="listas">
            <div class="listaCabecalho">
                <h1 class="listaTitulo" id="listaTitulo">Lista 01</h1>
                <input type="text" id="inputListaTitulo" class="sumir" placeholder="Digite nome da lista">
                <button class="botaoSalvarCabecalho sumir" id="botaoSalvarCabecalho">salvar</button>
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
                <button id="botaoSalvar">Salvar</button>
            </div>
    
        </section>`

        this.cacheSelectors()
        this.bindEvents()
        
        },
        minimizarLista: function(e) {
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
            
        },
        adicionarTarefa: function(e) {
            let Input = e.target.parentElement.children[0].value

            let li = e.target.parentElement.offsetParent.children.tarefas
            
            li.innerHTML += `
            <li>
                <div></div>
                <label>${Input}</label>
                <button>X</button>
            </li>`

            e.target.parentElement.children[0].value = ''
        },
        trocarNomeLista: function(e) {
            input = e.target.nextElementSibling
            botaoSalvar = e.target.parentElement.children[2]

            input.classList.remove('sumir')
            titulo = e.target
            titulo.classList.add('sumir')
            texto = titulo.innerHTML
            input.value = texto
            botaoSalvar.classList.remove('sumir')
        },
        salvarInputLista: function(e) {
            input = e.target.parentElement.children[1]
            texto = input.value

            titulo = e.target.parentElement.children[0]
            titulo.innerHTML = texto

            input.classList.add('sumir')
            titulo.classList.remove('sumir')
            botaoSalvar.classList.add('sumir')
        }
    }
}

Main.init()