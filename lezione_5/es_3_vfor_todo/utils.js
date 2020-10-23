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
        },
        save(){
            const data = {todo: this.list, archived: this.archived};
            window.localStorage.setItem('savedTodo',JSON.stringify(data));
        },
        getTodo(){
            let data = JSON.parse(window.localStorage.getItem('savedTodo'));

            this.list = data.todo;
            this.archived = data.archived;
        },
    }
});