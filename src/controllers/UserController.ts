import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const user = [
    {
        name: 'Diego',
        email: 'diego@google.com'
    },
];

/**
        Temos que importar os tipos de dentro do express
    uma forma de ver o tipo das variaveis que esta usando segura ctrl e passa com o mouse por cima.
*/ 
export default {
    async index( req: Request, res: Response) {
        return res.json(user);
    },

    
async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
        to: {
            name: 'Diego',
            email: 'diego@google.com'
        }, 
        message: {
            subject: 'Olá Ubiratã',
            body: 'Que Corpão'
        },
});

    return res.send();
}

};
