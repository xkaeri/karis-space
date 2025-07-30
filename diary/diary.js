// Diary entries stored as objects with date and content
const diaryEntries = [
    {
        date: "July 30, 2025",
        content: "Today I worked on my website and added a diary page! I'm excited to share more entries here..."
    },
    {
        date: "July 29, 2025",
        content: "No entry today, just relaxing and enjoying some time off."
    }
];

function loadDiaryEntries() {
    const container = document.querySelector('.diary-entries');
    container.innerHTML = ''; // Clear existing entries
    
    // Sort entries by date in reverse order (newest first)
    const sortedEntries = [...diaryEntries].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    sortedEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'diary-entry';
        entryElement.innerHTML = `
            <div class="diary-date">${entry.date}</div>
            <div class="diary-content">${entry.content}</div>
        `;

        const dateElement = entryElement.querySelector('.diary-date');
        const contentElement = entryElement.querySelector('.diary-content');

        dateElement.addEventListener('click', () => {
            dateElement.classList.toggle('active');
            contentElement.classList.toggle('show');
        });

        container.appendChild(entryElement);
    });
}

// Load entries when page loads
document.addEventListener('DOMContentLoaded', loadDiaryEntries);