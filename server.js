const express = require('express');
const cors = require('cors'); // Import CORS
const sequelize = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');
const customerRoutes = require('./routes/customerRoutes');
const returnRoutes = require('./routes/returnRoutes');
const issueRoutes = require('./routes/issueRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const branchRoutes = require('./routes/branchRoutes');

const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Allow frontend requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Middleware
app.use(express.json());

// Use routes
app.use('/api', bookRoutes);
app.use('/api', customerRoutes);
app.use('/api', returnRoutes);
app.use('/api', issueRoutes);
app.use('/api', employeeRoutes);
app.use('/api', branchRoutes);

// Test database connection
sequelize
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error: ', err));

sequelize
    .sync({ force: false })
    .then(() => console.log('Tables synced...'))
    .catch(err => console.error('Error syncing tables: ', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
