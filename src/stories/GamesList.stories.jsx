import { MemoryRouter } from "react-router-dom";
import GamesList from "../pages/games/components/List";
import { userEvent } from "@storybook/testing-library";
import { within } from "@storybook/testing-library";

export default {
  title: "GamesList",
  component: GamesList,
};

export const Primary = {
  decorators: [
    (Story) => (
      <div>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],
};

export const Classic = {
  decorators: [
    (Story) => (
      <div>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // canvas.getAllByTitle
    await userEvent.click(canvas.getByTitle("classic-filter"));
  },
};

export const Action = {
  decorators: [
    (Story) => (
      <div>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // canvas.getAllByTitle
    await userEvent.click(canvas.getByTitle("action-filter"));
  },
};

export const Sports = {
  decorators: [
    (Story) => (
      <div>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // canvas.getAllByTitle
    await userEvent.click(canvas.getByTitle("sports-filter"));
  },
};
