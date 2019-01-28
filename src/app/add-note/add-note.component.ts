import { Component, OnInit } from '@angular/core';
import{NoteServiceService} from '../note-service.service';
import {MatSnackBar} from '@angular/material';
import {CreateNoteModel} from '../Model/add-notes.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
  })
  export class AddNoteComponent implements OnInit {
  
  barshow:boolean=false;
  showicon:boolean=true;
  createnote:CreateNoteModel=new CreateNoteModel;
  constructor(private noteservice:NoteServiceService,private snackBar: MatSnackBar) { }
  
  
  fullCardShow()
  {
  this.barshow=!this.barshow;
  
  }
  ngOnInit() {
  }
  
  noteSave()
  {
    this.showicon=false;
  this.barshow=!this.barshow;
  this.createnote.pinned=true;
  
  this.noteservice.createNote(this.createnote).subscribe(
  response =>{
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
  console.log(this.createnote.title);
  console.log(this.createnote.description);
  }
  
  }
