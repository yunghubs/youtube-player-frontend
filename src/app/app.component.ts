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
  movies = [{title: 'test'}];
  selectedMovie: any;
  
  //static
  //historyLinks = [{link: 'testlink'}];

  requestedLinks: any;

  public currentLink: any;
  public videoId = '';
  
  getVideoID(val: any)
  {
    this.currentLink = val;
    this.videoId = this.currentLink.split("v=")[1]
    
  }

  //wir haben instanz von apiService --> Nutzung der getMovies Funktion dies returned observable 
  constructor(private api: ApiService) {
    this.getMovies();
    this.getHistory();
    //this.createHistory();
    this.selectedMovie ={id: -1,title:'', desc:'', year: 0 };
    this.requestedLinks ={id: -1, historyLink:''};
   
  }
  getHistory = () => {
    //subscribing to the observable 
    this.api.getAllHistorys().subscribe(
      data => {
        this.requestedLinks = data;
        console.log(this.requestedLinks);
        
      },
      error => {
        console.log(error);
      }
    );
  }

  getMovies = () => {
    //subscribing to the observable 
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
        
      },
      error => {
        console.log(error);
      }
    );
  }
  movieClicked = (movie: any) => {
    this.api.getOneMovie(movie.id).subscribe(
      data => {
        
        this.videoId = data.video;
        this.selectedMovie = data;
        
      },
      error => {
        console.log(error);
      }
    );
  } 
  //bookmarks
  updateMovie = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data => {
        
        this.getMovies();
        
      },
      error => {
        console.log(error);
      }
    );  
  }
  

  //history
  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        
        this.movies.push(data);
        
      },
      error => {
        console.log(error);
      }
    );  
  }

  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        
        this.getMovies();
        
      },
      error => {
        console.log(error);
      }
    );  
  }

  
}
