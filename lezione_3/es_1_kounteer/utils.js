xkounter = document.getElementById('kounter');

val = 0;

function add()
{
    kounter.innerHTML = val++;
}

function rem() {
    kounter.innerHTML = val--;
}

function reset() {
    kounter.innerHTML = val = 0;
}
