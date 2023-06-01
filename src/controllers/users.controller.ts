
import { Request, Response } from 'express';
import { connect } from '../database';
import { User , UserLogin } from '../interface/User';

// Get All users:
export async function getUsers(req : Request, res : Response) : Promise<Response>{
        //parametros de la conexion
        const typeUser = req.params.typeUser;
        const conn = await connect();
        //verificar si el usuario es admin con el role = 1
        if(typeUser == "1"){
            const users = await conn.query('SELECT * FROM users');
            return res.json(users[0]);
        }else{
            return res.json({message: 'No tiene permisos para ver los usuarios'});
        }
}

// Get user by ID:
export async function getUser(req : Request, res : Response) : Promise< Response | void>  {
    //params
    const idUser : number = parseInt(req.params.idUser);

    const conn = await connect();
    const users = await conn.query('SELECT * FROM users WHERE id_user = ?', [idUser]);

    return res.json(users[0]);

}

// Delete Usuario by ID:
export async function deleteUser(req : Request, res : Response)  : Promise< Response | void>{
    //params
    const idUser = parseInt(req.params.idUser);
    

    const conn = await connect();
    await conn.query('DELETE FROM users WHERE id_user = ?', [idUser]);

    res.json({
        message: 'User deleted'
    });
};

// Update Usuario by ID:
export async function updateUser(req : Request, res : Response) : Promise< Response | void>{
    //params
    const idUser = req.params.idUser;
    const updateUser : User = req.body;

    const conn = await connect();
    await conn.query('UPDATE users SET ? WHERE id_user = ?', [updateUser, idUser]);

    res.json({
        message: 'User updated'
    });
};


// Login Usuario por user y password:
export async function loginUser(req: any, res: any): Promise<void> {
    //parametros
    const { username, password } = req.body;

    const conn = await connect();
    const user = await conn.query('SELECT id_user FROM users WHERE user = ? AND password = ?', [username, password]);

    const array = [];
    array.push(user[0])

    if (array.length > 0) {
        res.json({
            message: 'Login correcto', id_user: array[0]
        });
    } else {
        res.json({
            message: 'Login incorrecto'
        });
    }

     
}

// Create Usuario:
export async function createUser(req : Request, res : Response) : Promise<Response> {

    const newUser : User = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO users SET ?', [newUser]);

    return res.json({
        message: 'New User created'
    });
    
}
