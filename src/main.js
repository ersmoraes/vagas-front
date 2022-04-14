import { createApp } from 'vue'
import App from './App.vue'

//importar o pacote do mitt
import mitt from 'mitt'

//criar a instância do pacote MIYTOTPeA
const emitter = mitt()

//Iniciar a instância do vue com base no componente
const app = createApp(App)

//configurar a instância do pacote mitt como sendo uma propriendade global
//essa propriedade estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associar a instância do vue com o elemento html de id app de
app.mount('#app')

