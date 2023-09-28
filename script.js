document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const targetElement = document.getElementById('target');

    toggleButton.addEventListener('click', function () {
        if (targetElement.style.display === 'none') {
            targetElement.style.display = 'block';
        } else {
            targetElement.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.getElementById('open-popup-button');
    const closePopupButton = document.getElementById('close-popup-button');
    const popup = document.getElementById('popup');

    // Fungsi untuk membuka popup
    openPopupButton.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    // Fungsi untuk menutup popup
    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
