# Daily Quote Generator 🌟

A beautiful, modern web application that displays inspirational quotes with a sleek UI and smooth animations.

## Features

✨ **Modern Design**
- Clean, minimalist interface
- Smooth animations and transitions
- Beautiful typography with custom fonts

🌙 **Dark/Light Mode**
- Automatic theme persistence
- Smooth theme transitions
- Keyboard shortcut support (T key)

📱 **Fully Responsive**
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly interactions
- Optimized for all screen sizes

⌨️ **Keyboard Shortcuts**
- **Space/Enter**: Generate new quote
- **T**: Toggle theme

🎯 **Smart Features**
- 25+ curated inspirational quotes
- Auto-refresh every 30 seconds (when page is visible)
- Prevents duplicate quotes in succession
- Accessibility-friendly design

## Quick Start

### Option 1: Simple Local Server (Python)
```bash
# Navigate to project directory
cd quote-generator

# Start local server (Python 3)
python -m http.server 8000

# Or with Python 2
python -m SimpleHTTPServer 8000

# Open in browser
open http://localhost:8000
```

### Option 2: Node.js Server
```bash
# Install global server (if not already installed)
npm install -g http-server

# Start server
http-server -p 8000

# Open in browser
open http://localhost:8000
```

### Option 3: PHP Server
```bash
php -S localhost:8000
```

### Option 4: Live Server (VS Code)
If you have VS Code with the Live Server extension:
1. Right-click on `index.html`
2. Select "Open with Live Server"

## Project Structure

```
quote-generator/
├── index.html      # Main HTML structure
├── styles.css      # All styles and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13.1+
- ✅ Edge 80+
- ✅ Mobile browsers

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and Custom Properties
- **Vanilla JavaScript**: No frameworks, pure JS
- **Google Fonts**: Inter font family

## Customization

### Adding New Quotes
Edit the `quotes` array in `script.js`:
```javascript
const quotes = [
    {
        text: "Your custom quote here",
        author: "Author Name"
    },
    // ... more quotes
];
```

### Changing Colors
Modify CSS custom properties in `styles.css`:
```css
:root {
  --accent: #3b82f6;        /* Primary accent color */
  --accent-hover: #2563eb;  /* Hover state */
  /* ... other variables */
}
```

### Auto-refresh Timing
Change the interval in `script.js`:
```javascript
// Change 30000 (30 seconds) to desired milliseconds
setInterval(generateNewQuote, 30000);
```

## Performance

- **Fast Loading**: Minimal dependencies
- **Optimized**: Efficient animations using CSS transforms
- **Lightweight**: Total size < 20KB
- **Caching**: Browser-friendly asset caching

## Accessibility

- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ High contrast ratios
- ✅ Focus management
- ✅ ARIA labels

## Contributing

Feel free to:
1. Add more quotes to the collection
2. Improve animations or styling
3. Add new features (quote sharing, favorites, etc.)
4. Enhance accessibility

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

Built with ❤️ using OpenClaw
Quotes sourced from various inspirational figures and thinkers.

---

*"The way to get started is to quit talking and begin doing." - Walt Disney*