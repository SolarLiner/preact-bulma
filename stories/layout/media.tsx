import { storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Level, Media } from "../../src/layout";

storiesOf("Layout", module)
  .add("Media object", () => (
    <div>
      <Media.Media>
        <Media.Left>
          <p className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Media image (placeholder)"
            />
          </p>
        </Media.Left>
        <Media.Content>
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              porta eros lacus, nec ultricies elit blandit non. Suspendisse
              pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus
              turpis.
              <br />
              <small>
                <a>Like</a> · <a>Reply</a> · 3 hrs
              </small>
            </p>
          </div>
          <Media.Media>
            <Media.Left>
              <p class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Media image (placeholder"
                />
              </p>
            </Media.Left>
            <Media.Content>
              <div class="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam blandit nisl a
                  nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
              <Media.Media>
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
                lorem cursus ullamcorper sit amet nec massa.
              </Media.Media>
              <Media.Media>
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                tincidunt iaculis diam non, porta aliquet tortor.
              </Media.Media>
            </Media.Content>
          </Media.Media>
          <Media.Media>
            <Media.Left>
              <p class="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Media image (placeholder)"
                />
              </p>
            </Media.Left>
            <Media.Content>
              <div class="content">
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis
                  vel. Maecenas varius felis sit amet magna vestibulum euismod
                  malesuada cursus libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;
                  Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> · <a>Reply</a> · 2 hrs
                  </small>
                </p>
              </div>
            </Media.Content>
          </Media.Media>
        </Media.Content>
      </Media.Media>
      <Media.Media>
        <Media.Left>
          <p class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Profile picture (placeholder)"
            />
          </p>
        </Media.Left>
        <Media.Content>
          <div className="field">
            <p class="control">
              <textarea class="textarea" placeholder="Add a commment..." />
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-primary">Post comment</button>
            </p>
          </div>
        </Media.Content>
      </Media.Media>
    </div>
  ));
