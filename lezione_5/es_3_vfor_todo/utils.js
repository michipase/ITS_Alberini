let app = new Vue({
    el: "#app",
    data() {
        return {
            list:[],
            newEl: '',
        }
    },
    methods: {
        push(x){
            this.list.push(x);
        },
        del(x){
            this.list.splice(x,1);
            this.newEl = '';
        }
    }
});