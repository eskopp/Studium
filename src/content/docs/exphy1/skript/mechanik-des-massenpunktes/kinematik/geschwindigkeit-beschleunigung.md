---
title: 2.1.3 und 2.1.4 Geschwindigkeit und Beschleunigung
description: Mittlere und momentane Geschwindigkeit, die Beschleunigung als Ableitung der Geschwindigkeit und der Weg zurück durch Integration.
weight: 2
---

*In einem Satz: Die Geschwindigkeit ist die Ableitung des Ortes nach der Zeit, die Beschleunigung ist die Ableitung der Geschwindigkeit, und mit Integralen kommt man zurück.*

## Geschwindigkeit

> [!NOTE] Definition
> Bei einer gleichförmigen, geradlinigen Bewegung ist die Geschwindigkeit die Strecke je Zeit, $v = \Delta x/\Delta t$. Bei einer ungleichförmigen Bewegung gibt die **mittlere Geschwindigkeit** zwischen zwei Zeiten die Steigung der Sekante an:
>
> $$ \bar{v} = \frac{x_2 - x_1}{t_2 - t_1} . $$
>
> Die **momentane Geschwindigkeit** ist die zeitliche Ableitung des Ortsvektors, die Steigung der Tangente:
>
> $$ \mathbf{v}(t) = \dot{\mathbf{r}}(t) = \frac{\mathrm{d}\mathbf{r}}{\mathrm{d}t} . $$
>
> Sie zeigt in Richtung der Tangente an die Bahnkurve. Ihr Betrag ist $v = |\mathbf{v}|$, die Einheit ist $\mathrm{m/s}$. Eine Bewegung heißt **gleichförmig**, wenn $\mathbf{v}$ nach Betrag und Richtung konstant ist.

> [!TIP] In einfachen Worten
> Der Tacho zeigt die momentane Geschwindigkeit, die Fahrtzeit von Ilmenau nach Erfurt geteilt durch die Strecke ergibt die mittlere. Die momentane Geschwindigkeit ist der Grenzfall, bei dem man die Zeitspanne immer kürzer macht, bis die Sekante zur Tangente wird.

![Eine ansteigende Kurve x(t). Die Sekante durch zwei Punkte hat die Steigung der mittleren Geschwindigkeit, die Tangente im ersten Punkt die der momentanen Geschwindigkeit.](/images/exphy1/sekante-tangente.svg)

*Eigene Zeichnung: Sekante und Tangente im Ort-Zeit-Diagramm.*

## Beschleunigung

> [!NOTE] Definition
> Die **momentane Beschleunigung** ist die zeitliche Ableitung der Geschwindigkeit und damit die zweite Ableitung des Ortes:
>
> $$ \mathbf{a}(t) = \dot{\mathbf{v}}(t) = \ddot{\mathbf{r}}(t) = \frac{\mathrm{d}^2\mathbf{r}}{\mathrm{d}t^2} . $$
>
> Ihr Betrag ist $a = |\mathbf{a}|$, die Einheit ist $\mathrm{m/s^2}$. In kartesischen Komponenten mit den Einheitsvektoren $\mathbf{e}_x$, $\mathbf{e}_y$, $\mathbf{e}_z$ ist $\mathbf{r} = x\,\mathbf{e}_x + y\,\mathbf{e}_y + z\,\mathbf{e}_z$, und entsprechend für $\mathbf{v}$ und $\mathbf{a}$.

> [!TIP] In einfachen Worten
> Beschleunigung heißt nicht nur "schneller werden". Sie beschreibt jede Änderung der Geschwindigkeit, auch eine Änderung der Richtung. Wer mit konstantem Tempo durch eine Kurve fährt, wird beschleunigt.

### Rückweg durch Integration

Nach dem Hauptsatz der Differential- und Integralrechnung gilt

$$
\mathbf{v}(t) = \int_{t_0}^{t} \mathbf{a}(t')\,\mathrm{d}t' + \mathbf{v}_0 , \qquad \mathbf{r}(t) = \int_{t_0}^{t} \mathbf{v}(t')\,\mathrm{d}t' + \mathbf{r}_0 .
$$

Dabei sind $\mathbf{r}_0$ und $\mathbf{v}_0$ der Ort und die Geschwindigkeit zur Zeit $t_0$. Das sind die **Anfangsbedingungen**. Ohne sie ist die Bewegung nicht festgelegt, denn jedes Integral hat eine freie Konstante.

### Beispiel

Ein Körper bewegt sich entlang der $x$-Achse mit $x(t) = 2{,}0\,\mathrm{m/s^2}\cdot t^2$. Die Zahlen sind frei gewählt. Dann ist

$$
v(t) = \dot{x} = 4{,}0\,\mathrm{m/s^2}\cdot t , \qquad a(t) = \ddot{x} = 4{,}0\,\mathrm{m/s^2} .
$$

Nach $t = 3{,}0\,\mathrm{s}$ liegt der Körper bei $x = 18\,\mathrm{m}$ und hat die Geschwindigkeit $12\,\mathrm{m/s}$. Seine mittlere Geschwindigkeit in den drei Sekunden war $18\,\mathrm{m}/3{,}0\,\mathrm{s} = 6{,}0\,\mathrm{m/s}$, genau die Hälfte der Endgeschwindigkeit.

> [!CAUTION] Stolperstelle
> Eine Geschwindigkeit von null zu einem Zeitpunkt heißt nicht, dass die Beschleunigung null ist. Am höchsten Punkt eines senkrechten Wurfs ist $v = 0$, die Beschleunigung ist aber immer noch $g$ nach unten. Umgekehrt kann die Geschwindigkeit konstant im Betrag sein und trotzdem eine Beschleunigung vorliegen, wenn sich ihre Richtung ändert.

## Weiter

- [2.1.5.1 Gleichförmig beschleunigte Bewegung](/exphy1/skript/mechanik-des-massenpunktes/kinematik/gleichfoermig-beschleunigte-bewegung/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 2.1.3 und 2.1.4 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
