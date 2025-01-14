import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() type!: string;
  @Input() label!: string;
  @Output() action = new EventEmitter<void>();

  onClick() {
    const link = document.createElement('a');
    link.href = 'assets/CV - Ricardo Axel Leos Flores - DEV - ES-EN.pdf';
    link.download = 'CV - Ricardo Axel Leos Flores - DEV - ES-EN.pdf';
    link.click();
  }
}
