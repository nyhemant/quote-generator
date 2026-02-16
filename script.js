// Quote database
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown"
    },
    {
        text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau"
    },
    {
        text: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Try not to become a person of success, but rather try to become a person of value.",
        author: "Albert Einstein"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford"
    },
    {
        text: "I have learned throughout my life as a composer chiefly through my mistakes and pursuits of false assumptions, not by my exposure to founts of wisdom and knowledge.",
        author: "Igor Stravinsky"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        author: "Alan Watts"
    }
];

// DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const themeToggle = document.getElementById('themeToggle');

// Current quote index
let currentQuoteIndex = 0;

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add a subtle animation to the toggle button
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 100);
}

// Quote management
function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    return quotes[currentQuoteIndex];
}

function displayQuote(quote) {
    // Add animation class
    const quoteCard = document.querySelector('.quote-content');
    quoteCard.classList.add('quote-changing');
    
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;
        quoteCard.classList.remove('quote-changing');
    }, 250);
}

function generateNewQuote() {
    // Disable button temporarily to prevent rapid clicking
    newQuoteBtn.disabled = true;
    newQuoteBtn.style.opacity = '0.7';
    
    const newQuote = getRandomQuote();
    displayQuote(newQuote);
    
    // Re-enable button
    setTimeout(() => {
        newQuoteBtn.disabled = false;
        newQuoteBtn.style.opacity = '1';
    }, 500);
}

// Keyboard shortcuts
function handleKeyPress(event) {
    switch(event.key) {
        case ' ':
        case 'Enter':
            event.preventDefault();
            generateNewQuote();
            break;
        case 't':
        case 'T':
            if (!event.ctrlKey && !event.metaKey) {
                event.preventDefault();
                toggleTheme();
            }
            break;
    }
}

// Initialize app
function init() {
    initializeTheme();
    
    // Set initial quote (random)
    const initialQuote = getRandomQuote();
    quoteText.textContent = initialQuote.text;
    quoteAuthor.textContent = `— ${initialQuote.author}`;
    
    // Event listeners
    newQuoteBtn.addEventListener('click', generateNewQuote);
    themeToggle.addEventListener('click', toggleTheme);
    document.addEventListener('keydown', handleKeyPress);
    
    // Add focus management for accessibility
    newQuoteBtn.addEventListener('focus', () => {
        newQuoteBtn.style.outline = '3px solid var(--accent)';
        newQuoteBtn.style.outlineOffset = '2px';
    });
    
    newQuoteBtn.addEventListener('blur', () => {
        newQuoteBtn.style.outline = 'none';
    });
    
    // Add touch support for mobile
    let touchStartTime;
    newQuoteBtn.addEventListener('touchstart', () => {
        touchStartTime = Date.now();
    });
    
    newQuoteBtn.addEventListener('touchend', (e) => {
        const touchEndTime = Date.now();
        if (touchEndTime - touchStartTime < 500) { // Prevent accidental long presses
            e.preventDefault();
            generateNewQuote();
        }
    });
}

// Auto-generate a new quote every 30 seconds if page is visible
let autoQuoteInterval;

function startAutoQuote() {
    autoQuoteInterval = setInterval(() => {
        if (!document.hidden) {
            generateNewQuote();
        }
    }, 30000);
}

function stopAutoQuote() {
    if (autoQuoteInterval) {
        clearInterval(autoQuoteInterval);
    }
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoQuote();
    } else {
        startAutoQuote();
    }
});

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Start auto-quote feature
startAutoQuote();

// Console easter egg
console.log(`
🌟 Daily Quote Generator
━━━━━━━━━━━━━━━━━━━━━━

Keyboard shortcuts:
• Space or Enter: New quote
• T: Toggle theme

Made with ❤️ by OpenClaw

Total quotes available: ${quotes.length}
`);