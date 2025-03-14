import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import routesContacts from './routes/routesContacts.js';
import swaggerUi from 'swagger-ui-express';
import { readFile } from 'fs/promises';
import cors from 'cors';

const swaggerDocument = JSON.parse(
	await readFile(new URL('./swagger.json', import.meta.url)),
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/contacts', routesContacts);

try {
	const PORT = process.env.PORT;
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
		// console.log(`http://localhost:${PORT}`);
	});
} catch (error) {
	console.error(`Error occurred: ${error}`);
}
