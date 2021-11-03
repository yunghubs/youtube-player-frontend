import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {

  constructor() { }

  @Input() addBookmark: any
  @Input() getBookmarks: any

  @Input('parentBookmarks') public bookmarks: any;






}
