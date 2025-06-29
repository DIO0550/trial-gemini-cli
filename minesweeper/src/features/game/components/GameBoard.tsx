import { Board } from "@/features/game/types";
import { JSX } from "react";
import { Cell as CellComponent } from "./Cell";

/**
 * GameBoard コンポーネントの Props
 */
export interface GameBoardProps {
  /**
   * ゲーム盤を表す2次元配列
   */
  board: Board;
}

/**
 * マインスイーパーのゲーム盤を描画します。
 * このコンポーネントは、受け取った props に基づいて盤面を表示するだけのピュアコンポーネントです。
 *
 * @param {GameBoardProps} props - コンポーネントの Props
 * @returns {JSX.Element} 描画されたゲーム盤
 */
export const GameBoard = ({ board }: GameBoardProps): JSX.Element => {
  return (
    <div className="inline-block border-2 border-gray-500">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <CellComponent
              key={colIndex}
              state={cell.state}
              value={cell.value}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
