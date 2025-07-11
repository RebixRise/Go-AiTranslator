# 📦 Installation Guide - Go-AiTranslator

<div align="center">

![Go-AiTranslator Logo](icons/icon128.png)

**Professional installation guide for Go-AiTranslator Chrome Extension**

*Developed by [RebixRise](https://github.com/RebixRise)*

</div>

## 🚀 Quick Start

### Method 1: Chrome Web Store (Recommended)
*Coming Soon - Under Review*

The easiest way to install Go-AiTranslator will be directly from the Chrome Web Store. We're currently under review and will be available soon!

### Method 2: Manual Installation (Available Now)

Perfect for early adopters and developers who want the latest features.

## 📋 Prerequisites

Before installation, ensure you have:

- ✅ **Chrome 88+** (or Chromium-based browser)
- ✅ **Internet connection** for API access
- ✅ **Google account** (for Gemini API key)
- ✅ **Developer mode** enabled (for manual installation)

## 🔧 Step-by-Step Installation

### Step 1: Download the Extension

**Option A: Download ZIP**
1. Visit [Go-AiTranslator Releases](https://github.com/RebixRise/Go-AiTranslator/releases)
2. Download the latest `go-aitranslator-v1.0.0.zip`
3. Extract to a folder on your computer

**Option B: Clone Repository**
```bash
git clone https://github.com/RebixRise/Go-AiTranslator.git
cd Go-AiTranslator
```

### Step 2: Get Your Gemini API Key

1. **Visit Google AI Studio**
   - Go to [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account

2. **Create API Key**
   - Click "Create API Key"
   - Select "Create API key in new project" (recommended)
   - Copy the generated key (starts with `AIza...`)
   - **⚠️ Keep this key secure and private!**

3. **API Key Features**
   - ✅ **Free tier available** (1500 requests/day)
   - ✅ **No credit card required** for basic usage
   - ✅ **Secure integration** with Chrome Storage

### Step 3: Install in Chrome

1. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Or: Menu → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle "Developer mode" in the top-right corner
   - This allows loading unpacked extensions

3. **Load the Extension**
   - Click "Load unpacked"
   - Select the Go-AiTranslator folder
   - The extension should appear in your extensions list

4. **Pin to Toolbar** (Recommended)
   - Click the puzzle piece icon in Chrome toolbar
   - Find "Go-AiTranslator" and click the pin icon
   - Now you can access it with one click!

### Step 4: Configure the Extension

1. **Open Go-AiTranslator**
   - Click the extension icon in your toolbar
   - Or use keyboard shortcut `Ctrl+Shift+T` (coming soon)

2. **Access Settings**
   - Click the gear icon ⚙️ in the top-right
   - The settings modal will open

3. **Enter API Key**
   - Paste your Gemini API key
   - Click "Save Settings"
   - You'll see a success message if the key is valid

4. **Test Translation**
   - Type "Hello" in the text area
   - Click "Translate" or press `Ctrl+Enter`
   - You should see the Arabic translation!

## ⚡ Quick Configuration

### Enable Auto-Copy (Optional)
- Toggle the 📋 switch in the header
- Translations will automatically copy to clipboard
- Perfect for productivity workflows

### Translation Modes
- **🔄 Normal**: Standard translation
- **📝 Summarize**: Long text → summary + translation  
- **✨ Improve**: Grammar correction + translation

## 🔍 Verification

### ✅ Installation Checklist
- [ ] Extension appears in `chrome://extensions/`
- [ ] Extension icon visible in Chrome toolbar
- [ ] Settings modal opens and closes properly
- [ ] API key validation succeeds
- [ ] Test translation works (both directions)
- [ ] Auto-copy toggle functions
- [ ] Context menu appears when right-clicking text

### 🧪 Test Cases
1. **Arabic → English**: Try "مرحبا بالعالم"
2. **English → Arabic**: Try "Hello World"
3. **Long Text**: Test with a paragraph
4. **Context Menu**: Select text on any webpage, right-click

## 🔧 Troubleshooting

### Common Issues

#### ❌ "Extension failed to load"
**Solution:**
- Ensure all files are in the same folder
- Check that `manifest.json` exists
- Disable other conflicting extensions
- Restart Chrome

#### ❌ "Invalid API key"
**Solutions:**
- Verify the key starts with `AIza`
- Check for extra spaces or characters
- Generate a new key from Google AI Studio
- Ensure Gemini API is enabled in your Google Cloud project

#### ❌ "Translation failed"
**Solutions:**
- Check internet connection
- Verify API key hasn't exceeded quota
- Try refreshing the extension page
- Check Chrome console for errors (`F12` → Console)

#### ❌ Context menu not appearing
**Solutions:**
- Reload the extension in `chrome://extensions/`
- Check that "contextMenus" permission is granted
- Try restarting Chrome

### 🆘 Getting Help

If you encounter issues:

1. **Check Console Errors**
   - Press `F12` in the extension popup
   - Look for red error messages
   - Include these in your bug report

2. **Community Support**
   - 💬 Join our [Telegram community](https://t.me/RebixRise)
   - 🐛 Report bugs on [GitHub Issues](https://github.com/RebixRise/Go-AiTranslator/issues)
   - 📧 Email: support@rebixrise.com

## 🔄 Updates

### Automatic Updates (Chrome Web Store)
Once available on the Chrome Web Store, updates will be automatic.

### Manual Updates (Developer Installation)
1. Download the latest version
2. Replace the old folder
3. Go to `chrome://extensions/`
4. Click the refresh icon on Go-AiTranslator
5. Your settings will be preserved

## 🔒 Privacy & Security

### What We Store
- ✅ **API Key**: Encrypted in Chrome Sync Storage
- ✅ **Settings**: Auto-copy preference, translation mode
- ❌ **No Text Data**: We never store your translations
- ❌ **No Tracking**: No analytics or user tracking

### Data Flow
```
Your Text → Chrome Extension → Google Gemini API → Translation Result
```
- Direct communication with Google's servers
- No intermediate servers or data collection
- Your data never leaves the official channels

## 🌍 Browser Compatibility

### ✅ Fully Supported
- **Chrome 88+** (Primary target)
- **Microsoft Edge 88+**
- **Brave Browser**
- **Opera 74+**

### ⚠️ Limited Support
- **Firefox**: Not supported (different extension system)
- **Safari**: Not supported (different extension system)

## 📱 System Requirements

### Minimum Requirements
- **OS**: Windows 7+, macOS 10.13+, Linux
- **RAM**: 4GB (for Chrome)
- **Storage**: 50MB free space
- **Internet**: Stable connection for API calls

### Recommended
- **OS**: Windows 10+, macOS 10.15+, Ubuntu 18.04+
- **RAM**: 8GB+
- **Internet**: Broadband connection

---

## 🎉 You're All Set!

Congratulations! Go-AiTranslator is now ready to break language barriers. 

### Next Steps
- ⭐ [Star the project](https://github.com/RebixRise/Go-AiTranslator) on GitHub
- 💬 Join our [Telegram community](https://t.me/RebixRise)
- 🐛 Report any issues you find
- 🚀 Start translating!

---

<div align="center">

**Made with ❤️ by [RebixRise](https://github.com/RebixRise)**

*Breaking language barriers, one translation at a time*

</div> 