---
title: 1.3.2 und 1.3.3 Auswertung eines Experiments
description: Der zentrale Grenzwertsatz, Stichproben-Mittelwert, getrimmter Mittelwert, Standardabweichung der Einzelmessung und Fehler des Mittelwerts, am Beispiel eines Fallversuchs.
weight: 3
---

*In einem Satz: Aus einer endlichen Messreihe schätzt man den wahren Wert durch den Mittelwert, und der Fehler des Mittelwerts ist kleiner als die Streuung der Einzelmessungen.*

## Der zentrale Grenzwertsatz

Die Messwerte $x_1, \ldots, x_n$ eines Experiments heißen **Stichprobe**. Die dahinterliegende Wahrscheinlichkeitsdichte ist unbekannt. Ein mathematischer Satz hilft, zumindest die statistischen Fehler zu erfassen.

> [!NOTE] Zentraler Grenzwertsatz
> Die Summe $y = \sum_{i=1}^{n} x_i$ vieler voneinander unabhängiger Messwerte aus derselben beliebigen Wahrscheinlichkeitsdichte mit Erwartungswert $\langle x\rangle$ und Standardabweichung $\sigma$ ist für große $n$ gauß-verteilt mit
>
> $$ \langle y\rangle = n\,\langle x\rangle , \qquad \sigma_y = \sqrt{n}\,\sigma . $$
>
> Vorausgesetzt ist, dass die Messwerte unabhängig sind und die Standardabweichung $\sigma$ endlich ist.

> [!TIP] In einfachen Worten
> Viele kleine, unabhängige Störungen, die den Messwert mal nach oben, mal nach unten ziehen, ergeben zusammen immer eine Glockenkurve, egal wie die einzelnen Störungen verteilt sind. Deshalb ist die Gauß-Verteilung in der Physik so häufig.

Ein Beispiel dafür sind zwei Würfel. Ein einzelner Würfel ist gleichverteilt, jede Augenzahl hat $P = 1/6$. Die Summe zweier Würfel kann $2$ bis $12$ sein, und es gibt $36$ Möglichkeiten. Die Summe $2$ gibt es nur einmal, die Summe $7$ sechsmal:

| Summe | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Möglichkeiten | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |

Das Dreieck wird bei drei Würfeln noch glockenförmiger.

## Ein Fallversuch

Eine Stahlkugel fällt $\Delta x = 2\,\mathrm{m}$ tief. Die Fallzeit wurde siebenmal gemessen:

$$
634\,\mathrm{ms},\ 630\,\mathrm{ms},\ 629\,\mathrm{ms},\ 631\,\mathrm{ms},\ 655\,\mathrm{ms},\ 633\,\mathrm{ms},\ 631\,\mathrm{ms} .
$$

### Mittelwert

> [!NOTE] Definition
> Der **Stichproben-Mittelwert** ist
>
> $$ \bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i . $$
>
> Er schätzt den wahren Erwartungswert und kommt ihm für große $n$ beliebig nahe, $\lim_{n\to\infty}\bar{x} = \langle x\rangle$.

Für den Fallversuch ist

$$
\overline{\Delta t} = \frac{4443\,\mathrm{ms}}{7} \approx 635\,\mathrm{ms} .
$$

Die meisten Werte liegen aber bei $631\,\mathrm{ms}$. Der einzelne Wert $655\,\mathrm{ms}$ zieht den Mittelwert nach oben. Um zu prüfen, wie stabil der Mittelwert ist, bildet man den **getrimmten Mittelwert**: Man lässt die $m$ größten und die $m$ kleinsten Werte weg. Mit $m = 1$ fallen $629\,\mathrm{ms}$ und $655\,\mathrm{ms}$ weg, und es bleibt $\overline{\Delta t} = 631{,}8\,\mathrm{ms}$.

> [!CAUTION] Stolperstelle
> Einen auffälligen Wert darf man nicht einfach wegwerfen, weil er unpassend ist. Eine Gauß-Anpassung an die Verteilung liefert hier den Mittelwert $631{,}7\,\mathrm{ms}$ und $\sigma \approx 2\,\mathrm{ms}$. Der Ausreißer liegt $23\,\mathrm{ms}$ daneben, das sind etwa $12\,\sigma$. Das ist so unwahrscheinlich, dass vermutlich ein Problem der Apparatur vorliegt. Das muss man aber mit weiteren Messungen absichern. Solche Ausreißer sind in der Physik auch interessant, weil sie auf neue Effekte hinweisen können.

### Statistischer Fehler

Für den Mittelwert muss man auch einen Fehler angeben. Dazu berechnet man zuerst die Streuung der Einzelmessung.

> [!NOTE] Definition
> Die **Stichproben-Varianz** und die **Standardabweichung der Einzelmessung** sind
>
> $$ S = \frac{1}{n - 1}\sum_{i=1}^{n}(x_i - \bar{x})^2 , \qquad s = \sqrt{S} . $$
>
> Der Fehler des Mittelwerts ist
>
> $$ \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \approx \frac{s}{\sqrt{n}} . $$
>
> Das Ergebnis der Messung gibt man als $\bar{x} \pm \sigma_{\bar{x}}$ an.

> [!TIP] In einfachen Worten
> $s$ sagt, wie stark die einzelnen Messungen streuen. Der Mittelwert aus $n$ Messungen schwankt aber weniger, nämlich um den Faktor $\sqrt{n}$. Wer viermal so oft misst, halbiert den Fehler des Mittelwerts. Die Standardabweichung der Einzelmessung bleibt dabei gleich.

Zwei Fragen zur Formel:

- **Warum durch $n - 1$ und nicht durch $n$?** Die Abweichungen $x_i - \bar{x}$ summieren sich zu null, also ist die letzte durch die anderen festgelegt, und nur $n - 1$ Abweichungen sind frei. Einfacher: Eine Stichprobe mit $n = 1$ Wert sagt nichts über die Streuung.
- **Woher kommt $\sigma/\sqrt{n}$?** Nach dem Grenzwertsatz ist $\sigma_y = \sqrt{n}\,\sigma$ für die Summe. Der Mittelwert ist die Summe geteilt durch $n$, also ist $\sigma_{\bar{x}} = \sqrt{n}\,\sigma/n = \sigma/\sqrt{n}$.

Die Streuung $s$ gibt Auskunft über die Reproduzierbarkeit. Wegen der Gauß-Form liegt der nächste neue Messwert mit etwa $68\,\%$ Wahrscheinlichkeit im Intervall $[\bar{x} - s,\ \bar{x} + s]$.

#### Beispiel mit den Fallzeiten

Mit allen sieben Werten ist $s \approx 9{,}1\,\mathrm{ms}$ und $s/\sqrt{7} \approx 3{,}4\,\mathrm{ms}$, also $\overline{\Delta t} = (635 \pm 3)\,\mathrm{ms}$. Mit den fünf getrimmten Werten ist $s \approx 1{,}6\,\mathrm{ms}$ und $s/\sqrt{5} \approx 0{,}7\,\mathrm{ms}$, also $\overline{\Delta t} = (631{,}8 \pm 0{,}7)\,\mathrm{ms}$. Der Unterschied zeigt, wie stark ein einzelner Ausreißer wirkt.

## Weiter

- [1.3.3.3 Fehlerfortpflanzung](/exphy1/skript/physikalische-groessen/fehlerfortpflanzung/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 1.3.2 bis 1.3.3.2 und Skriptum Kapitel 1. Die Messwerte und die Gauß-Anpassung stammen aus dem Skriptum.
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" stammen nicht aus der Vorlesung. Mittelwerte, Standardabweichungen und die Zahlen für die Würfel habe ich nachgerechnet.
