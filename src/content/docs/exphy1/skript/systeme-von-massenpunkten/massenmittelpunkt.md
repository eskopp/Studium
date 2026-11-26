---
title: 4.1 Massenmittelpunkt
description: Der Schwerpunkt eines Systems von Massenpunkten, abgeschlossene Systeme und das Schwerpunktsystem.
weight: 1
---

*In einem Satz: Egal wie wild sich viele Körper bewegen, ihr Schwerpunkt bewegt sich so, als wäre alle Masse dort und als würden nur die äußeren Kräfte ziehen.*

## Massenmittelpunkt

> [!NOTE] Definition
> Für $N$ Massenpunkte mit den Massen $m_i$ und den Ortsvektoren $\mathbf{r}_i$ ist der **Massenmittelpunkt** (Schwerpunkt)
>
> $$ \mathbf{r}_S = \frac{1}{M}\sum_{i=1}^{N} m_i\,\mathbf{r}_i, \qquad M = \sum_{i=1}^{N} m_i $$
>
> $M$ ist die Gesamtmasse. Schwerpunktgeschwindigkeit und Schwerpunktimpuls sind
>
> $$ \mathbf{v}_S = \frac{1}{M}\sum_i m_i\,\mathbf{v}_i, \qquad \mathbf{p}_S = M\,\mathbf{v}_S = \sum_i \mathbf{p}_i $$

> [!TIP] In einfachen Worten
> Der Schwerpunkt ist der gewichtete Mittelwert aller Orte, wobei schwere Körper mehr zählen. Zwei Körper mit gleicher Masse haben ihren Schwerpunkt in der Mitte zwischen sich. Ist einer dreimal so schwer, liegt der Schwerpunkt dreimal näher an ihm.

![Zwei Massen mit Ortsvektoren und der Schwerpunkt S auf ihrer Verbindungslinie.](/images/exphy1/schwerpunkt-zweikoerper.svg)

*Eigene Zeichnung: Der Massenmittelpunkt zweier Körper.*

### Beispiel

Zwei Kugeln liegen auf einer Geraden: $m_1 = 2\,\mathrm{kg}$ bei $x_1 = 0$ und $m_2 = 1\,\mathrm{kg}$ bei $x_2 = 3\,\mathrm{m}$. Dann ist

$$
x_S = \frac{2\,\mathrm{kg} \cdot 0 + 1\,\mathrm{kg} \cdot 3\,\mathrm{m}}{3\,\mathrm{kg}} = 1\,\mathrm{m} .
$$

Der Schwerpunkt liegt auf der schwereren Kugel zu, wie erwartet.

## Abgeschlossene Systeme

> [!NOTE] Definition
> Wirken auf ein System von Massenpunkten keine äußeren Kräfte, nennt man es **abgeschlossen**. Dann ist der Impuls des Massenmittelpunkts zeitlich konstant,
>
> $$ \mathbf{p}_S = \text{const.} $$
>
> Wirkt dagegen eine äußere Kraft $\mathbf{F}$, gilt $\mathbf{F} = \dot{\mathbf{p}}_S$. Der Massenmittelpunkt bewegt sich also so, als wäre er ein Körper der Masse $M = \sum_i m_i$ unter dem Einfluss der äußeren Kraft $\mathbf{F}$.

> [!TIP] In einfachen Worten
> Innere Kräfte, etwa Anziehung zwischen den Körpern oder Stöße, können einzelne Körper beschleunigen, aber nie den Schwerpunkt. Nur ein Anstoß von außen schiebt ihn an. Eine Bombe, die im Flug explodiert, schickt die Trümmer in alle Richtungen, aber ihr Schwerpunkt fliegt weiter auf der alten Bahn.

### Herleitung

Die Kraft auf Teilchen $i$ ist $\mathbf{F}_i = \dot{\mathbf{p}}_i$. Sie besteht aus einer äußeren Kraft und den inneren Kräften $\mathbf{F}_{ik}$ von den anderen Teilchen. Nach dem dritten Newtonschen Gesetz gilt $\mathbf{F}_{ik} = -\mathbf{F}_{ki}$. In der Summe über alle Teilchen heben sich die inneren Kräfte paarweise auf:

$$
\sum_i\sum_{k \neq i} \mathbf{F}_{ik} = 0 .
$$

Damit ist

$$
\sum_i \dot{\mathbf{p}}_i = \frac{\mathrm{d}}{\mathrm{d}t}\sum_i \mathbf{p}_i = \dot{\mathbf{p}}_S = \sum_i \mathbf{F}_i^{\text{außen}} = \mathbf{F} .
$$

Ohne äußere Kräfte ist $\dot{\mathbf{p}}_S = 0$, also $\mathbf{p}_S = \text{const.}$

## Schwerpunktsystem

> [!NOTE] Definition
> Das **Schwerpunktsystem** ist ein Bezugssystem, dessen Ursprung im Massenmittelpunkt liegt. Dort gilt:
>
> **(a)** Die Summe aller Impulse ist null, $\sum_i m_i\,\mathbf{v}_{iS} = 0$.
>
> **(b)** Die kinetische Energie des Systems ist die kinetische Energie im Schwerpunktsystem plus die des Schwerpunkts:
>
> $$ W_k = W_k^{(S)} + \tfrac{1}{2}\,M\,v_S^2 $$

> [!TIP] In einfachen Worten
> Im Schwerpunktsystem ruht der Schwerpunkt. Dort sieht man nur die "innere" Bewegung des Systems, zum Beispiel wie zwei Körper umeinander kreisen. Die Gesamtbewegung des Systems steckt im zweiten Summanden, der Bewegung des Schwerpunkts als Ganzes. Beides lässt sich so getrennt betrachten.

### Herleitung

Im Schwerpunktsystem gilt $\mathbf{v}_i = \mathbf{v}_S + \mathbf{v}_{iS}$, wobei $\mathbf{v}_{iS}$ die Geschwindigkeit des Teilchens $i$ relativ zum Schwerpunkt ist. Aus der Definition von $\mathbf{r}_S$ folgt

$$
\sum_i m_i\,\mathbf{v}_{iS} = \sum_i m_i(\mathbf{v}_i - \mathbf{v}_S) = M\mathbf{v}_S - M\mathbf{v}_S = 0 .
$$

Für die kinetische Energie ergibt sich

$$
W_k = \sum_i \tfrac{1}{2} m_i (\mathbf{v}_S + \mathbf{v}_{iS})^2 = \tfrac{1}{2} M v_S^2 + \mathbf{v}_S \cdot \underbrace{\sum_i m_i \mathbf{v}_{iS}}_{=\,0} + \sum_i \tfrac{1}{2} m_i v_{iS}^2 .
$$

Der mittlere Summand ist null, es bleibt $W_k = \tfrac{1}{2} M v_S^2 + W_k^{(S)}$.

## Weiter

Für zwei Teilchen vereinfacht sich die Relativbewegung weiter, siehe [Reduzierte Masse](/exphy1/skript/systeme-von-massenpunkten/reduzierte-masse/).

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.1
- W. Demtröder, Experimentalphysik 1 (Springer, 2006), auf den Folien als Quelle der Bilder genannt
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
