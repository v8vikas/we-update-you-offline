import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CommonService {

  constructor() { }
  getHeaders() {
    const headers = new HttpHeaders()
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return headers;
  }

  generateUrl = (app, action: string, obj: any) => {

    const params = Object.assign({
      app,
      action
    }, obj);

    var str = [];
    for (var p in params) {
      if (params.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
      }
    }
    return str.join("&");
  }

}
