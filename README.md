# Counter App

Questa è una semplice applicazione web che implementa un contatore incrementabile e decrementabile. L'utente può aumentare o diminuire il valore del contatore tramite i pulsanti `+1` e `-1`.

## Funzionalità

- L'applicazione mostra un valore iniziale di `0` e permette all'utente di aumentare o diminuire il valore cliccando sui pulsanti.
- Gli elementi della pagina, come il titolo, il paragrafo esplicativo, i pulsanti e il contatore, vengono generati dinamicamente tramite manipolazione del DOM con JavaScript.
- Accessibilità migliorata tramite l'uso di attributi `aria-label` per i pulsanti.

## Struttura del Progetto

### HTML
Tutti gli elementi della pagina (titolo, testo, pulsanti e contatore) vengono creati dinamicamente utilizzando JavaScript, senza che ci sia un file HTML predefinito con questi elementi.

### JavaScript
Lo script utilizza l'API del DOM per creare e gestire gli elementi. Una volta caricata la pagina, lo script costruisce gli elementi e attiva i pulsanti per incrementare o decrementare il contatore.

### CSS
Le classi `container` e `operation` vengono assegnate agli elementi per permettere la gestione dello stile tramite CSS. Queste classi possono essere personalizzate per applicare stili ai pulsanti e al layout del contatore.

## Come Funziona

1. All'avvio, viene creato un titolo `<h1>` che mostra "counter".
2. Viene creato un paragrafo `<p>` che spiega l'uso dell'applicazione.
3. Vengono creati due pulsanti: `+1` per incrementare il valore del contatore e `-1` per decrementarlo.
4. Il valore del contatore viene inizialmente impostato su `0` e mostrato in un `<div>`.
5. Quando l'utente clicca sui pulsanti, il valore del contatore cambia dinamicamente e viene aggiornato nel display.

## Guida all'Uso

### Requisiti

- Un browser web moderno con supporto per JavaScript.

### Istruzioni

1. Copia il codice JavaScript nel tuo file principale (ad esempio, `script.js`).
2. Aggiungi un file HTML di base che includa lo script.
3. Apri l'HTML nel tuo browser. Quando la pagina viene caricata, vedrai il titolo, il testo esplicativo, e i pulsanti per interagire con il contatore.