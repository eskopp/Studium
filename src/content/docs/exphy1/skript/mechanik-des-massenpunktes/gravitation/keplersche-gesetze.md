---
title: 2.5.1 Keplersche Gesetze
description: Die drei Gesetze der Planetenbewegung und warum das zweite Gesetz die Erhaltung des Drehimpulses ist.
weight: 1
---

*In einem Satz: Planeten laufen auf Ellipsen, überstreichen in gleichen Zeiten gleiche Flächen, und das Quadrat der Umlaufzeit wächst mit der dritten Potenz der Halbachse.*

## Die drei Gesetze

Johannes Kepler hat sie aus den Beobachtungen von Tycho Brahe gefunden.

> [!NOTE] Die Keplerschen Gesetze
> 1. **Erstes Gesetz:** Die Planeten bewegen sich auf Ellipsen, in deren einem Brennpunkt die Sonne steht.
> 2. **Zweites Gesetz:** Der Fahrstrahl von der Sonne zum Planeten überstreicht in gleichen Zeiten gleiche Flächen.
> 3. **Drittes Gesetz:** Die Quadrate der Umlaufzeiten verhalten sich wie die dritten Potenzen der großen Halbachsen:
>
> $$ \frac{T^2}{a^3} = \text{konstant} . $$

Zur Ellipse gehören die **große Halbachse** $a$ und die **kleine Halbachse** $b$. Die **Exzentrizität** $\varepsilon$ gibt an, wie weit die Bahn von einem Kreis abweicht ($\varepsilon = 0$ ist ein Kreis). Der sonnennächste Punkt heißt **Perihel**, der sonnenfernste **Aphel**. Der **Fahrstrahl** ist der Ortsvektor von der Sonne zum Planeten.

> [!TIP] In einfachen Worten
> Eine Ellipse ist ein gestauchter Kreis. Nahe der Sonne läuft der Planet schneller, weit weg langsamer, so dass der Fahrstrahl in jeder Sekunde dieselbe Fläche wie ein Tortenstück überstreicht. Und ein Planet mit dem vierfachen Abstand braucht nicht die vierfache, sondern die achtfache Umlaufzeit, denn $4^{3/2} = 8$.

### Beispiel

Die Erde hat die große Halbachse $a = 1{,}496\cdot 10^{11}\,\mathrm{m}$ und die Exzentrizität $\varepsilon = 0{,}0167$. Dann ist

$$
r_\mathrm{Perihel} = a\,(1 - \varepsilon) \approx 1{,}471\cdot 10^{11}\,\mathrm{m} , \qquad r_\mathrm{Aphel} = a\,(1 + \varepsilon) \approx 1{,}521\cdot 10^{11}\,\mathrm{m} .
$$

Die Bahn ist also fast ein Kreis. Wendet man das dritte Gesetz an, braucht ein Planet mit $a = 4\,a_\mathrm{Erde}$ genau $8$ Jahre.

> [!CAUTION] Stolperstelle
> Die Sonne steht im **Brennpunkt**, nicht im Mittelpunkt der Ellipse. Das dritte Gesetz gilt mit der **großen Halbachse**, nicht mit dem Abstand im Perihel oder im Aphel. Und für alle Planeten um dieselbe Sonne ist die Konstante gleich, für ein anderes Zentralgestirn hat sie einen anderen Wert.

## Das zweite Gesetz ist die Drehimpulserhaltung

Der Fahrstrahl $\mathbf{r}$ überstreicht in der kurzen Zeit $\mathrm{d}t$ näherungsweise ein Dreieck mit der Fläche

$$
\mathrm{d}A = \tfrac{1}{2}\,|\mathbf{r}|\,|\mathbf{v}\,\mathrm{d}t|\,\sin\alpha .
$$

Daraus folgt

$$
\frac{\mathrm{d}A}{\mathrm{d}t} = \tfrac{1}{2}\,|\mathbf{r}|\,|\mathbf{v}|\,\sin\alpha = \frac{1}{2m}\,|\mathbf{r}\times\mathbf{p}| = \frac{|\mathbf{L}|}{2m} .
$$

Das zweite Gesetz sagt $\mathrm{d}A/\mathrm{d}t = \text{konstant}$, also ist $\mathbf{L}$ konstant. Man kann daraus mit Newton schließen, dass die Gravitationskraft eine **Zentralkraft** ist, siehe [2.4](/exphy1/skript/mechanik-des-massenpunktes/drehimpuls-und-drehmoment/).

## Weiter

- [2.5.2 Newtonsches Gravitationsgesetz](/exphy1/skript/mechanik-des-massenpunktes/gravitation/newtonsches-gravitationsgesetz/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.5.1 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und das Rechenbeispiel stammen nicht aus der Vorlesung. Die Werte für die Erde habe ich nachgerechnet.
