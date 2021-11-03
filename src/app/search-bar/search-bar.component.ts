import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar', 
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  
  @Output() newLinkEvent = new EventEmitter<string>();


  getValue(value: string) {
    this.newLinkEvent.emit(value);
  }

  
}
