const express = require('express');
const sequelize = require('./config/database');
const bookRoutes = require('./routes/bookRoutes'); // Import the book routes
const customerRoutes = require('./routes/customerRoutes'); // Import the customer routes
const returnRoutes = require('./routes/returnRoutes'); // Import the return routes

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Use routes
app.use('/api', bookRoutes); // Mount book routes at '/api'
app.use('/api', customerRoutes); // Mount customer routes at '/api'
app.use('/api', returnRoutes); // Mount return routes at '/api'

// Test database connection
sequelize
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error: ', err));

// Sync database
sequelize
    .sync({ force: false }) // Sync tables, don't drop existing ones
    .then(() => console.log('Tables synced...'))
    .catch(err => console.error('Error syncing tables: ', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
