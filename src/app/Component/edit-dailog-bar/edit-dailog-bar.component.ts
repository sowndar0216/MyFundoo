import { Component, OnInit, Input } from '@angular/core';
import { CreateNoteModel } from 'src/app/Model/add-notes.model';

@Component({
  selector: 'app-edit-dailog-bar',
  templateUrl: './edit-dailog-bar.component.html',
  styleUrls: ['./edit-dailog-bar.component.css']
})
export class EditDailogBarComponent implements OnInit {
  @Input() noteDetail:CreateNoteModel;
  constructor() { }

  ngOnInit() {
  }

  
}
