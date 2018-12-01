import { h } from "preact";
import { storiesOf } from "@storybook/react";

import Card from "../../src/components/Card";

storiesOf("Components/Card", module)
  .add("Simple", () => (
    <Card.Card>
      <Card.Header
        title="Physics breakthrough"
        icon="fas fa-exclamation-circle"
      />
      <Card.Content>
        No, really, literally. Black holes have been proven to break through
        spacetime. (get it?)
      </Card.Content>
      <Card.Footer>
        <Card.FooterItem>Share</Card.FooterItem>
      </Card.Footer>
    </Card.Card>
  ))
  .add("With image", () => (
    <Card.Card>
      <Card.Header title="Card with image" />
      <Card.Image
        class="is-4by3"
        src="https://source.unsplash.com/random/800x600"
        alt="Card image"
      />
      <Card.Content>Lorem ipsum...</Card.Content>
    </Card.Card>
  ));
