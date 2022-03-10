import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../user-shell/user-shell.component';


/**
 * @title Dialog elements
 */
@Component({
  selector: 'dialog-elements-example',
  templateUrl: 'dialog-elements-example.html',
})
export class DialogElementsExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User,){}
}
