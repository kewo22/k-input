import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  isDisabled: boolean = true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.email])],
      lastName: ['', Validators.compose([Validators.email, Validators.required])]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm);
    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return;
    // }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  test() {
    this.isDisabled = !this.isDisabled;
  }

}
