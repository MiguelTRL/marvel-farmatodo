import { Injectable } from '@angular/core';
import  { environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(
    private http: HttpClient,

) {

    
   }

  get(url: string, params?: any) : Promise<any> {
    return new Promise((resolve, reject) => {


      return this.http.get(`${environment.api_url}${url}${environment.api_key}`)
      .subscribe((response : any) => {
          console.log("=> res", response); 
          if(response.status == 'Ok') {
            resolve({data: response, msg: 'success'});
          }
          else {
            reject({msg: response.msg});
          }
        },(error) : any => {
          reject({msg : error.error.msg});
        });
    });
  }
}
