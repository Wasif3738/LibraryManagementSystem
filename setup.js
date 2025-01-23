const fs = require('fs');
const path = require('path');

const folders = ['config', 'models', 'routes'];
const files = [
    { folder: 'config', name: 'database.js' },
    { folder: 'models', name: 'Book.js' },
    { folder: 'models', name: 'Customer.js' },
    { folder: 'models', name: 'Employee.js' },
    { folder: 'models', name: 'Branch.js' },
    { folder: 'models', name: 'IssueStatus.js' },
    { folder: 'models', name: 'ReturnStatus.js' },
    { folder: 'routes', name: 'bookRoutes.js' },
    { folder: 'routes', name: 'customerRoutes.js' },
    { folder: '', name: 'server.js' },
    { folder: '', name: '.env' },
];

// Create folders
folders.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Created folder: ${folder}`);
    }
});

// Create files
files.forEach(file => {
    const filePath = path.join(__dirname, file.folder, file.name);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '');
        console.log(`Created file: ${file.name}`);
    }
});
