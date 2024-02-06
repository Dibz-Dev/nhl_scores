import { NavbarItems } from "./NavbarItems";

export const Navbar = () => {
  return (
    <div className="grid grid-cols-4 justify-between w-full py-4">
      <div>
        <h1 className="font-bold col-start-1 col-span-1 text-4xl pl-4">NHL</h1>
      </div>
      <div className="grid col-start-2 col-span-3">
        <ul className="flex gap-x-4 items-center">
          {NavbarItems.map((item) => (
            <li className="cursor-pointer px-4" key={item.title}>
              {item.title.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
