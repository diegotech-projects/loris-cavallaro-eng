# Introduction

I need to do a landing website for a civil engineer friends of mine, his company will be called XYZENGINEERING and his name is Loris Cavallaro. I am a developer but I almost never used frontend. I already set up a template project about medical services because I wanted a starting point since I don't want to mess around with css and html. The technologies used are Nextjs, Tailwind and next-intl for internationalization.

The final website should present the civil engineering service, be multilingual (ita (default) and eng), have a contact info box, be responsive (probably is already), cookie management, have a cms like sanity to let him be able to edit the content of the website (text, img, documents)

## References

I will attach the actual screenshot of different pages; the pages of a reference website, and the content (text, pictures, video, documents) that I have, because I wouldn't even know how to design/structure these elements in the website.


## Actual template we start from

![alt text](src/_docs/current_page/current_page.jpeg)

## Reference website (to take as inspiration not copy)

Link

https://gadstudio.eu/

Some screenshot

- HOME (https://gadstudio.eu/)

![alt text](src/_docs/ref/ref_home.jpeg)

- LA FORMULA (https://gadstudio.eu/la-formula-gad/)

![alt text](src/_docs/ref/ref_la-formula-gad.jpeg)

- PROGETTI list (https://gadstudio.eu/progetti/)

![alt text](src/_docs/ref/ref_progetti.jpeg)

- PROGETTI detail (https://gadstudio.eu/portfolio/via-pola-9-11/)

![alt text](src/_docs/ref/ref_progetti_details.jpeg)

- SERVIZI (https://gadstudio.eu/servizi/)

![alt text](src/_docs/ref/ref_servizi.jpeg)

- CONTATTI (https://gadstudio.eu/contatti/)

![alt text](src/_docs/ref/ref_contatti.jpeg)


## Material at our disposal and vocal requirements (media under src/_docs/data/)

```
INGEGNERE CIVILE AMBIENTALE, PROGETTISTA EDILE

Loris Cavallaro
ingegnere civile e ambientale per contribuire a realizzare progetti di grande valore. con una laurea magistrale in sicurezza sui luoghi di lavoro, Loris e il professionista che si occupa di bandi di gara, gare d’appalto, progettazioni civili, pratiche urbanistiche, diagnosi legge 10, APE convenzionale e progettazione di impianti fotovoltaici. Insomma, un vero e proprio punto di riferimento quando si parla di progettazione e sostenibilità.
Mission: vedere che ciò che crea sulla carta si trasforma in realtà tangibile, costruendo non solo strutture, ma anche bellezza e funzionalità, è per lui l’aspetto più gratificante di far parte di questa realtà.


loriscavallaro22@gmail.com
Ingegnerelorising@gmail.com

La pec la inseriamo poi 

3801477121
```
```
Puoi formulare anche con ia una breve descrizione che si avvicina a questo tipo di scrittura

Impostato come un portfolio professionale, con sezioni chiare:

1. Home
Hero image con una tua foto o un progetto

Claim: “Ingegneria civile per l’architettura moderna”

Pulsante: [Scopri i progetti]

2. Chi sono
Breve bio: laurea, anni di esperienza, specializzazione in edilizia civile e sostenibile

Valori: funzionalità, estetica, rispetto ambientale

3. Servizi
Progettazione strutturale

Direzione lavori

Ristrutturazioni e ampliamenti

Verifiche statiche e collaudi

Consulenze tecniche

4. Progetti
Griglia con immagini realistiche e descrizioni brevi:

“Villa minimalista in collina”

“Ristrutturazione urbana in stile contemporaneo”

“Palazzina residenziale con classe energetica A+”

“Interni open-space su misura”

5. Contatti
Form semplice

Mail, telefono

Mappa con sede (es. Palermo, Milano…)
```

# How to proceed

I gave you all context just to be aware of the final result, but I would proceed per step, implementing one requirement per time.
My main issue is not to be expert with nextjs best practices and really bad at html and css, also having no fantasy about design and where is better to put things. By the way I am a developer so something, once understood how it works, I can do it so for instance once understood how to setup sanity, or translations (I already setup something) I can do it.
