import { Component, ChangeDetectionStrategy, output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.html',
    styleUrl: './modal.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
    closeModal = output<void>();

    onClose(): void {
        this.closeModal.emit();
    }

    onOverlayClick(event: MouseEvent): void {
        if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
            this.onClose();
        }
    }
}
