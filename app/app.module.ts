import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { TodoListComponent } from './components/todo-list.component';
import { DialogNewTodo } from './dialogs/dialog.new-todo';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DialogNewTodo
  ],
  entryComponents: [
    DialogNewTodo
  ],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
