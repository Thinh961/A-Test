import { Component, OnInit } from '@angular/core';
import { Products } from '../_models/products.model';
import { ProductsService } from '../_services/products.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datas:Products[]=[];

  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((response: any) => {
      console.log(response);
      this.datas = response;
    })
  }

}
