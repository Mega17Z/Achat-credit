let saisi = document.getElementById('saisi');
let montant = document.getElementById('montant');
let message = document.getElementById('message');
let boutton = document.getElementById('boutton');

saisi.addEventListener('keyup', function(){
    if(saisi.value < 100 && saisi.value >= 0){
        boutton.disabled = true;
    }else if(saisi.value >= 100 && saisi.value <= 15000){
        montant.style.color = 'whitesmoke';
        message.innerText = ''
        boutton.disabled = false;
    }else{
        montant.style.color = 'red';
        message.innerText = 'veuillez saisir un montant entre 100 et 15000';
        message.style.color = 'red';
        boutton.disabled = true;
    }
})

boutton.addEventListener('click', function(e){
    e.preventDefault();
    alert('Votre avez acheter ' + saisi.value + ' FCFA');
})
