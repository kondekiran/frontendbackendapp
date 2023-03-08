import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';





@Component({
  selector: 'app-api-dialog',
  templateUrl: './api-dialog.component.html',
  styleUrls: ['./api-dialog.component.scss']
})
export class ApiDialogComponent {

  form: any = FormGroup; // Store Table
  categoryform: any = FormGroup; // Category Table
  catstoreform: any = FormGroup; // Store Category Table
  productform:any = FormGroup; // Product Table
  categoryProductform:any = FormGroup // Category Product
  storeformid: any;
  storeGetData: any;
  catGetData:any;
  productData:any;
  
  
  constructor(
    private fb: FormBuilder,
    private dialogref: MatDialogRef<ApiDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.apiformbuild();
    this.forcategory();
    this.forCatstore();
    this.forProduct();
    this.forCategoryProduct();
  }
  //This is for Store Table
  apiformbuild() {
    this.form = this.fb.group({
      storename: ['', Validators.required]
    })
    // Getting formid from parent component
    this.storeformid = this.data.FormId;

  }
  //This is for category Table
  forcategory() {
    this.categoryform = this.fb.group({
      categoryname: ['', Validators.required]
    })
    // Getting formid from parent component
    this.storeformid = this.data.FormId;
  }
  //This is for CatStore Table
  forCatstore() {
    this.catstoreform = this.fb.group({
      storeId: ['', Validators.required],
      catId: ['', Validators.required]
    })
    this.storeformid = this.data.FormId; //Receiving formid from parent
    this.storeGetData = this.data.storeData; // Receiving storedata from parent
    this.catGetData = this.data.catData; // Receiving catagorydata from parent
    // console.log(this.storeformid);
    // console.log(this.storeGetData);
    // console.log(this.catstoreform.get('storeId').value);
  
  }

  forProduct(){
    this.productform = this.fb.group({
      productName:['',Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required]
    })
    this.storeformid = this.data.FormId;
    this.productform.patchValue(this.data.Editdata)
  
  }

  forCategoryProduct(){
    this.categoryProductform = this.fb.group({
      categoryId:['',Validators.required],
      productId:['',Validators.required]
    })
    this.storeformid = this.data.FormId;
    this.productData = this.data.ProductData;
    this.catGetData = this.data.catData;
  }


  submitstoredata() {        // For Store
    this.dialogref.close({
      data: {
        storename: this.form.get("storename") // Sending data to parent component
      }
    })
  }
  submitcategory() {
    this.dialogref.close({   // For Category
      data: {
        categoryname: this.categoryform.get("categoryname") // Sending data to parent component
      }
    })
  }
  submitCatStore(){
    this.dialogref.close({ //For CatStore table
      data:{
        storeId:this.catstoreform.get('storeId'), //Sending data to parent 
        catId:this.catstoreform.get('catId')
      }
    })
  }

  submitproductdata(){
    this.dialogref.close({ //For Product table
      data:{
        productName:this.productform.get('productName'),
        quantity:this.productform.get('quantity'),
        price:this.productform.get('price')
      }
    })
  }
  submitCategoryProduct(){
    this.dialogref.close({
      data:{
        categoryId:this.categoryProductform.get('categoryId'),
        productId:this.categoryProductform.get('productId')
      }
    })
  }





}
