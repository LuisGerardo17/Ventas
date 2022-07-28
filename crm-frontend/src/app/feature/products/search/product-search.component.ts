import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from '../product';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html'
})
export class ProductSearchComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  @Output() productEmiter = new EventEmitter<Products>();
  products: Products[] = [];

  ngOnInit(): void {
  }

  findByName(term: string):void {

    if (term.length>=2){
      this.productsService.findByName(term).subscribe(
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

  onSelect(products:Products): void{
    this.productEmiter.emit(products);
  }

}
