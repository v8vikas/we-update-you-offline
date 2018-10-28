import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  // application/x-www-form-urlencoded
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getHeaders(): HttpHeaderResponse{
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    return 
  }

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?${endpoint}`);
  }

  post(endpoint: string, headers: any): Observable<any> {
    return this.http.post(`${this.baseUrl}?${endpoint}`, {}, headers);
  }

  put(endpoint: string, headers: any): Observable<any> {
    return this.http.get(`${this.baseUrl}?${endpoint}`, headers);
  }

  delete(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?${endpoint}`);
  }
}
