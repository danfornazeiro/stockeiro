import {
  Bell,
  CreditCard,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import AsideOptions from "./aside-options";

const Options = () => {
  return (
    <div>
      <AsideOptions>
        <LayoutDashboard size={20} /> Dashboard
      </AsideOptions>

      <AsideOptions>
        <Package size={20} /> Produtos & Estoque
      </AsideOptions>

      <AsideOptions>
        <ShoppingCart size={20} /> Pedidos
      </AsideOptions>

      <AsideOptions>
        <Users size={20} /> Funcionários
      </AsideOptions>

      <AsideOptions>
        <CreditCard size={20} /> Plano da Empresa
      </AsideOptions>

      <AsideOptions>
        <Bell size={20} /> Notificações
      </AsideOptions>
    </div>
  );
};

export default Options;
