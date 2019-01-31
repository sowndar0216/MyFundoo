import { Component, OnInit } from '@angular/core';
import{NoteServiceService} from '../note-service.service';
import {MatSnackBar, throwMatDialogContentAlreadyAttachedError} from '@angular/material';
import {CreateNoteModel} from '../Model/add-notes.model';
import { isArray, isNull, isNullOrUndefined } from 'util';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
  })
  export class AddNoteComponent implements OnInit {
    private colors:string[][]=[["white",'rgb(228, 70, 104)','rgb(238, 148, 96)','rgb(243, 215, 92)'],['rgb(173, 196, 92)','rgb(103, 226, 216)','rgb(144, 243, 250)','rgb(54, 166, 240)'],[ 'rgb(163, 160, 247)',
    'rgb(222, 160, 247)','rgb(240, 183, 145)','rgb(225, 231, 231)']];
  barshow:boolean=false;
  showicon:boolean=true;
  getnote:boolean=false;
  createnote:CreateNoteModel=new CreateNoteModel;
  newnote:CreateNoteModel=new CreateNoteModel();
  getnewnote:boolean=false;
  constructor(private noteservice:NoteServiceService,private snackBar: MatSnackBar) { }
  
  getnotes:boolean=false;
  private  allnotes:CreateNoteModel[];
  fullCardShow()
  {
  this.barshow=!this.barshow;
  }
  public ngOnInit() {

    console.log('hello');
    this.noteservice.getnotes().subscribe(

       response=> {
         //  localStorage.setItem('jwtToken',data.headers.get('jwtTokenxxx'));
     //    console.log(response);
        this.allnotes=response;
       //   console.log(this.allnotes);
         // console.log('l',this.allnotes.length)
          if(this.allnotes.length != 0)
          {
            this.showicon=false;
            console.log('dd',this.allnotes)
             this.getnote=true;
             console.log(this.getnote)
          }
        }
   )


  }
  
  
  archive(){
    console.log("archived");
    
//this.createnote.archive=1;

//this.createnote.color="red";

this.barshow=!this.barshow;


    
  
//console.log(this.createnote,'ssds')
if(this.createnote.title !=null){
this.noteservice.createArchiveNote(this.createnote).subscribe(
response =>{

if(response.statusCode==166)
{
this.ngOnInit();
this.snackBar.open(response.statusMessage,"added",{
duration:2000,
})
}

},
error =>{
console.log("Error",error);
} 
);
this.newnote=this.createnote;

this.createnote=new CreateNoteModel();
}
// console.log(this.createnote.title);
// console.log(this.createnote.description);


  }












  noteSave()
  {
    this.showicon=false;
  
    this.getnote =true;
    this.barshow=!this.barshow;


    console.log(this.createnote.archive);
  
  //console.log(this.createnote,'ssds')
  if(this.createnote.title !=null){
  this.noteservice.createNote(this.createnote).subscribe(
  response =>{
 
  if(response.statusCode==166)
  {
this.ngOnInit();
  this.snackBar.open(response.statusMessage,"added",{
  duration:2000,
  })
  }
  
  },
  error =>{
  console.log("Error",error);
  } 
  );
this.newnote=this.createnote;

this.createnote=new CreateNoteModel();
}
  // console.log(this.createnote.title);
  // console.log(this.createnote.description);
 
  }
  
  }
