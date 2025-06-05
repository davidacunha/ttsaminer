import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'terms'])),
    },
  };
}

export default function Privacy() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Política de Privacidade - TTSA Miner</h1>

      <h2>1. Informações Coletadas</h2>
      <h3>Dados de Autenticação</h3>
      <ul>
        <li>Email e nome através da autenticação Replit</li>
        <li>Identificador único do usuário</li>
        <li>Foto de perfil (quando disponível)</li>
      </ul>
      <h3>Dados de Uso</h3>
      <ul>
        <li>Hashtags pesquisadas</li>
        <li>Produtos favoritados</li>
        <li>Histórico de análises realizadas</li>
        <li>Métricas de uso da plataforma</li>
      </ul>

      <h2>2. Dados do TikTok</h2>
      <p>Coletamos dados públicos do TikTok através da API oficial, incluindo: descrições de vídeos, métricas de engajamento e hashtags.</p>

      <h2>3. Uso dos Dados</h2>
      <p>Utilizamos seus dados para fornecer análises, personalização, estatísticas e obrigações legais.</p>

      <h2>4. Compartilhamento de Dados</h2>
      <p>Não vendemos dados. Compartilhamos apenas em situações legais ou operacionais.</p>

      <h2>5. Retenção de Dados</h2>
      <ul>
        <li>Usuários: enquanto a conta estiver ativa</li>
        <li>Dados do TikTok: até 30 dias</li>
        <li>Logs: até 90 dias</li>
      </ul>

      <h2>6. Segurança</h2>
      <p>Adotamos criptografia, controle de acesso e backups seguros.</p>

      <h2>7. Seus Direitos (LGPD/GDPR)</h2>
      <p>Acesso, retificação, exclusão, portabilidade e oposição.</p>

      <h2>8. Cookies</h2>
      <p>Usamos cookies essenciais e de análise.</p>

      <h2>9. Transferências Internacionais</h2>
      <p>Dados podem ser processados fora do Brasil com garantias legais.</p>

      <h2>10. Menores de Idade</h2>
      <p>Plataforma não destinada a menores de 18 anos.</p>

      <h2>11. Alterações</h2>
      <p>Mudanças importantes serão comunicadas.</p>

      <h2>12. Contato</h2>
      <p>Email: privacy@ttsaminer.com | DPO: dpo@ttsaminer.com</p>

      <h2>13. Base Legal (LGPD)</h2>
      <ul>
        <li>Art. 7º, I: Consentimento</li>
        <li>Art. 7º, V: Execução de contrato</li>
        <li>Art. 7º, VI: Direitos legais</li>
        <li>Art. 7º, IX: Interesse legítimo</li>
      </ul>

      <p><strong>Última atualização: Junho 2025</strong></p>
    </main>
  )
}
