import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-done',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './done.html',
    styleUrl: './done.css',
})
export class Done { }
