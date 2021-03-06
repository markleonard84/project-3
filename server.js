const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(port, () => {
  console.log('CRA server running on port', port);
});