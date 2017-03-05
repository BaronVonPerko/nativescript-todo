"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DialogNewTodo = (function () {
    function DialogNewTodo(params) {
        this.params = params;
        this.newTitle = "";
    }
    DialogNewTodo.prototype.ok = function () {
        this.params.closeCallback(this.newTitle);
    };
    DialogNewTodo.prototype.cancel = function () {
        this.params.closeCallback('');
    };
    return DialogNewTodo;
}());
DialogNewTodo = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dialog-new-todo',
        templateUrl: './dialog.new-todo.html'
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
], DialogNewTodo);
exports.DialogNewTodo = DialogNewTodo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm5ldy10b2RvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlhbG9nLm5ldy10b2RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFFeEMsa0VBQXNFO0FBT3RFLElBQWEsYUFBYTtJQUl4Qix1QkFBb0IsTUFBMEI7UUFBMUIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFGOUMsYUFBUSxHQUFZLEVBQUUsQ0FBQztJQUU0QixDQUFDO0lBRXBELDBCQUFFLEdBQUY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSx3QkFBd0I7S0FDdEMsQ0FBQztxQ0FLNkIsZ0NBQWlCO0dBSm5DLGFBQWEsQ0FhekI7QUFiWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdkaWFsb2ctbmV3LXRvZG8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cubmV3LXRvZG8uaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ05ld1RvZG8ge1xyXG5cclxuICBuZXdUaXRsZSA6IFN0cmluZyA9IFwiXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zIDogTW9kYWxEaWFsb2dQYXJhbXMpIHsgIH1cclxuXHJcbiAgb2soKSB7XHJcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMubmV3VGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygnJyk7XHJcbiAgfVxyXG59Il19