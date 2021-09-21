export const perCharacter = (fn: any) => (s: string): string[] => s.split('').map(fn)

export const tick = (ms: number) => (fn: any): number => window.setInterval(fn, ms)

export const toBinary = (n: number | string): string => {
  return Number(n).toString(2)
}
