const express = require('express');
const app = express();

app.use(express.static('public')); // serve static files from the 'public' directory

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
