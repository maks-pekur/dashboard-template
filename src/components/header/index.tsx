"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { UA, US } from "country-flag-icons/react/3x2";
import { Bell, Languages, MessageCircleMore, Settings } from "lucide-react";
import HeaderLeft from "./header-left";
import HeaderRight from "./header-right";

const Header = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="sticky top-0 z-10 flex justify-between gap-4 border-b border-zinc-300/25 bg-white/75 p-6 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-900/75 dark:text-white">
      <HeaderLeft>
        <Breadcrumbs size="sm">
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>

          {pathNames.map((segment, index) => {
            const href = "/" + pathNames.slice(0, index + 1).join("/");

            return (
              <BreadcrumbItem key={index}>
                <Link href={href}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumbs>
      </HeaderLeft>

      <HeaderRight>
        <Dropdown>
          <div className="relative">
            <DropdownTrigger>
              <Button isIconOnly variant="light">
                <MessageCircleMore strokeWidth={1} />
              </Button>
            </DropdownTrigger>
            <span className="absolute end-0 top-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </div>
          <DropdownMenu aria-label="Messages">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <div className="relative">
            <DropdownTrigger>
              <Button isIconOnly variant="light">
                <Bell strokeWidth={1} />
              </Button>
            </DropdownTrigger>
            <span className="absolute end-0 top-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            </span>
          </div>
          <DropdownMenu aria-label="Notification">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light">
              <Settings strokeWidth={1} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Settings">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light">
              <Languages strokeWidth={1} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Language">
            <DropdownItem
              startContent={<US title="English" className="w-4 h-8" />}
            >
              English
            </DropdownItem>
            <DropdownItem
              startContent={<UA title="Ukraine" className="w-4 h-8" />}
            >
              Ukraine
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </HeaderRight>
    </div>
  );
};

export default Header;
