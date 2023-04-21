const express = require('express');
const app = express();
const cors = require('cors');

const uploadRoutes = require('./api/upload');

app.use(cors());
app.use(express.json());
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});