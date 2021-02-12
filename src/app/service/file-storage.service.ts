import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  constructor() { }

  public put(key: string, file: any) {
    localStorage.setItem(key, file);
  }

  public get(key: string): any {
    return localStorage.getItem(key);
  }

}
