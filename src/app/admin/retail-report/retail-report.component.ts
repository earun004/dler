import { Component, OnInit } from '@angular/core';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-retail-report',
  templateUrl: './retail-report.component.html',
  styleUrls: ['./retail-report.component.scss']
})
export class RetailReportComponent implements OnInit {

  users = [];
  constructor(private api: CommomApiService) { }

  ngOnInit(): void {
    this.api.getAllUsers({USER_TYPE: 'Retailer'}).subscribe((res) => {
      if (res) {
        console.log(res.data);
      this.users = res.data;
      }
    })
  }

}
