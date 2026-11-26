---
title: Rutherford-Streuung
description: Streuung an einem kugelsymmetrischen Potential, die Erhaltung des Drehimpulses und was das Geiger-Marsden-Experiment über den Atomkern zeigte.
weight: 7
---

*In einem Satz: Wenn eine Kraft nur vom Abstand zu einem Zentrum abhängt, bleibt der Drehimpuls erhalten, und genau das nutzt die Streuung von Alphateilchen an Goldkernen.*

## Das kugelsymmetrische Potential

> [!NOTE] Definition
> Ein Potential heißt **kugelsymmetrisch**, wenn es nur vom Abstand $r$ zum Zentrum abhängt, $U = U(r)$. Die Kraft ist dann
>
> $$ \mathbf{F} = -\nabla U = -\frac{\partial U}{\partial r}\,\frac{\mathbf{r}}{r} , $$
>
> sie zeigt immer auf das Zentrum zu oder davon weg und heißt **Zentralkraft**. Für das Coulomb-Potential zweier Ladungen gilt $U(r) \propto 1/r$.
>
> Bei einer Zentralkraft bleibt der Drehimpuls bezüglich des Zentrums erhalten, mit der reduzierten Masse $\mu$ und der Relativgeschwindigkeit $\mathbf{v}$:
>
> $$ \mathbf{L} = \mathbf{r} \times \mathbf{p} = \mu\,(\mathbf{r} \times \mathbf{v}) = \text{konstant} . $$

> [!TIP] In einfachen Worten
> Eine Zentralkraft zieht oder stößt nur in Richtung des Zentrums. Sie kann ein vorbeifliegendes Teilchen ablenken, ihm aber keinen Drehschwung verpassen. Deshalb bleibt der Drehimpuls gleich, und die Bahn liegt in einer Ebene. Das ist dieselbe Idee wie beim [Drehimpuls eines Teilchensystems](/exphy1/skript/systeme-von-massenpunkten/drehimpuls-eines-teilchensystems/).

### Herleitung der Drehimpulserhaltung

Die zeitliche Änderung des Drehimpulses ist

$$
\dot{\mathbf{L}} = \dot{\mathbf{r}} \times \mathbf{p} + \mathbf{r} \times \dot{\mathbf{p}} = \mathbf{v} \times (\mu \mathbf{v}) + \mathbf{r} \times \mathbf{F} .
$$

Der erste Term ist null, weil $\mathbf{v} \times \mathbf{v} = 0$ ist. Der zweite Term ist null, weil bei einer Zentralkraft $\mathbf{F}$ parallel zu $\mathbf{r}$ ist. Also ist $\dot{\mathbf{L}} = 0$.

## Das Rutherford-Experiment

Beim Experiment von Geiger und Marsden wurden Alphateilchen, also Heliumkerne, auf eine dünne Goldfolie geschossen. Die positiv geladenen Alphateilchen werden von den ebenfalls positiv geladenen Goldkernen abgestoßen. Sie bewegen sich dabei auf abgelenkten Bahnen, die man als Hyperbeln annähern kann.

Beobachtet wurden auch sehr große Streuwinkel bis hin zur Rückstreuung. Das geht nur, wenn die positive Ladung und fast die gesamte Masse des Atoms in einem sehr kleinen **Atomkern** konzentriert sind. Ein ausgedehntes Atom mit gleichmäßig verteilter Ladung könnte die Alphateilchen nicht so stark ablenken.

### Beispiel

Ein Alphateilchen (Ladungszahl $2$) mit der kinetischen Energie $5\,\mathrm{MeV}$ fliegt frontal auf einen Goldkern (Ladungszahl $79$). Die Zahlen sind frei gewählt und keine Messwerte. Es kommt dem Kern so nahe, bis seine kinetische Energie ganz in potentielle Energie umgewandelt ist:

$$
d = \frac{2 \cdot 79 \cdot 1{,}44\,\mathrm{MeV\,fm}}{5\,\mathrm{MeV}} \approx 46\,\mathrm{fm} .
$$

Ein Atom hat einen Durchmesser von etwa $10^{5}\,\mathrm{fm}$. Selbst bei einem Frontalstoß bleibt das Alphateilchen also weit außerhalb des Atoms, und der Kern muss viel kleiner sein.

> [!CAUTION] Stolperstelle
> Man rechnet meist so, als bliebe der Goldkern in Ruhe. Das ist eine gute Näherung, weil er rund fünfzigmal schwerer ist als das Alphateilchen. Er ändert seinen Impuls kaum, das leichte Alphateilchen wird dagegen stark umgelenkt. Das ist derselbe Fall wie beim Stoß auf einen sehr schweren Partner im Artikel über den [elastischen Stoß](/exphy1/skript/systeme-von-massenpunkten/elastischer-stoss/).

Die vollständige Rechnung für den Streuwinkel verwendet die Bewegungsgleichung, die Impulsänderung, die Drehimpulserhaltung und die Ablenkung durch die Kraftkomponente quer zur ursprünglichen Flugrichtung, $F_y = F \sin\varphi$. Diese Rechnung steht im Skriptum, sie ist hier nicht ausgeführt.

## Weiter

- [Elastischer Stoß mit ruhendem Körper](/exphy1/skript/systeme-von-massenpunkten/elastischer-stoss/)
- [Reduzierte Masse](/exphy1/skript/systeme-von-massenpunkten/reduzierte-masse/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Teil zur Streuung im kugelsymmetrischen Potential (Vorlesung vom 25.11.2026), eigene Mitschrift. Das Rechenbeispiel habe ich selbst nachgerechnet.
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
