import { action, storiesOf } from "@storybook/preact";
import { h } from "preact";

import { Control, Field, Select } from "../../src/forms";
import { Select as SingleSelect } from "../../src/forms/singles";

const OPTIONS = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

storiesOf("Forms/Select", module)
  .addDecorator(story => <form onSubmit={ev => ev.preventDefault()}>{story()}</form>)
  .add("Colors", () => (
    <div class="container">
      <SingleSelect options={OPTIONS} />
      <SingleSelect options={OPTIONS} color="primary" />
      <SingleSelect options={OPTIONS} color="info" />
      <SingleSelect options={OPTIONS} color="warning" />
      <SingleSelect options={OPTIONS} color="danger" />
    </div>
  ))
  .add("States", () => (
    <div className="container">
      <SingleSelect label="Default" options={OPTIONS} />
      <SingleSelect label="Loading" options={OPTIONS} loading />
      <SingleSelect label="With icon" options={OPTIONS} iconsLeft="fas fa-globe" />
    </div>
  ));
