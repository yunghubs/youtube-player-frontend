import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar', //you can use it as a class
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  //Output: decorator marking the property for data flow; name, 
  @Output() newLinkEvent = new EventEmitter<string>();


  getValue(value: string) {
    this.newLinkEvent.emit(value);
  }

  
}
