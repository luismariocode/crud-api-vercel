import { Request, Response } from 'express';
import { connect } from '../database';
import { Contact } from '../interface/Contact';

// Get All contacts:
export async function getContacts(req : Request, res : Response) : Promise<Response | null>{

    // type of user
    const typeUser : number = parseInt(req.params.typeUser) 

    const conn = await connect();

    // if typeUser is 3, return all contacts, else return contacts of user
    if(typeUser != 3){

        const contacts = await conn.query('SELECT * FROM contacts_directory');
        return res.json(contacts[0]);

    }else{  

        const contacts = await conn.query('SELECT * FROM contacts_directory WHERE user_id = ?', [typeUser]);
        return res.json(contacts[0]);

    }
    
}

export async function getContactsByUser(req : Request, res : Response) : Promise<Response | null>{

    //params
    const idUser : number = parseInt(req.params.idUser);

    const conn = await connect();

    const contacts = await conn.query('SELECT * FROM contacts_directory WHERE user_id = ?', [idUser]);

    return res.json(contacts[0]);
}

//Get contact by ID:
export async function getContact(req : Request, res : Response) : Promise<Response | null>{
    
    //params
    const idContact : number = parseInt(req.params.idContact);

    const conn = await connect();

    const contacts = await conn.query('SELECT * FROM contacts_directory WHERE contact_id = ?', [idContact]);

    return res.json(contacts[0]);

}

// Create new contact:
export async function createContact(req : Request, res : Response) : Promise<Response | null>{

    //params
    const newContact : Contact = req.body;

    const conn = await connect();

    await conn.query('INSERT INTO contacts_directory SET ?', [newContact]);

    return res.json({
        message: 'New contact created'
    });

};

// Delete contact by ID:
export async function deleteContact(req : Request, res : Response) : Promise<Response | null>{

    //params
    const idContact = parseInt(req.params.idContact);
    

    const conn = await connect();
    await conn.query('DELETE FROM contacts_directory WHERE contact_id = ?', [idContact]);

    return res.json({
        message: 'Contact deleted'
    });
}

// Update contact by ID:
export async function updateContact(req : Request, res : Response) : Promise<Response | null>{
    //params
    const idContact = req.params.idContact;
    const updateContact : Contact = req.body;

    const conn = await connect();
    await conn.query('UPDATE contacts_directory SET ? WHERE contact_id = ?', [updateContact, idContact]);

    return res.json({
        message: 'Contact updated'
    });
}