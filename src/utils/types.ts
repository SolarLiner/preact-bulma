export type Override<B, S> = Omit<B, keyof S> & S;
