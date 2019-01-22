import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NumberValueAccessor } from '@angular/forms/src/directives';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  mobileNumber: number;
  email:string;
  password: string;
    ngOnInit() {
    }
    register(): void{
      console.log(this.email,this.mobileNumber,this.username,this.password);
    }
    

}
