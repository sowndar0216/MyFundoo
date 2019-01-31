import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { CreateNoteModel } from '../Model/add-notes.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  showicon:boolean=true;
  private  allnotes:CreateNoteModel[];
  constructor(private noteservice:NoteServiceService) { }

  ngOnInit() {

    
this.viewArchivedNotes();


  }

public viewArchivedNotes(){
  console.log('hello only avchived note here');
  this.noteservice.getArchivenotes().subscribe(

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
           
        }
      }
 )


}

 unarchive(){
   console.log('archived and call ngonini');
   
  this.ngOnInit();
  
 }

}
