import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Cell } from "./Cell";

const meta: Meta<typeof Cell> = {
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Default: Story = {
  args: {
    state: "closed",
    value: 0,
  },
};

export const Opened: Story = {
  args: {
    state: "open",
    value: 0,
  },
};

export const OpenedWithNumber: Story = {
  args: {
    state: "open",
    value: 3,
  },
};

export const Mine: Story = {
  args: {
    state: "open",
    value: "mine",
  },
};

export const Flagged: Story = {
  args: {
    state: "flagged",
    value: 0,
  },
};

export const Question: Story = {
  args: {
    state: "question",
    value: 0,
  },
};
