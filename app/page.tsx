"use client";

import { useState } from 'react';

export default function HomePage() {
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-[#071126]" />
        <div className="absolute inset-x-0 -top-40 h-[420px] opacity-30 blur-3xl"
             style={{ background: 'radial-gradient(600px 200px at 50% 0%, rgba(197,162,90,0.35), transparent)' }} />
        <div className="container-max relative pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
              Resid?ncia Europeia com discri??o, velocidade e seguran?a
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ivory/80">
              Assessoria premium para brasileiros com patrim?nio a partir de ?500.000, 
              estruturando o caminho ideal de resid?ncia por investimento em pa?ses estrat?gicos.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contato" className="btn-primary">Iniciar avalia??o confidencial</a>
              <a href="#processo" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-ivory/80 hover:text-ivory hover:border-white/30 transition">Conhe?a o processo</a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-ivory/60 text-sm">
              <span>Atendimento 100% privado</span>
              <span>Estruturas reguladas na UE</span>
              <span>Equipe jur?dica dedicada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="container-max py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-4xl">Nosso processo</h2>
        <p className="mt-3 text-ivory/75 max-w-2xl">Fluxo claro e sob medida, do diagn?stico ao landing, com governan?a e confidencialidade.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Diagn?stico Patrimonial & Objetivos',
              body: 'Compreens?o profunda do perfil, composi??o de ativos, mobilidade, fam?lia e apetite regulat?rio.'
            },
            {
              title: 'Estrat?gia & Estrutura',
              body: 'Sele??o do pa?s e do ve?culo (fundos, imobili?rio, d?vida), checagem fiscal e KYC.'
            },
            {
              title: 'Execu??o & Resid?ncia',
              body: 'Implementa??o com times locais, due diligence, submiss?o e acompanhamento de resid?ncia.'
            }
          ].map((s, i) => (
            <div key={i} className="card p-6 md:p-8">
              <div className="h-10 w-10 rounded-full bg-gold/15 text-gold flex items-center justify-center font-semibold">{i + 1}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-ivory/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinos */}
      <section id="destinos" className="container-max py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl">Destinos estrat?gicos</h2>
        <p className="mt-3 text-ivory/75 max-w-2xl">Pa?ses com marcos est?veis, op??es s?lidas de investimento e caminhos ?geis para resid?ncia.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[ 
            {
              country: 'Portugal',
              points: ['Fundos regulados CMVM', 'Resid?ncia por investimento', 'Ponte para cidadania']
            },
            {
              country: 'Espanha',
              points: ['Golden Visa via im?veis/empresas', 'Eixo Madri-Barcelona', 'Qualidade de vida']
            },
            {
              country: 'Gr?cia',
              points: ['Imobili?rio premium', 'Custo-benef?cio', 'Acesso Schengen']
            }
          ].map((d) => (
            <div key={d.country} className="card p-6 md:p-8 flex flex-col">
              <div className="text-gold font-semibold tracking-wide">{d.country}</div>
              <h3 className="mt-2 text-2xl font-display">Resid?ncia por Investimento</h3>
              <ul className="mt-4 space-y-2 text-ivory/75">
                {d.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-gold">?</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="container-max py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Consulta Privada</h2>
            <p className="mt-3 text-ivory/75 max-w-xl">
              Preencha os dados para receber uma avalia??o inicial confidencial do melhor caminho para sua resid?ncia europeia.
            </p>
            <div className="mt-8 card p-6 md:p-8">
              <ContactForm onOpenEmail={() => setEmailOpen(true)} />
            </div>
            <p className="mt-4 text-xs text-ivory/50">Ao enviar, voc? concorda com o tratamento de dados conforme finalidades de contato e qualifica??o. N?o compartilhamos informa??es com terceiros sem consentimento.</p>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Perfil recomendado</h3>
            <ul className="mt-4 space-y-2 text-ivory/75">
              <li>? Patrim?nio invest?vel a partir de ?500.000</li>
              <li>? Interesse em mobilidade internacional e prote??o patrimonial</li>
              <li>? Fam?lia com planos educacionais na Europa</li>
              <li>? Horizonte de longo prazo e compliance</li>
            </ul>
            <div className="mt-8">
              <h4 className="text-ivory/80 font-semibold">Diferenciais Aureum</h4>
              <p className="mt-2 text-ivory/70">Arquitetura independente, curadoria de ve?culos regulados e execu??o ponta-a-ponta com governan?a.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm({ onOpenEmail }: { onOpenEmail: () => void }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');

    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <form action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-1">
        <label className="text-sm text-ivory/70">Nome completo</label>
        <input required name="name" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold/50" />
      </div>
      <div className="md:col-span-1">
        <label className="text-sm text-ivory/70">E-mail</label>
        <input required type="email" name="email" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold/50" />
      </div>
      <div className="md:col-span-1">
        <label className="text-sm text-ivory/70">Telefone (WhatsApp)</label>
        <input name="phone" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold/50" placeholder="+55 11 9xxxx-xxxx" />
      </div>
      <div className="md:col-span-1">
        <label className="text-sm text-ivory/70">Or?amento de investimento (EUR)</label>
        <select name="budget" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold/50">
          <option value=">=500k">? ?500.000</option>
          <option value=">=1m">? ?1.000.000</option>
          <option value=">=2m">? ?2.000.000</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="text-sm text-ivory/70">Destino(s) de interesse</label>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          {['Portugal', 'Espanha', 'Gr?cia', 'Outros'].map((d) => (
            <label key={d} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <input type="checkbox" name="destinations" value={d} />
              <span>{d}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <label className="text-sm text-ivory/70">Mensagem</label>
        <textarea name="message" rows={4} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-gold/50" placeholder="Contexto familiar, prazos, prefer?ncias de investimento..." />
      </div>
      <div className="md:col-span-2 flex items-center justify-between gap-4">
        <button disabled={status==='loading'} className="btn-primary">
          {status === 'loading' ? 'Enviando?' : status === 'success' ? 'Enviado' : 'Enviar' }
        </button>
        <button type="button" onClick={onOpenEmail} className="text-ivory/70 hover:text-ivory">Ou envie um e-mail</button>
      </div>
      {status === 'success' && <p className="md:col-span-2 text-sm text-green-400">Recebemos seus dados. Retornaremos em at? 1 dia ?til.</p>}
      {status === 'error' && <p className="md:col-span-2 text-sm text-red-400">N?o foi poss?vel enviar. Tente novamente.</p>}
    </form>
  );
}
