import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../core/services/translate.service';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';

@Component({
  selector: 'app-language-toggle-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './language-toggle-navbar.component.html',
  styleUrls: ['./language-toggle-navbar.component.scss'],
})
export class LanguageToggleNavbarComponent implements OnInit {
  selectedLanguage: string = 'En';
  isOpen: boolean = false;

  constructor(public translateService: TranslateService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.translateService.GetLang === 'es' ? 'Es' : 'En';
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: string) {
    this.translateService.toggleLang(language.toLowerCase());
    this.selectedLanguage = language;
    this.isOpen = false;
  }
}
