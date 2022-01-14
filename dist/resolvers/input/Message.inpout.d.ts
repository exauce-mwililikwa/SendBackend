import UserInput from './user.input';
declare class MessageUserConnectInput {
    readonly id: number;
}
declare class MessageUserInput {
    readonly connect: MessageUserConnectInput;
    readonly create: UserInput;
}
export default class MessageInput {
    readonly content: string;
    readonly user: MessageUserInput;
}
export {};
