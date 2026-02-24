// The list of files inside your /files/ folder
const myFiles = [
    "CV Pieter Wattel.pdf",
    "Motivatiebrief Pieter Wattel.pdf"
];

const grid = document.getElementById('file-grid');

myFiles.forEach(fileName => {
    const lastDot = fileName.lastIndexOf('.');
    const name = fileName.substring(0, lastDot);
    const ext = fileName.substring(lastDot + 1);

    const card = document.createElement('div');
    card.className = 'file-card';

    card.innerHTML = `
        <div class="file-info">
            <span class="file-title">${name}</span>
            <span class="file-ext">${ext.toUpperCase()} File</span>
        </div>
        <a href="files/${fileName}" download="${fileName}" target="_blank" class="down-btn">
            Download
        </a>
    `;

    grid.appendChild(card);
});