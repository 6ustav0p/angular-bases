import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]


  // onDeleteId = Index value : number;

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    if (!id) return;
    this.onDeleteId.emit(id);
    console.log(id);
  }



}
