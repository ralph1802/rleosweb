import { Component } from '@angular/core';
import { LabelsComponent } from '../../../../shared/components/labels/labels.component';
import { TranslateService } from '../../../../core/services/translate.service';
import { TranslatePipe } from '../../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [LabelsComponent, TranslatePipe],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {
  constructor(public translateService: TranslateService) {}
}
