import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { HsLibConfigService, HsLibConfig } from '../public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl:string= "";
  // inject our configuration into our service
  constructor(private http: HttpClient) { }
  setDataUrl(strurl: string) {
    this.dataUrl = strurl
  }
  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
