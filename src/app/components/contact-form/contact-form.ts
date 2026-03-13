import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact-form',
    imports: [ReactiveFormsModule],
    templateUrl: './contact-form.html',
    styleUrl: './contact-form.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactForm {
    private fb = inject(FormBuilder);
    private router = inject(Router);

    contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required, Validators.minLength(3)]],
        message: ['', [Validators.required, Validators.minLength(10)]],
    });

    onSubmit(): void {
        if (this.contactForm.valid) {
            this.router.navigate(['/done']);
        } else {
            this.contactForm.markAllAsTouched();
        }
    }

    get name() { return this.contactForm.get('name'); }
    get email() { return this.contactForm.get('email'); }
    get subject() { return this.contactForm.get('subject'); }
    get message() { return this.contactForm.get('message'); }
}
