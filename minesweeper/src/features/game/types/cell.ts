/**
 * セルの状態を表す型
 * - `open`: 開かれた状態
 * - `closed`: 閉じられた状態
 * - `flagged`: フラグが立てられた状態
 * - `question`: はてなマークが付けられた状態
 */
export type CellState = 'open' | 'closed' | 'flagged' | 'question';

/**
 * セルの値を表す型
 * - `mine`: 地雷
 * - `number`: 周囲の地雷の数 (0-8)
 */
export type CellValue = 'mine' | number;

/**
 * セルを表すインターフェース
 */
export interface Cell {
  state: CellState;
  value: CellValue;
}
