import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Card from "../../src/components/Card";

storiesOf("Components/Card", module)
  .add("Card", () => (
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
  .add("Card with image", () => (
    <Card.Card>
      <Card.Header title="Card with image" />
      <Card.Image
        figClass="is-4by3"
        src="https://source.unsplash.com/random/800x600"
        alt="Card image"
      />
      <Card.Content>Lorem ipsum...</Card.Content>
    </Card.Card>
  ));
