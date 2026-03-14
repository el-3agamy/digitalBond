import { FormStateService } from './../../services/form-state.service';
import { Component, ChangeDetectionStrategy, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-done',
    imports: [RouterLink],
    templateUrl: './done.html',
    styleUrl: './done.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Done implements OnDestroy {
    private formStateService = inject(FormStateService)
    ngOnDestroy(): void {
        this.formStateService.setSubmitted(false)
    }
 }
