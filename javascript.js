document.addEventListener('DOMContentLoaded', function() {
    const menubutton = document.getElementById('menu-button');
    const overlayMenu = document.getElementById('overlay-menu');
    const close = document.getElementById('close');

    menubutton.addEventListener('click', function() {
        overlayMenu.style.display = 'flex';
    });

    close.addEventListener('click', function() {
        overlayMenu.style.display = 'none';
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.links li');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
