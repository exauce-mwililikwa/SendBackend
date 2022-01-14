"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const message_entity_1 = require("../db/models/message.entity");
const repo_service_1 = require("../repo.service");
const Message_inpout_1 = require("./input/Message.inpout");
const user_entity_1 = require("../db/models/user.entity");
let MessageResolver = class MessageResolver {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async getMessages() {
        return this.repoService.messageRepo.find();
    }
    async getMessagesFromUser(userId) {
        return this.repoService.messageRepo.find({
            where: { userId },
        });
    }
    async getMessage(id) {
        return this.repoService.messageRepo.findOne(id);
    }
    async createMessage(input) {
        const message = this.repoService.messageRepo.create();
        message.content = input.content;
        message.userId = input.user.connect.id;
        return this.repoService.messageRepo.save(message);
    }
    async getUser(parent) {
        return this.repoService.userRepo.findOne(parent.userId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [message_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessages", null);
__decorate([
    (0, graphql_1.Query)(() => [message_entity_1.default]),
    __param(0, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessagesFromUser", null);
__decorate([
    (0, graphql_1.Query)(() => message_entity_1.default, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessage", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.default),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Message_inpout_1.default]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "createMessage", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.default),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_entity_1.default]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getUser", null);
MessageResolver = __decorate([
    (0, graphql_1.Resolver)(() => message_entity_1.default),
    __metadata("design:paramtypes", [repo_service_1.default])
], MessageResolver);
exports.default = MessageResolver;
//# sourceMappingURL=message.resolvers.js.map