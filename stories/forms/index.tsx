import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/preact";
import { Control, Field, HorizontalGroup, RadioButton, Select, Textarea, TextInput } from "../../src/forms";
import Button from "../../src/elements/button";

function preventDefault(fn: (ev: Event, ...args: any[]) => any, ...args: any[]) {
  return (ev: Event) => {
    ev.preventDefault();
    return fn(ev, ...args);
  };
}

storiesOf("Forms", module)
  .addDecorator(story => (
    <section className="section">
      <div className="container">
        <form onSubmit={preventDefault(action("submit"))}>{story()}</form>
      </div>
    </section>
  ))
  .add("Horizontal form", () => (
    <div class="container">
      <form onSubmit={preventDefault(action("submit"))}>
        <HorizontalGroup label="From">
          <Field>
            <Control iconsLeft="fas fa-user">
              <TextInput placeholder="John Doe" name="firstName" />
            </Control>
          </Field>
          <Field>
            <Control iconsLeft="fas fa-envelope">
              <TextInput type="email" placeholder="john@doe.com" name="email" />
            </Control>
          </Field>
        </HorizontalGroup>
        <HorizontalGroup label=" ">
          <Field expanded hasAddons>
            <Control>
              <a class="button is-static">+44</a>
            </Control>
            <Control expanded>
              <TextInput type="tel" placeholder="6 43 32 21 10" name="telephone" />
            </Control>
          </Field>
        </HorizontalGroup>
        <HorizontalGroup label="Department">
          <Control>
            <Select options={{ "0": "Business development", "1": "Marketing", "2": "Sales" }} name="department"/>
          </Control>
        </HorizontalGroup>
        <HorizontalGroup label="Already a member?">
          <Field narrow>
            <Control>
              <RadioButton name="member">Yes</RadioButton>
            </Control>
            <Control>
              <RadioButton name="member">No</RadioButton>
            </Control>
          </Field>
        </HorizontalGroup>
        <HorizontalGroup label="Subject">
          <Field help="This field is required" helpColor="danger">
            <Control>
              <TextInput color="danger" placeholder="eg. Partnership opportunity" />
            </Control>
          </Field>
        </HorizontalGroup>
        <HorizontalGroup label="Body">
          <Field>
            <Control>
              <Textarea placeholder="Explain how we can help you" />
            </Control>
          </Field>
        </HorizontalGroup>
        <HorizontalGroup label=" ">
          {" "}
          {/* Empty label to preserve alignment */}
          <Field hasAddons>
            <Control>
              <Button outlined color="primary" type="submit">Submit</Button>
            </Control>
            <Control>
              <Button outlined type="reset">Reset</Button>
            </Control>
          </Field>
        </HorizontalGroup>
      </form>
    </div>
  ));
