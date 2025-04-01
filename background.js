// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    // Initialize with default theme
    chrome.storage.sync.get(['currentTheme'], (result) => {
        if (!result.currentTheme) {
            chrome.storage.sync.set({ currentTheme: 'light-classic' });
        }
    });
}); 