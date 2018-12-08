import { action, storiesOf } from "@storybook/react";
import { h } from "preact";

import Tabs from "../../src/components/Tabs";

storiesOf("Components/Tabs", module)
  .add("Simple", () => (
    <Tabs.Tabs>
      <Tabs.Tab>Documents</Tabs.Tab>
      <Tabs.Tab>Music</Tabs.Tab>
      <Tabs.Tab active>Pictures</Tabs.Tab>
      <Tabs.Tab>Videos</Tabs.Tab>
    </Tabs.Tabs>
  ))
  .add("With icons", () => (
    <Tabs.Tabs>
      <Tabs.Tab icon="far fa-file-alt">Documents</Tabs.Tab>
      <Tabs.Tab icon="fas fa-music">Music</Tabs.Tab>
      <Tabs.Tab active icon="fas fa-image">
        Pictures
      </Tabs.Tab>
      <Tabs.Tab icon="fas fa-film">Videos</Tabs.Tab>
    </Tabs.Tabs>
  ))
  .add("Alignment", () => (
    <div>
      <Tabs.Tabs align="center">
        <Tabs.Tab active icon="far fa-file-alt">Documents</Tabs.Tab>
        <Tabs.Tab icon="fas fa-music">Music</Tabs.Tab>
        <Tabs.Tab icon="fas fa-image">
          Pictures
        </Tabs.Tab>
        <Tabs.Tab icon="fas fa-film">Videos</Tabs.Tab>
      </Tabs.Tabs>
      <Tabs.Tabs align="right">
        <Tabs.Tab active icon="far fa-file-alt">Documents</Tabs.Tab>
        <Tabs.Tab icon="fas fa-music">Music</Tabs.Tab>
        <Tabs.Tab icon="fas fa-image">
          Pictures
        </Tabs.Tab>
        <Tabs.Tab icon="fas fa-film">Videos</Tabs.Tab>
      </Tabs.Tabs>
    </div>
  ));
