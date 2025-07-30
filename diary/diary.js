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
    if (!container) {
        console.error('Could not find diary-entries container');
        return;
    }
    
    container.innerHTML = ''; // Clear existing entries
    
    // Sort entries by date in reverse order (newest first)
    const sortedEntries = [...diaryEntries].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );

    sortedEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'diary-entry';
        
        // Create the date element
        const dateDiv = document.createElement('div');
        dateDiv.className = 'diary-date';
        dateDiv.textContent = entry.date;
        
        // Create the content element
        const contentDiv = document.createElement('div');
        contentDiv.className = 'diary-content';
        contentDiv.textContent = entry.content;
        
        // Add click handler
        dateDiv.addEventListener('click', () => {
            dateDiv.classList.toggle('active');
            contentDiv.classList.toggle('show');
        });
        
        // Append elements
        entryElement.appendChild(dateDiv);
        entryElement.appendChild(contentDiv);
        container.appendChild(entryElement);
    });
}

// Make sure the DOM is loaded before running the script
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDiaryEntries);
} else {
    loadDiaryEntries();
}