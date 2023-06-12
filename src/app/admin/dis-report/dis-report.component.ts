import { Component, OnInit } from '@angular/core';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-dis-report',
  templateUrl: './dis-report.component.html',
  styleUrls: ['./dis-report.component.scss']
})
export class DisReportComponent implements OnInit {
  users = [];
  constructor(private api: CommomApiService) { }

  ngOnInit(): void {
    this.api.getAllUsers({USER_TYPE: "Dealer"}).subscribe((res) => {
      if (res) {
        console.log(res.data);
      this.users = res.data;
      }
    })
  }

}
