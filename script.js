const modal = document.getElementById('pdf-modal');
const iframe = document.getElementById('pdf-viewer');
const closeBtn = document.getElementById('close-btn');
const viewButtons = document.querySelectorAll('.view-btn');

// When a button is clicked
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const fileToLoad = button.getAttribute('data-file');
        
        // 1. Set the iframe source to the PDF file
        iframe.src = fileToLoad;
        
        // 2. Show the modal
        modal.classList.remove('hidden');
    });
});

// When the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    iframe.src = ""; // Stop the PDF from loading in the background
});

// Also close if the user clicks the dark background
document.querySelector('.modal-overlay').addEventListener('click', () => {
    modal.classList.add('hidden');
    iframe.src = "";
});