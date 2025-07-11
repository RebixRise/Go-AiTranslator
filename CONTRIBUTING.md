# 🤝 Contributing to Go-AiTranslator

Thank you for your interest in contributing to Go-AiTranslator! This document provides guidelines and information for contributors.

## 🌟 How to Contribute

### 🐛 Reporting Bugs

**Before submitting a bug report:**
- Check the [existing issues](https://github.com/RebixRise/Go-AiTranslator/issues) to avoid duplicates
- Test with the latest version of the extension
- Gather relevant information about your environment

**When submitting a bug report, please include:**
- **Clear title**: Brief description of the issue
- **Steps to reproduce**: Detailed steps to reproduce the bug
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Environment**: Chrome version, OS, extension version
- **Screenshots**: If applicable, add screenshots to help explain
- **Console errors**: Check browser console for any error messages

### 💡 Suggesting Features

**Before submitting a feature request:**
- Check if the feature already exists or is planned (see [CHANGELOG.md](CHANGELOG.md) and [README.md](README.md))
- Review existing [feature requests](https://github.com/RebixRise/Go-AiTranslator/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

**When submitting a feature request:**
- **Clear title**: Brief description of the feature
- **Use case**: Explain why this feature would be useful
- **Detailed description**: Provide as much detail as possible
- **Mockups/Examples**: Visual aids help communicate ideas
- **Alternatives considered**: What alternatives have you considered?

### 🔧 Pull Requests

We welcome pull requests! Here's how to submit one:

#### 1. Fork & Clone
```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/Go-AiTranslator.git
cd Go-AiTranslator
```

#### 2. Create a Branch
```bash
# Create a descriptive branch name
git checkout -b feature/add-dark-mode
# or
git checkout -b fix/translation-error
# or
git checkout -b docs/update-readme
```

#### 3. Make Changes
- Follow the [coding standards](#-coding-standards)
- Test your changes thoroughly
- Add comments for complex logic
- Update documentation if needed

#### 4. Test Your Changes
```bash
# Load the extension in Chrome
# 1. Go to chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked" and select the project folder
# 4. Test all functionality (translation, modes, context menu, auto-copy, settings)
```

#### 5. Commit & Push
```bash
# Stage your changes
git add .

# Write a descriptive commit message
git commit -m "feat: add dark mode toggle functionality

- Add dark/light mode toggle in settings
- Implement CSS variables for theme switching
- Save theme preference in chrome.storage
- Update UI components to respect theme

Fixes #123"

# Push to your fork
git push origin feature/add-dark-mode
```

#### 6. Create Pull Request
- Go to the original repository on GitHub
- Click "New Pull Request"
- Select your branch and provide a clear description
- Link any related issues using keywords like "Fixes #123"

## 📝 Coding Standards

### JavaScript/ES6+
```javascript
// ✅ Good: Use const/let, not var
const apiKey = 'your-key';
let isTranslating = false;

// ✅ Good: Use arrow functions for callbacks
elements.button.addEventListener('click', () => {
    handleTranslation();
});

// ✅ Good: Use async/await, not .then()
async function translateText(text) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Translation failed:', error);
        throw error;
    }
}

// ✅ Good: Use template literals
const message = `Translation completed: ${result.text}`;

// ✅ Good: Destructuring
const { text, language } = translationResult;
```

### CSS
```css
/* ✅ Good: Use CSS variables */
:root {
    --primary-color: #667eea;
    --border-radius: 0.5rem;
}

/* ✅ Good: BEM-like naming for components */
.translation-panel {
    /* Component styles */
}

.translation-panel__header {
    /* Element styles */
}

.translation-panel--loading {
    /* Modifier styles */
}

/* ✅ Good: Mobile-first responsive design */
.container {
    width: 100%;
}

@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}
```

### HTML
```html
<!-- ✅ Good: Semantic HTML -->
<main class="app-container">
    <header class="app-header">
        <h1>Go-AiTranslator</h1>
    </header>
    
    <section class="translation-section">
        <textarea aria-label="Text to translate" placeholder="Enter text..."></textarea>
        <button type="button" aria-label="Translate text">Translate</button>
    </section>
</main>

<!-- ✅ Good: Accessibility attributes -->
<button id="translateBtn" aria-describedby="translate-help">
    Translate
</button>
<div id="translate-help" class="sr-only">
    Press Ctrl+Enter to translate quickly
</div>
```

### File Organization
```
Go-AiTranslator/
├── manifest.json          # Extension manifest
├── popup.html             # Main UI
├── popup.js               # Main logic
├── styles.css             # All styles
├── background.js          # Service worker
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── docs/                  # Documentation
│   ├── API.md
│   └── CHANGELOG.md
└── tests/                 # Test files (future)
    └── test-cases.md
```

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] Extension loads without errors in Developer mode
- [ ] All UI elements render correctly
- [ ] Translation works for Arabic → English
- [ ] Translation works for English → Arabic
- [ ] Auto-copy toggle functions properly
- [ ] Settings modal opens/closes correctly
- [ ] API key validation works
- [ ] Error handling displays appropriate messages
- [ ] Context menu translation works
- [ ] Keyboard shortcuts function properly

### Browser Compatibility
Test in these browsers (if possible):
- [ ] Chrome (latest)
- [ ] Chrome (previous version)
- [ ] Microsoft Edge
- [ ] Brave Browser
- [ ] Opera

## 📚 Documentation

### Code Comments
```javascript
/**
 * Translates text using Google Gemini AI
 * @param {string} text - The text to translate
 * @param {string} mode - Translation mode ('normal', 'summarize', 'improve')
 * @returns {Promise<string>} The translated text
 * @throws {Error} When API request fails
 */
async function translateWithGemini(text, mode = 'normal') {
    // Implementation
}
```

### README Updates
If your changes affect functionality:
- Update feature descriptions
- Add new installation steps if needed
- Update screenshots if UI changes
- Add new usage examples

## 🏷️ Issue Labels

We use these labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 🚀 Release Process

### Version Numbering
We follow [Semantic Versioning](https://semver.org/):
- `MAJOR.MINOR.PATCH` (e.g., 1.2.3)
- **MAJOR**: Breaking changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible

### Commit Message Format
```
type(scope): brief description

Longer description if needed

- List of changes
- Another change

Fixes #123
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 💬 Community

### Communication Channels
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Telegram**: [@RebixRise](https://t.me/RebixRise) - Join our community!

### Code of Conduct
- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Celebrate diversity of ideas

## 🎯 Getting Started

### Good First Issues
Look for issues labeled [`good first issue`](https://github.com/RebixRise/Go-AiTranslator/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) - these are perfect for newcomers!

### Areas We Need Help
- 🐛 **Bug Testing**: Help us find and fix bugs
- 🎨 **UI/UX**: Improve the user interface and experience
- 📝 **Documentation**: Write guides, tutorials, and improve docs
- 🌐 **Internationalization**: Add support for more languages
- ⚡ **Performance**: Optimize code and improve speed
- 🔧 **Features**: Implement new features from our roadmap

## ❓ Questions?

Don't hesitate to ask questions! You can:
- Open a [GitHub Discussion](https://github.com/RebixRise/Go-AiTranslator/discussions)
- Join our [Telegram community](https://t.me/RebixRise)
- Create an issue with the `question` label

---

**Thank you for contributing to Go-AiTranslator! Together we're breaking language barriers.** 🌍✨ 