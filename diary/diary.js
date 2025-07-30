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
    console.log('Loading diary entries...'); // Debug log
    const container = document.querySelector('.diary-entries');
    if (!container) {
        console.error('Could not find diary-entries container');
        return;
    }
    
    container.innerHTML = '';
    
    const sortedEntries = [...diaryEntries].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    sortedEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'diary-entry';
        
        const dateDiv = document.createElement('div');
        dateDiv.className = 'diary-date';
        dateDiv.textContent = entry.date;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'diary-content';
        contentDiv.textContent = entry.content;
        
        dateDiv.addEventListener('click', () => {
            dateDiv.classList.toggle('active');
            contentDiv.classList.toggle('show');
        });
        
        entryElement.appendChild(dateDiv);
        entryElement.appendChild(contentDiv);
        container.appendChild(entryElement);
    });
}

// Ensure the script runs after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDiaryEntries);
} else {
    loadDiaryEntries();
}

console.log('Diary script loaded'); // Debug log