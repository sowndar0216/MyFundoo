import { Component, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';




export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public headerName = "Fundoo Notes";
  panelOpenState = false;
  viewChange=false;

  
  label: string;
name:string;
  
  constructor(public dialog: MatDialog,private router: Router) { }


  ngOnInit() {



    
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
      data: {label: this.label}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.label = result;
    });
  }
  /** Based on the screen size, switch from standard to one column per row */
  logout():void{
 
    localStorage.removeItem('jwtToken');
    this.router.navigate(["login"])
  }}
  
  // note():void{
  //   this.router.navigate(["addNote"])
  // }
  // remainder():void{
  //   this.router.navigate(["remainder"])
  // }
  // archive():void{
  //   this.router.navigate(["archive"])
  // }
  // trash():void{
  //   this.router.navigate(["trash"])
  // }
  
  
  @Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      
      this.dialogRef.close();
    }
  
  }


