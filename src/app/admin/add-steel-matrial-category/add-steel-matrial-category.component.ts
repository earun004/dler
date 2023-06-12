import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-add-steel-matrial-category',
  templateUrl: './add-steel-matrial-category.component.html',
  styleUrls: ['./add-steel-matrial-category.component.scss']
})
export class AddSteelMatrialCategoryComponent implements OnInit {
  category = 'STEEL';
  subCategory={SUB_CATEGORY: ''};
  categories= [];
  constructor(private router: Router, private api: CommomApiService) { }

  ngOnInit(): void {
    const login = this.api.isLoginUser();
    if (!login) {
      this.router.navigateByUrl('/admin/login');
    }
    this.getsubCatogory();
  }

  remove(i) {
    this.api.deleteSubCategory(this.categories[i]).subscribe((res) => {
      if (res && res.status) {
        this.api.showToastr(res.message, true);
        this.categories.splice(i, 1);
      }
    })
  }

  getsubCatogory() {
    this.api.getSubCategory().subscribe((res) => {
      if (res && res.status) {
        this.categories = res.data;
      }
    })
  }

  addSubCatagory() {
    this.api.addSubCategory(this.subCategory).subscribe((res) => {
      if (res && res.status) {
        this.api.showToastr(res.message, true);
        this.getsubCatogory();
        this.subCategory.SUB_CATEGORY = '';
      } else {
        this.api.showToastr(res.message, false);
      }
    })
  }

}
