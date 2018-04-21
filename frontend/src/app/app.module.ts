import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeesService} from './services/employees.service';
import {HttpClientModule} from '@angular/common/http';
import {MyMaterialModule} from './modules/my-material/my-material.module';
import {EmployeeComponent} from './components/employee/employee.component';
import {EditEmployeeDialogComponent} from './components/edit-employee-dialog/edit-employee-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SplitPipe} from './pipes/split.pipe';
import {JoinPipe} from './pipes/join.pipe';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {HomeComponent} from './components/home/home.component';
import {SearchService} from './services/search.service';
import { PhoneMaskDirective } from './directive/phone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    EditEmployeeDialogComponent,
    SplitPipe,
    JoinPipe,
    ConfirmDialogComponent,
    HomeComponent,
    PhoneMaskDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MyMaterialModule,
    BrowserAnimationsModule,

  ],
  entryComponents: [EditEmployeeDialogComponent, ConfirmDialogComponent],
  providers: [EmployeesService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
