import Message from './message.entity';
export default class User {
    id: number;
    email: string;
    createdAt: Date;
    updateAt: Date;
    messageConnection: Promise<Message[]>;
}
