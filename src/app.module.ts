import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormOptions from './config/orm'
import Message from './db/models/message.entity';
import RepoModule from './repo.module';
import MessageResolver from './resolvers/message.resolvers';
import UserResolver from './resolvers/user.resolver';
const gqlImports=[UserResolver,MessageResolver];
@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),RepoModule, ...gqlImports, GraphQLModule.forRoot({
      autoSchemaFile:'schema.gql',
     playground:true, 
     
    })],
    controllers:[AppController],
    providers:[AppService],
  })
  export class AppModule{}
  