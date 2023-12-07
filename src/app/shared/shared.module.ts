import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsBlogComponent } from './components/news-blog/news-blog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ContactUsTodayComponent } from './components/contact-us-today/contact-us-today.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupNewsletterComponent } from './components/signup-newsletter/signup-newsletter.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NewsBlogComponent,
    NavigationComponent,
    ContactUsTodayComponent,
    ContactUsComponent,
    SignupNewsletterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NewsBlogComponent,
    NavigationComponent,
    ContactUsTodayComponent,
    ContactUsComponent,
    SignupNewsletterComponent,
    FooterComponent
  ],
  providers: [],
})
export class SharedModule { }