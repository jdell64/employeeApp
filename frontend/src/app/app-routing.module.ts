import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from './components/employee-list/employee-list.component';
import {HomeComponent} from './components/home/home.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
