---
title: Drehimpuls eines Teilchensystems
description: Warum nur äußere Drehmomente den Gesamtdrehimpuls eines Systems ändern.
weight: 3
---

*In einem Satz: Die Teile eines Systems können sich gegenseitig anstoßen, wie sie wollen, den Gesamtdrehimpuls ändern nur Drehmomente von außen.*

## Drehimpuls und Drehmoment

> [!NOTE] Definition
> Für ein System von Massenpunkten ist der **Gesamtdrehimpuls** bezüglich eines Punktes die Summe der Einzeldrehimpulse,
>
> $$ \vec L = \sum_i \vec r_i \times \vec p_i $$
>
> Das **Drehmoment** der äußeren Kräfte $\vec F_i$ auf die Teilchen bezüglich desselben Punktes ist
>
> $$ \vec M = \sum_i \vec r_i \times \vec F_i $$
>
> Es gilt $\dot{\vec L} = \vec M$. In einem abgeschlossenen System ist $\vec L$ zeitlich konstant.

> [!TIP] In einfachen Worten
> Drehimpuls sagt, wie viel "Drehschwung" ein System insgesamt hat. Das Drehmoment ändert ihn, so wie die Kraft den Impuls ändert. Wirken keine äußeren Drehmomente, bleibt der Drehschwung erhalten. Das erklärt, warum sich eine Eiskunstläuferin schneller dreht, wenn sie die Arme anlegt.

### Beispiel

Zwei Massen mit $m = 1\,\mathrm{kg}$ bewegen sich gegenläufig: Teilchen 1 bei $\vec r_1 = (1,0,0)\,\mathrm{m}$ mit $\vec v_1 = (0,1,0)\,\mathrm{m/s}$, Teilchen 2 bei $\vec r_2 = (-1,0,0)\,\mathrm{m}$ mit $\vec v_2 = (0,-1,0)\,\mathrm{m/s}$. Dann ist

$$
\vec L = m\,(\vec r_1 \times \vec v_1 + \vec r_2 \times \vec v_2) = 1\,\mathrm{kg} \cdot \big[(0,0,1) + (0,0,1)\big]\,\mathrm{m^2/s} = (0,0,2)\,\mathrm{kg\,m^2/s} .
$$

Beide Teilchen laufen im selben Drehsinn um den Ursprung, ihre Beiträge addieren sich. Wirken nur innere Kräfte, bleibt dieser Wert erhalten.

> [!CAUTION] Stolperstelle
> Dass sich die inneren Drehmomente aufheben, gilt nur, wenn die innere Kraft entlang der Verbindungslinie der beiden Teilchen wirkt. Das ist bei Gravitation und bei der Coulomb-Kraft der Fall.

### Herleitung für zwei Teilchen

Auf Teilchen 1 und 2 wirken die äußeren Kräfte $\vec F_1$ und $\vec F_2$ sowie die inneren Kräfte $\vec F_{12} = -\vec F_{21}$. Die Drehmomente sind

$$
\vec M_1 = \vec r_1 \times (\vec F_1 + \vec F_{12}), \qquad \vec M_2 = \vec r_2 \times (\vec F_2 + \vec F_{21}) .
$$

Die Summe ist

$$
\vec M = \vec M_1 + \vec M_2 = \vec r_1 \times \vec F_1 + \vec r_2 \times \vec F_2 + (\vec r_1 - \vec r_2) \times \vec F_{12} .
$$

Der letzte Summand ist null, denn $\vec r_1 - \vec r_2$ ist parallel zu $\vec F_{12}$. Es bleibt das Drehmoment der äußeren Kräfte $\vec F_1$ und $\vec F_2$.

Für den Drehimpuls $\vec L = \vec r_1 \times \vec p_1 + \vec r_2 \times \vec p_2$ ergibt das Ableiten

$$
\dot{\vec L} = \underbrace{\dot{\vec r}_1 \times \vec p_1}_{=\,0} + \vec r_1 \times \dot{\vec p}_1 + \underbrace{\dot{\vec r}_2 \times \vec p_2}_{=\,0} + \vec r_2 \times \dot{\vec p}_2 = \vec M .
$$

Die beiden Terme mit $\dot{\vec r}_i \times \vec p_i$ sind null, weil $\vec p_i$ parallel zu $\dot{\vec r}_i$ ist.

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.3
