/**
 * Type definitions for Nuxt UI components
 */

export interface TableColumn<_T = unknown, _K = unknown> {
  key: string;
  label: string;
  sortable?: boolean;
  direction?: "asc" | "desc";
  class?: string;
  rowClass?: string;
}

export interface RowData {
  [key: string]: unknown;
}
