(() => {
  const S = window.SITE || {};
  const D = window.YB || {};
  const EN = window.I18N_EN || {};
  const ESJ = window.I18N_ES_JS || {};
  const reduzir = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const celular = matchMedia("(max-width: 860px)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ── Idioma ────────────────────────────────────────────────────────────── */
  let lang = "es";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    lang = q === "en" || q === "es" ? q : (localStorage.getItem("yb-lang") || (navigator.language || "es").slice(0, 2));
  } catch (e) {}
  if (lang !== "en") lang = "es";
  const t = (k) => (lang === "en" ? EN[k] : ESJ[k]) || ESJ[k] || k;
  const original = new Map(); // guarda el español del HTML

  const waLink = (tipo, extra = "") => {
    const num = String(S.whatsapp?.numero || "").replace(/\D/g, "");
    const m = S.whatsapp?.mensajes?.[tipo]?.[lang] || S.whatsapp?.mensagem || "";
    return `https://wa.me/${num}?text=${encodeURIComponent(m + extra)}`;
  };

  function aplicarIdioma() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      if (!original.has(el)) original.set(el, el.innerHTML);
      const k = el.dataset.i18n;
      el.innerHTML = lang === "en" && EN[k] ? EN[k] : original.get(el);
    });
    $$(".idioma [data-l]").forEach((s) => s.classList.toggle("ativo", s.dataset.l === lang));
    $$("[data-wa]").forEach((a) => { a.href = waLink(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
    renderizar();
  }

  $(".idioma")?.addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem("yb-lang", lang); } catch (e) {}
    aplicarIdioma();
  });

  /* ── Carta y programas (datos.js) ──────────────────────────────────────── */
  const itemCarta = (tr, i) => {
    const x = tr[lang] || tr.es;
    const meta = [tr.duracion, tr.precio].filter(Boolean).map(esc).join(" · ");
    return `<li class="carta-item">
      <span class="carta-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="carta-texto"><h3 class="carta-nome">${esc(x.n)}</h3><p>${esc(x.d)}</p></div>
      <div class="carta-acao">${meta ? `<span class="tr-meta">${meta}</span>` : ""}
      <a class="link-seta" target="_blank" rel="noopener" href="${waLink("tratamiento", x.n)}">${t("js.reservar")}</a></div>
    </li>`;
  };

  function renderizar() {
    const lf = $("#lista-faciales");
    if (lf) lf.innerHTML = (D.faciales || []).map(itemCarta).join("");
    const lc = $("#lista-corporales");
    if (lc) lc.innerHTML = (D.corporales || []).map(itemCarta).join("");
    if ($("#lista-hombres")) $("#lista-hombres").innerHTML = (D.hombres || []).map((h) => `<li>${esc(h[lang] || h.es)}</li>`).join("");

    const promo = $("#promo");
    if (promo) {
      const ativa = D.promo && D.promo.activa && D.promo[lang];
      promo.hidden = !ativa;
      if (ativa) promo.textContent = D.promo[lang];
    }
    const alvo = $("#bonos");
    if (alvo) alvo.innerHTML = (D.programas || []).map((p) => {
      const x = p[lang] || p.es;
      const ops = (p.sesiones || []).map((n) =>
        `<a target="_blank" rel="noopener" href="${waLink("bonos", ` (${x.n} · ${n} ${t("js.sesiones")})`)}">${n}</a>`).join("");
      return `<li class="programa"><h3>${esc(x.n)}</h3><p>${esc(x.d)}</p>
        <span class="bono-ops">${ops}<em>${t("js.sesiones")}</em></span></li>`;
    }).join("");
  }

  aplicarIdioma();

  /* ── Menú móvil ────────────────────────────────────────────────────────── */
  const menuBtn = $(".menu-btn"), menu = $("#menu");
  if (menuBtn && menu) {
    const fechar = () => { document.body.classList.remove("menu-aberto"); menuBtn.setAttribute("aria-expanded", "false"); };
    menuBtn.addEventListener("click", () => {
      const aberto = document.body.classList.toggle("menu-aberto");
      menuBtn.setAttribute("aria-expanded", String(aberto));
    });
    $$("a", menu).forEach((a) => a.addEventListener("click", fechar));
  }

  /* ── Apertura: el video se reproduce solo y las frases rotan ─────────── */
  const cine = $(".cine");
  if (cine) {
    const momentos = $$(".momento", cine);
    const video = $(".cine-video", cine);
    let i = 0, timer;
    const mostrar = (n) => momentos.forEach((m, k) => m.classList.toggle("ativo", k === n));
    mostrar(0);
    if (!reduzir && momentos.length > 1) {
      const proximo = () => {
        i = (i + 1) % momentos.length;
        mostrar(i);
        timer = setTimeout(proximo, i === momentos.length - 1 ? 7000 : 5000);
      };
      timer = setTimeout(proximo, 5000);
      // con el mouse encima de un panel se queda quieto, para poder leer o hacer clic
      momentos.forEach((m) => {
        m.addEventListener("mouseenter", () => clearTimeout(timer));
        m.addEventListener("mouseleave", () => { clearTimeout(timer); timer = setTimeout(proximo, 3000); });
      });
    }
    if (video) {
      if (reduzir) video.pause();
      else video.play().catch(() => {});
    }
    addEventListener("scroll", () => cine.classList.toggle("andou", scrollY > 40), { passive: true });
  }

  /* ── Video corporal: solo se reproduce cuando está en pantalla ─────────── */
  $$("video.arte--video").forEach((v) => {
    if (reduzir) return;
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { v.preload = "auto"; v.play().catch(() => {}); } else v.pause();
    }, { threshold: 0.15 }).observe(v);
  });

  /* ── Parallax suave en las imágenes ────────────────────────────────────── */
  const artes = reduzir ? [] : $$(".arte");
  if (artes.length) {
    const mover = () => {
      for (const a of artes) {
        const r = a.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) continue;
        const c = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        a.style.transform = `translate3d(0, ${(c * -50).toFixed(1)}px, 0) scale(1.06)`;
      }
    };
    addEventListener("scroll", () => requestAnimationFrame(mover), { passive: true });
    mover();
  }

  /* ── Cabecera, aparición y año ─────────────────────────────────────────── */
  const topo = $(".topo"), whats = $(".whats");
  let formNaTela = false;
  const aoRolar = () => {
    topo && topo.classList.toggle("rolou", scrollY > 40);
    whats && whats.classList.toggle("visivel", scrollY > innerHeight * 0.6 && !formNaTela);
  };
  const form = $(".form");
  if (form) new IntersectionObserver(([e]) => { formNaTela = e.isIntersecting; aoRolar(); }).observe(form);
  addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visto"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$(".revelar").forEach((el) => io.observe(el));
  $$("[data-ano]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ── Formulario → email ────────────────────────────────────────────────── */
  if (form && S.contato) {
    const status = $(".form-status", form);
    const botao = $("button[type=submit]", form);
    const avisar = (txt, tipo) => { status.textContent = txt; status.className = `form-status campo--inteiro ${tipo || ""}`; };
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      if (form.elements._honey.value) return;
      let valido = true;
      $$("[required]", form).forEach((c) => {
        const ok = c.type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.value) : c.value.trim().length > 1;
        c.closest(".campo").classList.toggle("erro", !ok);
        if (!ok) valido = false;
      });
      if (!valido) return avisar(t("js.verificar"), "falha");
      const dados = Object.fromEntries(new FormData(form));
      delete dados._honey;
      dados.idioma = lang;
      const assunto = S.contato.assunto || `Nueva consulta · ${S.nome || ""}`;
      let url, corpo;
      if (S.contato.web3formsChave) {
        url = "https://api.web3forms.com/submit";
        corpo = { access_key: S.contato.web3formsChave, subject: assunto, from_name: S.nome, ...dados };
      } else {
        url = `https://formsubmit.co/ajax/${encodeURIComponent(S.contato.email)}`;
        corpo = { _subject: assunto, _template: "table", _captcha: "false", ...dados };
      }
      botao.disabled = true;
      avisar(t("js.enviando"));
      try {
        const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(corpo) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || j.success === false || j.success === "false") throw new Error(j.message || r.status);
        form.reset();
        avisar(t("js.ok"), "ok");
      } catch (e) {
        console.warn("Error al enviar el formulario:", e);
        avisar(t("js.falha"), "falha");
      } finally {
        botao.disabled = false;
      }
    });
  }
})();
