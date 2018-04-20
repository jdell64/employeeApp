import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';

const myMaterialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    ...myMaterialModules
  ],
  exports: [...myMaterialModules],
  declarations: []
})
export class MyMaterialModule {
}
