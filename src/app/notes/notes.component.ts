import { Component, OnInit, Input } from '@angular/core';
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

createnote:CreateNoteModel=new CreateNoteModel;

constructor(private noteservice:NoteServiceService,private snackBar: MatSnackBar,private dialog: MatDialog) {
var arr_names:string[] = new Array();
}
@Input() noteDetail:CreateNoteModel;

private colors:string[][]=[["white",'rgb(228, 70, 104)','rgb(238, 148, 96)','rgb(243, 215, 92)'],['rgb(173, 196, 92)','rgb(103, 226, 216)','rgb(144, 243, 250)','rgb(54, 166, 240)'],[ 'rgb(163, 160, 247)',
'rgb(222, 160, 247)','rgb(240, 183, 145)','rgb(225, 231, 231)']];
ngOnInit() {
 
 console.log(this.noteDetail,'hello')

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

// // 
// colorchange(singlecolor:string){
//     this.notedetails.color=singlecolor;
//     this.notecrudservice.updateNote(this.notedetails).subscribe(
//       response => {
//         if(response.statusCode==166)
//         {
//           this.snackBar.open(response.statusMessage,"",{
//             duration:2000,
//           })
//         }
//         this.cardupdate.changemessage();
//       },
//       error => {
//          console.log("Error",error);
//       } 
//       );
      

//   }

}
