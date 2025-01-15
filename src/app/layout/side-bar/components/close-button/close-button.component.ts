import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-button',
  standalone: true,
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent {
  @Output() toggle = new EventEmitter<void>();

  toggleSidebar() {
    this.toggle.emit();
  }
}
