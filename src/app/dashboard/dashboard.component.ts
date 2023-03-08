import { Component, ViewChild } from '@angular/core';
import { LoginService } from '../authService/login.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { filter } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatDataSourceModule } from '@matheo/datasource';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayUName = sessionStorage.getItem("UName");
  displayedColumns = ["id", "firstname", "lastname", "email", "Action"];

  //filter search items


  //for table pagination
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  onTableDataChange(event: any) {
    this.page = event;
  }

  tabledata = [
    {
      'id': 1,
      'firstname': "Purushotham",
      'lastname': "siddala",
      'email': "purushotham@gmail.com"
    }, {
      'id': 2,
      'firstname': "Rajesh",
      'lastname': "kumar",
      'email': "rajesh@gmail.com"
    }, {
      'id': 3,
      'firstname': "Hari",
      'lastname': "prasad",
      'email': "hariprasad@gmail.com"
    }, {
      'id': 4,
      'firstname': "Raghu",
      'lastname': "Ram",
      'email': "raghuram@gmail.com"
    }, {
      'id': 5,
      'firstname': "Govardan",
      'lastname': "K",
      'email': "raghuram@gmail.com"
    }, {
      'id': 6,
      'firstname': "Ram",
      'lastname': "Jk",
      'email': "ram@gmail.com"
    }, {
      'id': 7,
      'firstname': "Ravid",
      'lastname': "RV",
      'email': "ravid@gmail.com"
    }, {
      'id': 8,
      'firstname': "Arul",
      'lastname': "MK",
      'email': "arul@gmail.com"
    }, {
      'id': 9,
      'firstname': "Murali",
      'lastname': "v",
      'email': "murali@gmail.com"
    }, {
      'id': 10,
      'firstname': "Siva",
      'lastname': "D",
      'email': "siva@gmail.com"
    }, {
      'id': 11,
      'firstname': "Arul",
      'lastname': "MK",
      'email': "arul@gmail.com"
    }, {
      'id': 12,
      'firstname': "Murali",
      'lastname': "v",
      'email': "murali@gmail.com"
    }, {
      'id': 13,
      'firstname': "Siva",
      'lastname': "D",
      'email': "siva@gmail.com"
    }
  ]

  dataSource = new MatTableDataSource(this.tabledata);
  ngOnInit() {
    sessionStorage.setItem("sessiondata", JSON.stringify(this.tabledata))
    const sessiondata = sessionStorage.getItem("sessiondata");
    this.tabledata = JSON.parse(sessiondata || '{}');

  }



  constructor(
    private loginsvr: LoginService,
    private dialog: MatDialog,
    private toaster: ToastrService
  ) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(create => {
      var getnewdata = {
        id: this.tabledata.length + 1,
        firstname: create.data.firstname.value,
        lastname: create.data.lastname.value,
        email: create.data.email.value
      }
      this.tabledata = [...this.tabledata, getnewdata];
      sessionStorage.setItem("sessiondata", JSON.stringify(this.tabledata));
      this.toaster.success("Item created successfully");
    })

  }



  logoutpage() {
    this.loginsvr.logoutuser();
  }
  edituserdata(edit: any): void {
    console.log(edit);
    //sending data from dashboard to dialog box
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '30%',
      data: {
        id: edit.id,
        firstname: edit.firstname,
        lastname: edit.lastname,
        email: edit.email
      }


    });
    //getting modified data from dialog box 
    dialogRef.afterClosed().subscribe(edited => {
      console.log(edited);
      var tempvariable = {
        id: edited.data.id.value,
        firstname: edited.data.firstname.value,
        lastname: edited.data.lastname.value,
        email: edited.data.email.value
      }

      //finding the index and assining data to it.
      const testing = [...this.tabledata, tempvariable];
      const index = testing.findIndex((x) => x.id === tempvariable.id);
      (testing[index].firstname = tempvariable.firstname);
      (testing[index].lastname = tempvariable.lastname);
      (testing[index].email = tempvariable.email);
      this.toaster.success("Item updated successfully");
    });

  }

  //deleting the item
  deleteitem(num: any): void {
    const index = this.tabledata.findIndex((x) => x.id === num.id);
    this.tabledata.splice(index, 1);
    this.tabledata = [...this.tabledata];
    sessionStorage.setItem("sessiondata", JSON.stringify(this.tabledata));
    this.toaster.success("Deleted successfully");
  }

  applyFilter(event: Event) {
    const userfiltervalues = (event.target as HTMLInputElement).value;
    this.dataSource.filter = userfiltervalues.trim().toLowerCase();
    this.tabledata = this.dataSource.filteredData;
    this.onTableDataChange(event);
  }



}



