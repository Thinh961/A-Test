import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../_models/products.model';
import { ProductsService } from '../_services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products = new Products

  constructor(
    private route:ActivatedRoute,
    private productService: ProductsService,
  ) { }

  ngOnInit() {
    this.getRoute(this.route.snapshot.params['id']);
  }

  getRoute(id:any){
    this.productService.getProductsId(id).subscribe((response:any)=>{
      this.products = response;
    });    
  }

}
