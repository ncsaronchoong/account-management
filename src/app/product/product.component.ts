import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

export class Product{
  constructor(
    public productId:any,
    public productName:any,
    public productDescription:any,
    public price:any,
    public expiryDate:any,
    public quantity:any,
  ) {}
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit():void {
    this.getProducts();
  }

  getProducts(){
    this.httpClientService.getProducts().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  deleteProduct(product: Product): void {
    this.httpClientService.deleteProduct(product)
      .subscribe( data => {
        this.products = this.products.filter((u:any) => u !== product);
      })
  };

  handleSuccessfulResponse(response: any)
  {
    console.log(response);
    this.products=response;
  }

}
