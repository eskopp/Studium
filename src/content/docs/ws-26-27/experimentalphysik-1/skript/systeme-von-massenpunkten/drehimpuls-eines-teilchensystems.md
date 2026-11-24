---
title: Drehimpuls eines Teilchensystems
description: Warum nur äußere Drehmomente den Gesamtdrehimpuls eines Systems ändern.
weight: 3
aliases:
  - "/experimentalphysik/1-mechanik-und-thermodynamik/systeme-von-massenpunkten/drehimpuls-eines-teilchensystems/"
---

*In einem Satz: Die Teile eines Systems können sich gegenseitig anstoßen, wie sie wollen, den Gesamtdrehimpuls ändern nur Drehmomente von außen.*

## Drehimpuls und Drehmoment

> [!NOTE] Definition
> Für ein System von Massenpunkten ist der **Gesamtdrehimpuls** bezüglich eines Punktes die Summe der Einzeldrehimpulse,
>
> $$ \mathbf{L} = \sum_i \mathbf{r}_i \times \mathbf{p}_i $$
>
> Das **Drehmoment** der äußeren Kräfte $\mathbf{F}_i$ auf die Teilchen bezüglich desselben Punktes ist
>
> $$ \mathbf{M} = \sum_i \mathbf{r}_i \times \mathbf{F}_i $$
>
> Es gilt $\dot{\mathbf{L}} = \mathbf{M}$. In einem abgeschlossenen System ist $\mathbf{L}$ zeitlich konstant.

> [!TIP] In einfachen Worten
> Drehimpuls sagt, wie viel "Drehschwung" ein System insgesamt hat. Das Drehmoment ändert ihn, so wie die Kraft den Impuls ändert. Wirken keine äußeren Drehmomente, bleibt der Drehschwung erhalten. Das erklärt, warum sich eine Eiskunstläuferin schneller dreht, wenn sie die Arme anlegt.

### Beispiel

Zwei Massen mit $m = 1\,\mathrm{kg}$ bewegen sich gegenläufig: Teilchen 1 bei $\mathbf{r}_1 = (1,0,0)\,\mathrm{m}$ mit $\mathbf{v}_1 = (0,1,0)\,\mathrm{m/s}$, Teilchen 2 bei $\mathbf{r}_2 = (-1,0,0)\,\mathrm{m}$ mit $\mathbf{v}_2 = (0,-1,0)\,\mathrm{m/s}$. Dann ist

$$
\mathbf{L} = m\,(\mathbf{r}_1 \times \mathbf{v}_1 + \mathbf{r}_2 \times \mathbf{v}_2) = 1\,\mathrm{kg} \cdot \big[(0,0,1) + (0,0,1)\big]\,\mathrm{m^2/s} = (0,0,2)\,\mathrm{kg\,m^2/s} .
$$

Beide Teilchen laufen im selben Drehsinn um den Ursprung, ihre Beiträge addieren sich. Wirken nur innere Kräfte, bleibt dieser Wert erhalten.

> [!CAUTION] Stolperstelle
> Dass sich die inneren Drehmomente aufheben, gilt nur, wenn die innere Kraft entlang der Verbindungslinie der beiden Teilchen wirkt. Das ist bei Gravitation und bei der Coulomb-Kraft der Fall.

### Herleitung für zwei Teilchen

Auf Teilchen 1 und 2 wirken die äußeren Kräfte $\mathbf{F}_1$ und $\mathbf{F}_2$ sowie die inneren Kräfte $\mathbf{F}_{12} = -\mathbf{F}_{21}$. Die Drehmomente sind

$$
\mathbf{M}_1 = \mathbf{r}_1 \times (\mathbf{F}_1 + \mathbf{F}_{12}), \qquad \mathbf{M}_2 = \mathbf{r}_2 \times (\mathbf{F}_2 + \mathbf{F}_{21}) .
$$

Die Summe ist

$$
\mathbf{M} = \mathbf{M}_1 + \mathbf{M}_2 = \mathbf{r}_1 \times \mathbf{F}_1 + \mathbf{r}_2 \times \mathbf{F}_2 + (\mathbf{r}_1 - \mathbf{r}_2) \times \mathbf{F}_{12} .
$$

Der letzte Summand ist null, denn $\mathbf{r}_1 - \mathbf{r}_2$ ist parallel zu $\mathbf{F}_{12}$. Es bleibt das Drehmoment der äußeren Kräfte $\mathbf{F}_1$ und $\mathbf{F}_2$.

Für den Drehimpuls $\mathbf{L} = \mathbf{r}_1 \times \mathbf{p}_1 + \mathbf{r}_2 \times \mathbf{p}_2$ ergibt das Ableiten

$$
\dot{\mathbf{L}} = \underbrace{\dot{\mathbf{r}}_1 \times \mathbf{p}_1}_{=\,0} + \mathbf{r}_1 \times \dot{\mathbf{p}}_1 + \underbrace{\dot{\mathbf{r}}_2 \times \mathbf{p}_2}_{=\,0} + \mathbf{r}_2 \times \dot{\mathbf{p}}_2 = \mathbf{M} .
$$

Die beiden Terme mit $\dot{\mathbf{r}}_i \times \mathbf{p}_i$ sind null, weil $\mathbf{p}_i$ parallel zu $\dot{\mathbf{r}}_i$ ist.

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.3
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
