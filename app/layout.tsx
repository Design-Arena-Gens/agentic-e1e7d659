import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-e1e7d659.vercel.app'),
  title: {
    default: 'Resid?ncia Europeia por Investimento',
    template: '%s ? Aureum Residency'
  },
  description: 'Assessoria discreta e de alto padr?o para brasileiros que buscam resid?ncia europeia via investimento.',
  openGraph: {
    title: 'Resid?ncia Europeia por Investimento ? Aureum Residency',
    description: 'Assessoria discreta e de alto padr?o para brasileiros que buscam resid?ncia europeia via investimento.',
    url: 'https://agentic-e1e7d659.vercel.app',
    siteName: 'Aureum Residency',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}> 
        <div className="min-h-dvh flex flex-col">
          <nav className="border-b border-white/10 bg-navy/80 backdrop-blur sticky top-0 z-50">
            <div className="container-max flex items-center justify-between h-16">
              <div className="flex items-baseline gap-2">
                <span className="text-gold text-2xl font-bold font-display tracking-wide">Aureum</span>
                <span className="text-ivory/60">Residency</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-ivory/80">
                <a href="#processo" className="hover:text-ivory">Processo</a>
                <a href="#destinos" className="hover:text-ivory">Destinos</a>
                <a href="#contato" className="hover:text-ivory">Contato</a>
              </div>
              <a href="#contato" className="btn-primary">Consulta Privada</a>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10">
            <div className="container-max py-10 text-sm text-ivory/60 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
              <p>? {new Date().getFullYear()} Aureum Residency. Todos os direitos reservados.</p>
              <p>Atendimento confidencial. Brasil ? Europa</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
