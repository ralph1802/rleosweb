import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secundary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secundary-button.component.html',
  styleUrl: './secundary-button.component.scss'
})
export class SecundaryButtonComponent {
    @Input() type!: string;
    @Input() label!: string;
    @Output() action = new EventEmitter<void>();

    onClick() {
      this.action.emit();
  }
}
