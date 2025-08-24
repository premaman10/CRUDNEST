const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// We'll add routes here later
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
