import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient) { }
  getTrending(subject:string):Observable<any>{
    return this._httpClient.get(`http://openlibrary.org/subjects/${subject}.json?q=${subject}`)
  }
}
