import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DetailsPlanPageProps {
  params: Promise<{ slug: string }>;
}

const plans = {
  essencial: {
    title: "Plano Essencial",
    description: "Plano sem desconto, com vantagens básicas.",
    price: "R$ 29/mês",
    employees: 5,
    extra: "R$ 3 por funcionário extra",
  },
  avancado: {
    title: "Plano Avançado",
    description: "Plano trimestral com 7% de desconto e vantagens adicionais.",
    price: "R$ 60,90/trimestre",
    employees: 10,
    extra: "R$ 3 por funcionário extra",
  },
  premium: {
    title: "Plano Premium",
    description:
      "Plano anual com 10% de desconto, incluindo todas as vantagens.",
    price: "R$ 313,20/ano",
    employees: 8,
    extra: "R$ 3 por funcionário extra",
  },
};

const DetailsPlanPage = async ({ params }: DetailsPlanPageProps) => {
  const { slug } = await params;
  const plan = plans[slug as keyof typeof plans];

  if (!plan) {
    return (
      <div className="flex h-screen w-full items-center justify-center text-lg font-medium text-red-600">
        Plano não encontrado 🚨
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full bg-gradient-to-b from-white to-gray-100 p-4">
        {/* Esquerda */}
        <div className="flex flex-1 items-center justify-center border-r border-gray-300">
          <Card className="w-96 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{plan.description}</p>
              <p className="mt-4 text-lg font-bold">{plan.price}</p>
              <p className="mt-2 text-sm text-gray-600">
                {plan.employees} funcionários incluídos
              </p>
              <p className="mt-2 text-sm text-gray-600">{plan.extra}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Selecionar
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Direita */}
        <div className="flex flex-1 items-center justify-center">
          <h1>Vantagens</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPlanPage;
