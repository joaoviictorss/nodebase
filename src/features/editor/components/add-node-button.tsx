"use client";

import { PlusIcon } from "lucide-react";
import { memo, useState } from "react";
import { Button } from "@/components/ui/button";

export const AddNodeButton = memo(() => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-background"
      onClick={() => {}}
    >
      <PlusIcon className="size-4" />
      <span className="sr-only">Adicionar novo passo</span>
    </Button>
  );
});

AddNodeButton.displayName = "AddNodeButton";
