import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommomApiService } from 'src/app/commom-api.service';

@Component({
  selector: 'app-add-steel-shape',
  templateUrl: './add-steel-shape.component.html',
  styleUrls: ['./add-steel-shape.component.scss']
})
export class AddSteelShapeComponent implements OnInit {

  shape = {SHAPE: ''};
  shapes = [];
  constructor(private api: CommomApiService, private tsr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const login = this.api.isLoginUser();
    if (!login) {
    this.router.navigateByUrl('/admin/shape');
    }
    this.loadShapes();
  }
  remove(i) {
    this.api.deleteShape(this.shapes[i]).subscribe((res) => {
      if (res && res.status) {
        this.shapes.splice(i, 1);
        this.tsr.success(res.message);
      }
    })
  }

  loadShapes() {
    this.api.getShape().subscribe((res) => {
      if (res && res.status) {
        this.shapes = res.data;
      } else {
        this.tsr.error(res.message);
      }
    })
  }

  addShape() {
    if (this.shape.SHAPE) {
      this.api.addShape(this.shape).subscribe((res) => {
        if(res && res.status) {
          this.tsr.success(res.message);
          this.shapes.push(JSON.parse(JSON.stringify(this.shape)));
          this.shape.SHAPE = '';
        } else {
          this.tsr.warning(res.message);
        }
      });
    }
  }

}
