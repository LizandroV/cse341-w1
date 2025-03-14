import modelContacts from '../models/modelContacts.js';

class ContactsController {
	constructor() {
		this.contacts = [];
	}

	async create(req, res) {
		/*  #swagger.tags = ['Contacts']
            #swagger.summary = 'Create a new contact'
            #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Contact"
                        }
                    }
                }
            }
        */
		try {
			const data = await modelContacts.create(req.body);
			res.status(201).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error creating contact, Error: ${error}` });
		}
	}

	async update(req, res) {
		/*  #swagger.tags = ['Contacts']
            #swagger.summary = 'Update an existing contact'
            #swagger.parameters['id'] = {
                in: 'path',
                required: true,
                description: 'ID of the contact to update',
                example: '60d0fe4f5311236168a109ca'
            }
            #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Contact"
                        }
                    }
                }
            }
        */
		try {
			const { id } = req.params;
			const data = await modelContacts.update(id, req.body);
			res.status(200).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error updating contact, Error: ${error}` });
		}
	}

	async delete(req, res) {
		/*  #swagger.tags = ['Contacts']
            #swagger.summary = 'Delete a contact by ID'
            #swagger.parameters['id'] = {
                in: 'path',
                required: true,
                description: 'ID of the contact to delete',
                example: '60d0fe4f5311236168a109ca'
            }
        */
		try {
			const { id } = req.params;
			const data = await modelContacts.delete(id);
			res.status(206).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error deleting contact, Error: ${error}` });
		}
	}

	async getAll(req, res) {
		/*  #swagger.tags = ['Contacts']
            #swagger.summary = 'Retrieve all contacts'
        */
		try {
			const data = await modelContacts.getAll();
			res.status(200).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error fetching contacts, Error: ${error}` });
		}
	}

	async getOne(req, res) {
		/*  #swagger.tags = ['Contacts']
            #swagger.summary = 'Retrieve a contact by ID'
            #swagger.parameters['id'] = {
                in: 'path',
                required: true,
                description: 'ID of the contact to retrieve',
                example: '60d0fe4f5311236168a109ca'
            }
        */
		try {
			const { id } = req.params;
			const data = await modelContacts.getOne(id);
			res.status(200).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error fetching contact, Error: ${error}` });
		}
	}
}

export default new ContactsController();
