---
title: Inertialsysteme und Galilei-Transformation
description: Wie Bewegungen in zwei gleichförmig gegeneinander bewegten Systemen aussehen und wann Trägheitskräfte nötig werden.
weight: 1
---

*In einem Satz: Wer sich gleichförmig bewegt, kann das mit keinem Experiment feststellen, wer beschleunigt, spürt es sofort.*

## Inertialsystem

> [!NOTE] Definition
> Ein **Inertialsystem** ist ein Bezugssystem, in dem der Newtonsche Trägheitssatz gilt: Ein Körper, auf den keine Kraft wirkt, bleibt in Ruhe oder bewegt sich geradlinig mit konstanter Geschwindigkeit. Jedes System, das relativ zu einem Inertialsystem ruht oder sich mit konstanter Geschwindigkeit in konstanter Richtung bewegt, ist wieder ein Inertialsystem.

> [!TIP] In einfachen Worten
> Ein Bezugssystem ist der Standpunkt, von dem aus man misst. Ein Inertialsystem ist ein Standpunkt, der selbst nicht beschleunigt. Dort verhält sich ein Körper ohne Kraft so, wie man es aus der Schule kennt. Ein ruhender Bahnsteig und ein Zug, der gleichmäßig geradeaus fährt, sind beide Inertialsysteme.

## Galilei-Transformation

> [!NOTE] Definition
> Zwei Inertialsysteme $S$ und $S'$ bewegen sich mit der konstanten Geschwindigkeit $\mathbf{u}$ gegeneinander. Für einen Massenpunkt gelten dann, solange $|\mathbf{u}| \ll c$ ist ($c$: Lichtgeschwindigkeit), die Transformationsgleichungen
>
> $$ \mathbf{r} = \mathbf{r}' + \mathbf{u}\,t, \qquad \mathbf{v} = \mathbf{v}' + \mathbf{u}, \qquad \mathbf{a} = \mathbf{a}', \qquad t = t' $$
>
> $\mathbf{r}$, $\mathbf{v}$, $\mathbf{a}$ sind Ort, Geschwindigkeit und Beschleunigung in $S$, die gestrichenen Größen gehören zu $S'$.

> [!TIP] In einfachen Worten
> Die Formel sagt: Ort und Geschwindigkeit sehen aus beiden Systemen verschieden aus, die Beschleunigung nicht. Weil die Beschleunigung gleich ist, ist auch die Kraft $\mathbf{F} = m\mathbf{a}$ gleich. Darum sagt das **Newtonsche Relativitätsprinzip**: Kein mechanisches Experiment zeigt, ob sich ein Inertialsystem relativ zu einem anderen bewegt.

### Beispiel

Ein Zug fährt mit $u = 20\,\mathrm{m/s}$ am Bahnsteig vorbei. Im Zug wirft jemand einen Ball mit $v' = 5\,\mathrm{m/s}$ in Fahrtrichtung. Vom Bahnsteig aus gilt

$$
v = v' + u = 5\,\mathrm{m/s} + 20\,\mathrm{m/s} = 25\,\mathrm{m/s} .
$$

Beschleunigt der Werfer den Ball während des Wurfs mit $a' = 10\,\mathrm{m/s^2}$, dann misst der Beobachter am Bahnsteig ebenfalls $a = 10\,\mathrm{m/s^2}$.

> [!CAUTION] Stolperstelle
> Die Galilei-Transformation gilt nur für Geschwindigkeiten weit unter der Lichtgeschwindigkeit. Bei hohen Geschwindigkeiten braucht man die spezielle Relativitätstheorie.

### Herleitung

Aus $\mathbf{r} = \mathbf{r}' + \mathbf{u}\,t$ folgt durch Ableiten nach der Zeit, mit konstantem $\mathbf{u}$ und $t = t'$,

$$
\mathbf{v} = \dot{\mathbf{r}} = \dot{\mathbf{r}}{}' + \mathbf{u} = \mathbf{v}' + \mathbf{u} .
$$

Ein weiteres Ableiten ergibt $\mathbf{a} = \dot{\mathbf{v}} = \dot{\mathbf{v}}{}' = \mathbf{a}'$, denn $\mathbf{u}$ ist konstant.

## Beschleunigte Systeme und Trägheitskräfte

> [!NOTE] Definition
> Ist $S'$ gegenüber einem Inertialsystem $S$ mit der Beschleunigung $\mathbf{a}_S$ beschleunigt, dann gilt $F = ma$ in $S'$ nur, wenn man zusätzlich die **Trägheitskraft** (auch Scheinkraft oder Pseudokraft)
>
> $$ \mathbf{F}_T = -m\,\mathbf{a}_S $$
>
> einführt. **D'Alembertsches Prinzip:** Im mitbeschleunigten System ist die Summe aus den äußeren Kräften und den Trägheitskräften null.

> [!TIP] In einfachen Worten
> Wer im anfahrenden Bus steht, wird nach hinten gedrückt. Aus Sicht der Straße stimmt das nicht: Dein Körper will nur geradeaus weiterfahren, der Bus beschleunigt unter dir weg. Aus Sicht des Busses wirkt aber wirklich eine Kraft nach hinten. Diese Kraft nennt man Trägheitskraft. Sie gibt es nur in beschleunigten Systemen und hat keinen Verursacher, an dem man sie ablesen könnte.

### Beispiel: Fahrstuhl

Eine Person mit $m = 70\,\mathrm{kg}$ steht in einem Fahrstuhl, der mit $a = 2\,\mathrm{m/s^2}$ nach oben beschleunigt. Im Fahrstuhl wirkt zusätzlich zur Gewichtskraft die Trägheitskraft $ma$ nach unten. Die Waage muss beides tragen:

$$
F = m(g + a) = 70\,\mathrm{kg} \cdot (9{,}81\,\mathrm{m/s^2} + 2\,\mathrm{m/s^2}) \approx 827\,\mathrm{N} .
$$

Ohne Beschleunigung zeigt die Waage $70\,\mathrm{kg} \cdot 9{,}81\,\mathrm{m/s^2} \approx 687\,\mathrm{N}$.

> [!CAUTION] Stolperstelle
> Trägheitskräfte sind keine Wechselwirkungskräfte. Sie haben keine Gegenkraft im Sinne des dritten Newtonschen Gesetzes. Man führt sie nur ein, damit $F = ma$ im beschleunigten System weiter benutzbar ist.

## Weiter

Eine wichtige Sorte beschleunigter Systeme sind Drehungen, siehe [Rotierende Bezugssysteme](/experimentalphysik/1-mechanik-und-thermodynamik/bewegte-bezugssysteme/rotierende-bezugssysteme/). Aus der Galilei-Invarianz folgt auch der Impulserhaltungssatz bei Stößen, siehe [Stöße](/experimentalphysik/1-mechanik-und-thermodynamik/systeme-von-massenpunkten/stoesse/).

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Kapitel 3 und Skriptum Kapitel 3
- W. Demtröder, Experimentalphysik 1 (Springer, 2006), auf den Folien als Quelle der Bilder genannt
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
