import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatToolbarModule, MatFormFieldModule,
  MatInputModule, MatSlideToggleModule, MatSelectModule, MatSnackBarModule, MatProgressBarModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

const myMaterialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressBarModule
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
