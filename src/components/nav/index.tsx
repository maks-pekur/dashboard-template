import { navLinks } from "@/constants";
import NavItem from "./nav-item";

const Nav = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <NavItem key={link.id} item={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
