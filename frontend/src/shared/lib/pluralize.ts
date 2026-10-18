export type PluralForms = readonly [one: string, few: string, many: string];

const pluralRules = new Intl.PluralRules("ru-RU");

const FORM_INDEX: Partial<Record<Intl.LDMLPluralRule, number>> = {
  one: 0,
  few: 1,
};

export const pluralize = (count: number, forms: PluralForms): string =>
  `${count} ${forms[FORM_INDEX[pluralRules.select(count)] ?? 2]}`;
