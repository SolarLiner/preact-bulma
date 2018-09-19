import { h } from "preact";
import { storiesOf } from "@storybook/react";
import Panel from "../../src/components/Panel";

storiesOf("Panel", module).add("Simple", () => (
  <Panel.Panel>
    <Panel.Heading>Repositories</Panel.Heading>
    <Panel.Block>
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="Search..." />
        <span class="icon is-slamm is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </Panel.Block>
    <Panel.Block tabs>
      <a class="is-active">All</a>
      <a>Public</a>
      <a>Private</a>
      <a>Forks</a>
    </Panel.Block>
    <Panel.Block active icon="fas fa-book">
      jgthms/bulma
    </Panel.Block>
    <Panel.Block active icon="fas fa-book">
      developit/preact
    </Panel.Block>
    <Panel.Block active icon="fas fa-book">
      SolarLiner/preact-bulma
    </Panel.Block>
    <Panel.Block active icon="fas fa-book">
      SolarLiner/TerrainLib
    </Panel.Block>
  </Panel.Panel>
));


