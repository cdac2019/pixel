import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  _imageList: any = [];

  constructor(private _service:CommonService) { }

  ngOnInit(): void {
    this._getImageList();
  }
   _getImageList() {
     try {
       this._service._getImageList().subscribe(response =>{
        this._imageList = response ;
       },error=>{
         throw new Error(error);
         
       })
     } catch (error) {
      throw new Error(error);
       
     }
  }
  
}
