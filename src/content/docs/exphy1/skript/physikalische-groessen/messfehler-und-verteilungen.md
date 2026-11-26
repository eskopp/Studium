---
title: 1.3 und 1.3.1 Messfehler und Verteilungen
description: Statistische und systematische Fehler, Präzision, Genauigkeit und Richtigkeit, Erwartungswert und Standardabweichung, Poisson-Verteilung und Gauß-Verteilung.
weight: 2
---

*In einem Satz: Jede Messung streut, und man beschreibt die Streuung mit einer Wahrscheinlichkeitsverteilung, deren Breite die Messunsicherheit ist.*

## Zwei Arten von Fehlern

Die begrenzte Präzision einer Messapparatur sorgt dafür, dass man nicht bei jeder Messung denselben Wert findet. In der Physik spricht man dabei oft von **Fehlern**, obwohl Unsicherheit der bessere Begriff wäre.

> [!NOTE] Definition
> - **Statistische Fehler** treten bei wiederholten Messungen auf und streuen zufällig um einen mittleren Wert.
> - **Systematische Fehler** verschieben den Messwert bei jeder Wiederholung in dieselbe Richtung, zu größeren oder zu kleineren Werten. Man kann sie nur in begrenztem Rahmen korrigieren.
>
> Die Maßzahl einer Größe schreibt man deshalb als
>
> $$ \{\text{Maßzahl}\} = \text{Messwert} \pm \text{statistischer Fehler} \pm \text{systematischer Fehler} . $$

> [!TIP] In einfachen Worten
> Ein Metermaß, das ein Millimeter zu kurz ist, ist ein systematischer Fehler: Jede Messung wird um denselben Betrag falsch. Wer das Metermaß bei jeder Messung etwas anders anlegt, macht einen statistischen Fehler: Die Werte schwanken mal nach oben und mal nach unten.

### Präzision, Genauigkeit und Richtigkeit

Das sind drei verschiedene Begriffe. Man erklärt sie am besten mit einer Zielscheibe, auf die man schießt:

| Begriff | Bedeutung | Auf der Zielscheibe |
| --- | --- | --- |
| **Präzision** | Die Messwerte liegen untereinander nahe beieinander. | Alle Einschüsse liegen dicht zusammen. |
| **Richtigkeit** | Der **Mittelwert** der Messwerte liegt nahe am wahren Wert. | Der Schwerpunkt der Einschüsse liegt nahe am Zentrum. |
| **Genauigkeit** | Die Messwerte, inklusive ihrer statistischen und systematischen Fehler, liegen nahe am wahren Wert. | Die Einschüsse liegen nahe am Zentrum. |

![Vier Zielscheiben mit Einschüssen: eng beisammen aber daneben, eng beisammen und mittig, weit gestreut aber im Mittel mittig, weit gestreut und daneben.](/images/exphy1/zielscheiben.svg)

*Eigene Zeichnung: Präzision und Richtigkeit an Zielscheiben.*

> [!CAUTION] Stolperstelle
> Hohe Präzision bedeutet nicht hohe Genauigkeit. Ein defektes Messgerät kann sehr gleichmäßige, aber falsche Werte liefern. Umgekehrt kann eine Messreihe richtig sein, weil sich die Fehler im Mittel aufheben, und trotzdem stark streuen.

## Wahrscheinlichkeit und Verteilungen

> [!NOTE] Definition
> Tritt ein Ereignis auf $n$ verschiedene, gleich häufige Arten ein und besitzen $k$ davon die Eigenschaft $A$, dann ist die **relative Häufigkeit** $h(A) = k/n$. Mit wachsendem $n$ nähert sie sich einem festen Wert, der **Wahrscheinlichkeit** $P$ (Gesetz der großen Zahl).

Beim Münzwurf geht die relative Häufigkeit für "Kopf" bei großem $n$ gegen $P = 1/2$.

### Diskrete Verteilung

Eine **diskrete Verteilung** hat nur endlich viele mögliche Werte $x_i$. Die Summe aller Wahrscheinlichkeiten ist $1$. Beim Würfel mit den Werten $1$ bis $6$ ist $P(x_i) = 1/6$.

> [!NOTE] Definition
> - **Erwartungswert:** $\langle x\rangle = \sum_i x_i\,P(x_i)$
> - **Varianz:** $V = \sigma^2 = \sum_i (x_i - \langle x\rangle)^2\,P(x_i)$, die mittlere quadratische Abweichung vom Erwartungswert
> - **Standardabweichung:** $\sigma = \sqrt{V}$

#### Beispiel

Für den Würfel ist $\langle x\rangle = (1 + 2 + \ldots + 6)/6 = 3{,}5$ und $\sigma^2 = \tfrac{1}{6}\sum_{k=1}^{6}(k - 3{,}5)^2 \approx 2{,}92$, also $\sigma \approx 1{,}71$.

### Kontinuierliche Verteilung

Bei einer reellen Messgröße braucht man eine **Wahrscheinlichkeitsdichte** $f(x)$. Die Wahrscheinlichkeit, dass ein Messwert zwischen $a$ und $b$ liegt, ist

$$
P(a \le x \le b) = \int_a^b f(x)\,\mathrm{d}x , \qquad f(x) \ge 0 , \qquad \int_{-\infty}^{\infty} f(x)\,\mathrm{d}x = 1 .
$$

Erwartungswert und Varianz sind $\langle x\rangle = \int x\,f(x)\,\mathrm{d}x$ und $\sigma^2 = \int (x - \langle x\rangle)^2 f(x)\,\mathrm{d}x$. In der Physik heißt $\sigma$ die **Messunsicherheit** (oder einfach der Fehler).

### Die Poisson-Verteilung

> [!NOTE] Definition
> Die **Poisson-Verteilung** gibt die Wahrscheinlichkeit an, dass ein Ereignis genau $k$-mal auftritt ($k = 0, 1, 2, \ldots$), wenn die Ereignisse unabhängig voneinander eintreten:
>
> $$ P(k) = \mathrm{e}^{-\mu}\,\frac{\mu^k}{k!} . $$
>
> Dabei ist $\mu$ der Erwartungswert. Man verwendet sie, wenn es sehr viele Versuche gibt, jeder aber nur mit sehr kleiner Wahrscheinlichkeit zum Ereignis führt. Erwartungswert und Varianz sind gleich groß, $\sigma^2 = \mu$.

> [!TIP] In einfachen Worten
> Ein Geigerzähler klickt unregelmäßig, aber im Mittel mit einer festen Rate. Die Poisson-Verteilung sagt, wie wahrscheinlich es ist, in einer Sekunde genau drei, vier oder zehn Klicks zu hören.

#### Beispiel

Bei Uran gibt es im Mittel $\mu = 4{,}5$ Kernzerfälle je Sekunde. Dann ist die Wahrscheinlichkeit für genau $k = 4$ Zerfälle $P(4) = \mathrm{e}^{-4{,}5}\cdot 4{,}5^4/4! \approx 0{,}19$, also $19\,\%$. Für $k = 10$ sind es nur noch etwa $1\,\%$. Unter $10^{-6}$ fällt die Wahrscheinlichkeit erst ab $k = 18$.

![Säulendiagramm der Poisson-Verteilung mit dem Mittelwert 4,5. Das Maximum liegt bei k gleich 4 mit etwa 19 Prozent.](/images/exphy1/poisson-verteilung.svg)

*Eigene Zeichnung: Poisson-Verteilung für µ = 4,5.*

### Die Gauß-Verteilung

> [!NOTE] Definition
> Die **Gauß-** oder **Normalverteilung** ist eine der wichtigsten Wahrscheinlichkeitsdichten:
>
> $$ f(x) = \frac{1}{\sqrt{2\pi}\,\sigma}\,\exp\!\left(-\frac{(x - \mu)^2}{2\sigma^2}\right) . $$
>
> Dabei ist $\mu$ der Erwartungswert und $\sigma$ die Standardabweichung. Im Abstand $|x - \mu| = \sigma$ ist die Kurve auf den $1/\sqrt{\mathrm{e}}$-ten Teil ihres Maximums abgefallen, also auf etwa $61\,\%$. Die Wahrscheinlichkeit für $\mu - \sigma \le x \le \mu + \sigma$ ist etwa $68{,}3\,\%$.

Etwa zwei Drittel aller Werte liegen innerhalb von $\pm\sigma$ um den Mittelwert und ein Drittel außerhalb. Innerhalb von $\pm 2\sigma$ liegen etwa $95{,}4\,\%$, innerhalb von $\pm 3\sigma$ etwa $99{,}7\,\%$.

![Glockenkurve der Gauß-Verteilung. Etwa 68 Prozent der Fläche liegen innerhalb von plus minus einer Standardabweichung, 95 Prozent innerhalb von zwei und 99,7 Prozent innerhalb von drei.](/images/exphy1/gauss-verteilung.svg)

*Eigene Zeichnung: Die Gauß-Verteilung mit den Bereichen $\pm\sigma$, $\pm 2\sigma$ und $\pm 3\sigma$.*

> [!CAUTION] Stolperstelle
> Die $68\,\%$ gelten nur für die Gauß-Verteilung. Und $\sigma$ ist nicht die Wahrscheinlichkeit selbst, sondern die Breite der Verteilung. Eine kleine Standardabweichung heißt eine scharfe Messung.

## Weiter

- [1.3.2 und 1.3.3 Auswertung eines Experiments](/exphy1/skript/physikalische-groessen/auswertung-eines-experiments/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 1.3 bis 1.3.1.4 und Skriptum Kapitel 1
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" stammen nicht aus der Vorlesung. Die Zahlenwerte (Würfel, Poisson, Gauß) habe ich nachgerechnet.
