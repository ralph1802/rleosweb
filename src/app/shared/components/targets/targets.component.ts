import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-targets',
  standalone: true,
  imports: [],
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.scss'
})
export class TargetsComponent {
  @Input() spanText: string = '';
  @Input() paragraphText: string = '';
  @Input() labelText: string = '';
}
