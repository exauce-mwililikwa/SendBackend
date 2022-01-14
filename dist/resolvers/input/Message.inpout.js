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
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const user_input_1 = require("./user.input");
let MessageUserConnectInput = class MessageUserConnectInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], MessageUserConnectInput.prototype, "id", void 0);
MessageUserConnectInput = __decorate([
    (0, graphql_1.InputType)()
], MessageUserConnectInput);
let MessageUserInput = class MessageUserInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", MessageUserConnectInput)
], MessageUserInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", user_input_1.default)
], MessageUserInput.prototype, "create", void 0);
MessageUserInput = __decorate([
    (0, graphql_1.InputType)()
], MessageUserInput);
let MessageInput = class MessageInput {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], MessageInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", MessageUserInput)
], MessageInput.prototype, "user", void 0);
MessageInput = __decorate([
    (0, graphql_1.InputType)()
], MessageInput);
exports.default = MessageInput;
//# sourceMappingURL=Message.inpout.js.map