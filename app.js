const modalBtn = document.querySelector('#ModalBtn');
const modal = document.querySelector('#simpleModal');
const modalCloseBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', ()=>{
    if(modal.classList.contains('display-none')) {
        openModal();
    } else {
        closeModal();
    }
});

modalCloseBtn.addEventListener('click', ()=>{
    closeModal();
});

window.addEventListener('click', (e)=>{outsideClick(e)});

function openModal() {
    modal.classList.remove('display-none');
}

function closeModal() {
    modal.classList.add('display-none');
}

function outsideClick(e) {
    if(e.target === modal) {
        closeModal();
    }
}