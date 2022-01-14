import RepoService from './repo.service';
export declare class AppController {
    private readonly reposervice;
    constructor(reposervice: RepoService);
    getHello(): Promise<string>;
}
