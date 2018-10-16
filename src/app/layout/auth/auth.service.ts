import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private httpService: HttpService) { }

  login(params: any) : Observable<any> {
    return this.httpService.post('login', params);
  }
}
