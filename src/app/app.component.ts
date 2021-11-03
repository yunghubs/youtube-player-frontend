import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {  

  requestedLinks: any = [];
  public bookmarks: any = [];

  

  public currentLink: any;
  public videoId = '';
  
  getVideoID(val: any)
  {
    this.currentLink = val;
    this.videoId = this.currentLink.split("v=")[1]
    
    
    this.addHistory();
    
  }

  
  constructor(private api: ApiService) {
    this.getHistory();
    this.getBookmarks();
    
    
  }
  getHistory = () => {
    //subscribing to the observable 
    this.api.getAllHistorys().subscribe(
      data => {
        this.requestedLinks = data.reverse();
        
        
      },
      error => {
        console.log(error);
      }
    );
  }

  getBookmarks = () => {
    //subscribing to the observable 
    this.api.getAllBookmarks().subscribe(
      data => {
        this.bookmarks = data.reverse();
        
      },
      error => {
        console.log(error);
      }
    );
  }



  addHistory = () => {
    this.api.createHistory(this.currentLink).subscribe(
      data => {
        
        this.requestedLinks.unshift(data);
        
        
      },
      error => {
        console.log(error);
      }
    );  
  }

  

  addBookmark = () => {

    if (this.bookmarks.some((bookmark: any) => bookmark.bookmarkLink === this.currentLink)){

      return
    }
    this.api.createBookmark(this.currentLink).subscribe(
      data => {

        
        this.bookmarks.unshift(data);
        
        
      },
      error => {
        console.log(error);
      }
    );  
  }  
  
}
