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
    <div className="flex flex-wrap justify-center gap-10">
      {plan.map((item) => (
        <div
          key={item.id}
          className="relative h-96 w-72 overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Fundo do card */}
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-800 to-blue-950"></div>

          {/* Conteúdo do card */}
          <div className="absolute right-8 bottom-8 left-8 flex flex-col gap-4">
            <div className="text-2xl font-bold text-white">{item.title}</div>
            <div className="text-base leading-relaxed text-slate-200">
              {item.description}
            </div>
            <div className="text-3xl font-extrabold text-white">
              {formatCentsToBRL(
                typeof item.price === "string"
                  ? Number(item.price)
                  : item.price,
              )}
            </div>
            <div>
              <Button className="mt-4 w-full cursor-pointer rounded-lg bg-white py-2 text-lg font-medium text-black hover:bg-gray-200">
                <Link href={`/plans/${item.slug}`}>Assinar agora</Link>
              </Button>
            </div>
            <div>
              <p className="text-base font-light text-slate-300">
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
