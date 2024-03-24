import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type ItemType = {
  value: string;
  label: string;
};

export function SelectComponent({ items, placeholder, title }: { items: Array<ItemType>; placeholder: string; title: string }) {
  return (
    <Select className="w-full relative">
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {items.map(({ label, value }, index) => (
            <SelectItem value={value}>{label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
