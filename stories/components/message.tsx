import { action, storiesOf } from "@storybook/preact";
import { h } from "preact";

import Message from "../../src/components/Message";

storiesOf("Components/Message", module)
  .add("Simple", () => (
    <Message canClose title="You've got mail!" onClose={action("close")}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
      aspernatur! Error delectus necessitatibus voluptatibus, vitae quia sunt
      laborum doloribus facilis ipsam nulla officiis sit unde cupiditate
      quisquam explicabo incidunt sapiente.
    </Message>
  ))
  .add("Headless", () => (
    <Message>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quidem
      ipsum minima distinctio repellat iusto, non labore neque eos rerum
      corporis deleniti molestiae officia totam consequatur, animi iste quis
      atque?
    </Message>
  ))
  .add("Colored", () => (
    <Message class="is-danger">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat,
      consequuntur repudiandae odio provident ipsam voluptas. Culpa maiores quis
      quod illum. Eveniet iure dolorem incidunt sit. Eveniet natus veniam eaque!
    </Message>
  ));
