import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSelectComponent } from './angular-select.component';

@NgModule({
  declarations: [AngularSelectComponent],
  imports: [CommonModule],
  exports: [AngularSelectComponent],
})
export class SampleLibModule {}
