import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;