import { NgModule } from '@angular/core';
import { KInputLibComponent } from './k-input-lib.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [KInputLibComponent, TInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [KInputLibComponent, TInputComponent]
})
export class KInputLibModule { }
