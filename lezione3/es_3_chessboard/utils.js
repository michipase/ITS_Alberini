function draw(r,c){
    chessboard = '';

    for(let i = 0; i < r; i++){

        chessboard += '<div class="row">';

        for(let j = 0; j < c; j++){

            chessboard += '<div class="cell ' + ((i+j)%2 === 0 ? 'white' : 'black') + '" style="flex:' + 1/c + '">'+ i + j + '</div>';
        }

        chessboard += '</div>';
    }

    document.getElementById('output').innerHTML = chessboard;
}