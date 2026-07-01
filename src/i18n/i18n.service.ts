import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

@Injectable()
export class I18nService implements OnModuleInit {
  private translations = new Map<string, Map<string, string>>();
  private defaultLocale = 'fa';

  onModuleInit(): void {
    const i18nDir = join(__dirname, '..', 'i18n');
    try {
      const files = readdirSync(i18nDir).filter((f) => f.endsWith('.json'));
      for (const file of files) {
        const locale = file.replace('.json', '');
        const content = readFileSync(join(i18nDir, file), 'utf-8');
        const json = JSON.parse(content) as Record<string, unknown>;
        const flat = this.flatten(json, '');
        this.translations.set(locale, flat);
      }
    } catch {
      console.log('i18n: No translation files found, using defaults');
    }
  }

  private flatten(
    obj: Record<string, unknown>,
    prefix: string,
  ): Map<string, string> {
    const result = new Map<string, string>();
    for (const [key, value] of Object.entries(obj)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        const child = this.flatten(value as Record<string, unknown>, path);
        child.forEach((v, k) => result.set(k, v));
      } else {
        result.set(path, String(value));
      }
    }
    return result;
  }

  t(key: string, locale?: string): string {
    const lang = locale || this.defaultLocale;
    const store = this.translations.get(lang);
    if (store?.has(key)) return store.get(key)!;
    const fallback = this.translations.get('en');
    if (fallback?.has(key)) return fallback.get(key)!;
    return key;
  }

  translate(key: string, locale?: string): string {
    return this.t(key, locale);
  }
}
