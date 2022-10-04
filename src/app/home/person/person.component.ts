import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface Person {
  id: number,
  name: string,
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  private _data : Person;

  @Output() onremove = new EventEmitter();

  //@Input() data: Person

  @Input("data") set data(n: Person) {
    this._data = n;
  }
    
    get data() {
      return this._data;
    }

  constructor() { }

  ngOnInit() {}

  onRemove() {
    this.onremove.next(this._data.id);
  }
  
}
