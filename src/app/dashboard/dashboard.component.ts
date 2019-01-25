import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public headerName = "Fundoo Notes";
  panelOpenState = false;
  viewChange=false;
  /** Based on the screen size, switch from standard to one column per row */
  constructor(private router: Router) { }
  logout():void{

    this.router.navigate(["login"])
  }




  
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
  
  

}
