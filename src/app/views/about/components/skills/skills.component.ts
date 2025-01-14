import { Component } from '@angular/core';
import { LabelsComponent } from '../../../../shared/components/labels/labels.component';
import { TranslateService } from '../../../../core/services/translate.service'; // Asegúrate de importar el servicio de traducción
import { TranslatePipe } from '../../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LabelsComponent, TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public translateService: TranslateService) {}
}
