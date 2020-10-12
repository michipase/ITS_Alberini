IDs = [];
selectedColor = 'white';

colorArray = ['red','orange','yellow','lime','green','cyan','blue','purple','pink','black'];

let colorPicker = '';
colorArray.forEach(x => {
    console.log(x);
    colorPicker += '<div class="color" id="' + x + '" onclick="setColor(' + x + ')"></div>'; 
});
document.getElementsByClassName('colorPicker')[0].innerHTML = colorPicker;

function draw(r, c){
    chessboard = '';
    this.IDs = [];

    let id = 0;
    for(let i = 0; i < r; i++){

        chessboard += '<div class="row">';

        for(let j = 0; j < c; j++){

            chessboard += '<div class="cell" id="' 
            + getId(id) +
            '" onclick="color('
            + getId(id)
            + ')"></div>';

            this.IDs.push(getId(id));

            id++;

        }

        chessboard += '</div>';
    }

    document.getElementById('output').innerHTML = chessboard;
}

function getId(id) {
    return id.toString();
}

function setColor(x) {
    this.selectedColor = x.id;
    const span = document.getElementById('selection');
    span.innerHTML = x.id;
    span.style.color = x.id;
}

function color(id) {
    console.log('#' + id);
    document.getElementById(id).style.backgroundColor = selectedColor;
}