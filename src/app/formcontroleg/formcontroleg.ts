import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formcontroleg',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formcontroleg.html',
  styleUrl: './formcontroleg.css'
})
export class Formcontroleg {
  name = new FormControl('');

  // store last submitted name here
  submittedFullName = '';

  updateName() {
    this.name.setValue('Kishore');
  }

  profileForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl('')
  });

  onSubmit() {
    const fname = this.profileForm.value.fname;
    const lname = this.profileForm.value.lname;
    this.submittedFullName = `${fname ?? ''} ${lname ?? ''}`.trim();
    this.profileForm.reset();
  }
}
