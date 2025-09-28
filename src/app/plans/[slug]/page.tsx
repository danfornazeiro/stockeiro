interface DetailsPlanPageProps {
  params: { slug: string };
}

const DetailsPlanPage = ({ params }: DetailsPlanPageProps) => {
  const { slug } = params;
  if (slug === "essencial") {
    return <div>Plano sem desconto, com vantagens básicas.</div>;
  }
  if (slug === "avancado") {
    return (
      <div>Plano com 7% de desconto, com algumas vantagens adicionais.</div>
    );
  }
  if (slug === "premium") {
    return <div>Plano com 10% de desconto, com todas as vantagens.</div>;
  }

  return <div>Plano não encontrado</div>;
};

export default DetailsPlanPage;
