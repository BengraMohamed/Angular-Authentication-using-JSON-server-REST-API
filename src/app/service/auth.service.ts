import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiurl='http://localhost:3000/user';

  Getall(){
    return this.http.get(this.apiurl);
  }
  GetbyCode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  GetallRole(){
    return this.http.get("http://localhost:3000/role");
  }

  Proceedregister(inputdata :any){
    return this.http.post(this.apiurl , inputdata);
  }
   
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  isLoggedIn () {
    return sessionStorage.getItem('username') != null ;
  }

  GetUserrole () {
    return sessionStorage.getItem('userrole') != null?sessionStorage.getItem('userrole')?.toString():'' ;
  }

  // Delete User 
  DeleteUser (id :number ) : Observable <any> {
    return this.http.delete(`http://localhost:3000/user/${id}`);
  }
}
