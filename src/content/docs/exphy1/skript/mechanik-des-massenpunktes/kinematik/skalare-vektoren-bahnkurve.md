---
title: 2.1.1 und 2.1.2 Skalare, Vektoren und Bahnkurve
description: Was ein Massenpunkt ist, wie man Orte mit Vektoren beschreibt und warum die Form einer Bahn vom Koordinatensystem abhängt.
weight: 1
---

*In einem Satz: Ein Massenpunkt ist ein Körper, den man sich als Punkt denkt, und seine Bewegung beschreibt man durch einen Ortsvektor, der von der Zeit abhängt.*

## Massenpunkt, Skalar und Vektor

> [!NOTE] Definition
> **Kinematik** ist der Teil der Mechanik, der den zeitlichen Ablauf einer Bewegung durch Gleichungen beschreibt. Ein **Massenpunkt** ist ein gedachter Körper, der seine ganze Masse in einem Punkt vereint. Man darf einen Körper so behandeln, wenn seine Abmessungen klein sind gegen die Strecken, die er zurücklegt.
>
> **Skalare** sind Größen, die allein durch eine Zahl mit Einheit festgelegt sind, zum Beispiel Länge, Masse und Zeit. **Vektoren** haben zusätzlich eine Richtung im Raum, zum Beispiel Ort, Geschwindigkeit und Beschleunigung.

> [!TIP] In einfachen Worten
> Ein Auto auf einer Autobahn kann man als Punkt zeichnen, solange es um die Strecke von Ilmenau nach Erfurt geht. Beim Einparken geht das nicht mehr, dann kommt es auf die Form an. Eine Temperatur ist ein Skalar, sie hat keine Richtung. Ein Wind ist ein Vektor, denn man muss sagen, woher er weht und wie stark.

Vektoren unterscheidet man nach ihrem Verhalten bei einer Spiegelung am Ursprung $(x, y, z) \to (-x, -y, -z)$:

| Art | Verhalten | Parität | Beispiel |
| --- | --- | --- | --- |
| polarer Vektor | wechselt die Richtung | ungerade | Ortsvektor |
| axialer Vektor | bleibt gleich | gerade | kommt bei Drehbewegungen |

## Ortsvektor und Bahnkurve

> [!NOTE] Definition
> Der **Ortsvektor** gibt die Lage des Massenpunkts relativ zu einem Bezugspunkt an. Seine Komponenten sind die Koordinaten und hängen von der Zeit $t$ ab:
>
> $$ \mathbf{r}(t) = \begin{pmatrix} x(t) \\ y(t) \\ z(t) \end{pmatrix} . $$
>
> Das ist eine **Parameterdarstellung der Bahnkurve**, die Zeit ist der Parameter. Die Bewegung entlang der Bahnkurve heißt **Translation**.

> [!TIP] In einfachen Worten
> Der Ortsvektor ist ein Pfeil vom Nullpunkt zum Körper. Wenn der Körper sich bewegt, wandert die Spitze des Pfeils, und die Spur der Spitze ist die Bahnkurve. Zu jedem Zeitpunkt gehört genau ein Pfeil.

![Eine gekrümmte Bahn in der xy-Ebene mit dem Ortsvektor vom Ursprung zum Punkt P und dem Geschwindigkeitsvektor als Tangente an die Bahn.](/images/exphy1/ortsvektor-bahnkurve.svg)

*Eigene Zeichnung: Ortsvektor, Bahnkurve und Geschwindigkeit.*

Drei Beispiele für Bahnkurven mit konstanten Zahlen $a$, $b$, $R$:

- **Gerade in einer Dimension:** $x(t) = a\,t$
- **Gerade in zwei Dimensionen:** $x(t) = a\,t$ und $y(t) = b\,t$
- **Kreis:** $x(t) = R\cos\varphi$ und $y(t) = R\sin\varphi$ mit $\varphi = a\,t$

### Beispiel

Ein Punkt läuft auf einem Kreis mit $R = 2{,}0\,\mathrm{m}$, und der Winkel wächst mit $\varphi = a\,t$ und $a = 0{,}50\,\mathrm{s^{-1}}$. Die Zahlen sind frei gewählt. Nach $t = 3{,}0\,\mathrm{s}$ ist $\varphi = 1{,}5\,\mathrm{rad}$, also

$$
x = 2{,}0\,\mathrm{m}\cdot\cos(1{,}5) \approx 0{,}14\,\mathrm{m} , \qquad y = 2{,}0\,\mathrm{m}\cdot\sin(1{,}5) \approx 2{,}0\,\mathrm{m} .
$$

Der Punkt ist dann fast am obersten Punkt des Kreises. Der Winkel steht im Bogenmaß, deshalb muss der Taschenrechner auf Radiant eingestellt sein.

> [!CAUTION] Stolperstelle
> Die Form einer Bahnkurve hängt vom Bezugspunkt ab. Der Mond läuft relativ zum Erdmittelpunkt auf einer Ellipse. Legt man den Bezugspunkt in den Sonnenmittelpunkt, ist seine Bahn eine viel kompliziertere Schlangenlinie. Die Bahnkurve gehört also nicht dem Körper allein, sondern dem Körper zusammen mit dem gewählten Koordinatensystem.

## Weiter

- [2.1.3 und 2.1.4 Geschwindigkeit und Beschleunigung](/exphy1/skript/mechanik-des-massenpunktes/kinematik/geschwindigkeit-beschleunigung/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 2.1.1 und 2.1.2 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
