# 📱 Calcolo Animali Tezza - PWA

App PWA per il calcolo di capi e densità di allevamento di Tezza SRL.

## ✨ Caratteristiche

- **Progressive Web App** - Funziona come app nativa su iOS e Android
- **Offline First** - Lavora completamente senza connessione
- **Sincronizzazione** - Invia automaticamente i dati quando sei online
- **Cross-browser** - Safari, Chrome, Edge, Firefox
- **Responsive** - Perfetto su mobile, tablet e desktop

## 📦 File Structure

```
/
├── index.html          # App principale
├── manifest.json       # Configurazione PWA
├── sw.js              # Service Worker
├── icon192.png        # Icon 192x192
├── icon512.png        # Icon 512x512
├── iconmaskable512.png # Icon mascherabile
└── splash750x1334.png  # Splash screen iOS
```

## 🚀 Deploy su Netlify

### Opzione 1: Tramite Git (consigliato)

1. Push il repo su GitHub
2. Accedi a [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Seleziona il repo
5. Configurazione:
   - **Build command**: (lascia vuoto)
   - **Publish directory**: `/` (directory radice)
6. Deploy!

### Opzione 2: Drag & Drop

1. Seleziona tutti i file (index.html, manifest.json, sw.js, immagini)
2. Trascina su [app.netlify.com/drop](https://app.netlify.com/drop)
3. Fatto!

### Opzione 3: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

## ⚙️ Configurazione Netlify

Aggiungi questo file `netlify.toml` nella radice per configurazioni avanzate:

```toml
# netlify.toml
[build]
  command = ""
  publish = "/"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/manifest.json"
  [headers.values]
    Content-Type = "application/manifest+json"
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"
```

## 📝 Note Importanti

- **HTTPS**: Netlify fornisce HTTPS automaticamente (necessario per Service Worker)
- **Dominio**: Puoi usare il dominio netlify.app o uno custom
- **Cache**: Il Service Worker cachera i file automaticamente

## 🔧 Troubleshooting

**L'app non funziona offline?**
- Assicurati che il Service Worker sia registrato (apri DevTools → Application)
- Controlla che tutti i file siano caricati senza errori

**Icon non appare?**
- Svuota cache del browser
- Usa percorsi assoluti (con `/`)

**Problemi su iOS?**
- Aggiungi alla home screen e riapri
- Svuota i dati dell'app (iOS limita il cache)

## 📞 Supporto

Per modifiche o problemi, contatta il team di sviluppo.

---

**Versione**: 1.0  
**Build**: Production Ready ✅
