import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product("", "", "", "", "", "");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createProduct(): void {
    this.httpClientService.createProduct(this.product)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}