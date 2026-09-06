"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { dict, products, type Lang } from "@/lib/content";

/** Render **bold** spans inside a paragraph string. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function SeafoodSite({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const other = lang === "en" ? "zh" : "en";
  const otherHref = other === "en" ? "/" : "/zh";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const navItems: [string, string][] = [
    ["#story", t.nav.story],
    ["#products", t.nav.products],
    ["#quality", t.nav.quality],
    ["#channels", t.nav.channels],
  ];

  return (
    <>
      {/* NAV */}
      <header className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <a href={lang === "en" ? "/" : "/zh"} className="brand" aria-label="WAYTOP">
            <img src="/waytop-logo.svg" alt="WAYTOP 蔚道商贸" />
          </a>
          <nav className={`nav-links${menuOpen ? " open" : ""}`}>
            {navItems.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              {t.nav.contact}
            </a>
            <Link href={otherHref} className="lang-toggle" aria-label="switch language">
              {t.langLabel}
            </Link>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="eyebrow">{t.hero.eyebrow}</div>
            <h1>
              {t.hero.titleLines[0]}
              <br />
              {t.hero.titleLines[1]}
            </h1>
            <div className="lede-en">{t.hero.lede}</div>
            <p className="sub">{t.hero.sub}</p>
            <div className="hero-cta">
              <a href="#products" className="btn btn-primary">{t.hero.ctaProducts}</a>
              <a href="#contact" className="btn btn-ghost">{t.hero.ctaContact}</a>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span>{t.hero.scroll}</span>
          <span className="line"></span>
        </div>
      </section>

      {/* STRIP */}
      <div className="strip">
        <div className="wrap strip-row">
          {t.stats.map((s, i) => (
            <div className="strip-item" key={i}>
              <b>{s.value}</b>
              <span className="lbl">{s.label}<br />{s.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section className="story pad" id="story">
        <div className="wrap story-grid">
          <div className="story-copy reveal">
            <div className="eyebrow">{t.story.eyebrow}</div>
            <h2 className="section-title">
              {t.story.titleZh}
              <br />
              {t.story.titleEn}
            </h2>
            {t.story.p.map((para, i) => (
              <p key={i}><RichText text={para} /></p>
            ))}
          </div>
          <div className="story-visual reveal">
            <img src="/img/blue-lobster.jpg" alt={products[0].name[lang]} />
            <div className="story-badge">
              <div className="num">{t.story.badgeNum}</div>
              <div className="cap">{t.story.badgeCap}</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pad" id="products">
        <div className="wrap">
          <div className="prod-head reveal">
            <div>
              <div className="eyebrow">{t.products.eyebrow}</div>
              <h2 className="section-title">{t.products.title}</h2>
            </div>
            <p className="lead" style={{ margin: 0, textAlign: "left", maxWidth: 360 }}>
              {t.products.lead}
            </p>
          </div>
          <div className="prod-grid">
            {products.map((p) => (
              <div className={`card${p.tall ? " tall" : ""} reveal`} key={p.img}>
                <span className="flag">{p.origin[lang]}</span>
                <img src={`/img/${p.img}.jpg`} alt={p.name[lang]} />
                <div className="card-body">
                  <span className="card-tag">{p.tag[lang]}</span>
                  <h3>{p.name[lang]}</h3>
                  <div className="en">{p.sub[lang]}</div>
                  <p>{p.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="quality pad" id="quality">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>{t.quality.eyebrow}</div>
            <h2 className="section-title">{t.quality.title}</h2>
            <p className="lead">{t.quality.lead}</p>
          </div>
          <div className="q-grid">
            {t.quality.items.map((it, i) => (
              <div className="q-item reveal" key={i}>
                <QIcon i={i} />
                <h4>{it.title}</h4>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSURANCE */}
      <section className="assure pad">
        <div className="wrap assure-grid">
          <div className="assure-visual reveal">
            <img src="/img/spread-vertical.jpg" alt="seafood spread" />
          </div>
          <div className="reveal">
            <div className="eyebrow">{t.assure.eyebrow}</div>
            <h2 className="section-title">{t.assure.title}</h2>
            <ul>
              {t.assure.items.map((it, i) => (
                <li key={i}>
                  <span className="chk">◆</span>
                  <div>
                    <b>{it.title}</b>
                    <span>{it.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="pad-sm" id="channels">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>{t.channels.eyebrow}</div>
            <h2 className="section-title">{t.channels.title}</h2>
          </div>
          <div className="chan-grid">
            {t.channels.items.map((c, i) => (
              <div className="chan reveal" key={i}>
                <div className="n">{c.n}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="band">
        <div className="wrap reveal">
          <span className="en">{t.band.kicker}</span>
          <h2>{t.band.title}</h2>
          <p>{t.band.p}</p>
          <a href="#contact" className="btn btn-primary">{t.band.cta}</a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact pad" id="contact">
        <div className="wrap contact-grid">
          <div className="contact-info reveal">
            <div className="eyebrow">{t.contact.eyebrow}</div>
            <h2 className="section-title">{t.contact.title}</h2>
            <InfoRow icon="phone" k={t.contact.phoneK} v={t.contact.phoneV} />
            <InfoRow icon="mail" k={t.contact.emailK} v={t.contact.emailV} vClass="en" />
            <InfoRow icon="pin" k={t.contact.locK} v={t.contact.locV} />
            <InfoRow icon="shield" k={t.contact.brandK} v={t.contact.brandV} vClass="en" />
          </div>
          <div className="reveal">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="field">
                <label>{t.contact.fName}</label>
                <input type="text" required placeholder={t.contact.fNameP} />
              </div>
              <div className="field">
                <label>{t.contact.fPhone}</label>
                <input type="text" required placeholder={t.contact.fPhoneP} />
              </div>
              <div className="field">
                <label>{t.contact.fInterest}</label>
                <input type="text" placeholder={t.contact.fInterestP} />
              </div>
              <div className="field">
                <label>{t.contact.fMsg}</label>
                <textarea placeholder={t.contact.fMsgP} />
              </div>
              <button type="submit" className="btn btn-primary">
                {sent ? t.contact.sent : t.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <img className="foot-logo" src="/waytop-logo.svg" alt="WAYTOP 蔚道商贸" />
              <p>{t.footer.tagline}</p>
            </div>
            <div className="foot-cols">
              <div className="foot-col">
                <h5>{t.footer.nav}</h5>
                <a href="#story">{t.nav.story}</a>
                <a href="#products">{t.nav.products}</a>
                <a href="#quality">{t.nav.quality}</a>
                <a href="#channels">{t.nav.channels}</a>
              </div>
              <div className="foot-col">
                <h5>{t.footer.cats}</h5>
                {products.slice(0, 4).map((p) => (
                  <a href="#products" key={p.img}>{p.name[lang]}</a>
                ))}
              </div>
              <div className="foot-col">
                <h5>{t.footer.partner}</h5>
                {t.channels.items.map((c, i) => (
                  <a href="#contact" key={i}>{c.title}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>{t.footer.rights}</span>
            <span>{t.footer.motto}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function InfoRow({
  icon, k, v, vClass = "",
}: { icon: "phone" | "mail" | "pin" | "shield"; k: string; v: string; vClass?: string }) {
  return (
    <div className="info-row">
      <span className="ic"><Icon name={icon} /></span>
      <div>
        <div className="k">{k}</div>
        <div className={`v ${vClass}`}>{v}</div>
      </div>
    </div>
  );
}

function Icon({ name }: { name: "phone" | "mail" | "pin" | "shield" }) {
  const c = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4 };
  if (name === "phone")
    return <svg {...c}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>;
  if (name === "mail")
    return <svg {...c}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>;
  if (name === "pin")
    return <svg {...c}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
  return <svg {...c}><path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6z" /></svg>;
}

function QIcon({ i }: { i: number }) {
  const c = { className: "ic", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.4 };
  const icons = [
    <g key="0"><path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6z" /><path d="m9 12 2 2 4-4" /></g>,
    <g key="1"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></g>,
    <g key="2"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></g>,
    <g key="3"><path d="M12 2 2 7v7c0 5 4 8 10 8s10-3 10-8V7z" /><path d="M12 22V12M2 7l10 5 10-5" /></g>,
  ];
  return <svg {...c}>{icons[i]}</svg>;
}
