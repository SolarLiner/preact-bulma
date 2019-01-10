import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import Modal from "../../src/components/Modal";

storiesOf("Components/Modal", module)
  .add("Simple", () => (
    <Modal.Modal active>
      <div class="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat assumenda molestiae ullam quibusdam nisi facere
        soluta totam rerum odit velit, vitae veritatis earum quos laborum odio ipsa, blanditiis consectetur perferendis.
      </div>
    </Modal.Modal>
  ))
  .add("Image", () => <Modal.Image src="https://source.unsplash.com/random/800x600" alt="Modal image" active />)
  .add("Card", () => (
    <Modal.Card title="Login" active>
      <Modal.CardBody>
        <div class="form">
          <div class="field">
            <label class="label">Email</label>
            <p class="control">
              <input class="input" type="email" placeholder="email@example.com" />
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
