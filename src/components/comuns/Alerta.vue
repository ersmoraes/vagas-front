<template>
    <div :class="estiloAlerta" role="alert">
        <slot name="titulo"></slot>
     </div>
</template>

<script>
export default {
    nome: 'Alerta',
    props: { tipo: String },
    computed: {
        estiloAlerta() {
            switch(this.tipo) {
                case 'erro': return 'alert alert-danger alerta'
                case 'sucesso': return 'alert alert-success alerta'
                default: return 'alert alert-success danger'
            }
        }
    }
}
</script>

<style scoped>
.alerta {
    width: 50%;
    text-align: center;
    margin: 10px auto;
}
</style>