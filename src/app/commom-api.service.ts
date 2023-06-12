import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommomApiService {
  data;
  constructor(private http: HttpClient, private tsr: ToastrService) { }

  isLoginUser() {
    return sessionStorage.getItem('login');
  }
  saveLogin() {
    sessionStorage.setItem('login', 'true');
  }

  login(params): Observable<any> {
    return this.http.post<any>('http://65.1.178.54/app/index.php/Users/login', params);
  }

  addSize(params) {
    return this.http.post('http://65.1.178.54/app/index.php/Admin/insertSizeBrand', params).subscribe((res) => {
      return res;
    })
  }

  addMaterial(params) {
    return this.http.post('http://65.1.178.54/app/index.php/Admin/insertMaterial', params).subscribe((res) => {
      return res;
    })
  }

  deleteMaterial(params) {
    return this.http.post('http://65.1.178.54/app/index.php/Admin/deleteMaterial', params).subscribe((res) => {
      return res;
    })
  }
  addBrand(params) {
    return this.http.post<any>('http://65.1.178.54/app/index.php/Admin/insertSizeBrand', params);
  }
  getBrand() {
    return this.http.get<any>('http://65.1.178.54/app/index.php/Admin/getBrands');
  }
  getMaterial() {
    return this.http.get<any>('http://65.1.178.54/app/index.php/Admin/getMaterials');
  }
  getSubMaterial() {
    return this.http.get<any>('http://65.1.178.54/app/index.php/Admin/getSubMaterials');
  }
  getSubCategory() {
    return this.http.get<any>('http://65.1.178.54/app/index.php/Admin/getSubCategories');
  }
  getShape() {
    return this.http.get<any>('http://65.1.178.54/app/index.php/Admin/getShapes');
  }
  addShape(params) {
    return this.http.post<any>('http://65.1.178.54/app/index.php/Admin/insertShape', params);
  }
  addSubCategory(params) {
    return this.http.post<any>('http://65.1.178.54/app/index.php/Admin/insertSubCategory', params);
  }
  deleteShape(param) {
    return this.http.post<any>('http://65.1.178.54/app/index.php/Admin/deleteShape',  param);
  }
  deleteBrand(params) {
    return this.http.post<any>('http://65.1.178.54/app/index.php/Admin/deleteBrand', params);
  }
  deleteSubCategory(params) {
    return this.http.post<any>('http://65.1.178.54/app/index.php/Admin/deleteSubCategory', params);
  }
  changePassword(params) {
    return this.http.post<any>('http://65.1.178.54/app/index.php/changePassword', params);
  }
  getSize(param?) {
    if (param) {
      const options= {
        params: param
      };
      return this.http.get<any>('http://65.1.178.54/app/index.php/Admin/getMeasures', options);
    }
    return this.http.get<any>('http://65.1.178.54/app/index.php/Admin/getMeasures');
    
  }

  setSize(param?) {
      return this.http.post<any>('http://65.1.178.54/app/index.php/Admin/insertMeasures', param);
    
  }

  getAllUsers(param?) {
    const options= {
      params: {
        USER_TYPE: param ? param.USER_TYPE : ''
      }
    }
    return param ?
     this.http.get<any>('http://65.1.178.54/app/index.php/Users/getAllUsers', options) :
     this.http.get<any>('http://65.1.178.54/app/index.php/Users/getAllUsers')
  }

  showToastr(msg, type) {
    if (type) {
      this.tsr.success(msg);
    } else {
      this.tsr.warning(msg);
    }
  }

  getFilterResult(param) {
    const options= {
      params: param
    }
    return this.http.get<any>('http://65.1.178.54/app/index.php/Orders/getDetails', options)
  }

}
