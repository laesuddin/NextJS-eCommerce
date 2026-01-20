import { cn } from "@/lib/utils";
import { spawn } from "child_process";
import React from "react";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormattor = ({ amount, className }: Props) => {
  const formattedPrice = new Number(amount || 0).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <span className={cn("text-sm font-semibold text-darkColor", className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormattor;
