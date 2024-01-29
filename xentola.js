const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 4545;
app.use(cors());
// app.use('/public',express.static('./public'));
console.log(path.join(__dirname, 'public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', (req, res) => { res.sendFile('./public/index.html', { root: __dirname }); });
app.listen(port, "0.0.0.0",() => {
    console.log(`server running at http://localhost:${port}`)
});