import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../project.service';
import { Product } from './../product';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  prodList: Array<Product> = [];
  
  constructor(private _projectService: ProjectService) { 
    this._projectService.retrieveProds((prodList) => {
      this.prodList = prodList;
    });
  }

  // onEdit() {
  //   this._projectService.createProd(this.prod);
  //   this.prod = {
  //     title: '',
  //     price: '',
  //     imgurl: ''
  //   }
  // }

  delete(id) {
    const idx = this.prodList.indexOf(id);
    this.prodList.splice(idx, 1);
    this._projectService.update(this.prodList);
  }


  ngOnInit() {
  }

}
