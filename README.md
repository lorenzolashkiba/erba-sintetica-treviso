# 🌿 Erba Sintetica Treviso - Sito Web

Sito web professionale per la vendita e installazione di erba sintetica a Treviso.

---

## 📋 Contenuti del Progetto

```
ErbaSintetica/
├── index.html              # Homepage principale
├── style/
│   └── style.css          # Tutti gli stili del sito
├── js/
│   └── script.js          # Tutte le funzionalità JavaScript
├── images/
│   ├── hero/              # Immagini carousel homepage
│   ├── prodotti/          # Immagini prodotti
│   └── realizzazioni/     # Gallery realizzazioni
├── GUIDA_HOSTING.md       # Guida completa per pubblicare il sito
├── ISTRUZIONI_IMMAGINI.md # Come estrarre immagini dal PDF
└── README.md              # Questo file
```

---

## ✨ Caratteristiche del Sito

### Design & UX
- ✅ Design moderno e professionale
- ✅ Responsive (perfetto su mobile, tablet, desktop)
- ✅ Animazioni fluide e scroll reveal
- ✅ Lightbox per gallery immagini
- ✅ Smooth scroll tra sezioni
- ✅ Back to top button

### Sezioni Principali
1. **Hero Carousel** - Slider automatico con 3 immagini
2. **Chi Siamo** - Presentazione azienda
3. **Catalogo Prodotti** - 6 modelli di erba con specifiche tecniche
4. **Prodotti** - 3 categorie principali (Giardini, Terrazzi, Aziende)
5. **Servizi** - Elenco servizi offerti
6. **Vantaggi** - 4 benefici dell'erba sintetica
7. **Gallery** - Realizzazioni con lightbox
8. **Contatti** - Form funzionante + info contatto

### Funzionalità JavaScript
- ✅ Form di contatto con Web3Forms (email automatiche)
- ✅ Validazione form in tempo reale
- ✅ Notifiche toast per feedback
- ✅ Gallery con lightbox (click per ingrandire)
- ✅ Menu mobile hamburger
- ✅ Header con effetto scroll
- ✅ Animazioni scroll reveal

### Performance
- ✅ CSS ottimizzato
- ✅ JavaScript modulare
- ✅ Immagini ottimizzate
- ✅ Caricamento veloce

---

## 🚀 Come Pubblicare il Sito

**Leggi la guida completa:** [GUIDA_HOSTING.md](GUIDA_HOSTING.md)

### Quick Start (5 minuti):
1. Vai su https://www.netlify.com/
2. Registrati gratuitamente
3. Trascina la cartella `ErbaSintetica` nel browser
4. Il tuo sito è ONLINE! 🎉

---

## 📧 Form di Contatto

Il form è configurato con **Web3Forms** e invia le email automaticamente.

**API Key attuale:** `120ef181-e245-4536-b241-c1ccc751d471`

### Cosa riceverai via email:
- Nome del cliente
- Email del cliente
- Telefono (opzionale)
- Messaggio

### Come cambiare email di ricezione:
1. Vai su https://web3forms.com/
2. Inserisci la tua nuova email
3. Ricevi la nuova API key
4. Sostituisci la key in `index.html` (riga 392)

---

## 🎨 Personalizzazioni

### Cambiare Colori
Apri `style/style.css` e cerca questi colori principali:
- Verde principale: `#4caf50`
- Verde scuro: `#2c5e3f`
- Grigio testo: `#333`
- Sfondo: `#f9f9f9`

### Cambiare Testi
Apri `index.html` e modifica i testi nelle varie sezioni.

### Aggiungere Immagini
1. Metti le immagini nella cartella `images/`
2. Aggiorna i percorsi in `index.html`
3. Ottimizza le immagini con https://tinypng.com/

### Cambiare Contatti
Cerca in `index.html`:
- Telefono: riga ~413
- Email: riga ~414
- Indirizzo: riga ~412
- P.IVA footer: riga ~418

---

## 📱 Test Prima della Pubblicazione

### Checklist:
- [ ] Testa il form di contatto
- [ ] Verifica tutti i link del menu
- [ ] Controlla immagini su mobile
- [ ] Testa su Chrome, Firefox, Safari
- [ ] Verifica email di ricezione Web3Forms
- [ ] Aggiorna tutti i contatti (tel, email, indirizzo)
- [ ] Cambia P.IVA nel footer

### Come Testare in Locale:
1. Apri `index.html` con il browser
2. Oppure usa Live Server (VS Code extension)

---

## 🖼️ Immagini dal PDF

Per usare le immagini reali dal PDF della quotazione:
1. Leggi [ISTRUZIONI_IMMAGINI.md](ISTRUZIONI_IMMAGINI.md)
2. Estrai le immagini dei prodotti
3. Salva nella cartella `images/prodotti/`
4. Aggiorna i percorsi in `index.html`

---

## 🔧 Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Design moderno con animazioni
- **JavaScript ES6+** - Funzionalità interattive
- **Font Awesome** - Icone
- **Google Fonts** - Typography (Open Sans, Roboto, Lato)
- **Web3Forms** - Gestione form contatti

---

## 📊 SEO Ottimizzato

Il sito include:
- ✅ Meta tags ottimizzati
- ✅ Structured data (JSON-LD)
- ✅ Alt text su tutte le immagini
- ✅ Titoli H1-H6 gerarchici
- ✅ URL semantici
- ✅ Mobile-first design
- ✅ Fast loading time

### Keywords Principali:
- Erba sintetica Treviso
- Prato sintetico Treviso
- Giardino sintetico Treviso
- Vendita erba sintetica Veneto

---

## 🎯 Prossimi Passi Consigliati

Dopo la pubblicazione:

1. **Google My Business**
   - Registra l'attività su Google Maps
   - Aggiungi foto e orari

2. **Google Search Console**
   - Invia la sitemap
   - Monitora indicizzazione

3. **Google Analytics**
   - Traccia visitatori
   - Analizza comportamento utenti

4. **Social Media**
   - Facebook Business Page
   - Instagram aziendale
   - LinkedIn

5. **Marketing Locale**
   - Pubblicità Google Ads locale
   - Facebook Ads geolocalizzate
   - Partnership con garden center

---

## 🆘 Supporto

### Problemi Comuni:

**"Il form non invia email"**
```
- Verifica API key Web3Forms
- Controlla spam/posta indesiderata
- Testa con email diversa
```

**"Immagini non visibili online"**
```
- Verifica percorsi (case-sensitive)
- Ricarica pagina con Ctrl+F5
- Controlla cartella images/
```

**"Sito lento"**
```
- Ottimizza immagini (max 200KB)
- Converti in WebP
- Usa TinyPNG.com
```

---

## 📞 Contatti Sviluppo

Per modifiche o assistenza tecnica, contatta il tuo sviluppatore.

---

## 📝 Changelog

### Versione 1.0 (Novembre 2024)
- ✅ Design completo responsive
- ✅ 6 prodotti con specifiche tecniche
- ✅ Form contatti con Web3Forms
- ✅ Gallery con lightbox
- ✅ Animazioni e transizioni
- ✅ SEO ottimizzato
- ✅ Mobile-first design

---

## 📄 Licenza

© 2025 Erba Sintetica Treviso - Tutti i diritti riservati

---

**🎉 Il tuo sito è pronto per conquistare Treviso!**

Per pubblicarlo online, segui la [GUIDA_HOSTING.md](GUIDA_HOSTING.md)
