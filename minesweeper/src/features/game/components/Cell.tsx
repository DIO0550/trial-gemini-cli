import { CellState, CellValue } from "@/features/game/types";
import { JSX } from "react";

/**
 * Props for the Cell component
 */
interface CellProps {
  /**
   * The state of the cell
   */
  state: CellState;
  /**
   * The value of the cell
   */
  value: CellValue;
}

/**
 * Renders a single cell in the Minesweeper game.
 * This component is responsible for displaying the visual representation of a cell
 * based on its state and value. It does not handle any user interactions.
 *
 * @param {CellProps} props - The props for the component.
 * @returns {JSX.Element} The rendered cell component.
 */
export const Cell = ({ state, value }: CellProps): JSX.Element => {
  const baseStyle = "w-8 h-8 border flex items-center justify-center font-bold";

  if (state === "open") {
    if (value === "mine") {
      return <div className={`${baseStyle} bg-red-500`}>💣</div>;
    }
    return (
      <div className={`${baseStyle} bg-gray-300`}>{value > 0 ? value : ""}</div>
    );
  }

  if (state === "flagged") {
    return <div className={`${baseStyle} bg-gray-400`}>🚩</div>;
  }

  if (state === "question") {
    return <div className={`${baseStyle} bg-gray-400`}>❓</div>;
  }

  return <div className={`${baseStyle} bg-gray-400`}></div>;
};
