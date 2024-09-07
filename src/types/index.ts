import { LucideProps } from "lucide-react";

export enum ChipColor {
  Primary = "primary",
  Default = "default",
  Secondary = "secondary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}

export type ChipData = {
  color?: ChipColor;
  label: string;
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: React.ComponentType<LucideProps>;
  chip?: ChipData;
};
