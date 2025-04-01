document.addEventListener('DOMContentLoaded', () => {
    const themeCards = document.querySelectorAll('.theme-card');
    const resetButton = document.getElementById('resetTheme');

    // Load current theme
    chrome.storage.sync.get(['currentTheme'], (result) => {
        if (result.currentTheme) {
            const activeCard = document.querySelector(`[data-theme="${result.currentTheme}"]`);
            if (activeCard) {
                activeCard.classList.add('active');
            }
        }
    });

    // Theme switching
    themeCards.forEach(card => {
        card.addEventListener('click', () => {
            const theme = card.dataset.theme;
            
            // Remove active class from all cards
            themeCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');

            // Save theme preference
            chrome.storage.sync.set({ currentTheme: theme }, () => {
                // Apply theme to current tab
                chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                    chrome.tabs.sendMessage(tabs[0].id, { action: 'applyTheme', theme });
                });
            });
        });
    });

    // Reset theme
    resetButton.addEventListener('click', () => {
        chrome.storage.sync.remove(['currentTheme'], () => {
            // Remove active class from all cards
            themeCards.forEach(c => c.classList.remove('active'));
            
            // Reset theme in current tab
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'resetTheme' });
            });
        });
    });
}); 