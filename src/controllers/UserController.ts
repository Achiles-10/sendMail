import { request, Request, response, Response } from 'express';
import EmailService from '../services/EmailServices';

const users = [
    { name: 'Achiles', email: 'achileslima@outlook.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    } ,


    async create(req: Request, res: Response){
    const emailService = new EmailService();

        emailService.sendMail(
            { name: 'Achiles Oliveira', email: 'achileslima@amoprogramar.com' },
            { subject: 'Bem-vindo no grupo', body: 'Seja Bem-vindo' }
        );

            return res.send(); 
    }
};    