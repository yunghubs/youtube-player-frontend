import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  //http is local variable, we use it to refer to the instance of httpclient
  //dependencie in the constructor --> local variable hhtp use to refier to the instance of the hhtpclient
  constructor(private http: HttpClient) { }


  getAllHistorys(): Observable<any> { 
    //.get takes in the url as its argument
    return this.http.get(this.baseurl + '/history/',
    {headers: this.httpHeaders})
  }

  getAllBookmarks(): Observable<any> { 
    //.get takes in the url as its argument
    return this.http.get(this.baseurl + '/bookmark/',
    {headers: this.httpHeaders})
  }

  createHistory(linkToHistory: any): Observable<any> {
    //put method
    const body = {historyLink: linkToHistory}
    return this.http.post(this.baseurl + '/history/' , body,
    {headers: this.httpHeaders})
  }

  createBookmark(linkToBookmark: any): Observable<any> {
    //put method
    const body = {bookmarkLink: linkToBookmark}
    return this.http.post(this.baseurl + '/bookmark/' , body,
    {headers: this.httpHeaders})
  }





  
  getAllMovies(): Observable<any> {
    //.get takes in the url as its argument
    return this.http.get(this.baseurl + '/movies/',
    {headers: this.httpHeaders})
  }

  getOneMovie(id: any): Observable<any> {
    //.get takes in the url as its argument
    return this.http.get(this.baseurl + '/movies/' + id + '/' ,
    {headers: this.httpHeaders})
  }
  updateMovie(movie: any): Observable<any> {
    //put method
    const body = {title: movie.title , desc: movie.desc, year: movie.year}
    return this.http.put(this.baseurl + '/movies/' + movie.id + '/' , body,
    {headers: this.httpHeaders})
  }
  createMovie(movie: any): Observable<any> {
    //put method
    const body = {title: movie.title , desc: movie.desc, year: movie.year}
    return this.http.post(this.baseurl + '/movies/' , body,
    {headers: this.httpHeaders})
  }

  

  deleteMovie(id: any): Observable<any> {
    //put method
    return this.http.delete(this.baseurl + '/movies/' + id + '/',
    {headers: this.httpHeaders})
  }

}
