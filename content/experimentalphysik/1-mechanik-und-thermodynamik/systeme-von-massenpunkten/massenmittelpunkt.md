---
title: Massenmittelpunkt
description: Der Schwerpunkt eines Systems von Massenpunkten, abgeschlossene Systeme und das Schwerpunktsystem.
weight: 1
---

*In einem Satz: Egal wie wild sich viele Körper bewegen, ihr Schwerpunkt bewegt sich so, als wäre alle Masse dort und als würden nur die äußeren Kräfte ziehen.*

## Massenmittelpunkt

> [!NOTE] Definition
> Für $N$ Massenpunkte mit den Massen $m_i$ und den Ortsvektoren $\vec r_i$ ist der **Massenmittelpunkt** (Schwerpunkt)
>
> $$ \vec r_S = \frac{1}{M}\sum_{i=1}^{N} m_i\,\vec r_i, \qquad M = \sum_{i=1}^{N} m_i $$
>
> $M$ ist die Gesamtmasse. Schwerpunktgeschwindigkeit und Schwerpunktimpuls sind
>
> $$ \vec v_S = \frac{1}{M}\sum_i m_i\,\vec v_i, \qquad \vec p_S = M\,\vec v_S = \sum_i \vec p_i $$

> [!TIP] In einfachen Worten
> Der Schwerpunkt ist der gewichtete Mittelwert aller Orte, wobei schwere Körper mehr zählen. Zwei Körper mit gleicher Masse haben ihren Schwerpunkt in der Mitte zwischen sich. Ist einer dreimal so schwer, liegt der Schwerpunkt dreimal näher an ihm.

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
> $$ \vec p_S = \text{const.} $$
>
> Wirkt dagegen eine äußere Kraft $\vec F$, gilt $\vec F = \dot{\vec p}_S$. Der Massenmittelpunkt bewegt sich also so, als wäre er ein Körper der Masse $M = \sum_i m_i$ unter dem Einfluss der äußeren Kraft $\vec F$.

> [!TIP] In einfachen Worten
> Innere Kräfte, etwa Anziehung zwischen den Körpern oder Stöße, können einzelne Körper beschleunigen, aber nie den Schwerpunkt. Nur ein Anstoß von außen schiebt ihn an. Eine Bombe, die im Flug explodiert, schickt die Trümmer in alle Richtungen, aber ihr Schwerpunkt fliegt weiter auf der alten Bahn.

### Herleitung

Die Kraft auf Teilchen $i$ ist $\vec F_i = \dot{\vec p}_i$. Sie besteht aus einer äußeren Kraft und den inneren Kräften $\vec F_{ik}$ von den anderen Teilchen. Nach dem dritten Newtonschen Gesetz gilt $\vec F_{ik} = -\vec F_{ki}$. In der Summe über alle Teilchen heben sich die inneren Kräfte paarweise auf:

$$
\sum_i\sum_{k \neq i} \vec F_{ik} = 0 .
$$

Damit ist

$$
\sum_i \dot{\vec p}_i = \frac{\mathrm{d}}{\mathrm{d}t}\sum_i \vec p_i = \dot{\vec p}_S = \sum_i \vec F_i^{\text{außen}} = \vec F .
$$

Ohne äußere Kräfte ist $\dot{\vec p}_S = 0$, also $\vec p_S = \text{const.}$

## Schwerpunktsystem

> [!NOTE] Definition
> Das **Schwerpunktsystem** ist ein Bezugssystem, dessen Ursprung im Massenmittelpunkt liegt. Dort gilt:
>
> **(a)** Die Summe aller Impulse ist null, $\sum_i m_i\,\vec v_{iS} = 0$.
>
> **(b)** Die kinetische Energie des Systems ist die kinetische Energie im Schwerpunktsystem plus die des Schwerpunkts:
>
> $$ W_k = W_k^{(S)} + \tfrac{1}{2}\,M\,v_S^2 $$

> [!TIP] In einfachen Worten
> Im Schwerpunktsystem ruht der Schwerpunkt. Dort sieht man nur die "innere" Bewegung des Systems, zum Beispiel wie zwei Körper umeinander kreisen. Die Gesamtbewegung des Systems steckt im zweiten Summanden, der Bewegung des Schwerpunkts als Ganzes. Beides lässt sich so getrennt betrachten.

### Herleitung

Im Schwerpunktsystem gilt $\vec v_i = \vec v_S + \vec v_{iS}$, wobei $\vec v_{iS}$ die Geschwindigkeit des Teilchens $i$ relativ zum Schwerpunkt ist. Aus der Definition von $\vec r_S$ folgt

$$
\sum_i m_i\,\vec v_{iS} = \sum_i m_i(\vec v_i - \vec v_S) = M\vec v_S - M\vec v_S = 0 .
$$

Für die kinetische Energie ergibt sich

$$
W_k = \sum_i \tfrac{1}{2} m_i (\vec v_S + \vec v_{iS})^2 = \tfrac{1}{2} M v_S^2 + \vec v_S \cdot \underbrace{\sum_i m_i \vec v_{iS}}_{=\,0} + \sum_i \tfrac{1}{2} m_i v_{iS}^2 .
$$

Der mittlere Summand ist null, es bleibt $W_k = \tfrac{1}{2} M v_S^2 + W_k^{(S)}$.

## Weiter

Für zwei Teilchen vereinfacht sich die Relativbewegung weiter, siehe [Reduzierte Masse](/experimentalphysik/1-mechanik-und-thermodynamik/systeme-von-massenpunkten/reduzierte-masse/).

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.1
- W. Demtröder, Experimentalphysik 1 (Springer, 2006), auf den Folien als Quelle der Bilder genannt
