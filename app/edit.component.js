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
var core_1 = require('@angular/core');
var food_model_1 = require('./food.model');
var EditComponent = (function () {
    function EditComponent() {
        this.finishedEditingSender = new core_1.EventEmitter;
    }
    EditComponent.prototype.finishedEditing = function () {
        this.finishedEditingSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', food_model_1.Food)
    ], EditComponent.prototype, "childSelectedFood", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditComponent.prototype, "finishedEditingSender", void 0);
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            template: "\n    <div *ngIf=\"childSelectedFood\">\n      <h1>Edit Food</h1>\n      <div>\n        <label>Change meal name:</label>\n        <input [(ngModel)]=\"childSelectedFood.name\">\n      </div>\n      <div>\n        <label>Change meal details:</label>\n        <input [(ngModel)]=\"childSelectedFood.details\">\n      </div>\n      <div>\n        <label>Change meal calories:</label>\n        <input [(ngModel)]=\"childSelectedFood.calories\">\n        <button (click)=\"finishedEditing()\">Done</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map