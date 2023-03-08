import { Component } from '@angular/core';
import { ApiDialogComponent } from '../api-dialog/api-dialog.component';
import { APIsService } from '../APIServices/apis.service';
import { LoginService } from '../authService/login.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-backend-data',
  templateUrl: './backend-data.component.html',
  styleUrls: ['./backend-data.component.scss']
})
export class BackendDataComponent {


  constructor(
    private loginsvr: LoginService,
    private apiservice: APIsService,
    private dialog:MatDialog
  ) { }


  storeTableData: any;
  categoryTableData:any;
  productTableData:any;
  displayUName = sessionStorage.getItem("UName");

  formGroupid:any;
  ngOnInit() {
    this.Getstoredata();
  }

  //getdata from db
  Getstoredata(){
    this.apiservice.GetStoreData().subscribe(data => { // Requesting store data
      this.storeTableData = data;
    })
    this.apiservice.GetCategoryData().subscribe(catdata =>{ // Requesting category data
      this.categoryTableData = catdata;
    })
    this.apiservice.GetProductData().subscribe(product=>{ // Requesting product data
      this.productTableData = product;
    })

  }



  logoutpage() {
    this.loginsvr.logoutuser();
  }


  //store table displayedColumns
  displayedColumns: string[] = ['id', 'storename'];
  //Category table categorycolumns
  categoryColumns: string[] = ['id','categoryname'];
  //Product table columns
  productcategoryColumns:string[] = ['id','productName','quantity','price','action'];

  //For store table functionality
  openDialog(): void {
    this.formGroupid = 1;
  let dialogRef = this.dialog.open(ApiDialogComponent,{
    width:'30%',
    data:{
      FormId:this.formGroupid
    }
  })
  dialogRef.afterClosed().subscribe(create=>{
    var forPost = create.data.storename.value;
    var data ={
      storename: forPost
    }
    this.apiservice.PostStoreData(data).subscribe((res)=>{
      console.log(res);
      this.Getstoredata();
    });

  })

  }

  //For category table functionality
  openDialogforCategory():void{
    this.formGroupid = 2;
    let dialogRef = this.dialog.open(ApiDialogComponent,{
      width:'30%',
      data:{
        FormId : this.formGroupid
      }
    })

    dialogRef.afterClosed().subscribe(create=>{
      var forPost = create.data.categoryname.value;
      var data={
        categoryname:forPost
      }

      this.apiservice.PostCategoryData(data).subscribe(res=>{
        console.log(res);
        this.Getstoredata();
      })
    })
  }

  // For Category and Store table mapping
  openForMapCatStore():void{
    this.formGroupid = 3;
    let dialogRef = this.dialog.open(ApiDialogComponent,{
      width:'30%',
      data :{
          FormId : this.formGroupid,
          storeData:this.storeTableData,
          catData:this.categoryTableData
      }
    })
    dialogRef.afterClosed().subscribe(create=>{
      var forpoststoreid = create.data.storeId.value.id;
      var forpostCatid  = create.data.catId.value.id;

    
      var data={
        storeId:forpoststoreid,
        catId:forpostCatid
      }
      this.apiservice.PostCatStoreData(data).subscribe(response=>{
        console.log(response);
      })
    })
  }

  //For Product table functionality
  openProductDialogBox():void{
    this.formGroupid = 4;
    let dialogRef = this.dialog.open(ApiDialogComponent,{
      width:'30%',
      data:{
          FormId:this.formGroupid
      }
    })

    dialogRef.afterClosed().subscribe(create=>{
      var pname = create.data.productName.value;
      var pquantity = create.data.quantity.value;
      var pprice = create.data.price.value;
      var data={
        productName:pname,
        quantity:pquantity,
        price:pprice
      }
      this.apiservice.PostProductData(data).subscribe(res=>{
        console.log(res);
        this.Getstoredata();
      })
    })

    }

    //For product category table Mapping
    dialogopenforProductMap():void{
      this.formGroupid = 5;
      let dialogRef = this.dialog.open(ApiDialogComponent,{
        width:'30%',
        data:{
          FormId:this.formGroupid,
          ProductData:this.productTableData,
          catData:this.categoryTableData
        }
      })

      dialogRef.afterClosed().subscribe(create=>{
        var catid = create.data.categoryId.value.id;
        var pid = create.data.productId.value.id;

        var data={
          categoryId:catid,
          productId:pid
        }
        this.apiservice.PostCatProductData(data).subscribe(res=>{
          console.log(res);
        })
      })
    }

    deleteproduct(element:any){
      // console.log(element.id);
      this.apiservice.DeleteProductItme(element.id).subscribe(res=>{
        console.log(res);
        this.Getstoredata();
      })
    }
    updateproduct(element:any){
      console.log(element);
      let existingId = element.id;
      this.formGroupid = 4;
      let dialogRef = this.dialog.open(ApiDialogComponent,{
        width:'30%',
        data:{
          FormId:this.formGroupid,
          Editdata:element
        }

      })
      dialogRef.afterClosed().subscribe(update=>{
        var pname = update.data.productName.value;
        var pquantity = update.data.quantity.value;
        var pprice = update.data.price.value;
       var data={
          productName:pname,
          quantity:pquantity,
          price:pprice
        }

        this.apiservice.EditedProductData(existingId,data).subscribe(res=>{
          console.log(res);
        })
      })
    }


  }

