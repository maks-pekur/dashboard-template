import type { NavItem } from "@/types";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";

interface Props {
  item: NavItem;
}

const NavItem: React.FC<Props> = ({ item }) => {
  const { icon: IconComponent, title, href, chip } = item;
  return (
    <li className="cursor-pointer flex list-none items-center overflow-hidden whitespace-nowrap">
      <Link
        href={href}
        className="mb-2 p-3 flex items-center cursor-pointer overflow-hidden rounded-xl border text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 grow transition-all duration-300 ease-in-out border-zinc-300 text-zinc-950 dark:border-zinc-800 dark:text-zinc-100 max-md:hidden"
      >
        {IconComponent && (
          <IconComponent
            strokeWidth={1}
            size={20}
            className="w-4 flex-none text-2xl me-2"
          />
        )}
        <div className="flex w-full items-center justify-between truncate">
          <div className="overflow-hidden truncate whitespace-nowrap">
            {title}
          </div>
          {chip && (
            <Chip color={chip.color} variant="flat" radius="sm">
              {chip.label}
            </Chip>
          )}
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
