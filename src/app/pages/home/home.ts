import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Testimonials } from '../../components/testimonials/testimonials';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
    selector: 'app-home',
    imports: [Testimonials, ContactForm],
    templateUrl: './home.html',
    styleUrl: './home.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home { }
