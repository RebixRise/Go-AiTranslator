#!/usr/bin/env node

// أداة لإزالة console.log من ملفات JavaScript للإنتاج

const fs = require('fs');
const path = require('path');

const jsFiles = ['popup.js', 'background.js', 'content.js'];

function removeConsoleLogs(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // إزالة console.log و console.info و console.debug (إبقاء console.warn و console.error)
        content = content.replace(/console\.(log|info|debug)\([^)]*\);\s*/g, '');
        
        // إزالة السطور الفارغة الإضافية
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Cleaned console logs from: ${filePath}`);
        
        return true;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

function restoreFromBackup(filePath) {
    const backupPath = `${filePath}.backup`;
    if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, filePath);
        console.log(`🔄 Restored from backup: ${filePath}`);
    }
}

function createBackup(filePath) {
    const backupPath = `${filePath}.backup`;
    if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
        console.log(`💾 Created backup: ${backupPath}`);
    }
}

// Main function
function main() {
    const action = process.argv[2];
    
    if (action === 'remove') {
        console.log('🔧 Removing console logs for production...');
        
        jsFiles.forEach(file => {
            if (fs.existsSync(file)) {
                createBackup(file);
                removeConsoleLogs(file);
            } else {
                console.warn(`⚠️ File not found: ${file}`);
            }
        });
        
        console.log('✅ Production build ready! Console logs removed.');
        console.log('💡 Use "node remove-console-logs.js restore" to restore original files.');
        
    } else if (action === 'restore') {
        console.log('🔄 Restoring original files...');
        
        jsFiles.forEach(file => {
            restoreFromBackup(file);
        });
        
        console.log('✅ Original files restored!');
        
    } else {
        console.log('📝 Usage:');
        console.log('  node remove-console-logs.js remove   - Remove console logs for production');
        console.log('  node remove-console-logs.js restore  - Restore original files');
    }
}

if (require.main === module) {
    main();
}

module.exports = { removeConsoleLogs, createBackup, restoreFromBackup }; 