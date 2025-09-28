import PlansCard from "@/components/commun/plans-card";
import { db } from "@/db";
import { plansTable } from "@/db/schema";

const PlansPage = async () => {
  const plans = await db.select().from(plansTable);

  const formattedPlans = plans.map((plan) => ({
    id: plan.id,
    title: plan.title,
    description: plan.description,
    price: plan.price,
  }));

  return (
    <div className="px-4 py-8">
      <h1 className="mb-8 text-center text-2xl font-bold">
        Planos disponíveis
      </h1>
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
        <PlansCard plan={formattedPlans} />
      </div>
    </div>
  );
};

export default PlansPage;
