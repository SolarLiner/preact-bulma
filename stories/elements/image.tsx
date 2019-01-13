import { number, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Box from "../../src/elements/box";
import Image from "../../src/elements/image";
import { Container } from "../../src/layout";

const SIZES = ["", 16, 24, 32, 48, 64, 96, 128];
const RATIOS = [
  "",
  "square",
  "1by1",
  "5by4",
  "4by3",
  "3by2",
  "5by3",
  "16by9",
  "2by1",
  "3by1",
  "4by5",
  "3by4",
  "2by3",
  "3by5",
  "9by16",
  "1by2",
  "1by3"
];

storiesOf("Elements", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <Box>
      <Container>{story()}</Container>
    </Box>
  ))
  .add("Image", () => (
    <Image
      size={select("Size", SIZES)}
      ratio={select("Ratio", RATIOS)}
      src="https://source.unsplash.com/random/800x600"
      alt="Unsplash placeholder image"
    />
  ));
