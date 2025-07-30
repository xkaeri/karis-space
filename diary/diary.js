// Diary entries stored as objects with date and content
const diaryEntries = [
    {
        date: "July 30, 2025",
        content: "Today I worked on my website and added a diary page! I'm excited to share more entries here..."
    }
    // Add more entries here in the same format
];

function loadDiaryEntries() {
    const container = document.querySelector('.diary-entries');
    diaryEntries.reverse().forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'diary-entry';
        entryElement.innerHTML = `
            <div class="diary-date">${entry.date}</div>
            <div class="diary-content">${entry.content}</div>
        `;
        container.appendChild(entryElement);
    });
}

document.addEventListener('DOMContentLoaded', loadDiaryEntries);