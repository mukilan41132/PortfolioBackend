const ContactME = require('../Model/Contactme');

async function CreateNew(req, res, next) {
    try {
        
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const contact = new ContactME(name, email, phone, message);

        await contact.addContactME();

        res.status(201).json({ message: "Contact saved successfully" });
    } catch (error) {
        console.error("Error in CreateNew:", error);
        next(error);
    }
}


module.exports = { CreateNew };
