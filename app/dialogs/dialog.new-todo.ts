import {Component} from '@angular/core';

import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
  moduleId: module.id,
  selector: 'dialog-new-todo',
  templateUrl: './dialog.new-todo.html'
})
export class DialogNewTodo {

  newTitle : String = "";

  constructor(private params : ModalDialogParams) {  }

  ok() {
    this.params.closeCallback(this.newTitle);
  }

  cancel() {
    this.params.closeCallback('');
  }
}