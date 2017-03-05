"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var dialog_new_todo_1 = require("./../dialogs/dialog.new-todo");
var todo_1 = require("./models/todo");
var TodoListComponent = (function () {
    function TodoListComponent(modalService, viewContainerRef) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.todoList = [];
    }
    TodoListComponent.prototype.ngOnInit = function () { };
    TodoListComponent.prototype.addNewList = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(dialog_new_todo_1.DialogNewTodo, options)
            .then(function (result) {
            var todo = new todo_1.Todo();
            todo.title = result;
            _this.todoList.push(todo);
        });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-list',
        templateUrl: './todo-list.component.html'
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
        core_1.ViewContainerRef])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRTtBQUNwRSxrRUFBMkY7QUFFM0YsZ0VBQTZEO0FBRTdELHNDQUFxQztBQU9yQyxJQUFhLGlCQUFpQjtJQUkxQiwyQkFBb0IsWUFBaUMsRUFDakMsZ0JBQW1DO1FBRG5DLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBSHZELGFBQVEsR0FBWSxFQUFFLENBQUM7SUFHb0MsQ0FBQztJQUU1RCxvQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLHNDQUFVLEdBQVY7UUFBQSxpQkFXQztRQVZHLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQywrQkFBYSxFQUFFLE9BQU8sQ0FBQzthQUM5QyxJQUFJLENBQUMsVUFBQyxNQUFlO1lBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7S0FDNUMsQ0FBQztxQ0FLcUMsaUNBQWtCO1FBQ2QsdUJBQWdCO0dBTDlDLGlCQUFpQixDQXNCN0I7QUF0QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nTmV3VG9kbyB9IGZyb20gJy4vLi4vZGlhbG9ncy9kaWFsb2cubmV3LXRvZG8nO1xyXG5cclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vbW9kZWxzL3RvZG8nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd0b2RvLWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RvZG8tbGlzdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB0b2RvTGlzdCA6IFRvZG9bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlIDogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmIDogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7fVxyXG5cclxuICAgIGFkZE5ld0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERpYWxvZ05ld1RvZG8sIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQgOiBTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RvID0gbmV3IFRvZG8oKTtcclxuICAgICAgICAgICAgICAgIHRvZG8udGl0bGUgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==