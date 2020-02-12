const appJs = `import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/', routes);
app.use('*', (req, res) => {
    res.status(404).send({
        message: "Url not found"
    });
});

app.listen(port, () => {
    console.log("Server connected successfully")
});

export default app;
`;

exports = module.exports = appJs;
