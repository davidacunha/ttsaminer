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

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Bem-vindo ao TTSA Miner</h1>
      <div style={styles.buttons}>
        <a href="/privacy" style={styles.button}>Política de Privacidade</a>
        <a href="/terms" style={styles.button}>Termos de Uso</a>
      </div>
    </main>
  )
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0070f3',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
  }
}
