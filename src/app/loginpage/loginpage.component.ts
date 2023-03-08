import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NEVER } from 'rxjs';
import { LoginService } from '../authService/login.service';




@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm:any= FormGroup; //loginform declaring
  private formSubmitAttempt:boolean|undefined;

  regFormStatus = false;
  loginVsSign = false;
  regform: any = FormGroup;
  InvaliderrMsg:any ="";
  regPassAlert="";
  
  passwordArray:Array<any>=[
    {
      rgname:"King",
      password:"12345"
  },{
    rgname:"Venu",
    password:"asdf"
  }

  ]


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: LoginService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginFormBuild();
    this.regformbuilder();
    localStorage.setItem('userdetailsArray',JSON.stringify(this.passwordArray));
    
  }

  loginFormBuild() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  regformbuilder() {
    this.regform = this.fb.group({
      regusername: ['', [Validators.required, Validators.minLength(4)]],
      reguseremail: ['', [Validators.required, Validators.email]],
      regpassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

//displaying error for the input fields
  isFieldInvalid(field: string) {
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if(this.loginForm.valid){
      this.toastr.success("Login success");
      this.authService.login(this.loginForm.value);
    }else{
    this.formSubmitAttempt = true;
    this.InvaliderrMsg = "Invalid Username and Password";
    this.toastr.error("Invalid username and password");
    }
   
  }

  regsubmit(){
    
    if(this.regform.status === 'INVALID'){
      this.toastr.error("Enter valid details");
      this.regFormStatus = true;
    }else{
      // console.log(this.regform.value);
      var x = this.regform.get('regusername').value;
      var y = this.regform.get('reguseremail').value;
      var z = this.regform.get('regpassword').value;
      var regUser={
        rgname:x,
        password:z,
        rgemail:y
      } 
      this.passwordArray.push(regUser);
      localStorage.setItem('userdetailsArray',JSON.stringify(this.passwordArray));
      this.regPassAlert = "Details Registered successfully";
      this.toastr.success("Registration done successfully");
      this.loginVsSign = false;
     
    }
  }

  signup() {
    this.loginVsSign = true;
  }
  

  gotologinpage() {
    this.loginVsSign = false;
  }

}
