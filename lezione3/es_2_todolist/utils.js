todolist = []

output = document.getElementById('output');

id = 0;



function add(todo) {
    if(todo !== ''){

        this.todolist.push({
            id: this.id,
            string: todo
        });
    
        this.id ++;
    
        this.update()
    }
}

function update() {
    appo = '';
    this.todolist.forEach(element => {
        appo = appo + '<div class="list-element"><div class="content">'+ element.string + '</div><div class="remove" onclick="rem('+ element.id +')">x</div></div>'; 
    });

    this.output.innerHTML = appo;
}

function rem(id) {
    i = 0;
    // this.todolist.forEach( ele => {
    //     if(ele.id === id){
    //         this.todolist.splice(i,1);
    //     }
    //     i ++;
    // });

    const removeIndex = this.todolist.findIndex(x => x.id === id);
    this.todolist.splice(removeIndex,1);

    this.update();
}