import {  Injectable } from '@angular/core';
import { ITestimonial } from '../types/ITestimonial';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
 private readonly testimonials: ITestimonial [] = [
         {
             name: 'Sarah Chen',
             position: 'CTO',
             company: 'NovaTech Solutions',
             content: 'DigitalBond completely transformed our digital workflow. Their innovative approach helped us scale from a startup to serving 50K+ users within six months.',
             avatar: 'SC',
             rating: 5,
         },
         {
             name: 'Michael Rodriguez',
             position: 'Head of Engineering',
             company: 'Quantum Labs',
             content: 'Working with DigitalBond was a game-changer. They delivered a blazing-fast platform that reduced our load times by 70% and increased user engagement by 3x.',
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
     ] ;

     get getTestimonials(): ITestimonial[] {
    return this.testimonials;
  }  ;

}
