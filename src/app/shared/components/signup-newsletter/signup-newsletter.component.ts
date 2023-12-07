import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailRegex } from '../../constants';

@Component({
  selector: 'app-signup-newsletter',
  templateUrl: './signup-newsletter.component.html',
  styleUrls: ['./signup-newsletter.component.scss']
})
export class SignupNewsletterComponent {
  public title: string = 'SIGN UP TO OUR NEWSLETTER';
  public form = this.fb.group({
    fullname: ['', [Validators.required]],
    emailAddress: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex.email),])]
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
