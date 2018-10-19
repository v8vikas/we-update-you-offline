import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { CommonService } from '../../services/common.service';
import { StorageService } from '../../services/storage/storage.service';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private commonService: CommonService,
    private storageService: StorageService
  ) { }

  login(params: any): Observable<any> {
    const headers = this.commonService.getHeaders();
    return this.httpService.post(
      `${this.commonService.generateUrl('app', 'getsecret', params)}`,
      {headers}
    );
  }

  register(params: any): Observable<any> {
    const headers = this.commonService.getHeaders();
    return this.httpService.post(
      `${this.commonService.generateUrl('user', 'create', params)}`,
      {headers}
    );
  }

  logout(): void {
    this.storageService.remove('token');
  }

  get isLoggedIn(): boolean {
    return !!this.storageService.get('token');
  }
}
