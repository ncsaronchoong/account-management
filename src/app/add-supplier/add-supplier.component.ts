import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Supplier } from '../supplier/supplier.component';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier("", "", "", "", "");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  addSupplier(): void {
    this.httpClientService.addSupplier(this.supplier)
        .subscribe( data => {
          alert("Supplier created successfully.");
        });

  };

}
