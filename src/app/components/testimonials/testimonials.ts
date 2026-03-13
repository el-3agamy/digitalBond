import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ITestimonial } from '../../types/ITestimonial';
import { TestimonialService } from '../../services/testimonial.service';



@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.html',
    styleUrl: './testimonials.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials implements OnInit, OnDestroy {
    private platformId = inject(PLATFORM_ID);
    private intervalId: ReturnType<typeof setInterval> | null = null;
    testimonialService = inject(TestimonialService) ;
    currentIndex = signal(0);

    testimonials = this.testimonialService.getTestimonials ;

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.startAutoSlide();
        }
    }

    ngOnDestroy(): void {
        this.stopAutoSlide();
    }

    private startAutoSlide(): void {
        this.intervalId = setInterval(() => {
            this.next();
        }, 5000);
    }

    private stopAutoSlide(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    next(): void {
        this.currentIndex.update(i => (i + 1) % this.testimonials.length);
    }

    prev(): void {
        this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
    }

    goTo(index: number): void {
        this.currentIndex.set(index);
        this.stopAutoSlide();
        this.startAutoSlide();
    }

    getStars(rating: number): number[] {
        return Array.from({ length: rating }, (_, i) => i);
    }
}
