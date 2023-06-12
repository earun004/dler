import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-add-steel-size',
  templateUrl: './add-steel-size.component.html',
  styleUrls: ['./add-steel-size.component.scss']
})
export class AddSteelSizeComponent implements OnInit {
  brands = [];
  materials = [];
  shapes = [];
  subCategory = [];
  sizeForm: FormGroup;
  BRAND: FormControl;
CATEGORY: FormControl;
SUB_CATEGORY: FormControl;
SHAPE: FormControl;
WEIGHT: FormControl;
THICKNESS: FormControl;
LENGTH: FormControl;
PERIMETER: FormControl;
existingSizes = [];
  constructor(private api: CommomApiService, private tsr: ToastrService) { }

  ngOnInit(): void {
    this.sizeForm = new FormGroup({
      BRAND: new FormControl('', Validators.required),
      CATEGORY: new FormControl('', Validators.required),
      SUB_CATEGORY: new FormControl('', Validators.required),
      SHAPE: new FormControl('', Validators.required),
      WEIGHT: new FormControl('', Validators.required),
      THICKNESS: new FormControl('', Validators.required),
      LENGTH: new FormControl('', Validators.required),
      PERIMETER: new FormControl('', Validators.required)
    });
    this.api.getBrand().subscribe((res) => {
      if (res && res.status) {
        res.data.forEach((option) => this.brands.push(option.BRAND));
      }
    });
    this.api.getMaterial().subscribe((res) => {
      if (res && res.status) {
        res.data.forEach((option) => this.materials.push(option.MATERIAL));
      }
    });

    this.api.getSubMaterial().subscribe((res) => {
      if (res && res.status) {
        // res.data.forEach((option) => this.materials.push(option.MATERIAL));
        console.log(res);
      }
    });
    this.api.getShape().subscribe((res) => {
      if (res && res.status) {
        res.data.forEach((option) => this.shapes.push(option.SHAPE));
      }
    });
    this.api.getSubCategory().subscribe((res) => {
      if (res && res.status) {
        this.subCategory = res.data;
      }
    });
    
    this.getSize();
  }

  getSize() {
    this.api.getSize().subscribe((res) => {
      if (res && res.status) {
        setTimeout(() => this.existingSizes = res.data, 50);
      }
    })
  }

  submit() {
    this.api.setSize(this.sizeForm.value).subscribe((res) => {
      this.tsr.success(res.message);
      this.sizeForm.reset();
      this.getSize();
    })
  }

}
