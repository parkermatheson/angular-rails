"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = 'Document Dashboard';
        this.documents = [
            {
                title: 'My First Doc',
                description: 'asdfasdfasdf asdfasd',
                file_url: 'http://google.com',
                updated_at: '03/26/18',
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
            },
            {
                title: 'My Second Doc',
                description: 'asdfasdfasdf asdfasd',
                file_url: 'http://google.com',
                updated_at: '03/26/18',
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
            },
            {
                title: 'My Last Doc',
                description: 'asdfasdfasdf asdfasd',
                file_url: 'http://google.com',
                updated_at: '03/26/18',
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.scss']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map