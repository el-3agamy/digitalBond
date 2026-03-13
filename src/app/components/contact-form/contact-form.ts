import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modal } from '../modal/modal';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [ReactiveFormsModule, Modal],
    templateUrl: './contact-form.html',
    styleUrl: './contact-form.css',
})
export class ContactForm {
    private fb = inject(FormBuilder);
    private router = inject(Router);

    showModal = signal(false);

    contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required, Validators.minLength(3)]],
        message: ['', [Validators.required, Validators.minLength(10)]],
    });

    onSubmit(): void {
        if (this.contactForm.valid) {
            this.showModal.set(true);
        } else {
            this.contactForm.markAllAsTouched();
        }
    }

    closeModal(): void {
        this.showModal.set(false);
        this.contactForm.reset();
        this.router.navigate(['/done']);
    }

    get name() { return this.contactForm.get('name'); }
    get email() { return this.contactForm.get('email'); }
    get subject() { return this.contactForm.get('subject'); }
    get message() { return this.contactForm.get('message'); }
}
