import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
})
export class ProductSearchComponent implements OnInit {


  constructor(
    private productService: ProductService
  ) { }


  @Output() productEmiter = new EventEmitter<Product>();
  products: Product[] = [];

  ngOnInit(): void {

  }


  findByName(term: string):void {

    if (term.length>=2){
      this.productService.findByName(term).subscribe(
        (response) => {
          console.log(term + " "+ response);
          this.products = response
        }
      )
    }
    if (term.length===0){
      this.products = [];
    }

  }



  onSelect(product:Product): void{
    this.productEmiter.emit(product);
  }



}
