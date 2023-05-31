//Interfaz de usuario y login   
export interface User { 
    id_user?: number;
    user: string;
    first_name: string;
    last_name: string;
    email: string;
    role: number;
    created_at?: Date;
    password: string;
}

export interface UserLogin {    
    user: string;
    password: string;
}