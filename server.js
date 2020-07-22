const express = require('express');
const serveStatic = require('serve-static');

const path = require('path');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));