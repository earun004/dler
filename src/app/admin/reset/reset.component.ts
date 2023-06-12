import { Component, OnInit } from '@angular/core';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  phone;
  newpassword;
  repassword
  constructor(private api: CommomApiService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    const param = {BOD_SEQ_NO: this.phone, NEW_PASSWORD: this.newpassword}
    this.api.changePassword(param).subscribe((res) => {
      console.log(res);
      if (res && res.status) {
        this.phone = '';
        this.newpassword = '';
        this.repassword = '';
      }
    })
  }

}
