import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-add-steel-brand',
  templateUrl: './add-steel-brand.component.html',
  styleUrls: ['./add-steel-brand.component.scss']
})
export class AddSteelBrandComponent implements OnInit {

  brand={BRAND: ''};
  brands = [];
  constructor(private api: CommomApiService, private router: Router) { }

  ngOnInit(): void {
    const login = this.api.isLoginUser();
    if (!login) {
    this.router.navigateByUrl('/admin/login');
    }
    this.getBrands();
  }
  remove(i) {
    this.api.deleteBrand(this.brands[i]).subscribe((res) => {
      if (res && res.status) {
        this.brands.splice(i, 1);
        this.api.showToastr(res.message, true);
      } else {
        this.api.showToastr(res.message, false);
      }
    })
  }

  getBrands() {
    this.api.getBrand().subscribe((res) => {
      if (res && res.status) {
        this.brands = res.data;
      }
    })
  }

  addBrand() {
    if (this.brand.BRAND) {
    const param = {BRAND: this.brand.BRAND, SIZE: null}
    this.api.addBrand(param).subscribe((res) => {
      if (res && res.status) {
        this.api.showToastr(res.message, true);
        this.getBrands();
        this.brand.BRAND = '';
      } else {
        this.api.showToastr(res.message, false);
      }
    });
    }
  }

}
