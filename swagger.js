import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./server.js'];

const doc = {
	openapi: '3.0.0',
	info: {
		title: 'Contacts API',
		description: 'API for managing contacts.',
		version: '1.0.0',
	},
	servers: [
		{
			url: 'https://cse341-contactsapi-z6wb.onrender.com',
			description: 'Production Server',
		},
		{
			url: 'http://localhost:8080',
			description: 'Development Server',
		},
	],
	tags: [
		{
			name: 'Contacts',
			description: 'Operations related to contacts',
		},
	],
	components: {
		schemas: {
			Contact: {
				firstName: 'firstName',
				lastName: 'lastName',
				email: 'email',
				favoriteColor: 'color',
				birthday: 'date',
			},
		},
		parameters: {
			contactId: {
				in: 'path',
				name: 'id',
				required: true,
				schema: {
					type: 'string',
				},
				description: 'Contact ID',
				example: '60d0fe4f5311236168a109ca',
			},
		},
	},
	paths: {
		'/contacts': {
			post: {
				tags: ['Contacts'],
				summary: 'Create a new contact',
				requestBody: {
					required: true,
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/Contact',
							},
						},
					},
				},
				responses: {
					201: { description: 'Contact created successfully' },
					500: { description: 'Server error' },
				},
			},
		},
		'/contacts/{id}': {
			put: {
				tags: ['Contacts'],
				summary: 'Update an existing contact',
				parameters: [{ $ref: '#/components/parameters/contactId' }],
				requestBody: {
					required: true,
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/Contact',
							},
						},
					},
				},
				responses: {
					200: { description: 'Contact updated successfully' },
					500: { description: 'Server error' },
				},
			},
			get: {
				tags: ['Contacts'],
				summary: 'Get a contact by ID',
				parameters: [{ $ref: '#/components/parameters/contactId' }],
				responses: {
					200: { description: 'Success' },
					404: { description: 'Contact not found' },
				},
			},
			delete: {
				tags: ['Contacts'],
				summary: 'Delete a contact by ID',
				parameters: [{ $ref: '#/components/parameters/contactId' }],
				responses: {
					206: { description: 'Contact deleted successfully' },
					500: { description: 'Server error' },
				},
			},
		},
	},
};

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endPointsFiles, doc);
