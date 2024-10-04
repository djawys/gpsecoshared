export const countries = ['usa', 'uk', 'pakista'] as const;
export type Country = (typeof countries)[number];
