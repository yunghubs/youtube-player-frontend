import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  
  constructor(private http: HttpClient) { }


  getAllHistorys(): Observable<any> { 
    
    return this.http.get(this.baseurl + '/history/',
    {headers: this.httpHeaders})
  }

  getAllBookmarks(): Observable<any> { 
    
    return this.http.get(this.baseurl + '/bookmark/',
    {headers: this.httpHeaders})
  }

  createHistory(linkToHistory: any): Observable<any> {
    
    const body = {historyLink: linkToHistory}
    return this.http.post(this.baseurl + '/history/' , body,
    {headers: this.httpHeaders})
  }

  createBookmark(linkToBookmark: any): Observable<any> {
    
    const body = {bookmarkLink: linkToBookmark}
    return this.http.post(this.baseurl + '/bookmark/' , body,
    {headers: this.httpHeaders})
  }

}




  
