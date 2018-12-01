import NavbarWidget, {
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem
} from "./Navbar";
import NavbarDropdown, {
  NavbarDropdownDivider,
  NavbarDropdownItem
} from "./NavbarDropdown";

const Navbar = {
  Navbar: NavbarWidget,
  Brand: NavbarBrand,
  Dropdown: NavbarDropdown,
  DropdownItem: NavbarDropdownItem,
  DropdownDivider: NavbarDropdownDivider,
  Menu: NavbarMenu,
  MenuItem: NavbarMenuItem
};

export default Navbar;
