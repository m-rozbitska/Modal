document.addEventListener("DOMContentLoaded", ()=>{
    const openModalBtn = document.querySelectorAll("[data-modal-target]");
    const closeModalBtn = document.querySelectorAll("[data-close-button]");
    const overlay = document.querySelector("#overlay");
    openModalBtn.forEach((button)=>{
        button.addEventListener("click", ()=>{
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });
    overlay.addEventListener("click", ()=>{
        const modals = document.querySelectorAll(".modal.active");
        modals.forEach((modal)=>{
            closeModal(modal);
        });
    });
    closeModalBtn.forEach((button)=>{
        button.addEventListener("click", ()=>{
            const modal = button.closest(".modal");
            closeModal((modal)=>{
                closeModal(modal);
            });
        });
    });
    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add(".active");
        overlay.classList.add(".active");
    }
    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove(".active");
        overlay.classList.remove(".active");
    }
//const body = document.querySelector('body');
//const modalBtn = document.querySelectorAll('.modal-btn__link');
//const modalOverlay = document.querySelector('.modal-overlay');
//const modal = document.querySelectorAll('.modal');
//modalBtn.forEach((el) => {
//el.addEventListener('click', (e) => {
//let path = e.currentTarget.getAttribute('data-path');
//console.log(path);
//modal.forEach((el) => {
//el.classList.remove('.modal-overlay--visible')
//});
//document.querySelector(`[data-target="${path}"]`).classList.add('.modal-body--visible');
//modalOverlay.classList.add('.modal-overlay--visible');
//});
//});
});

//# sourceMappingURL=index.579125c3.js.map
