import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../project.service';
import { Product } from './../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  prod = new Product;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
  ) {}

  onSubmit() {
    this._projectService.createProd(this.prod);
    this.prod = new Product;
    this._router.navigate(['/products']);
  }



  ngOnInit() {
  }

}
