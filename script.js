// Jokes database - 20 sets of 5 silly jokes each
const jokeSets = [
    [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why don't eggs tell jokes? They'd crack each other up!",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "Why did the scarecrow win an award? He was outstanding in his field!"
    ],
    [
        "What do you call a bear with no teeth? A gummy bear!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call a fake noodle? An impasta!",
        "Why did the math book look so sad? Because it was full of problems!",
        "What do you call a sleeping bull? A bulldozer!"
    ],
    [
        "Why don't oysters donate? Because they are shellfish!",
        "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks!",
        "Why don't some couples go to the gym? Because some relationships don't work out!",
        "What do you call a pig that does karate? A pork chop!",
        "Why did the cookie go to the doctor? Because it felt crumbly!"
    ],
    [
        "What do you call a fish wearing a bowtie? Sofishticated!",
        "Why don't elephants use computers? They're afraid of the mouse!",
        "What do you call a cow with no legs? Ground beef!",
        "Why did the bicycle fall over? It was two tired!",
        "What do you call a belt made of watches? A waist of time!"
    ],
    [
        "Why don't vampires go to barbecues? They don't like steak!",
        "What do you call a deer with no eyes? No-eye-deer!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What do you call a factory that makes okay products? A satisfactory!",
        "Why don't scientists trust stairs? Because they're always up to something!"
    ],
    [
        "What do you call a cheese that isn't yours? Nacho cheese!",
        "Why did the golfer wear two pairs of pants? In case he got a hole in one!",
        "What do you call a lazy kangaroo? A pouch potato!",
        "Why don't penguins like talking to strangers at parties? They find it hard to break the ice!",
        "What do you call a dog magician? A labracadabrador!"
    ],
    [
        "Why don't bananas ever get lonely? They hang around in bunches!",
        "What do you call a computer that sings? A Dell!",
        "Why did the stadium get hot after the game? All the fans left!",
        "What do you call a sheep with no legs? A cloud!",
        "Why don't mountains ever get cold? They wear snow caps!"
    ],
    [
        "What do you call a fish with two knees? A two-knee fish!",
        "Why don't calendars ever get tired? They have too many dates!",
        "What do you call a pickle that draws? Dill Picasso!",
        "Why don't robots ever panic? They have nerves of steel!",
        "What do you call a sandwich that you make with holy water? A blessed meal!"
    ],
    [
        "Why don't eggs make good comedians? They always crack up!",
        "What do you call a cow that plays guitar? A moo-sician!",
        "Why don't shoes ever get lost? They're always sole mates!",
        "What do you call a bird that's afraid of heights? A chicken!",
        "Why don't clocks ever get hungry? They eat thyme!"
    ],
    [
        "What do you call a potato that wears glasses? A spec-tater!",
        "Why don't trains ever get tired? They have great track records!",
        "What do you call a cat that works for the Red Cross? A first-aid kit!",
        "Why don't batteries ever get lonely? They're always charged up!",
        "What do you call a dinosaur that loves to sleep? A dino-snore!"
    ],
    [
        "Why don't books ever get cold? They have book jackets!",
        "What do you call a dancing sheep? A baa-llerina!",
        "Why don't spoons ever get lost? They're always stirring around!",
        "What do you call a pig in karate class? A pork chop!",
        "Why don't clouds ever get speeding tickets? They're always drifting!"
    ],
    [
        "What do you call a sleeping dinosaur? A dino-snore!",
        "Why don't mirrors ever lie? They always reflect the truth!",
        "What do you call a bear in the rain? A drizzly bear!",
        "Why don't pencils ever get lost? They always draw attention!",
        "What do you call a snake that works for the government? A civil serpent!"
    ],
    [
        "Why don't cookies ever get stressed? They know how to crumble under pressure!",
        "What do you call a duck that gets all A's? A wise quacker!",
        "Why don't flowers ever get tired? They're always blooming with energy!",
        "What do you call a fish that needs help with vocals? Auto-tuna!",
        "Why don't trees ever get lonely? They branch out!"
    ],
    [
        "What do you call a belt made out of herbs? A seasoning!",
        "Why don't ghosts ever get lost? They always boo-k their way!",
        "What do you call a rabbit that tells jokes? A funny bunny!",
        "Why don't rivers ever get thirsty? They're always flowing!",
        "What do you call a cow that just gave birth? De-calf-inated!"
    ],
    [
        "Why don't donuts ever get dizzy? They're used to going in circles!",
        "What do you call a bee that can't make up its mind? A maybe!",
        "Why don't umbrellas ever get wet? They're always covered!",
        "What do you call a fish that wears a crown? King Neptune!",
        "Why don't socks ever get lost? They always stick together in pairs!"
    ],
    [
        "What do you call a monkey that loves chips? A chipmunk!",
        "Why don't windows ever get tired? They're always looking out for you!",
        "What do you call a cat that lives in an igloo? An eskimew!",
        "Why don't pillows ever get stressed? They always cushion the blow!",
        "What do you call a duck that loves fireworks? A fire-quacker!"
    ],
    [
        "Why don't keys ever get locked out? They always find a way in!",
        "What do you call a sheep that knows martial arts? A lamb chop!",
        "Why don't telephones ever get lonely? They're always ringing someone!",
        "What do you call a fish that's good at basketball? A slam dunk-fish!",
        "Why don't lightbulbs ever get dark? They're always bright ideas!"
    ],
    [
        "What do you call a dog that can do magic tricks? A labracadabrador!",
        "Why don't gardens ever get messy? They're always well-groomed!",
        "What do you call a cow that works out? Beef cake!",
        "Why don't cameras ever get lonely? They're always focusing on others!",
        "What do you call a fish that's a great singer? A tuna with perfect pitch!"
    ],
    [
        "Why don't doors ever get tired? They're always opening up new opportunities!",
        "What do you call a pig that knows karate? A pork chop!",
        "Why don't clouds ever get speeding tickets? They're always just drifting by!",
        "What do you call a fish that's really good at tennis? A racket-fish!",
        "Why don't stars ever get lonely? They're always hanging out in constellations!"
    ],
    [
        "What do you call a sleeping bull? A bulldozer!",
        "Why don't pencils ever get sharp with people? They know how to keep their point!",
        "What do you call a cow that plays the violin? A moo-sician!",
        "Why don't balloons ever get down? They're always uplifting!",
        "What do you call a fish that loves to dance? A disco fish!"
    ]
];

// Quote database with enhanced metadata
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        source: "Stanford Commencement Address",
        date: "2005",
        context: "Stanford University"
    },
    {
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon",
        source: "Beautiful Boy (Darling Boy)",
        date: "1980",
        context: "Double Fantasy album"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        source: "Speech",
        date: "1945",
        context: "Post-WWII address"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        source: "Nicomachean Ethics",
        date: "4th century BCE",
        context: "Ancient philosophy"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        source: "Speech to House of Commons",
        date: "1942",
        context: "World War II"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        source: "Interview",
        date: "1950s",
        context: "On creating Disneyland"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        source: "Speech",
        date: "1903",
        context: "Presidential address"
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau",
        source: "Walden",
        date: "1854",
        context: "Chapter: Conclusion"
    },
    {
        text: "Try not to become a person of success, but rather try to become a person of value.",
        author: "Albert Einstein",
        source: "Interview with George Sylvester Viereck",
        date: "1929",
        context: "Life magazine"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
        source: "Attributed",
        date: "c. 1940s",
        context: "Popular attribution"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        source: "Attributed",
        date: "c. 1890s",
        context: "Wit and wisdom"
    },
    {
        text: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford",
        source: "Interview",
        date: "1920s",
        context: "On business philosophy"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        source: "Long Walk to Freedom",
        date: "1994",
        context: "Autobiography"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
        source: "Stanford Commencement Address",
        date: "2005",
        context: "Stay hungry, stay foolish"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        source: "Apple Keynote",
        date: "1997",
        context: "Think Different campaign"
    },
    {
        text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        author: "Alan Watts",
        source: "The Wisdom of Insecurity",
        date: "1951",
        context: "Philosophy of living"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        source: "Attributed",
        date: "c. 1940s",
        context: "On problem-solving"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
        source: "Traditional saying",
        date: "Ancient",
        context: "Folk wisdom"
    },
    {
        text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author: "Bill Keane",
        source: "The Family Circus",
        date: "1960s",
        context: "Comic strip philosophy"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        source: "Interview",
        date: "1910",
        context: "On inventing the light bulb"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        source: "First Inaugural Address",
        date: "March 4, 1933",
        context: "Great Depression era"
    },
    {
        text: "Ask not what your country can do for you – ask what you can do for your country.",
        author: "John F. Kennedy",
        source: "Inaugural Address",
        date: "January 20, 1961",
        context: "Presidential inauguration"
    },
    {
        text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
        author: "Martin Luther King Jr.",
        source: "I Have a Dream speech",
        date: "August 28, 1963",
        context: "March on Washington"
    },
    {
        text: "Float like a butterfly, sting like a bee.",
        author: "Muhammad Ali",
        source: "Boxing match commentary",
        date: "1964",
        context: "Before fighting Sonny Liston"
    },
    {
        text: "That's one small step for man, one giant leap for mankind.",
        author: "Neil Armstrong",
        source: "Apollo 11 Moon Landing",
        date: "July 20, 1969",
        context: "First words on the Moon"
    },
    {
        text: "The unexamined life is not worth living.",
        author: "Socrates",
        source: "Apology by Plato",
        date: "399 BCE",
        context: "Defense at his trial"
    },
    {
        text: "All that we are is the result of what we have thought.",
        author: "Buddha",
        source: "The Dhammapada",
        date: "c. 5th century BCE",
        context: "Buddhist teachings"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
        source: "Tao Te Ching",
        date: "6th century BCE",
        context: "Chapter 64"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        source: "Analects",
        date: "c. 5th century BCE",
        context: "On perseverance"
    },
    {
        text: "The good life is one inspired by love and guided by knowledge.",
        author: "Bertrand Russell",
        source: "What I Believe",
        date: "1925",
        context: "Essay on philosophy"
    }
];

// DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteSource = document.getElementById('quote-source');
const generateBtn = document.getElementById('generateBtn');
const btnText = document.getElementById('btnText');
const themeToggle = document.getElementById('themeToggle');
const modeToggle = document.getElementById('modeToggle');
const appTitle = document.getElementById('appTitle');
const appSubtitle = document.getElementById('appSubtitle');
const quoteMode = document.getElementById('quote-mode');
const jokesMode = document.getElementById('jokes-mode');
const jokesList = document.getElementById('jokes-list');

// Current indices
let currentQuoteIndex = 0;
let currentJokeSetIndex = 0;
let isJokesMode = false;

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
}

// Mode management
function initializeMode() {
    const savedMode = localStorage.getItem('mode') || 'quotes';
    isJokesMode = savedMode === 'jokes';
    updateModeDisplay();
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

function toggleMode() {
    isJokesMode = !isJokesMode;
    localStorage.setItem('mode', isJokesMode ? 'jokes' : 'quotes');
    updateModeDisplay();
    
    // Generate new content for the switched mode
    generateNewContent();
    
    // Add animation to mode toggle
    modeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        modeToggle.style.transform = 'scale(1)';
    }, 100);
}

function updateModeDisplay() {
    const quotesIndicator = document.querySelector('.quotes-mode');
    const jokesIndicator = document.querySelector('.jokes-mode');
    const modeLabels = document.querySelectorAll('.mode-label');
    
    if (isJokesMode) {
        // Switch to jokes mode
        quoteMode.classList.add('hidden');
        jokesMode.classList.remove('hidden');
        quotesIndicator.classList.remove('active');
        jokesIndicator.classList.add('active');
        modeLabels[0].classList.remove('active');
        modeLabels[1].classList.add('active');
        
        // Update header and button
        appTitle.textContent = 'Silly Jokes Generator';
        appSubtitle.textContent = 'Get ready to laugh out loud! 😂';
        btnText.textContent = 'Generate New Jokes';
    } else {
        // Switch to quotes mode
        jokesMode.classList.add('hidden');
        quoteMode.classList.remove('hidden');
        jokesIndicator.classList.remove('active');
        quotesIndicator.classList.add('active');
        modeLabels[1].classList.remove('active');
        modeLabels[0].classList.add('active');
        
        // Update header and button
        appTitle.textContent = 'Daily Quote Generator';
        appSubtitle.textContent = 'Find inspiration in every word';
        btnText.textContent = 'Generate New Quote';
    }
}

// Content management
function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    return quotes[currentQuoteIndex];
}

function getRandomJokeSet() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * jokeSets.length);
    } while (newIndex === currentJokeSetIndex && jokeSets.length > 1);
    
    currentJokeSetIndex = newIndex;
    return jokeSets[currentJokeSetIndex];
}

function displayQuote(quote) {
    // Add animation class
    const quoteCard = document.querySelector('.quote-content');
    quoteCard.classList.add('quote-changing');
    
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;
        
        // Format source information
        let sourceText = '';
        if (quote.source && quote.date) {
            sourceText = `${quote.source} (${quote.date})`;
            if (quote.context) {
                sourceText += ` • ${quote.context}`;
            }
        } else if (quote.source) {
            sourceText = quote.source;
            if (quote.context) {
                sourceText += ` • ${quote.context}`;
            }
        } else if (quote.context) {
            sourceText = quote.context;
        }
        
        quoteSource.textContent = sourceText;
        quoteCard.classList.remove('quote-changing');
    }, 250);
}

function displayJokes(jokeSet) {
    // Add animation class
    jokesList.classList.add('quote-changing');
    
    setTimeout(() => {
        jokesList.innerHTML = '';
        jokeSet.forEach((joke, index) => {
            const jokeItem = document.createElement('div');
            jokeItem.className = 'joke-item';
            jokeItem.textContent = joke;
            jokeItem.style.animationDelay = `${index * 0.1}s`;
            jokesList.appendChild(jokeItem);
        });
        jokesList.classList.remove('quote-changing');
    }, 250);
}

function generateNewContent() {
    // Disable button temporarily
    generateBtn.disabled = true;
    generateBtn.style.opacity = '0.7';
    
    if (isJokesMode) {
        const newJokes = getRandomJokeSet();
        displayJokes(newJokes);
    } else {
        const newQuote = getRandomQuote();
        displayQuote(newQuote);
    }
    
    // Re-enable button
    setTimeout(() => {
        generateBtn.disabled = false;
        generateBtn.style.opacity = '1';
    }, 500);
}

// Legacy function for backward compatibility
function generateNewQuote() {
    generateNewContent();
}

// Keyboard shortcuts
function handleKeyPress(event) {
    switch(event.key) {
        case ' ':
        case 'Enter':
            event.preventDefault();
            generateNewContent();
            break;
        case 't':
        case 'T':
            if (!event.ctrlKey && !event.metaKey) {
                event.preventDefault();
                toggleTheme();
            }
            break;
        case 'm':
        case 'M':
            if (!event.ctrlKey && !event.metaKey) {
                event.preventDefault();
                toggleMode();
            }
            break;
    }
}

// Initialize app
function init() {
    initializeTheme();
    initializeMode();
    
    // Set initial content
    generateNewContent();
    
    // Event listeners
    generateBtn.addEventListener('click', generateNewContent);
    themeToggle.addEventListener('click', toggleTheme);
    modeToggle.addEventListener('click', toggleMode);
    document.addEventListener('keydown', handleKeyPress);
    
    // Add focus management for accessibility
    generateBtn.addEventListener('focus', () => {
        generateBtn.style.outline = '3px solid var(--accent)';
        generateBtn.style.outlineOffset = '2px';
    });
    
    generateBtn.addEventListener('blur', () => {
        generateBtn.style.outline = 'none';
    });
    
    // Add touch support for mobile
    let touchStartTime;
    generateBtn.addEventListener('touchstart', () => {
        touchStartTime = Date.now();
    });
    
    generateBtn.addEventListener('touchend', (e) => {
        const touchEndTime = Date.now();
        if (touchEndTime - touchStartTime < 500) { // Prevent accidental long presses
            e.preventDefault();
            generateNewContent();
        }
    });
}

// Auto-generate new content every 30 seconds if page is visible
let autoContentInterval;

function startAutoContent() {
    autoContentInterval = setInterval(() => {
        if (!document.hidden) {
            generateNewContent();
        }
    }, 30000);
}

function stopAutoContent() {
    if (autoContentInterval) {
        clearInterval(autoContentInterval);
    }
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoContent();
    } else {
        startAutoContent();
    }
});

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Start auto-content feature
startAutoContent();

// Console easter egg
console.log(`
🌟 Quote & Jokes Generator
━━━━━━━━━━━━━━━━━━━━━━━━━

Keyboard shortcuts:
• Space or Enter: Generate new content
• T: Toggle theme
• M: Toggle mode (quotes/jokes)

Made with ❤️ by OpenClaw

Total quotes available: ${quotes.length}
Total joke sets available: ${jokeSets.length} sets (${jokeSets.length * 5} jokes)
`);