import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailRegex } from '../../constants';

@Component({
  selector: 'app-contact-us-today',
  templateUrl: './contact-us-today.component.html',
  styleUrls: ['./contact-us-today.component.scss']
})
export class ContactUsTodayComponent {
  public form = this.fb.group({
    fullname: ['', [Validators.required]],
    emailAddress: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex.email),])],
    contactNumber: ['', [Validators.required]],
    bookAMeeting: [''],
    preferredDay: ['', [Validators.required]],
    preferredTime: ['', [Validators.required]],
    message: ['']
  });

  constructor(private fb: FormBuilder) { }

  public onSubmit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value))
    } else {
      alert('Invalid form values')
    }
  }
}
