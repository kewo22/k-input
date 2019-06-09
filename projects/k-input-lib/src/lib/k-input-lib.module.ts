import { NgModule } from '@angular/core';
import { KInputLibComponent } from './k-input-lib.component';
import { TInputComponent } from './components/t-input/t-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [KInputLibComponent, TInputComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [KInputLibComponent, TInputComponent]
})
export class KInputLibModule { }
