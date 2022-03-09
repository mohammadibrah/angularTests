import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent, } from './votetaker/votetaker.component';
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogElementsExample, DialogElementsExampleDialog } from './dialog/dialog-elements-example';
import {MatListModule} from '@angular/material/list';
import { UserShellComponent } from './user-shell/user-shell.component';
import { UsersListComponent } from './user-shell/users-list/users-list.component';
import { UserProfileComponent } from './user-shell/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CardLayoutComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    DialogElementsExample,
    DialogElementsExampleDialog,
    UserShellComponent,
    UsersListComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
