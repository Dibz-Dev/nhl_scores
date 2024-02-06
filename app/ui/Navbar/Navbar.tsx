import { NavbarItems } from "./NavbarItems";

export const Navbar = () => {
  return (
    <div className="border w-full py-4">
      <ul className="flex gap-x-4">
        {NavbarItems.map((item) => (
          <li key={item.title}>{item.title.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};
