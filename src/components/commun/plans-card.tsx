import React from "react";
import { Button } from "../ui/button";
import { formatCentsToBRL } from "@/helpers/money";
import Link from "next/link";

interface PlanInterface {
  plan: Array<{
    id: string;
    title: string;
    description: string;
    price: number | string;
    percent: string;
    slug: string;
  }>;
}

const PlansCard: React.FC<PlanInterface> = ({ plan }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {plan.map((item) => (
        <div
          key={item.id}
          className="relative h-64 w-48 overflow-hidden rounded-[5px] shadow-lg"
        >
          {/* Fundo do card */}
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-800 to-blue-950"></div>

          {/* Conteúdo do card */}
          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            <div className="text-lg font-medium text-white">{item.title}</div>
            <div className="w-36 text-sm text-slate-200">
              {item.description}
            </div>
            <div className="text-lg font-bold text-white">
              {formatCentsToBRL(
                typeof item.price === "string"
                  ? Number(item.price)
                  : item.price,
              )}
            </div>
            <div className="flex w-full items-center justify-center">
              <Button className="mt-2 w-full cursor-pointer bg-white text-black hover:bg-gray-200">
                <Link href={`/plans/${item.slug}`}>Assinar agora</Link>
              </Button>
            </div>
            <div className="">
              <p className="text-sm font-light text-slate-200">
                {item.percent}% de desconto
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlansCard;
