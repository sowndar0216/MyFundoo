import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/Service/note-service.service';
import { CreateNoteModel } from 'src/app/Model/add-notes.model';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  showicon:boolean=true;
  archive:boolean=false;
  private  allnotes:CreateNoteModel[];
  constructor(private noteservice:NoteServiceService) { }


  ngOnInit() {

    this.noteservice.getnotes().subscribe(

response =>{


this.allnotes=response;


}



    )



  }

// public viewArchivedNotes(){
//   console.log('hello only avchived note here');
//   this.noteservice.getArchivenotes().subscribe(

//      response=> {
      
//       this.allnotes=response;
 
//         if(this.allnotes.length != 0)
//         {
//           this.showicon=false;
        





//           console.log('dd',this.allnotes)
           
//         }
//       }
//  )


// }



 


 archived(note:CreateNoteModel)
{
  console.log(note);
  
    if( note.archive== 1)
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
