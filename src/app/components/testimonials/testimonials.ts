import { Component, signal, inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Testimonial {
    name: string;
    position: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
}

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.html',
    styleUrl: './testimonials.css',
})
export class Testimonials implements OnInit, OnDestroy {
    private platformId = inject(PLATFORM_ID);
    private intervalId: ReturnType<typeof setInterval> | null = null;

    currentIndex = signal(0);

    testimonials: Testimonial[] = [
        {
            name: 'Sarah Chen',
            position: 'CTO',
            company: 'NovaTech Solutions',
            content: 'DigitalBond completely transformed our digital workflow. Their innovative approach helped us scale from a startup to serving 50K+ users within six months. The team is incredibly responsive and technically brilliant.',
            avatar: 'SC',
            rating: 5,
        },
        {
            name: 'Michael Rodriguez',
            position: 'Head of Engineering',
            company: 'Quantum Labs',
            content: 'Working with DigitalBond was a game-changer. They delivered a blazing-fast platform that reduced our load times by 70% and increased user engagement by 3x. Their attention to detail is unmatched.',
            avatar: 'MR',
            rating: 5,
        },
        {
            name: 'Emily Watson',
            position: 'Product Director',
            company: 'SkyBridge Inc.',
            content: 'The level of craftsmanship DigitalBond brings to every project is extraordinary. They rebuilt our entire customer portal and the results speak for themselves — 95% customer satisfaction rate.',
            avatar: 'EW',
            rating: 5,
        },
        {
            name: 'David Kim',
            position: 'CEO',
            company: 'FutureWave Digital',
            content: 'DigitalBond exceeded every expectation. Their strategic vision combined with flawless execution delivered a product that not only looks stunning but performs beautifully under heavy traffic.',
            avatar: 'DK',
            rating: 5,
        },
        {
            name: 'Olivia Park',
            position: 'VP of Marketing',
            company: 'Apex Dynamics',
            content: 'From concept to launch, DigitalBond was a dream to work with. The responsive design and micro-animations they implemented boosted our conversion rate by 40%. Truly world-class delivery.',
            avatar: 'OP',
            rating: 5,
        },
    ];

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
