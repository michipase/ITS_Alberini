let app = new Vue({
    el: "#app",
    data() {
        return {
            list:[],
            archived: [],
            newEl: '',
            message: '',
            disable: false,
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
            this.message = 'salvati gli attuali task :)'
            this.disable = true;
            setTimeout(_ => {this.message = ''; this.disable = false}, 5000)
        },
        getTodo(){
            let data = JSON.parse(window.localStorage.getItem('savedTodo'));

            if(data.todo !== [] && data.archive !== []){
                this.list = data.todo;
                this.archived = data.archived;
                this.message = 'Aggiunti i task precedentemente salvati';
                this.disable = true;
                setTimeout(_ => {this.message = ''; this.disable = false}, 5000)
            } else {

            }
        },
        enterPress(e,data) {
            if (e.keyCode === 13) {
              this.push(data)
            } else if (e.keyCode === 50) {
              alert('@ was pressed');
            }      
            this.log += e.key;
          },
    }
});