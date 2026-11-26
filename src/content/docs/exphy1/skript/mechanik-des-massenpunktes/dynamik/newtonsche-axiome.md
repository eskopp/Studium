---
title: 2.2.2 Die Newtonschen Axiome
description: Trägheit und Inertialsystem, F gleich m mal a, Impuls, actio gleich reactio, dazu Atwoodsche Fallmaschine, schiefe Ebene und Zentripetalkraft.
weight: 2
---

*In einem Satz: Die drei Axiome von Newton sagen, wie Kräfte Bewegungen verändern, und alles Weitere in der Mechanik des Massenpunktes baut darauf auf.*

## Das erste Axiom: Trägheit

> [!NOTE] Erstes Newtonsches Axiom (lex prima)
> Ein Körper bleibt in Ruhe oder in gleichförmiger, geradliniger Bewegung, solange keine äußere Kraft auf ihn wirkt. Die Ursache jeder Bewegungsänderung ist eine äußere Kraft.
>
> Ein Bezugssystem, in dem sich ein kräftefreier Körper so verhält, heißt **Inertialsystem**. Die Eigenschaft eines Körpers, sich Beschleunigungen zu widersetzen, ist seine **träge Masse** $m_\mathrm{t}$. Der Bewegungszustand wird durch den **Impuls** gemessen:
>
> $$ \mathbf{p} = m_\mathrm{t}\,\mathbf{v} , \qquad [p] = \mathrm{kg\,m/s} . $$

> [!TIP] In einfachen Worten
> Wer im Bus steht und der Bus bremst, fliegt nach vorn. Der Körper möchte seine Geschwindigkeit behalten. Das Axiom sagt auch, dass es besondere Bezugssysteme gibt, in denen das ohne Zutun gilt. Wie diese Systeme zueinander stehen, steht in [3.1 Inertialsysteme und Galilei-Transformation](/exphy1/skript/bewegte-bezugssysteme/inertialsysteme-und-galilei-transformation/).

## Das zweite Axiom: Kraft und Beschleunigung

> [!NOTE] Zweites Newtonsches Axiom (lex secunda)
> Die Kraft ist das Produkt aus träger Masse und Beschleunigung:
>
> $$ \mathbf{F} = m_\mathrm{t}\,\mathbf{a} = \dot{\mathbf{p}} . $$
>
> Ein **Newton** ist die Kraft, die einem Körper von $1\,\mathrm{kg}$ die Beschleunigung $1\,\mathrm{m/s^2}$ erteilt. Die Form $\mathbf{F} = \dot{\mathbf{p}}$ entspricht Newtons eigener Formulierung und gilt auch, wenn sich die Masse ändert, zum Beispiel bei einer Rakete.

> [!TIP] In einfachen Worten
> Eine doppelt so große Kraft gibt die doppelte Beschleunigung. Eine doppelt so große Masse gibt bei gleicher Kraft die halbe Beschleunigung. Im Versuch kann man das auf einer Luftkissenbahn zeigen: Ein Schlitten wird mit einer Feder gezogen, und mit einem zweiten Schlitten obendrauf halbiert sich die Beschleunigung bei gleicher Federdehnung.

> [!CAUTION] Stolperstelle
> Das zweite Axiom ist eine Näherung für kleine Geschwindigkeiten. Wenn die Geschwindigkeit ein merklicher Teil der Lichtgeschwindigkeit ist, hängt die Trägheit von der Geschwindigkeit ab. Das behandelt die spezielle Relativitätstheorie. Für alle Aufgaben in der klassischen Mechanik gilt $\mathbf{F} = m\mathbf{a}$ aber sehr gut.

## Das dritte Axiom: actio gleich reactio

> [!NOTE] Drittes Newtonsches Axiom (lex tertia)
> Die Kräfte, die zwei Körper $a$ und $b$ aufeinander ausüben, sind entgegengesetzt gleich:
>
> $$ \mathbf{F}_{ab} = -\mathbf{F}_{ba} . $$

> [!TIP] In einfachen Worten
> Wenn du gegen eine Wand drückst, drückt die Wand mit derselben Kraft gegen dich. Die beiden Kräfte greifen an verschiedenen Körpern an. Das gilt auch ohne Seil oder Faden dazwischen, zum Beispiel für Magnete oder die Anziehung zwischen Erde und Mond.

## Drei Anwendungen

### Die Atwoodsche Fallmaschine

Über eine Umlenkrolle hängen zwei Körper mit den Massen $M + m_\ell$ (links) und $M + m_\mathrm{r}$ (rechts) an einem masselosen Faden, mit $m_\ell < m_\mathrm{r}$. Die beschleunigende Kraft ist der Unterschied der Gewichtskräfte, $(m_\mathrm{r} - m_\ell)\,g$. Beschleunigt wird die gesamte träge Masse $2M + m_\mathrm{r} + m_\ell$. Also ist

$$
a = \frac{m_\mathrm{r} - m_\ell}{2M + m_\mathrm{r} + m_\ell}\,g .
$$

Beispiel mit $M = 0{,}50\,\mathrm{kg}$, $m_\ell = 0{,}10\,\mathrm{kg}$ und $m_\mathrm{r} = 0{,}30\,\mathrm{kg}$ (frei gewählt): $a = \frac{0{,}20}{1{,}40}\cdot 9{,}81\,\mathrm{m/s^2} \approx 1{,}4\,\mathrm{m/s^2}$. Die Maschine verlangsamt den Fall und macht ihn messbar.

### Die schiefe Ebene

Auf einer reibungsfreien schiefen Ebene beschleunigt nur die Hangabtriebskraft: $m_\mathrm{t}\,a = m_\mathrm{s}\,g\sin\alpha$. Misst man die Beschleunigung, kann man den Ortsfaktor bestimmen:

$$
g = \frac{m_\mathrm{t}}{m_\mathrm{s}}\cdot\frac{a}{\sin\alpha} .
$$

Solche Messungen liefern am Nord- und Südpol etwa $9{,}832\,\mathrm{m/s^2}$ und am Äquator etwa $9{,}787\,\mathrm{m/s^2}$. Die Erdbeschleunigung ist also nicht überall gleich. Das **Geoid** ist die Fläche gleichen Schwerepotentials, die man aus Satellitenmessungen kennt, und es weicht deutlich von einem Ellipsoid ab.

### Die Zentripetalkraft

Bei der gleichförmigen Kreisbewegung gibt es die Zentripetalbeschleunigung $a_\mathrm{Z} = -(v^2/r)\,\mathbf{e}_r$. Nach dem zweiten Axiom gehört dazu die **Zentripetalkraft**

$$
\mathbf{F}_\mathrm{Z} = m_\mathrm{t}\,\mathbf{a}_\mathrm{Z} = -\frac{m\,v^2}{r}\,\mathbf{e}_r .
$$

Wodurch sie aufgebracht wird, hängt vom Fall ab, bei einem Stein an der Schnur ist es die Seilkraft.

## Weiter

- [2.2.2.1 Welche Kräfte wirken?](/exphy1/skript/mechanik-des-massenpunktes/dynamik/welche-kraefte-wirken/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.2.2 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
