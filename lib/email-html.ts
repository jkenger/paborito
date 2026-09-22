/** Encode untrusted form values before inserting them into email HTML. */
export function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export function normalizePhilippinePhone(value: string): string | null {
  let digits = value.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("63")) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  return digits.length === 10 ? digits : null;
}
