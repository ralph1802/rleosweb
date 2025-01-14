import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labels',
  standalone: true,
  imports: [],
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  @Input() imageSrc: string = '';
  @Input() label: string = '';
}
