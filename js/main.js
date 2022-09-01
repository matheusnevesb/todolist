

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
        this.$botaoApagarLista = document.querySelectorAll('#botaoApagarLista')
        this.$botaoConcluido = document.querySelectorAll('#botaoConcluido')
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

        this.$botaoApagarLista.forEach( function(botao) {
            botao.onclick = self.Events.apagarLista.bind(this)
        })

        this.$botaoConcluido.forEach(function(botao) {
            botao.onclick = self.Events.concluirTarefa.bind(this)
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
                    <div id="botaoConcluido"></div>
                    <label>Tarefa 01</label>
                    <button id="botaoApagarLista">X</button>
                </li>
                <li>
                    <div id="botaoConcluido"></div>
                    <label>Tarefa 01</label>
                    <button id="botaoApagarLista">X</button>
                </li>
                <li>
                    <div id="botaoConcluido"></div>
                    <label>Tarefa 01</label>
                    <button id="botaoApagarLista">X</button>
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
                <div id="botaoConcluido"></div>
                <label>${Input}</label>
                <button id="botaoApagarLista">X</button>
            </li>`

            e.target.parentElement.children[0].value = ''

        Main.init()
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
        },
        apagarLista: function(e) {
            console.log(e)
            li = e.target.parentElement
            li.classList.add('sumir')

        Main.init()
        },
        concluirTarefa: function(e) {
            li = e.target.parentElement
            let condicao = li.classList.contains('done')

            if (condicao) {
                li.classList.remove('done')
                return
            }
            li.classList.add('done')

        }
    }
}

Main.init()