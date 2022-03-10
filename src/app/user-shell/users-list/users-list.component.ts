import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from 'src/app/dialog/dialog-elements-example';
import { User } from '../user-shell.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users!: User[];
  
  constructor(public dialog: MatDialog) { }

  openDialog(selectedId : string) {
    const user = this.findUser(selectedId);
    if (user){
      this.dialog.open(DialogElementsExampleDialog,{
        width: '250px',
        data:{name: user.name},
      });
    }
    
  }
  findUser(id: string){
    return this.users.find(user => user.id == id)
  }
  ngOnInit(): void {
  }

}
