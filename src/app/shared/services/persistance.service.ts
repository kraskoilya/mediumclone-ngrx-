import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error saving to localstorage', error);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log('Error getting data from localstorage', error);
      return null;
    }
  }
}
