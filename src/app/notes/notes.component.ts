import { Component, OnInit } from '@angular/core';
import {CreateNoteModel} from '../Model/add-notes.model';
import{NoteServiceService} from '../note-service.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';

@Component({
selector: 'app-notes',
templateUrl: './notes.component.html',
styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    private  allnotes:CreateNoteModel[];
createnote:CreateNoteModel=new CreateNoteModel;

constructor(private noteservice:NoteServiceService,private snackBar: MatSnackBar,private dialog: MatDialog) {
var arr_names:string[] = new Array();
}
getnotes:boolean=false;



ngOnInit() {
 
 


      this.noteservice.getnotes().subscribe(

         response=> {
           //  localStorage.setItem('jwtToken',data.headers.get('jwtTokenxxx'));
           console.log(response);
         this.allnotes=response;
         if(response!=isNaN)
{
    this.getnotes=true;
}
            }
     )


}

noteDelete()
{
console.log(this.createnote);
this.noteservice.deleteNote(this.createnote).subscribe(
response => {
if(response.statusCode==166)
{
this.snackBar.open(response.statusMessage,"",{
duration:2000,
})
}
},
error =>{
console.log("Error",error);
} 
);

}


// dostuff()
// {
// const dialogRef = this.dialog.open(EditdialogComponent, {
// width: '600px',
// data: {createnote:this.createnote}
// });

// dialogRef.afterClosed().subscribe(result => {
// console.log('The dialog was closed');
// this.createnote = result;
// console.log(this.createnote);
// this.noteservice.updateNote(this.createnote).subscribe(
// response => {
// if(response.statusCode==166)
// {
// this.snackBar.open(response.statusMessage,"",{
// duration:2000,
// })
// }
// },
// error => {
// console.log("Error",error);
// } 
// )
// });
// }

// colorsshow(){
// }


}
