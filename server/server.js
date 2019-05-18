const express = require('express');

const app = express();

app.use(express.json({ extended: true }));

app.get('/', (req, res) => res.send('API Server...'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
