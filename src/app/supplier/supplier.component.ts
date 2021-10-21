import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

export class Supplier{
  constructor(
    public supplierId:any,
    public supplierName:any,
    public address:any,
    public contactNumber:any,
    public email:any,
  ) {}
}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers: any;
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit():void {
    this.getSuppliers();
  }

  getSuppliers(){
    this.httpClientService.getSuppliers().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  deleteSupplier(supplier: Supplier): void {
    this.httpClientService.deleteSupplier(supplier)
      .subscribe( data => {
        this.suppliers = this.suppliers.filter((u:any) => u !== supplier);
      })
  };

  handleSuccessfulResponse(response: any)
  {
    console.log(response);
    this.suppliers=response;
  }

}
