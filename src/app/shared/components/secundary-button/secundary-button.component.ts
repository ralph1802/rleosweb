import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secundary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secundary-button.component.html',
  styleUrls: ['./secundary-button.component.scss']
})
export class SecundaryButtonComponent {
  @Input() type!: string;
  @Input() label!: string;
  @Output() action = new EventEmitter<void>();

  onClick() {
    const whatsappUrl = 'https://wa.link/kwbkbg';
    window.open(whatsappUrl, '_blank');
  }
}
