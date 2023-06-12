import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private api: CommomApiService, private router: Router) { }

  ngOnInit(): void {
    const emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(emailRegEx)]),
      password: new FormControl('', Validators.required)
    })
  }
  login() {
    this.api.login({
EMAIL_ID:this.loginForm.get('username').value,
PASSWORD:this.loginForm.get('password').value
    }).subscribe((res) => {
    if (res && res.status) {
      this.router.navigateByUrl('/admin');
      this.api.saveLogin();
    } else {
      this.api.showToastr(res.message, false);
    }
  });
  }

}
