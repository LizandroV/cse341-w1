import modelContacts from '../models/modelContacts.js';

class contactsController {
	constructor() {
		this.contacts = [];
	}

	async create(req, res) {
		const { firstName, lastName, email, favoriteColor, birthday } = req.body;
		try {
			const data = await modelContacts.create({
				firstName,
				lastName,
				email,
				favoriteColor,
				birthday,
			});
			res.status(201).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error al crear contacto, Error: ${error}` });
		}
	}

	async update(req, res) {
		try {
			const { firstName, lastName, email, favoriteColor, birthday } = req.body;
			const { id } = req.params;
			const data = await modelContacts.update(id, {
				firstName,
				lastName,
				email,
				favoriteColor,
				birthday,
			});
			res.status(200).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error al actualizar contacto, Error: ${error}` });
		}
	}

	async delete(req, res) {
		try {
			const { id } = req.params;
			const data = await modelContacts.delete(id);
			res.status(206).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error al eliminar contacto, Error: ${error}` });
		}
	}

	async getAll(req, res) {
		try {
			const data = await modelContacts.getAll();
			res.status(200).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error al buscar contactos, Error: ${error}` });
		}
	}

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const data = await modelContacts.getOne(id);
			res.status(200).json(data);
		} catch (error) {
			res
				.status(500)
				.json({ message: `Error al buscar contacto, Error: ${error}` });
		}
	}
}

export default new contactsController();
