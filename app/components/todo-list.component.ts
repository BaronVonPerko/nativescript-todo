import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { DialogNewTodo } from './../dialogs/dialog.new-todo';

import { Todo } from './models/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    todoList : Todo[] = [];

    constructor(private modalService : ModalDialogService,
                private viewContainerRef : ViewContainerRef) { }

    ngOnInit() {}

    addNewList() {
        let options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(DialogNewTodo, options)
            .then((result : String) => {
                let todo = new Todo();
                todo.title = result;
                this.todoList.push(todo);
            });
    }

}