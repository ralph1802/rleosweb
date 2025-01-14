import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private defaultLang = 'es';
  public lang: string;

  constructor() {

    if (this.isLocalStorageAvailable()) {
      this.lang = localStorage.getItem('lang') || this.defaultLang;

      if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', this.defaultLang);
      }
    } else {
      this.lang = this.defaultLang;
    }
  }

  get GetLang(): string {
    return this.lang;
  }

  changeLang(): void {
    this.lang = this.lang === 'es' ? 'en' : 'es';
    this.setLang(this.lang);
  }

  toggleLang(lang: string): void {
    if (lang === 'es' || lang === 'en') {
      this.setLang(lang);
    }
  }

  private setLang(lang: string): void {
    this.lang = lang;
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('lang', lang);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined';
    } catch {
      return false;
    }
  }
}
