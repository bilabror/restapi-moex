const express = require('express');
const db = require('./app/models');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected!`)
}).catch((err) => {
    console.log(err)
    prosess.exit()
});


app.get('/', (req, res)=> res.json({
    message: "test"
}));
require('./app/routes/postRouter')(app)

app.listen(PORT, () => {
    console.log(`Server is running in the port ${PORT}`)
});