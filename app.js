const path = require('path');
const hbs = require('express-handlebars');
const express = require('express');
const { PORT } = require('./config/conf');
const { authRouter, userRouter } = require('./router');

const app = express();
const staticPath = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', authRouter);
app.use('/users', userRouter);
app.use(express.static(staticPath));
app.set('view engine', '.hbs');
app.engine('.hbs', hbs({ defaultLayout: false }));
app.set('views', staticPath);

app.get('/ping', (req, res) => res.send('Pong'));

app.listen(PORT, () => {
    console.log(`Port ${PORT} working...`)
});




