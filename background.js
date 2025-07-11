// Background Service Worker for Go-AiTranslator Extension

// Extension installation/update handler
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Go-AiTranslator extension installed');
        
        // Set default settings
        chrome.storage.sync.set({
            'extension_version': '1.0.0',
            'install_date': Date.now()
        });
        
        // Open welcome page (optional)
        // chrome.tabs.create({
        //     url: chrome.runtime.getURL('welcome.html')
        // });
        
    } else if (details.reason === 'update') {
        console.log('Go-AiTranslator extension updated');
    }
    
    // Create context menu on install/update
    if (chrome.contextMenus) {
        chrome.contextMenus.create({
            id: 'translate-selection',
            title: 'Translate with Go-AiTranslator',
            contexts: ['selection']
        });
    }
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
    // This is handled by default popup, but we can add additional logic here if needed
    console.log('Extension icon clicked on tab:', tab.id);
});

// Handle context menu clicks
if (chrome.contextMenus) {
    chrome.contextMenus.onClicked.addListener((info, tab) => {
        if (info.menuItemId === 'translate-selection') {
            // Send selected text to popup for translation
            const selectedText = info.selectionText;
            
            if (selectedText && selectedText.trim()) {
                // Store the selected text temporarily
                chrome.storage.local.set({
                    'selected_text': selectedText.trim(),
                    'auto_translate': true
                });
                
                // Open the popup
                chrome.action.openPopup();
            }
        }
    });
}

// Handle messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
        case 'getSelectedText':
            // Return any stored selected text
            chrome.storage.local.get(['selected_text', 'auto_translate'], (result) => {
                sendResponse({
                    text: result.selected_text || '',
                    autoTranslate: result.auto_translate || false
                });
                
                // Clear the stored text after use
                chrome.storage.local.remove(['selected_text', 'auto_translate']);
            });
            return true; // Keep the message channel open for async response
            
        case 'translateSelection':
            // Handle text selection translation trigger from content script
            const selText = (request.text || '').trim();
            if (selText.length === 0) {
                sendResponse({ error: 'empty_selection' });
                break;
            }
            // Store selected text and flag for auto-translation
            chrome.storage.local.set({
                'selected_text': selText,
                'auto_translate': true
            }, () => {
                // Open the extension popup programmatically
                chrome.action.openPopup();
                sendResponse({ success: true });
            });
            return true; // Keep channel open until response is sent
            
        case 'openOptionsPage':
            chrome.runtime.openOptionsPage();
            sendResponse({ success: true });
            break;
            
        case 'getExtensionInfo':
            sendResponse({
                version: chrome.runtime.getManifest().version,
                name: chrome.runtime.getManifest().name
            });
            break;
            
        default:
            sendResponse({ error: 'Unknown action' });
    }
});

// Handle storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync') {
        console.log('Storage changes detected:', changes);
        
        // Log API key changes (without exposing the actual key)
        if (changes.gemini_api_key) {
            console.log('API key updated');
        }
    }
});

// Handle extension unload
chrome.runtime.onSuspend.addListener(() => {
    console.log('Extension unloading...');
    // Cleanup operations if needed
});

// Handle tab updates (optional - for future features)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Can be used for page-specific features in future updates
    if (changeInfo.status === 'complete' && tab.url) {
        // Extension is ready to work on this tab
    }
});

// Error handling
chrome.runtime.onStartup.addListener(() => {
    console.log('Go-AiTranslator extension started');
});

// Keep service worker alive only when needed (Manifest V3 best practice)
// Modern approach: service workers should be event-driven, not persistent
// The service worker will be kept alive automatically by Chrome when handling events

// Clean up on shutdown
chrome.runtime.onSuspend.addListener(() => {
    console.log('Service worker suspending...');
    // Cleanup operations if needed
}); 