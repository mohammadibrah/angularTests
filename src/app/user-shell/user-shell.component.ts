import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.css']
})
export class UserShellComponent implements OnInit {
  users = USERS; 
  constructor() { }

  ngOnInit(): void {
  }

}

export type User = {
  id: string,
  name: string,
  country?: string,
  level?: string,
  tokens?: number
}

export const USERS : User [] = [{
  id : '1234',
  name : 'Mohammad',
  country: 'tr',
  level: 'level2'
 },
 {
   id : '223344',
   name : 'Ahmad',
   country: 'sy',
   level: 'level1'
  },
  {
   id : '1234',
   name : 'khaled',
   country: 'eg',
   level: 'level3'
  },
  {
   id : '4567',
   name : 'Taha',
   country: 'fr',
   level: 'level1'
  },
 ]
