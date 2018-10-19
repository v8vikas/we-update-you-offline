import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  get(key: string): any {
    const storage = localStorage.getItem(key);
    return JSON.parse(storage);
  }

  set(key: string, value: any): any {
    const storage = localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): any {
    localStorage.removeItem(key);
  }
}
