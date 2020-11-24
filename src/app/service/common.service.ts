import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _getImageList() {
    return this._http.get(`${environment.url}` + '/photos?albumId=1');
  }

  constructor(private _http:HttpClient) { }

  _getUserList():any{
   return this._http.get(`${environment.url}` + '/users');
  }

  
  _getAlbumList(id:any ):any{
    return this._http.get(`${environment.url}` + '/albums?userId=' + id);
   }
}
