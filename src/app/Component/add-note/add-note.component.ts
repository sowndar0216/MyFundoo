import { Component, OnInit } from '@angular/core';

import {MatSnackBar, throwMatDialogContentAlreadyAttachedError} from '@angular/material';
import { isArray, isNull, isNullOrUndefined } from 'util';


import { NoteServiceService } from 'src/app/Service/note-service.service';
import { CreateNoteModel } from 'src/app/Model/add-notes.model';
import { CardsupdateServiceService } from 'src/app/Service/cardsupdate-service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
  })
  export class AddNoteComponent implements OnInit {
    colorCode: Array<Object> = [
      { name: "white", colorCode: "rgb(255, 255, 255)" },
      { name: "lightGreen", colorCode: "rgb(204, 255, 144)" },
      { name: "purple", colorCode: "rgb(215, 174, 251)" },
      { name: "red", colorCode: "rgb(242, 139, 130)" },
      { name: "Teal", colorCode: "rgb(167, 255, 235)" },
      { name: "pink", colorCode: "rgb(253, 207, 232)" },
      { name: "orange", colorCode: "rgb(251, 188, 4)" },
      { name: "blue", colorCode: "rgb(203, 240, 248)" },
      { name: "brown", colorCode: "rgb(230, 201, 168)" },
      { name: "yellow", colorCode: "rgb(255, 244, 117)" },
      { name: "darkBlue", colorCode: "rgb(174, 203, 250)" },
      { name: "gray", colorCode: "rgb(232, 234, 237)" }
    ]
    pinnedIconSrc = "../../assets/pin.svg";
    unpinnedIconSrc = "../../assets/Icons/unpin.svg";

  isOpen:boolean=false;
  showicon:boolean=true;
  getnote:boolean=false;
  createnote:CreateNoteModel=new CreateNoteModel;
  newnote:CreateNoteModel=new CreateNoteModel();
  getnewnote:boolean=false;
  color:string;
  pin:boolean=false;
  constructor(private noteservice:NoteServiceService,private snackBar: MatSnackBar,private cardupdate:CardsupdateServiceService) { }
  
  getnotes:boolean=false;
  private  allnotes:CreateNoteModel[];
 
  public ngOnInit(){
   
  }
  
  
  archive(){
    this.isOpen=false;
    console.log("archived");
    
//this.createnote.archive=1;

//this.createnote.color="red";


this.createnote.color=this.color;

    
  
//console.log(this.createnote,'ssds')
if(this.createnote.title !=null){
this.noteservice.createArchiveNote(this.createnote).subscribe(
response =>{


if(response.statusCode==166)
{


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
this.newnote=this.createnote;

this.createnote=new CreateNoteModel();
this.createnote.color="white";
}



  }






  changeColor(color) {

    this.color = color;

  }

  pinOption() {
    if (this.pin) {
      this.pin = false;
    } else {
      this.pin = true;
    }
  }


  noteSave()
  {
   


    
    this.getnote =true;
    
this.isOpen=false;

    console.log(this.createnote.archive);
  




  //console.log(this.createnote,'ssds')
  if(this.createnote.title !=null){
    

    this.createnote.color=this.color;
this.createnote.pinned=this.pin;


  this.noteservice.createNote(this.createnote).subscribe(
  response =>{ this.showicon=false;
 
  if(response.statusCode==166)
  {
this.ngOnInit();
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
this.newnote=this.createnote;

this.createnote=new CreateNoteModel();
this.createnote.color="white";
}
  // console.log(this.createnote.title);
  // console.log(this.createnote.description);
 
  }
  
  }
