const express = require('express');
const apiroutes = require('./routes/api');
const homeroutes = require('./routes/view');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/',homeroutes);
app.use('/api', apiroutes);

app.listen(PORT, () => console.log('Now listening on port ' + PORT));
