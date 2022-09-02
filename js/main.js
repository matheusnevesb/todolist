

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
        this.$tarefa = document.querySelectorAll('#tarefa')
        this.$botaoSalvarLista = document.querySelectorAll('#botaoSalvarLista')
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

        this.$tarefa.forEach(function(botaoTarefa) {
            botaoTarefa.onclick = self.Events.alterarNomeTarefa.bind(this)
        })

        this.$botaoSalvarLista.forEach(function(botao) {
            botao.onclick = self.Events.salvarNovoNomeTarefa.bind(this)
        })
    },
    Events: {
        adicionarLista: function() {
            quantidadeLista = this.calcularQuantidade

            this.listas.innerHTML += `
        <section class="listas">
            <div class="listaCabecalho">
                <h1 class="listaTitulo" id="listaTitulo">Nova Lista</h1>
                <input type="text" id="inputListaTitulo" class="sumir" placeholder="Digite nome da lista">
                <button class="botaoSalvarCabecalho sumir" id="botaoSalvarCabecalho">salvar</button>
                <button id="minimizar">V</button>
            </div>
            <ul id="tarefas">
                <li>
                    <div id="botaoConcluido"></div>
                    <label id="tarefa">Tarefa 01</label>
                    <input type="text" id="inputLista" class="inputLista sumir" placeholder="Digite nome da lista">
                    <button class="botaoSalvarLista sumir" id="botaoSalvarLista">salvar</button>
                    <button id="botaoApagarLista">X</button>
                </li>
                <li>
                    <div id="botaoConcluido"></div>
                    <label id="tarefa">Tarefa 01</label>
                    <input type="text" id="inputLista" class="inputLista sumir" placeholder="Digite nome da lista">
                    <button class="botaoSalvarLista sumir" id="botaoSalvarLista">salvar</button>
                    <button id="botaoApagarLista">X</button>
                </li>
                <li>
                    <div id="botaoConcluido"></div>
                    <label id="tarefa">Tarefa 01</label>
                    <input type="text" id="inputLista" class="inputLista sumir" placeholder="Digite nome da lista">
                    <button class="botaoSalvarLista sumir" id="botaoSalvarLista">salvar</button>
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

            if (Input == '') {
                return
            }
            
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

        Main.init()
        },
        salvarInputLista: function(e) {
            input = e.target.parentElement.children[1]
            texto = input.value

            if (texto == ''){
                return
            }

            titulo = e.target.parentElement.children[0]
            titulo.innerHTML = texto

            input.classList.add('sumir')
            titulo.classList.remove('sumir')
            botaoSalvar.classList.add('sumir')
        Main.init()
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

        },
        alterarNomeTarefa: function(e) {
            input = e.target.nextElementSibling
            botao = e.target.parentElement.children[3]
            label = e.target
            label.classList.add('sumir')
            input.classList.remove('sumir')
            botao.classList.remove('sumir')
            input.value = label.innerHTML
            
        },
        salvarNovoNomeTarefa: function(e) {
            botaoSalvar = e.target
            input = e.target.parentElement.children[2]
            label = e.target.parentElement.children[1]

            if (input.value == '') {
                return
            }

            label.innerHTML = input.value
            label.classList.remove('sumir')
            input.classList.add('sumir')
            botaoSalvar.classList.add('sumir')
        }
    }
}

Main.init()