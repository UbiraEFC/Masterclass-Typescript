// Podemos usar a interface para que as classes sigam algum modelo 
interface IMailTo {
    name: string;
    email: string;
};

interface IMailMessage {
    subject: string; //assunto
    body: string;
    attachment?: string[]; //anexo
};

// DTO - Data Transfer Object
interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

class EmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email sent to ${to.name}: ${message.subject}`);
    }
};

export default EmailService;