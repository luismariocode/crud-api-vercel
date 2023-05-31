import {createPool} from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

//Conexion a la base de datos
export async function connect(){

    //Base de datos 
    const connectionDatabase = await createPool({
        database: process.env.DATABASE_NAME, 
        user: process.env.USER,
        host: process.env.HOST,
        password: process.env.PASSWORD,
        ssl: {
        rejectUnauthorized: false
    }
    })


    return connectionDatabase;

}
