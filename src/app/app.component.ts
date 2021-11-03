import { Component } from '@angular/core';
import { ApiService } from './api.service';

//metadata to the class in form of decorator(component): function atached to the class
@Component({
  selector: 'app-root', //where the .html file get rendert
  templateUrl: './app.component.html',//represents the view for this component
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
//class: contains variables somtiems title 
export class AppComponent {
  //static array mit object

  
  //static
  //historyLinks = [{link: 'testlink'}];
  public numberOfBookmarks: any = [];

  requestedLinks: any = [];
  public bookmarks: any = [];

  

  public currentLink: any;
  public videoId = '';
  
  getVideoID(val: any)
  {
    this.currentLink = val;
    this.videoId = this.currentLink.split("v=")[1]
    

    if (this.requestedLinks.some((requestedLink: any) => requestedLink.historyLink === val)){

      return
    }
    this.addHistory();
    
  }

  //wir haben instanz von apiService --> Nutzung der getMovies Funktion dies returned observable 
  constructor(private api: ApiService) {
    this.getHistory();
    //this.addHistory();
    //this.getBookmarks();
    
    
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

  getNumberBookmarks = () => {
    //subscribing to the observable 
    this.api.getNumberBookmarks().subscribe(
      data => {
        this.numberOfBookmarks = data.reverse();
        
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
