import User from 'src/db/models/user.entity';
import RepoService from 'src/repo.service';
import UserInput from './user.input';
export default class UserResolver {
    private readonly repoService;
    constructor(repoService: RepoService);
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    createUser(input: UserInput): Promise<User>;
}
