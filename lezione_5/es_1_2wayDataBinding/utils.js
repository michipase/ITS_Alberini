let app = new Vue({
    el: "#app",
    data() {
        return {
            name: undefined,
            eta: undefined,
            figo: false,
            saluto: ''
        }
    },
    methods: {
        stampaSaluto(){
            if(this.name && this.eta){
                this.saluto = `Ciao ${this.name} , hai ${this.eta} anni`
            }
        }
    }
});