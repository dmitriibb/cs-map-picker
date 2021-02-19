import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  fileMap: Map<string, string>;

  constructor() {
    this.fileMap = new Map<string, string>();
  }

  public put(key: string, file: any) {
    this.fileMap.set(key, file);
  }

  public get(key: string): string {
    return this.fileMap.get(key);
  }

}
