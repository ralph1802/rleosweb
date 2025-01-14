import { Component } from '@angular/core';
import { TargetsComponent } from "../../../../shared/components/targets/targets.component";
import { TranslateService } from '../../../../core/services/translate.service';
import { TranslatePipe } from '../../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [TargetsComponent, TranslatePipe],
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent {
  constructor(public translateService: TranslateService) { }
}
