import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-open-button',
  standalone: true,
  templateUrl: './open-button.component.html',
  styleUrls: ['./open-button.component.scss']
})
export class OpenButtonComponent {
  @Output() toggle = new EventEmitter<void>();

  toggleSidebar() {
    this.toggle.emit();
  }
}
