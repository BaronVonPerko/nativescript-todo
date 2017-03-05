"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var TodoListComponent = TodoListComponent_1 = (function () {
    function TodoListComponent(modalService, viewContainerRef) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.addNewList = function () {
        var options = {
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(TodoListComponent_1, options);
    };
    return TodoListComponent;
}());
TodoListComponent = TodoListComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-list',
        templateUrl: './todo-list.component.html'
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
var TodoListComponent_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQUNwRSxrRUFBMkY7QUFPM0YsSUFBYSxpQkFBaUI7SUFFMUIsMkJBQW9CLFlBQWlDLEVBQ2pDLGdCQUFtQztRQURuQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtJQUFJLENBQUM7SUFFNUQsb0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksSUFBSSxPQUFPLEdBQXVCO1lBQzlCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG1CQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO3FDQUdxQyxpQ0FBa0I7UUFDZCx1QkFBZ0I7R0FIOUMsaUJBQWlCLENBaUI3QjtBQWpCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3RvZG8tbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9kby1saXN0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9kb0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlIDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmIDogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFRvZG9MaXN0Q29tcG9uZW50LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbn0iXX0=