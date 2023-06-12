import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {
  isEnable = false;
  constructor(private api: CommomApiService, private router: Router) { }

  ngOnInit(): void {
    const login = this.api.isLoginUser();
    if (!login) {
    this.router.navigateByUrl('/admin/login');
    }
  }

  userMenu() {
    this.isEnable = !this.isEnable;
  }

}
