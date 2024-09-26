import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormComponent>,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      requirements: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      this.dialogRef.close();
      const formData = this.contactForm.value;

      formData['form-name'] = 'contact';
      const headers = new HttpHeaders({
        Accept: 'text/html',
        'Content-Type': 'multipart/form-data',
      });
  
      this.http
        .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
        .subscribe(() => {
          setTimeout(()=> {
           console.log('Form Submitted');
          },1000);
        });
    } else {
      this.contactForm.markAllAsTouched(); 
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
