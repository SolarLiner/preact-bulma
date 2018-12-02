import { storiesOf } from "@storybook/react";
import { h, RenderableProps } from "preact";

import { Control, Field, Textarea } from "../../src/forms";

function SingleTextarea(props: RenderableProps<any>) {
  return (
    <Control {...props}>
      <Field {...props}>
        <Textarea {...props}>{props.children}</Textarea>
      </Field>
    </Control>
  );
}

storiesOf("Forms/Textarea", module)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Colors", () => (
    <div>
      <SingleTextarea label="Default textarea" placeholder="Lorem ipsum etc." />
      <SingleTextarea label="Primary textarea" placeholder="Lorem ipsum etc." color="primary" />
      <SingleTextarea label="Info textarea" placeholder="Lorem ipsum etc." color="info" />
      <SingleTextarea label="Warning textarea" placeholder="Lorem ipsum etc." color="warning" />
      <SingleTextarea label="Danger textarea" placeholder="Lorem ipsum etc." color="danger" />
    </div>
  ))
  .add("Sizes / Loading", () => (
    <div>
      <SingleTextarea label="Small size" placeholder="Am loading..." size="small" />
      <SingleTextarea label="Default size" placeholder="Lorem ipsum etc." loading />
      <SingleTextarea label="Medium size" placeholder="Lorem ipsum etc." size="medium" />
      <SingleTextarea label="Large size" placeholder="Am loading..." size="large" loading />
    </div>
  ));
