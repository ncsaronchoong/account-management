import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/product.component';
import { SupplierComponent } from '../supplier/supplier.component';
import { Supplier } from '../supplier/supplier.component';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

  getAccounts()
  {
    console.log("test call");
    return this.httpClient.get<any>('http://localhost:8084/api/account/all');
  }

  getProducts()
  {
    console.log("test call");
    return this.httpClient.get<any>('http://localhost:8080/api/products');
  }

  public deleteProduct(product: any) {
    return this.httpClient.delete<Product>("http://localhost:8080/api/products" + "/"+ product.productId);
  }

  public createProduct(product: any) {
    return this.httpClient.post<Product>("http://localhost:8080/api/products", product);
  }

  getSuppliers() {
    console.log("test call");
    return this.httpClient.get<any>('http://localhost:8088/api/suppliers');
  }

  public deleteSupplier(supplier: any) {
    return this.httpClient.delete<Product>("http://localhost:8088/api/suppliers" + "/" + supplier.supplierId);
  }

  public addSupplier(supplier: any) {
    return this.httpClient.post<Product>("http://localhost:8088/api/products", supplier);
  }
}
