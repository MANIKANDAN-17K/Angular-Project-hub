import {Injectable} from '@angular/core';
import { Note } from "../models/note";

@Injectable({
    providedIn:'root'
})
export class NoteService{
    notes: Note[] = [];
    getNotes(){
        return this.notes;
    }
    addNote(text:string){
        this.notes.push({id:Date.now(),text});
    }
    deleteNote(id:number){
        this.notes = this.notes.filter(n=>n.id !== id);
    }
}