const themes = {
    'light-classic': {
        backgroundColor: '#ffffff',
        textColor: '#2d3436',
        linkColor: '#0984e3',
        borderColor: '#dfe6e9',
        secondaryBg: '#f8f9fa',
        inputBg: '#ffffff',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        hoverBg: '#f1f3f5'
    },
    'light-warm': {
        backgroundColor: '#f5f5dc',
        textColor: '#2d3436',
        linkColor: '#e17055',
        borderColor: '#ffeaa7',
        secondaryBg: '#fff8e1',
        inputBg: '#ffffff',
        shadowColor: 'rgba(225, 112, 85, 0.1)',
        hoverBg: '#ffeaa7'
    },
    'light-cool': {
        backgroundColor: '#f0f8ff',
        textColor: '#2d3436',
        linkColor: '#00b894',
        borderColor: '#81ecec',
        secondaryBg: '#e3f2fd',
        inputBg: '#ffffff',
        shadowColor: 'rgba(0, 184, 148, 0.1)',
        hoverBg: '#81ecec'
    },
    'dark-classic': {
        backgroundColor: '#1a1a1a',
        textColor: '#ffffff',
        linkColor: '#74b9ff',
        borderColor: '#2d3436',
        secondaryBg: '#2d2d2d',
        inputBg: '#2d2d2d',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#2d2d2d'
    },
    'dark-blue': {
        backgroundColor: '#1a237e',
        textColor: '#ffffff',
        linkColor: '#64b5f6',
        borderColor: '#283593',
        secondaryBg: '#283593',
        inputBg: '#283593',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#303f9f'
    },
    'dark-purple': {
        backgroundColor: '#2d1b3d',
        textColor: '#ffffff',
        linkColor: '#b39dfb',
        borderColor: '#4527a0',
        secondaryBg: '#4527a0',
        inputBg: '#4527a0',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#5c6bc0'
    },
    'dark-green': {
        backgroundColor: '#1b3c35',
        textColor: '#ffffff',
        linkColor: '#81c784',
        borderColor: '#2e7d32',
        secondaryBg: '#2e7d32',
        inputBg: '#2e7d32',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#388e3c'
    },
    'dark-red': {
        backgroundColor: '#3c1b1b',
        textColor: '#ffffff',
        linkColor: '#e57373',
        borderColor: '#c62828',
        secondaryBg: '#c62828',
        inputBg: '#c62828',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#d32f2f'
    },
    'light-green': {
        backgroundColor: '#e8f5e9',
        textColor: '#2d3436',
        linkColor: '#2e7d32',
        borderColor: '#a5d6a7',
        secondaryBg: '#c8e6c9',
        inputBg: '#ffffff',
        shadowColor: 'rgba(46, 125, 50, 0.1)',
        hoverBg: '#a5d6a7'
    },
    'light-pink': {
        backgroundColor: '#fce4ec',
        textColor: '#2d3436',
        linkColor: '#c2185b',
        borderColor: '#f8bbd0',
        secondaryBg: '#f8bbd0',
        inputBg: '#ffffff',
        shadowColor: 'rgba(194, 24, 91, 0.1)',
        hoverBg: '#f8bbd0'
    },
    'light-orange': {
        backgroundColor: '#fff3e0',
        textColor: '#2d3436',
        linkColor: '#f57c00',
        borderColor: '#ffe0b2',
        secondaryBg: '#ffe0b2',
        inputBg: '#ffffff',
        shadowColor: 'rgba(245, 124, 0, 0.1)',
        hoverBg: '#ffe0b2'
    },
    'light-teal': {
        backgroundColor: '#e0f2f1',
        textColor: '#2d3436',
        linkColor: '#00897b',
        borderColor: '#b2dfdb',
        secondaryBg: '#b2dfdb',
        inputBg: '#ffffff',
        shadowColor: 'rgba(0, 137, 123, 0.1)',
        hoverBg: '#b2dfdb'
    },
    'light-indigo': {
        backgroundColor: '#e8eaf6',
        textColor: '#2d3436',
        linkColor: '#3f51b5',
        borderColor: '#c5cae9',
        secondaryBg: '#c5cae9',
        inputBg: '#ffffff',
        shadowColor: 'rgba(63, 81, 181, 0.1)',
        hoverBg: '#c5cae9'
    },
    'dark-orange': {
        backgroundColor: '#3e2723',
        textColor: '#ffffff',
        linkColor: '#ffb74d',
        borderColor: '#5d4037',
        secondaryBg: '#5d4037',
        inputBg: '#5d4037',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#6d4c41'
    },
    'dark-teal': {
        backgroundColor: '#004d40',
        textColor: '#ffffff',
        linkColor: '#4db6ac',
        borderColor: '#00695c',
        secondaryBg: '#00695c',
        inputBg: '#00695c',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#00796b'
    },
    'dark-indigo': {
        backgroundColor: '#1a237e',
        textColor: '#ffffff',
        linkColor: '#7986cb',
        borderColor: '#283593',
        secondaryBg: '#283593',
        inputBg: '#283593',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#303f9f'
    },
    'dark-cyan': {
        backgroundColor: '#006064',
        textColor: '#ffffff',
        linkColor: '#4dd0e1',
        borderColor: '#00838f',
        secondaryBg: '#00838f',
        inputBg: '#00838f',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#0097a7'
    },
    'dark-deep-purple': {
        backgroundColor: '#311b92',
        textColor: '#ffffff',
        linkColor: '#9575ff',
        borderColor: '#4527a0',
        secondaryBg: '#4527a0',
        inputBg: '#4527a0',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        hoverBg: '#512da8'
    }
};

function applyTheme(theme) {
    const style = document.createElement('style');
    style.id = 'theme-switcher-style';
    
    const themeColors = themes[theme];
    if (!themeColors) return;

    style.textContent = `
        /* Base styles */
        body {
            background-color: ${themeColors.backgroundColor} !important;
            color: ${themeColors.textColor} !important;
        }

        /* Links */
        a {
            color: ${themeColors.linkColor} !important;
        }

        /* Form elements */
        input, textarea, select {
            background-color: ${themeColors.inputBg} !important;
            color: ${themeColors.textColor} !important;
            border-color: ${themeColors.borderColor} !important;
        }

        /* Buttons */
        button {
            background-color: ${themeColors.secondaryBg} !important;
            color: ${themeColors.textColor} !important;
            border-color: ${themeColors.borderColor} !important;
        }

        /* Cards and containers */
        .card, .container, .box, .panel, .modal, .dialog {
            background-color: ${themeColors.secondaryBg} !important;
            border-color: ${themeColors.borderColor} !important;
            box-shadow: 0 2px 4px ${themeColors.shadowColor} !important;
        }

        /* Headers and navigation */
        header, nav, .navbar, .header {
            background-color: ${themeColors.secondaryBg} !important;
            border-color: ${themeColors.borderColor} !important;
        }

        /* Tables */
        table {
            background-color: ${themeColors.secondaryBg} !important;
            color: ${themeColors.textColor} !important;
            border-color: ${themeColors.borderColor} !important;
        }

        th, td {
            border-color: ${themeColors.borderColor} !important;
            color: ${themeColors.textColor} !important;
        }

        /* Lists */
        ul, ol {
            color: ${themeColors.textColor} !important;
        }

        /* Hover effects */
        a:hover, button:hover {
            background-color: ${themeColors.hoverBg} !important;
        }

        /* Code blocks */
        pre, code {
            background-color: ${themeColors.secondaryBg} !important;
            color: ${themeColors.textColor} !important;
            border-color: ${themeColors.borderColor} !important;
        }

        /* Images and media */
        img, video {
            border-color: ${themeColors.borderColor} !important;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${themeColors.secondaryBg} !important;
        }

        ::-webkit-scrollbar-thumb {
            background: ${themeColors.borderColor} !important;
            border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: ${themeColors.hoverBg} !important;
        }

        /* Selection */
        ::selection {
            background-color: ${themeColors.linkColor} !important;
            color: ${themeColors.backgroundColor} !important;
        }
    `;

    // Remove existing theme style if any
    const existingStyle = document.getElementById('theme-switcher-style');
    if (existingStyle) {
        existingStyle.remove();
    }

    document.head.appendChild(style);
}

function resetTheme() {
    const style = document.getElementById('theme-switcher-style');
    if (style) {
        style.remove();
    }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'applyTheme') {
        applyTheme(request.theme);
    } else if (request.action === 'resetTheme') {
        resetTheme();
    }
});

// Apply saved theme on page load
chrome.storage.sync.get(['currentTheme'], (result) => {
    if (result.currentTheme) {
        applyTheme(result.currentTheme);
    }
}); 