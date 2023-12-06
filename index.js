// модальное окно

document.getElementById("open-modal-btn").addEventListener("click",function() {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click",function() {
    document.getElementById("my-modal").classList.remove("open")
})

//?

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithModal = true;
});
document.getElementById("my-modal").addEventListener('click',event => {
    if(event._isClickWithModal) return;
    event.currentTarget.classList.remove('open');
})