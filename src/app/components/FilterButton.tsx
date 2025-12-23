import React from "react";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

export function FilterButton() {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 rounded-xl border-gray-300"
    >
      <Settings className="h-4 w-4" />
      <span>Filters</span>
    </Button>
  );
}
