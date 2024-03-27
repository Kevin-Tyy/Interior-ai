import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

type ItemType = {
  value: string;
  label: string;
};

export function SelectComponent({
  items,
  placeholder,
  title,
  defaultValue,
}: {
  items: Array<ItemType>;
  placeholder: string;
  title: string;
  defaultValue: ItemType;
}) {
  return (
    <Select defaultValue={defaultValue.value}>
      <SelectTrigger>
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
