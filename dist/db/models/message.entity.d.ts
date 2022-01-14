import User from './user.entity';
export default class Message {
    id: number;
    content: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    userConnection: Promise<User>;
}
