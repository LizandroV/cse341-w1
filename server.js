import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import routesContacts from './routes/routesContacts.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/contacts', routesContacts)

try {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    }
catch(error){
        console.error(`Error occurred: ${error}`)
    };

