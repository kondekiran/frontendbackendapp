import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private http:HttpClient) { }
  //Store Table Get data
  GetStoreData(){
    return this.http.get("https://localhost:7167/api/Store/GetStores");
  }
  //Store Table Post data
  PostStoreData(data:any){
    return this.http.post("https://localhost:7167/api/Store/AddStore",data)
    }
  //Category Table Get data
  GetCategoryData(){
    return this.http.get("https://localhost:7167/api/Category/Get");
  }
  //Category Table Post data
  PostCategoryData(data:any){
    return this.http.post("https://localhost:7167/api/Category/api/CreateCategory",data)
  }

  //CatStore Table Post data
  PostCatStoreData(data:any){
    return this.http.post("https://localhost:7167/api/Cat_store/Create",data)
  }
  
  //Product Table Get Request
  GetProductData(){
    return this.http.get("https://localhost:7167/api/Product/GetProducts");
  }

  //Product Table Post Request
  PostProductData(data:any){
    return this.http.post("https://localhost:7167/api/Product/AddProduct",data);
  }

  // Category product post request
  PostCatProductData(data:any){
    return this.http.post("https://localhost:7167/api/CatProduct/AddCategoryProduct",data);
  }

  // delete items from product
  DeleteProductItme(data:any){
    return this.http.delete(`https://localhost:7167/api/Product/DeleteProduct/${data}`);
  }

  // Edit product data
  EditedProductData(Id:any,data:any){
    return this.http.put(`https://localhost:7167/api/Product/EditProduct/Edit/${Id}`,data)
  }

}
