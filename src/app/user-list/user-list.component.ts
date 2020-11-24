import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../service/common.service';
declare var $: any;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  _userList: any[] = [];
  _albumList: any[] = [];
  _userNameForAlbum: string;
  _isVisible: boolean = false;
  // _router: any;

  constructor(private _service: CommonService,private _router:Router) { }

  ngOnInit(): void {
    this._isVisible = true;
    this._getUserList()

  }
  _getUserList() {
    try {

      this._service._getUserList().subscribe(_response => {
        this._userList = _response;
        this._isVisible = false;
        console.log(_response);
      }, error => {
        console.log(error);
      })
    } catch (error) {

      console.log(error);
    }
  }

  _getAlbumByUserId(id: any, name: string) {
    try {
      this._isVisible = true;
      this._service._getAlbumList(id).subscribe(_response => {
        this._albumList = _response;
        this._userNameForAlbum = name ? name : "No user information found";

        this._isVisible = false;
        $('#showInfo').modal('show');
      }, error => {
        $('#showInfo').modal('hide');

        console.log(error);
        throw new Error(JSON.stringify(error));
      })
    } catch (error) {
      $('#showInfo').modal('hide');

      console.log(error);
      throw new Error(JSON.stringify(error));

    }
  }

  _getPictures():any{
    try {
      this._router.navigate(['/image-list']);
    } catch (error) {
      
    }
  }


}
