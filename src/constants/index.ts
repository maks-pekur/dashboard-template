import { ChipColor } from "@/types";
import { CircleDollarSign, LayoutDashboard } from "lucide-react";

export const navLinks = [
  {
    id: "01",
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    chip: {
      color: ChipColor.Success,
      label: "2",
    },
  },
  {
    id: "02",
    title: "Sales",
    href: "/sales",
    icon: CircleDollarSign,
    chip: {
      color: ChipColor.Secondary,
      label: "New",
    },
  },
];
