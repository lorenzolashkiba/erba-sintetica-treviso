# Come Estrarre e Usare le Immagini dal PDF

## Passo 1: Estrarre le Immagini dal PDF

### Metodo 1: Usando Adobe Acrobat (se disponibile)
1. Apri il file `Quotation Grass.pdf` con Adobe Acrobat
2. Vai su **Tools** > **Export PDF**
3. Scegli formato **Image** > **JPEG** o **PNG**
4. Clicca su **Export** e salva le immagini

### Metodo 2: Online (Gratuito)
1. Vai su https://www.ilovepdf.com/pdf_to_jpg
2. Carica il file `Quotation Grass.pdf`
3. Scarica le immagini estratte

### Metodo 3: Screenshot (Veloce)
1. Apri il PDF
2. Ingrandisci la sezione con l'immagine del prodotto
3. Fai uno screenshot della zona dell'immagine
4. Ritaglia l'immagine per isolare solo l'erba

## Passo 2: Nominare e Salvare le Immagini

Salva le immagini nella cartella `images/prodotti/` con questi nomi:

| Prodotto nel PDF | Nome File da Usare |
|------------------|-------------------|
| DMX8290-45-16 (45mm Premium) | `erba_premium_45mm.jpg` |
| DM8366-50-18 (50mm Lusso) | `erba_lusso_50mm.jpg` |
| DMPG170-2516 (25mm Economy) | `erba_economy_25mm.jpg` |
| DMPG65M3-2514 (25mm Standard) | `erba_standard_25mm.jpg` |
| DMPGCP-2-3016 (30mm) | `erba_standard_30mm.jpg` |
| DTPC3-1530 (15mm Sport Blu) | `erba_sport_15mm.jpg` |
| DTPC2-1525 (15mm Sport Verde) | `erba_sport_verde_15mm.jpg` |
| W8568-50165 (50mm Professional) | `erba_professional_50mm.jpg` |

## Passo 3: Aggiornare il Codice HTML

Una volta estratte e salvate le immagini, sostituisci i percorsi nel file `index.html`:

### Trova e sostituisci:

**Prodotto 1 - Premium 45mm:**
```html
<img src="images/prodotti/erba_premium_45mm.jpg" alt="Erba sintetica premium 45mm per giardini">
```

**Prodotto 2 - Lusso 50mm:**
```html
<img src="images/prodotti/erba_lusso_50mm.jpg" alt="Erba sintetica lusso 50mm per giardini">
```

**Prodotto 3 - Economy 25mm:**
```html
<img src="images/prodotti/erba_economy_25mm.jpg" alt="Erba sintetica economica 25mm per terrazzi">
```

**Prodotto 4 - Standard 30mm:**
```html
<img src="images/prodotti/erba_standard_30mm.jpg" alt="Erba sintetica standard 30mm per bordi piscina">
```

**Prodotto 5 - Sport 15mm:**
```html
<img src="images/prodotti/erba_sport_15mm.jpg" alt="Erba sintetica sportiva blu 15mm">
```

**Prodotto 6 - Professional 50mm:**
```html
<img src="images/prodotti/erba_professional_50mm.jpg" alt="Erba sintetica professionale 50mm per aziende">
```

## Passo 4: Ottimizzare le Immagini (Opzionale ma Raccomandato)

Per migliorare le prestazioni del sito:

1. Vai su https://tinypng.com/
2. Carica le immagini estratte
3. Scarica le versioni ottimizzate
4. Sostituisci le immagini nella cartella `images/prodotti/`

## Note Importanti

- Le immagini dovrebbero essere in formato **JPG** o **WebP** per le migliori prestazioni
- Dimensione consigliata: **800x600 pixel** o superiore
- Peso massimo consigliato: **200KB per immagine**
- Assicurati che le immagini siano ben illuminate e mostrino chiaramente la texture dell'erba

---

## Struttura Cartelle Immagini

```
images/
├── hero/
│   ├── erba_sintetica_golf.jpg
│   ├── erba_sintetica_calcio.webp
│   └── erba_sintetica_azienda3.jpg
├── prodotti/
│   ├── erba_premium_45mm.jpg          ← NUOVE IMMAGINI DAL PDF
│   ├── erba_lusso_50mm.jpg            ← NUOVE IMMAGINI DAL PDF
│   ├── erba_economy_25mm.jpg          ← NUOVE IMMAGINI DAL PDF
│   ├── erba_standard_30mm.jpg         ← NUOVE IMMAGINI DAL PDF
│   ├── erba_sport_15mm.jpg            ← NUOVE IMMAGINI DAL PDF
│   ├── erba_professional_50mm.jpg     ← NUOVE IMMAGINI DAL PDF
│   ├── erba_sintetica_giardini1.jpg
│   ├── erba_sintetica_terrazzi_1.webp
│   └── erba_sintetica_azienda2.jpg
└── realizzazioni/
    ├── erba_sintetica_giardini.jpg
    ├── erba_sintetica_piscina.jpg
    └── ...
```
