import { h, render, Component } from "preact";

import "bulma/css/bulma.min.css";
import Breadcrumbs from "./components/Breadcrumbs";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Menu from "./components/Menu";
import Message from "./components/Message";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar/Navbar";

interface IApplicationState {
  openModal: boolean;
  openImageModal: boolean;
}

class TestApplication extends Component<{}, IApplicationState> {
  public render() {
    return (
      <section class="section">
        <Navbar
          navbarBrand={<img class="image is-48x48" src="https://source.unsplash.com/random/800x600" />}
        >
          <button class="button is-primary">Test</button>
        </Navbar>
        <h1 class="title">Preact Bulma components</h1>
        <div class="container">
          <h2 class="subtitle">Breadcrumbs</h2>
          <Breadcrumbs.Breadcrumb>
            <Breadcrumbs.Link href="#">Bulma</Breadcrumbs.Link>
            <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
            <Breadcrumbs.Link href="#" active>
              Breadcrumbs
            </Breadcrumbs.Link>
          </Breadcrumbs.Breadcrumb>
          <Breadcrumbs.Breadcrumb align="center" separator="bullet">
            <Breadcrumbs.Link href="#">Bulma</Breadcrumbs.Link>
            <Breadcrumbs.Link href="#">Components</Breadcrumbs.Link>
            <Breadcrumbs.Link href="#" active={true}>
              Breadcrumbs
            </Breadcrumbs.Link>
          </Breadcrumbs.Breadcrumb>
        </div>
        <div class="container">
          <h2 class="subtitle">Cards</h2>
          <Card.Card>
            <Card.Header title="I am a card." />
            <Card.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. phasellus
              nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Card.Content>
          </Card.Card>
          <Card.Card>
            <Card.Header title="Card with image" />
            <Card.Image
              src="https://source.unsplash.com/random/800x600"
              alt="Test image"
              class="is-4by3"
            />
            <Card.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. phasellus
              nec iaculis mauris.
            </Card.Content>
            <Card.Footer>
              <Card.FooterItem>Retweet</Card.FooterItem>
              <Card.FooterItem>Share</Card.FooterItem>
            </Card.Footer>
          </Card.Card>
        </div>
        <div class="container">
          <h2 class="subtitle">Dropdowns</h2>
          <Dropdown.Dropdown
            title="A dropdown"
            icon="fas fa-angle-down"
            align="right"
            dropup
          >
            <Dropdown.Item>Dropdown Item</Dropdown.Item>
            <Dropdown.Item>Another dropdown Item</Dropdown.Item>
            <Dropdown.Item active>Active dropdown Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item isContent>
              <b>Yo</b>! This is some arbitrary content item.
            </Dropdown.Item>
          </Dropdown.Dropdown>
        </div>
        <div class="container">
          <h2 class="subtitle">Menu</h2>
          <Menu.Menu>
            <Menu.Label>People</Menu.Label>
            <Menu.List>
              <Menu.Item>Account</Menu.Item>
              <Menu.SubList title="Community" active>
                <Menu.Item>Members</Menu.Item>
                <Menu.Item active>Statistics</Menu.Item>
                <Menu.Item>Manage</Menu.Item>
              </Menu.SubList>
            </Menu.List>
          </Menu.Menu>
        </div>
        <div class="container">
          <h2 class="subtitle">Messages</h2>
          <Message title="You've got mail!" class="is-primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. phasellus
            nec iaculis mauris.
          </Message>
        </div>
        <div class="container">
          <h2 class="subtitle">Modals</h2>
          <button
            class="button is-primary"
            onClick={ev => this.setState({ openModal: !this.state.openModal })}
          >
            Open modal
          </button>
          <button
            class="button is-primary is-outline"
            onClick={ev =>
              this.setState({ openImageModal: !this.state.openImageModal })
            }
          >
            Open Image Modal
          </button>
          <Modal.Card
            active={this.state.openModal}
            title="Modal card"
            onClose={() => this.setState({ openModal: false })}
          >
            <Modal.CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. phasellus
              nec iaculis mauris.
            </Modal.CardBody>
            <Modal.CardFooter>
              <button
                class="button is-primary"
                onClick={ev => this.setState({ openModal: false })}
              >
                Close
              </button>
            </Modal.CardFooter>
          </Modal.Card>
          <Modal.Image
            active={this.state.openImageModal}
            src="https://source.unsplash.com/random/800x600"
            alt="Image"
            onClose={() => this.setState({ openImageModal: false })}
          />
        </div>
      </section>
    );
  }
}

render(<TestApplication />, document.body);
