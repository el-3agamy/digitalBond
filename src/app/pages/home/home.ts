import { Component } from '@angular/core';
import { Testimonials } from '../../components/testimonials/testimonials';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [Testimonials, ContactForm],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home { }
