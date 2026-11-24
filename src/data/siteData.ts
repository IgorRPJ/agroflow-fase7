import { BarChart3, CloudRain, Cpu, Droplets, Leaf, Sprout, Zap } from "lucide-react";

export const videoUrl = "https://youtu.be/WgQ9eCY29fk";
export const navItems = [
 { href: "/", label: "Início" },
 { href: "/saude", label: "Saúde do cultivo" },
  { href: "/simulador", label: "Simulador" },
 { href: "/solucoes", label: "Soluções" },
  { href: "/tecnologia", label: "Tecnologia" },
  { href: "/sobre", label: "Sobre" }
];
export const homeFeatures = [
  { icon: Leaf, title: "Gestão sustentável", text: "Otimize recursos e reduza impactos ambientais com tecnologia inteligente.", href: "/solucoes" },
  { icon: Droplets, title: "Monitoramento hídrico", text: "Controle preciso do uso de água com sensores e alertas em tempo real.", href: "/saude" },
  { icon: BarChart3, title: "Análise de dados", text: "Dashboards intuitivos com indicadores para decisões mais assertivas.", href: "/tecnologia" }
];
export const homeBenefits = ["Monitoramento em tempo real", "Alertas para situações importantes", "Histórico para comparar resultados", "Suporte técnico especializado"];
export const solutions = [
  { icon: Droplets, title: "Gestão Hídrica Inteligente", description: "Monitore umidade, chuva e irrigação para economizar água sem perder produtividade.", features: ["Sensores em tempo real", "Previsão de chuva", "Automação de irrigação"], price: "A partir de R$ 1.999/mês" },
  { icon: Sprout, title: "Monitoramento de Cultivo", description: "Acompanhe a saúde das plantas com imagens, alertas e recomendações de manejo.", features: ["Índices de vegetação", "Alertas de anomalias", "Análise de imagens"], price: "A partir de R$ 2.499/mês" },
  { icon: BarChart3, title: "Analytics de produção", description: "Transforme o histórico da produção em decisões práticas para sua operação.", features: ["Painéis intuitivos", "Análise de tendências", "Relatórios automatizados"], price: "A partir de R$ 1.499/mês" },
  { icon: CloudRain, title: "Estação Meteorológica", description: "Dados climáticos da sua fazenda para planejar cada etapa do cultivo.", features: ["Previsão localizada", "Alertas meteorológicos", "Histórico climático"], price: "A partir de R$ 899/mês" },
  { icon: Cpu, title: "Monitoramento de Solo", description: "Entenda pH, nutrientes e temperatura para usar insumos com mais precisão.", features: ["Mapas de fertilidade", "Recomendações", "Economia em insumos"], price: "A partir de R$ 1.799/mês" },
  { icon: Zap, title: "Automação Completa", description: "Controle irrigação, fertirrigação e equipamentos em uma única operação.", features: ["Controle remoto", "Agendamento inteligente", "Registro das operações"], price: "A partir de R$ 3.499/mês" }
];
export const aboutStats = [{ number: "500+", label: "Fazendas atendidas" }, { number: "98%", label: "Satisfação de clientes" }, { number: "15M+", label: "Hectares monitorados" }, { number: "40%", label: "Aumento médio" }];
export const aboutValues = [{ title: "Missão", text: "Democratizar o acesso à tecnologia agrícola e tornar a produção mais produtiva e sustentável." }, { title: "Visão", text: "Ser referência em soluções tecnológicas que melhoram a vida de produtores rurais." }, { title: "Valores", text: "Inovação constante, compromisso com resultados, transparência e foco no cliente." }];
export const technologies = [{ icon: Cpu, title: "Internet das Coisas", text: "Sensores conectados coletam informações sobre solo, clima e cultivo em intervalos regulares." }, { icon: CloudRain, title: "Computação em nuvem", text: "Infraestrutura escalável organiza dados para acesso seguro e contínuo." }, { icon: Zap, title: "Automação de processos", text: "Regras e alertas ajudam a transformar informação em ação no momento certo." }];
export const architectureLayers = [{ title: "Sensores no campo", text: "Coleta de solo, clima e cultivo" }, { title: "Conectividade", text: "LoRaWAN, 4G/5G e Wi-Fi" }, { title: "Processamento", text: "Nuvem e processamento local" }, { title: "Painel e aplicativo", text: "Leitura simples para a equipe" }];
