import { storiesOf } from "@storybook/react";
import { h } from "preact";
import { Control, Field, HorizontalGroup, Select, Textarea, TextInput } from "../../src/forms";
import { SingleInput } from "../../src/forms/singles";

storiesOf("Forms", module).add("Horizontal form", () => (
  <div class="container">
    <HorizontalGroup label="From">
      <SingleInput placeholder="John Doe" iconsLeft="fas fa-user" />
      <SingleInput type="email" placeholder="john@doe.com" iconsLeft="fas fa-envelope" />
    </HorizontalGroup>
    <HorizontalGroup label=" ">
      <Field expanded hasAddons>
        <Control>
          <a class="button is-static">+44</a>
        </Control>
        <Control expanded>
          <TextInput type="tel" placeholder="6 43 32 21 10" />
        </Control>
      </Field>
    </HorizontalGroup>
    <HorizontalGroup label="Department">
      <Control>
        <Select options={["Business development", "Marketing", "Sales"]} />
      </Control>
    </HorizontalGroup>
    <HorizontalGroup label="Already a member?">
      <Field narrow>
        <Control>
          <label className="radio">
            <input type="radio" name="member" /> Yes
          </label>
        </Control>
        <Control>
          <label className="radio">
            <input type="radio" name="member" /> No
          </label>
        </Control>
      </Field>
    </HorizontalGroup>
    <HorizontalGroup label="Subject">
      <SingleInput
        color="danger"
        placeholder="eg. Partnership opportunity"
        help="This field is required"
        helpColor="danger"
      />
    </HorizontalGroup>
    <HorizontalGroup label="Body">
      <Field>
        <Control>
          <Textarea placeholder="Explain how we can help you" />
        </Control>
      </Field>
    </HorizontalGroup>
    <HorizontalGroup label=" "> {/* Empty label to preserve alignment */}
      <Field hasAddons>
        <Control>
          <input class="button is-outlined is-primary" type="submit" value="Submit"/>
        </Control>
        <Control>
          <input class="button is-outlined" type="reset" value="Reset"/>
        </Control>
      </Field>
    </HorizontalGroup>
  </div>
));
