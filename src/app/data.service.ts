import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { item } from './Model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient){}
ApibaseUrl=environment.baseUrl

//create item
  createItem(items:item){
    return this.http.post(this.ApibaseUrl+`create`,items)
  }
//get item data
  getData(){
    console.log("in service")
    return this.http.get(this.ApibaseUrl+'getItem')
  }
  getItem(id:string){
    return this.http.get(this.ApibaseUrl+`Edititem/${id}`)
  }

//delete item

deleteItem(id:string){
 return this.http.delete(this.ApibaseUrl+`deleteItem/${id}`)
}
}
