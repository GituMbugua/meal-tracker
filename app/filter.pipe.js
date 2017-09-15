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
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (input, desiredFilter) {
        var output = [];
        if (desiredFilter === "less") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories < 500) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else if (desiredFilter === "more") {
            for (var i = 0; i < input.length; i++) {
                if (input[i].calories >= 500) {
                    output.push(input[i]);
                }
            }
            return output;
        }
        else {
            return input;
        }
    };
    FilterPipe = __decorate([
        core_1.Pipe({
            name: 'filter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=filter.pipe.js.map