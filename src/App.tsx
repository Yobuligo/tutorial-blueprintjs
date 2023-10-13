import {
  Button,
  ButtonGroup,
  Card,
  CardList,
  Collapse,
  Menu,
  MenuItem,
  Popover,
} from "@blueprintjs/core";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const accountMenu = (
    <Menu>
      <MenuItem icon="log-in" text="Login" />
      <MenuItem icon="log-out" text="Logout" />
    </Menu>
  );

  return (
    <>
      <Button>I am a blueprintjs button</Button>
      <div>
        <ButtonGroup>
          <Button icon="play">Play</Button>
          <Button icon="stop">Stop</Button>
          <Button icon="fast-forward">Forward</Button>
          <Button icon="fast-backward">Backward</Button>
        </ButtonGroup>
      </div>

      <div>
        <Button onClick={() => setOpen((previous) => !previous)}>
          Open collapsible
        </Button>

        <Collapse isOpen={open}>
          <CardList bordered={true}>
            <Card>First</Card>
            <Card>Second</Card>
            <Card>Third</Card>
          </CardList>
        </Collapse>
      </div>

      <div>
        <Popover content={accountMenu} isOpen={openMenu}>
          <Button
            alignText="left"
            fill={true}
            icon="applications"
            rightIcon="caret-down"
            text="Account"
            onClick={() => setOpenMenu((previous) => !previous)}
          />
        </Popover>
      </div>
    </>
  );
};

export default App;
