/**
 * Serializa um valor para uma célula CSV — escapa aspas, vírgulas e quebras
 * de linha conforme RFC 4180. `null`/`undefined` viram string vazia.
 */
function toCsvValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  const str = String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Constrói um CSV completo (cabeçalho + linhas) a partir de uma lista de
 * objetos e das colunas a incluir, na ordem dada.
 */
function buildCsv(rows: Record<string, unknown>[], columns: string[]): string {
  const header = columns.join(",");
  const lines = rows.map((row) => columns.map((col) => toCsvValue(row[col])).join(","));
  return [header, ...lines].join("\n");
}

export { toCsvValue, buildCsv };
