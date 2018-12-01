import { h } from "preact";
import { storiesOf, action } from "@storybook/react";

import Modal from "../../src/components/Modal";

storiesOf("Modal", module)
  .add("Components/Simple", () => (
    <Modal.Modal active onClose={action("close")}>
      <div class="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        assumenda molestiae ullam quibusdam nisi facere soluta totam rerum odit
        velit, vitae veritatis earum quos laborum odio ipsa, blanditiis
        consectetur perferendis.
      </div>
    </Modal.Modal>
  ))
  .add("Image", () => (
    <Modal.Image
      src="https://source.unsplash.com/random/800x600"
      alt="Modal image"
      active
      onClose={action("close")}
    />
  ))
  .add("Card", () => (
    <Modal.Card title="Login" active onClose={action("close")}>
      <Modal.CardBody>
        <div class="form">
          <div class="field">
            <label class="label">Email</label>
            <p class="control">
              <input
                class="input"
                type="email"
                placeholder="email@example.com"
              />
            </p>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <p class="control">
              <input class="input" type="password" />
            </p>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                Remember me
              </label>
            </div>
          </div>
        </div>
      </Modal.CardBody>
    </Modal.Card>
  ));
