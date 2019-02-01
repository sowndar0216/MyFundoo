import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { ArchiveComponent } from '../archive/archive.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { CreateNoteModel } from 'src/app/Model/add-notes.model';
import { NoteServiceService } from 'src/app/Service/note-service.service';
import { CardsupdateServiceService } from 'src/app/Service/cardsupdate-service.service';
import { EditDailogBarComponent } from '../edit-dailog-bar/edit-dailog-bar.component';


@Component({
selector: 'app-notes',

templateUrl: './notes.component.html',
styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

createnote:CreateNoteModel=new CreateNoteModel;
archiveView:boolean=false;
unarchiveView:boolean=false;

constructor(private noteservice:NoteServiceService,private cardupdate:CardsupdateServiceService,private snackBar: MatSnackBar,private dialog: MatDialog) {
var arr_names:string[] = new Array();
}
@Input() noteDetail:CreateNoteModel;
private  allnotes:CreateNoteModel[];
@Output() messageEvent = new EventEmitter<String>();

private colors:string[][]=[["white",'rgb(228, 70, 104)','rgb(238, 148, 96)','rgb(243, 215, 92)'],['rgb(173, 196, 92)','rgb(103, 226, 216)','rgb(144, 243, 250)','rgb(54, 166, 240)'],[ 'rgb(163, 160, 247)',
'rgb(222, 160, 247)','rgb(240, 183, 145)','rgb(225, 231, 231)']];
ngOnInit() {
 

if(this.noteDetail.archive==0){
this.archiveView=true;

}else{
    this.unarchiveView=true;
}

 //console.log(this.noteDetail.archive,'hello');

  //console.log('hello');
  
  this.noteservice.getnotes().subscribe(

     response=> {
       //  localStorage.setItem('jwtToken',data.headers.get('jwtTokenxxx'));
   //    console.log(response);
      this.allnotes=response;
     //   console.log(this.allnotes);
       // console.log('l',this.allnotes.length)
        if(this.allnotes.length != 0)
        {
        
        }
      }
 )



}

openEditDialog(noteDetail) {
    const dialogRef = this.dialog.open(EditDailogBarComponent, {
      data: noteDetail
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.http.post(noteDetail, "note/updateNote").subscribe(

    //   )
    //   this.messageEvent.emit("emit from child");

    // });

  }
noteDelete()
{
console.log(this.noteDetail);
this.noteservice.deleteNote(this.noteDetail).subscribe(
response => {
if(response.statusCode==166)
{
this.snackBar.open(response.statusMessage,"changed to 1",{
duration:2000,
})
this.cardupdate.changemessage();
}
},
error =>{
console.log("Error",error);
} 
);

}
archive(){
    //this.createnote.archive=1;
    
   // console.log(this.noteDetail.archive,'archive   ','noteid',this.noteDetail.noteId);
    
    this.noteservice.updateNote(this.noteDetail).subscribe(

        response =>{
           
            if(response.statusCode==166)
            {
          
         // this.archiveNote.ngOnInit();
this.cardupdate.changemessage();
           this.snackBar.open(response.statusMessage,"added",{
            duration:2000,
            })
            }
           
            },
            error =>{
            console.log("Error",error);
            } 
            );
   
            


}
unarchive(){

 //   this.createnote.archive=0;
    console.log('unarchive buttom');
    

    console.log(this.noteDetail.archive,'archive','noteid',this.noteDetail.noteId);
    







    
    this.noteservice.updateNote(this.noteDetail).subscribe(

        response =>{
    
            if(response.statusCode==166)
            {
         
         // this.archiveNote.ngOnInit();

           this.snackBar.open(response.statusMessage,"added",{
            duration:2000,
            })
            }
            this.cardupdate.changemessage();
            },
            error =>{
            console.log("Error",error);
            } 
            );
   
         
          //  this.archiveNote.unarchive();
   
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

archived()
{
    if(this.noteDetail.archive == 0)
    {
        console.log('d');
        return true;
    }
    else{
        console.log('d2');
        return false;
    }
}

}
