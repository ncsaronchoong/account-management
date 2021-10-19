import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

export class Account{
  constructor(
    public accountId:number,
    public username:string,
    public password:string,
    public accountType:string,
    public creationDate:Date,
    public lastLogin:string,
    public user:any,
  ) {}
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts: any;
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit():void {
    this.getAccounts();
  }

  getAccounts(){
    this.httpClientService.getAccounts().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response: any)
  {
    console.log(response);
    this.accounts=response;
  }

}

