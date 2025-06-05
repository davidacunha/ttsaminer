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

export default function Terms() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Termos de Serviço - TTSA Miner</h1>

      <h2>1. Aceitação dos Termos</h2>
      <p>Ao acessar e usar o TTSA Miner, você concorda com estes Termos de Serviço.</p>

      <h2>2. Descrição do Serviço</h2>
      <p>O TTSA Miner é uma plataforma de análise de tendências do TikTok que usa IA para identificar produtos populares.</p>

      <h2>3. Uso Aceitável</h2>
      <ul>
        <li>Uso apenas para fins legítimos de pesquisa de mercado</li>
        <li>Proibido uso para spam ou atividades maliciosas</li>
        <li>Não acessar dados não autorizados</li>
        <li>Respeito à propriedade intelectual</li>
      </ul>

      <h2>4. Limitações do Serviço</h2>
      <p>Usuários gratuitos têm limite de 10 análises por dia. Planos pagos oferecem mais recursos.</p>

      <h2>5. Propriedade Intelectual</h2>
      <p>O sistema é nossa propriedade. Os dados do TikTok são de responsabilidade do TikTok.</p>

      <h2>6. Isenção de Responsabilidade</h2>
      <p>O serviço é fornecido “como está”. Não garantimos disponibilidade contínua ou exatidão total.</p>

      <h2>7. Privacidade</h2>
      <p>Consulte nossa Política de Privacidade para mais informações.</p>

      <h2>8. Contato</h2>
      <p>Dúvidas? Entre em contato via suporte.</p>

      <p><strong>Última atualização: Junho 2025</strong></p>
    </main>
  )
}
