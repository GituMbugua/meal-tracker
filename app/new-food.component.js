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
var NewFoodComponent = (function () {
    function NewFoodComponent() {
        this.newMealSender = new core_1.EventEmitter;
    }
    NewFoodComponent.prototype.newClicked = function (name, details, calories) {
        var toAdd = new food_model_1.Food(name, details, calories);
        this.newMealSender.emit(toAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewFoodComponent.prototype, "newMealSender", void 0);
    NewFoodComponent = __decorate([
        core_1.Component({
            selector: "new-food",
            template: "\n  <div class=\"col-md-4\">\n    <h2>New Meal</h2>\n    <div>\n      <label>Enter a meal</label>\n      <input class=\"form-control\" #newMeal>\n    </div><br>\n    <div>\n      <label>Enter details</label>\n      <input class=\"form-control\" #newDetails>\n    </div><br>\n    <div>\n      <label>Number of calories</label>\n      <input class=\"form-control\" #newCalories>\n    </div>\n    <br>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"newClicked(\n      newMeal.value, newDetails.value, newCalories.value);\n      newMeal.value = '';\n      newDetails.value = '';\n      newCalories.value = '';\n      \">Add</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewFoodComponent);
    return NewFoodComponent;
}());
exports.NewFoodComponent = NewFoodComponent;
//# sourceMappingURL=new-food.component.js.map