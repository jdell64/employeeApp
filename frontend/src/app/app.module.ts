import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {EmployeesService} from './services/employees.service';
import {HttpClientModule} from '@angular/common/http';
import {MyMaterialModule} from './modules/my-material/my-material.module';
import {EmployeeComponent} from './components/employee/employee.component';
import {UserPictureService} from './services/user-picture.service';
import {TitleCasePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    MyMaterialModule
  ],
  providers: [EmployeesService, UserPictureService, TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
