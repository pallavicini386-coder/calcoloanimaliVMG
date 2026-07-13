# 🚀 GUIDA RAPIDA AL DEPLOY SU NETLIFY

## ✅ Stato dei File

Tutti i file sono pronti per il deploy:
- ✅ index.html (app PWA completa)
- ✅ manifest.json (configurazione PWA)
- ✅ sw.js (Service Worker offline)
- ✅ Tutte le immagini (icon192, icon512, iconmaskable, splash)
- ✅ netlify.toml (config Netlify ottimizzata)

## 📋 3 METODI PER FARE IL DEPLOY

### METODO 1️⃣: DRAG & DROP (Più veloce - 30 sec)

1. Vai a: **https://app.netlify.com/drop**
2. Seleziona TUTTI questi file:
   - index.html
   - manifest.json
   - sw.js
   - netlify.toml
   - icon192.png
   - icon512.png
   - iconmaskable512.png
   - splash750x1334.png
   - appletouchicon.png

3. Trascina e rilascia nella pagina
4. Attendi 10-20 secondi
5. **DONE!** La tua app è online

Ti darà un URL tipo: `https://[random-name].netlify.app`

---

### METODO 2️⃣: GIT (Consigliato per team)

```bash
# 1. Inizializza il repo locale
git init
git add .
git commit -m "Initial commit: Calcolo Animali PWA"

# 2. Push su GitHub
git remote add origin https://github.com/[username]/calcolo-animali
git branch -M main
git push -u origin main

# 3. Su Netlify:
# - Vai a https://netlify.com
# - Click "New site from Git"
# - Seleziona il repo
# - Build: (lascia vuoto)
# - Publish: (lascia radice /)
# - Click Deploy

# 4. Fatto! Netlify deployerà ad ogni push
```

---

### METODO 3️⃣: NETLIFY CLI (Per sviluppatori)

```bash
# 1. Installa
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
cd /path/to/your/files
netlify deploy

# 4. Per deploy futuro (optional)
netlify deploy --prod
```

---

## 🎯 DOPO IL DEPLOY

### Testa la PWA:

**Desktop (Chrome/Edge):**
1. Apri DevTools (F12)
2. Application → Service Workers
3. Verifica che sia registrato ✅

**Mobile:**
1. Usa Chrome su Android
2. Tocca il menu (⋮) → "Install app"
3. O aggiungi alla home screen

**iOS (Safari):**
1. Tocca Condividi (↗️)
2. "Aggiungi alla schermata principale"
3. Apri dalla home screen

---

## ⚙️ CONFIGURAZIONE DNS CUSTOM (Opzionale)

Se vuoi usare un dominio Tezza:

1. Netlify → Sito → Site Settings → Domain management
2. Aggiungi dominio custom
3. Segui le istruzioni per il DNS

Esempio: `calc.tezza.it` → app

---

## 🔍 CHECKLIST PRE-DEPLOY

- [ ] Tutti i file sono nella cartella?
- [ ] Nessun file duplicato?
- [ ] index.html + manifest.json + sw.js presenti?
- [ ] Immagini (.png) caricate?
- [ ] netlify.toml presente?

---

## ❓ PROBLEMI COMUNI

**"404 Not Found"**
→ Controlla che netlify.toml sia caricato

**"Service Worker non si registra"**
→ Assicurati che l'app sia su HTTPS (Netlify lo fa auto)

**"Immagini non caricate"**
→ Verifica che i percorsi siano `/icon192.png` (con slash iniziale)

**"App non funziona offline"**
→ DevTools → Application → Service Workers → Verifica registrazione

---

## 📊 RISULTATO ATTESO

Dopo il deploy vedrai:
- ✅ App caricata in <1 secondo
- ✅ Funziona senza connessione
- ✅ Icon della app installabile
- ✅ HTTPS attivo automaticamente
- ✅ Velocità A+ su Lighthouse

---

**Hai dei dubbi? Contattaci!**

