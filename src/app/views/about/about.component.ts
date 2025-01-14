import { Component } from '@angular/core';
import { PresentationComponent } from "./components/presentation/presentation.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ToolsComponent } from "./components/tools/tools.component";
import { StudiesComponent } from "./components/studies/studies.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PresentationComponent,
            SkillsComponent,
            ToolsComponent,
            StudiesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
