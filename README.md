# 🚀 Go-AiTranslator

<div align="center">

![Go-AiTranslator Logo](icons/icon128.png)

**A modern, intelligent Chrome extension for instant AI-powered translation between any two languages you choose**

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Coming%20Soon-blue?style=for-the-badge&logo=google-chrome)](https://chrome.google.com/webstore)
[![GitHub Release](https://img.shields.io/github/v/release/RebixRise/Go-AiTranslator?style=for-the-badge)](https://github.com/RebixRise/Go-AiTranslator/releases)
[![License](https://img.shields.io/github/license/RebixRise/Go-AiTranslator?style=for-the-badge)](LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-@RebixRise-blue?style=for-the-badge&logo=telegram)](https://t.me/RebixRise)

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing) • [Support](#-support)

</div>

## ✨ Features

### 🌍 **Translate Between Any Languages**
- **Choose source and target languages from 70+ supported languages**
- **Not limited to Arabic and English—translate between any two languages**
- **Smart language search and validation**

### ⚡ **Instant Translation Anywhere**
- **Translate any selected text on any website instantly**
- **Pop-up translation icon or auto-popup on selection (like Google Translate)**
- **Right-click context menu for quick translation**

### 🎯 **Intelligent AI Translation**
- **Powered by Google Gemini AI and OpenRouter**
- **Multiple translation modes:**
  - 🔄 **Normal**: Standard translation
  - 📝 **Summarize**: Translate with intelligent summarization
  - ✨ **Improve**: Grammar correction + translation

### 🎨 **Modern UI/UX**
- **2025-style Design**: Glassmorphism, gradients, and smooth animations
- **Responsive Layout**: Optimized for all screen sizes
- **Dark/Light Mode**: Adaptive interface *(coming soon)*
- **Professional Typography**: Tajawal font for beautiful Arabic text
- **Smart language selection with search**

### ⚙️ **Advanced Productivity Features**
- **One-Click Auto Copy**: Toggle automatic clipboard copying
- **Keyboard Shortcuts**: `Ctrl+Enter` to translate, `Ctrl+K` for settings
- **Character Counter**: Real-time character count with visual indicators (limit: 5000)
- **Toast Notifications**: Elegant feedback messages
- **Settings modal with all options**

### 🔧 **Developer-Friendly**
- **Manifest V3**: Latest Chrome extension standards
- **TypeScript Ready**: Modern ES6+ JavaScript
- **Modular Architecture**: Clean, maintainable code structure
- **Error Handling**: Comprehensive error management and logging
- **Multiple AI providers: Gemini, OpenRouter**

## 🔧 Installation

### From Chrome Web Store (Recommended)
*Coming Soon - Under Review*

### Manual Installation (Developer Mode)

1. **Download the Extension**
   ```bash
   git clone https://github.com/RebixRise/Go-AiTranslator.git
   cd Go-AiTranslator
   ```

2. **Get Your Gemini API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key (free tier available)
   - Keep it secure - you'll need it for setup

3. **Install in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)
   - Click "Load unpacked" and select the project folder
   - Pin the extension to your toolbar

4. **Setup**
   - Click the extension icon
   - Click the settings gear ⚙️
   - Enter your Gemini API key
   - Save and start translating!

## 🎯 Usage

### Basic Translation
1. Click the extension icon
2. Type or paste your text
3. Select source and target languages from the dropdowns (search supported)
4. Click "Translate" or press `Ctrl+Enter`
5. Copy the result with one click

### Instant Website Translation
- **Select any text on a webpage**
- **Right-click → "Translate with Go-AiTranslator"**
- **Or use the floating pop-up icon for instant translation**
- **Choose pop-up behavior from settings (icon, auto, or none)**

### Translation Modes
- **🔄 Normal**: Direct translation
- **📝 Summarize**: Long text → summary + translation
- **✨ Improve**: Grammar correction + translation

### Auto Copy Feature
- Toggle the 📋 switch in the header
- Translations automatically copy to clipboard
- Perfect for workflow integration

## 🏗️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **AI Engine**: Google Gemini 1.5 Flash, OpenRouter
- **Architecture**: Chrome Extension Manifest V3
- **Storage**: Chrome Sync Storage API
- **Styling**: Modern CSS with CSS Variables
- **Icons**: Custom SVG icons

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🐛 Bug Reports
- Use the [Issues](https://github.com/RebixRise/Go-AiTranslator/issues) tab
- Include steps to reproduce
- Mention your Chrome version and OS

### 💡 Feature Requests
- Check existing [Issues](https://github.com/RebixRise/Go-AiTranslator/issues) first
- Clearly describe the feature and use case
- Add mockups if possible

### 🔧 Pull Requests
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### 📝 Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test on multiple Chrome versions
- Update documentation as needed

## 🌐 Internationalization

- **Supports 70+ languages**
- **RTL/LTR text handling**
- **Locale-aware formatting**

## 📊 Roadmap

### v2.0 (Planned)
- [ ] Dark/Light mode toggle *(UI groundwork present, logic coming soon)*
- [ ] More AI models (Claude, GPT)
- [ ] Offline translation cache
- [ ] Translation history
- [ ] Custom shortcuts

### v3.0 (Future)
- [ ] More language pairs
- [ ] Voice translation
- [ ] Image text recognition
- [ ] Team collaboration features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About RebixRise

**Go-AiTranslator** is proudly developed by [RebixRise](https://github.com/RebixRise), a technology company focused on creating innovative, open-source solutions.

### Connect With Us
- 📱 **Telegram**: [@RebixRise](https://t.me/RebixRise)
- 🐙 **GitHub**: [RebixRise](https://github.com/RebixRise)
- 🌐 **Website**: Coming Soon

## 💎 Support

### Free & Open Source
This extension is **completely free** and will always remain so. No hidden costs, no premium features, no data collection.

### Get Help
- 📚 **Documentation**: Check our [Wiki](https://github.com/RebixRise/Go-AiTranslator/wiki)
- 💬 **Community**: Join our [Telegram](https://t.me/RebixRise)
- 🐛 **Issues**: Report bugs via [GitHub Issues](https://github.com/RebixRise/Go-AiTranslator/issues)

### Star the Project ⭐
If you find this extension useful, please consider giving it a star on GitHub. It helps us reach more users and motivates continued development!

---

<div align="center">

**Made with ❤️ by RebixRise**

*"Breaking language barriers, one translation at a time"*

</div> 