import {Component,OnInit} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit{
  notes:Note[] = [];
  text:string = "";

  constructor(private noteService:NoteService){}
  ngOnInit(){
    this.notes = this.noteService.getNotes();
  }
  add(){
    if(this.text){
      this.noteService.addNote(this.text);
      this.text = "";
    }
  }
  remove(id:number){
    this.noteService.deleteNote(id);
    this.notes = this.noteService.getNotes();
  }
}

