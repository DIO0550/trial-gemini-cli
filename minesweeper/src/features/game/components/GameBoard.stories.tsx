import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { GameBoard, GameBoardProps } from "./GameBoard";

const meta: Meta<typeof GameBoard> = {
  component: GameBoard,
};

export default meta;
type Story = StoryObj<typeof GameBoard>;

// デフォルトの盤面状態
const defaultBoard: GameBoardProps = {
  board: [
    [
      { state: "open", value: 1 },
      { state: "open", value: 1 },
      { state: "open", value: 1 },
      { state: "closed", value: 0 },
    ],
    [
      { state: "open", value: 1 },
      { state: "open", value: "mine" },
      { state: "open", value: 1 },
      { state: "closed", value: 0 },
    ],
    [
      { state: "flagged", value: 0 },
      { state: "question", value: 0 },
      { state: "closed", value: 0 },
      { state: "closed", value: 0 },
    ],
    [
      { state: "open", value: 1 },
      { state: "open", value: 1 },
      { state: "open", value: 1 },
      { state: "closed", value: 0 },
    ],
  ],
};

/**
 * デフォルトの表示
 */
export const Default: Story = {
  args: defaultBoard,
};
