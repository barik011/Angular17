import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Postdata } from '../interface/postdata';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  private postUrl='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  getData() {
    return ['data1', 'data2', 'data3'];
  }

  getPostData():Observable<Postdata> {
    return this.http.get<Postdata>(this.postUrl);
  }

}
