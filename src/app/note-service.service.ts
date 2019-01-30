import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {CreateNoteModel} from './Model/add-notes.model';
import { Observable } from 'rxjs';



@Injectable({
providedIn: 'root'
})
export class NoteServiceService {

 
  
   

constructor(private http:HttpClient) { }

private noteUrl = 'http://localhost:8080/fundooNote/';

public createNote(newNote:CreateNoteModel):any
{
  var httpOptions = {

    headers: new HttpHeaders({'Content-Type': 'application/json' ,
    'token':localStorage.getItem('jwtToken')}
    )};
 console.log(localStorage.getItem('jwtToken'));
console.log(this.noteUrl+'addNote');
//console.log(httpOptions.headers);
console.log(newNote.title, newNote.description);
return this.http.post<CreateNoteModel>(this.noteUrl+'addNote',newNote,httpOptions);
}


public deleteNote(newNote:CreateNoteModel):any
{
  var httpOptions2 ={
    headers: new HttpHeaders({
      'token':localStorage.getItem('jwtToken')
    })
  };
console.log(newNote.id);
return this.http.post<CreateNoteModel>(this.noteUrl+'delete',newNote,httpOptions2);


}

public getnotes():Observable<CreateNoteModel[]> | any
{
  var httpOptions2 ={
    headers: new HttpHeaders({
      'token':localStorage.getItem('jwtToken')
    })
  };
  return this.http.get<CreateNoteModel[]>(this.noteUrl+'getNote',httpOptions2);

}


}