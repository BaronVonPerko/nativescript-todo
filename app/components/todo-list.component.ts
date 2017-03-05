import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

    constructor(private modalService : ModalDialogService,
                private viewContainerRef : ViewContainerRef) { }

    ngOnInit() { 
        
    }

    addNewList() {
        let options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(TodoListComponent, options);
    }

}