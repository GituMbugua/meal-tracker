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
var FoodComponent = (function () {
    function FoodComponent() {
        this.masterFoodsList = [
            new food_model_1.Food("Chipo", "I got chips for 50 bob!", 200),
            new food_model_1.Food("Ugali Nyama", "Ugali with fried meat, mmhhh!", 600),
            new food_model_1.Food("Sandwich", "Today I just have sandwich and yoghurt.", 300)
        ];
        this.selectedFood = null;
    }
    FoodComponent.prototype.showDetails = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    FoodComponent.prototype.finishedEditing = function () {
        this.selectedFood = null;
    };
    FoodComponent = __decorate([
        core_1.Component({
            selector: 'my-food',
            template: "\n  <div class=\"container-fluid\">\n    <food-list\n      [childFoodsList]=\"masterFoodsList\"\n      (clickSender)=\"showDetails($event)\"\n    ></food-list>\n    <edit\n      [childSelectedFood]=\"selectedFood\"\n      (finishedEditingSender)=\"finishedEditing()\"\n    ></edit>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodComponent);
    return FoodComponent;
}());
exports.FoodComponent = FoodComponent;
//# sourceMappingURL=food.component.js.map