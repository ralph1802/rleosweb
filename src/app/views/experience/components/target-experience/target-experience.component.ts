import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-target-experience',
  standalone: true,
  imports: [],
  templateUrl: './target-experience.component.html',
  styleUrl: './target-experience.component.scss'
})
export class TargetExperienceComponent {
    @Input() titleSpanText: string = '';
    @Input() titleParagraphText: string = '';
    @Input() titleLabelText: string = '';
    @Input() descriptionParagraphText: string = '';
    @Input() descriptionSpanText: string = '';
}
