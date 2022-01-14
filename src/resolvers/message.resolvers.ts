 
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import Message from 'src/db/models/message.entity';
import RepoService  from 'src/repo.service';
import MessageInput from './input/Message.inpout'
import User from '../db/models/user.entity';
@Resolver(()=> Message)

export default class MessageResolver {
   constructor(private readonly repoService: RepoService) {}

  @Query(() => [Message])
  public async getMessages(): Promise<Message[]> {
    return this.repoService.messageRepo.find();
  }
  @Query(() => [Message])//  
  public async getMessagesFromUser(@Args('userId') userId: number,): Promise<Message[]> {
    return  this.repoService.messageRepo.find({
        where: {userId},
    });
  }
  @Query(() => Message,{nullable:true})
  public async getMessage(@Args('id') id: number,): Promise<Message> {
    return  this.repoService.messageRepo.findOne(id);
  }

  @Mutation(() => Message)
  public async createMessage(@Args('data') input: MessageInput,): 
    Promise<Message> {
        const message=this.repoService.messageRepo.create();
        message.content=input.content;
        message.userId=input.user.connect.id;
        return this.repoService.messageRepo.save(message);
  }

  @ResolveField(()=> User)
  public async getUser(@Parent() parent: Message): Promise<User>{ 
  
       
        return this.repoService.userRepo.findOne(parent.userId);
  }

}  