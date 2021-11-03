import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  @Input() getNumberBookmarks: any
  @Input('parentNumberOfBookmarks') public numberOfBookmarks: any;

  ngOnInit(): void{

    this.getNumberBookmarks();
    console.log(this.numberOfBookmarks);

  }

  constructor() { }


  @Input() addBookmark: any
  @Input() getBookmarks: any

  @Input('parentBookmarks') public bookmarks: any;



}
