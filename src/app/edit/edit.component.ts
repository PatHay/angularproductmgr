import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../project.service';
import { Product } from './../product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  prodList: Array<Product> = [];
  product;
  prod = new Product;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._projectService.retrieveProds((prodList) => {
      this.prodList = prodList;
    });
    this._route.params.subscribe( param => {
      for ( let i = 0; i < this.prodList.length; i++){
        if(this.prodList[i].id == param.id){
          this.product = this.prodList[i];
          break;
        }
      }
    })
  console.log(this.prodList);
  console.log("Product " + this.product);
}
 
  onEdit(){
    const idx = this.prodList.indexOf(this.product);
    this.prodList.splice(idx, 1);
    this._route.params.subscribe( param => {
      this.prod.id = param.id;
    });
    this.prodList.push(this.prod);
    this._projectService.update(this.prodList);
    this._router.navigate(['/products']);
  }

  delete() {
    const idx = this.prodList.indexOf(this.product);
    this.prodList.splice(idx, 1);
    this._projectService.update(this.prodList);
    this._router.navigate(['/products']);
  }

  ngOnInit() {
  }

}
