import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],

})

export class HistoryComponent  {


  @Input('parentLink') public currentLink: any;
  @Input('parentHistory') public requestedLinks: any;

  @Output() newHistoryLinkEvent = new EventEmitter<string>();

  getVideoID(link: string) {
    this.newHistoryLinkEvent.emit(link);
  } 
  

}




