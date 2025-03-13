import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./server.js'];

const doc = {
	info: {
		title: 'API Contact',
		description: 'Manage contacts',
	},
	host: 'https://cse341-contactsapi-z6wb.onrender.com',
	schemes: ['https'],
};

swaggerAutogen()(outputFile, endPointsFiles, doc);
