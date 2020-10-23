let app = new Vue({
    el: "#app",
    data() {
        return {
            list:[],
            archived: [],
            newEl: '',
        }
    },
    methods: {
        push(x){
            this.list.push(x);
        },
        archive(x){
            this.archived.push(this.list[x]);
            this.list.splice(x,1);
            this.newEl = '';
        }
    }
});