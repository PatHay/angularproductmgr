import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';

@Injectable()
export class ProjectService {

  prodList: Array<Product> = [];

  constructor(private _http: Http) { }

  retrieveProds(callback){
    // this._http.get('/products/new').subscribe( 
    //   (response)=> { 
    //     this.prodList = response.json();
    //     callback(this.prodList);
    //   }, 
    //   (error)=> { console.log(error); }
    // );
    callback(this.prodList);
  }

  createProd(prod) {
    this.prodList.push(prod);
    console.log(this.prodList);
  }

  update(id: Array<Product>){
    this.prodList = id;
  }

  getProd(id){
    return this.prodList['id'];
  }

}
