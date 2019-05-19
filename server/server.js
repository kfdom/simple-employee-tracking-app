const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: true }));
app.use(cors());

app.get('/', (req, res) => res.send('API Server...'));
app.use('/api/employees', require('./routes/api/employees'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
