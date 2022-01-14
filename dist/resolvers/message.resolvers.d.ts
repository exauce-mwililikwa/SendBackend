import Message from 'src/db/models/message.entity';
import RepoService from 'src/repo.service';
import MessageInput from './input/Message.inpout';
import User from '../db/models/user.entity';
export default class MessageResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getMessages(): Promise<Message[]>;
    getMessagesFromUser(userId: number): Promise<Message[]>;
    getMessage(id: number): Promise<Message>;
    createMessage(input: MessageInput): Promise<Message>;
    getUser(parent: Message): Promise<User>;
}
