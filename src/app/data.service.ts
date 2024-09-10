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
//get items data
  getData(){
    console.log("in service")
    return this.http.get(this.ApibaseUrl+'getItem')
  }
  //getdata of an item
  getItem(id:string){
    return this.http.get(this.ApibaseUrl+`edititem/${id}`)
  }
//update changed item data
updateItem(id:string,item:item){
  console.log(item,"item in service")
  return this.http.patch(this.ApibaseUrl+`updateItem/${id}`,item)
}
//delete item

deleteItem(id:string){
 return this.http.delete(this.ApibaseUrl+`deleteItem/${id}`)
}
}
