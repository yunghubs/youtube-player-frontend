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

  getNumberBookmarks(): Observable<any> { 
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

}




  
