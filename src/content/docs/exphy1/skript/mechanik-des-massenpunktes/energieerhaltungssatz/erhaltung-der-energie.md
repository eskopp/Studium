---
title: 2.3.5 und 2.3.6 Erhaltung der Energie und Kraft aus dem Potential
description: Der mechanische Energieerhaltungssatz und wie man aus der potentiellen Energie mit dem Gradienten die Kraft zurückgewinnt.
weight: 3
---

*In einem Satz: In einem konservativen Kraftfeld ist die Summe aus potentieller und kinetischer Energie konstant, und die Kraft ist der negative Gradient der potentiellen Energie.*

## Der Satz von der Erhaltung der Energie

Die Arbeit zwischen zwei Punkten lässt sich auf zwei Arten schreiben:

$$
\int_{\mathbf{r}_1}^{\mathbf{r}_2}\mathbf{F}\cdot\mathrm{d}\mathbf{r} = -\bigl[W_\mathrm{pot}(2) - W_\mathrm{pot}(1)\bigr] = W_\mathrm{kin}(2) - W_\mathrm{kin}(1) .
$$

Die erste Form ist die Definition der potentiellen Energie, die zweite folgt aus der Beschleunigungsarbeit. Daraus ergibt sich $W_\mathrm{pot}(1) + W_\mathrm{kin}(1) = W_\mathrm{pot}(2) + W_\mathrm{kin}(2)$.

> [!NOTE] Energieerhaltungssatz
> In einem konservativen Kraftfeld ist an jedem Ort die Summe aus potentieller und kinetischer Energie eines Massenpunkts gleich. Diese Summe heißt **mechanische Gesamtenergie**:
>
> $$ W = W_\mathrm{pot} + W_\mathrm{kin} = \text{konstant} . $$

> [!TIP] In einfachen Worten
> Energie wandert zwischen "Lage" und "Bewegung" hin und her, aber die Summe bleibt gleich. Beim Fallen sinkt die potentielle Energie, die kinetische steigt im selben Maß. An der Schaukel passiert es immer wieder: ganz oben nur potentielle, ganz unten nur kinetische Energie.

![Die potentielle Energie einer Feder als Parabel mit einer waagerechten Linie für die Gesamtenergie. Der Abstand dazwischen ist die kinetische Energie.](/images/exphy1/energieerhaltung-parabel.svg)

*Eigene Zeichnung: Potentielle und kinetische Energie bei der Feder, die Summe bleibt konstant.*

### Beispiel

Ein Stein fällt aus $h = 20\,\mathrm{m}$ ohne Anfangsgeschwindigkeit. Mit dem Nullniveau am Boden ist die Gesamtenergie am Start $m\,g\,h$, am Boden $\tfrac{1}{2}\,m\,v^2$. Gleichsetzen ergibt

$$
v = \sqrt{2\,g\,h} = \sqrt{2\cdot 9{,}81\,\mathrm{m/s^2}\cdot 20\,\mathrm{m}} \approx 19{,}8\,\mathrm{m/s} .
$$

Das ist dasselbe Ergebnis wie in der Kinematik, siehe [2.1.5.1](/exphy1/skript/mechanik-des-massenpunktes/kinematik/gleichfoermig-beschleunigte-bewegung/), nur ohne die Fallzeit. Die Masse kürzt sich heraus. Die Zahlen sind frei gewählt.

> [!CAUTION] Stolperstelle
> Der Satz gilt nur für **konservative** Kräfte. Bei Reibung geht mechanische Energie in Wärme über, und die Summe $W_\mathrm{pot} + W_\mathrm{kin}$ sinkt. Insgesamt bleibt die Energie auch dann erhalten, aber nicht mehr in der mechanischen Form.

## Kraft aus dem Potential

Man geht von einem Punkt $P(x, y, z)$ zu einem Punkt $P'(x + \Delta x,\ y + \Delta y,\ z + \Delta z)$. In linearer Näherung ändert sich die potentielle Energie um

$$
\Delta W_\mathrm{pot} = \frac{\partial W_\mathrm{pot}}{\partial x}\Delta x + \frac{\partial W_\mathrm{pot}}{\partial y}\Delta y + \frac{\partial W_\mathrm{pot}}{\partial z}\Delta z .
$$

Dabei sind die **partiellen Ableitungen** die Ableitungen nach einer Koordinate, wobei man die anderen festhält. Die Arbeit ist $\Delta W = F_x\Delta x + F_y\Delta y + F_z\Delta z$, und wegen $\Delta W = -\Delta W_\mathrm{pot}$ folgt komponentenweise

$$
F_x = -\frac{\partial W_\mathrm{pot}}{\partial x} , \qquad F_y = -\frac{\partial W_\mathrm{pot}}{\partial y} , \qquad F_z = -\frac{\partial W_\mathrm{pot}}{\partial z} .
$$

> [!NOTE] Definition
> Der **Gradient** einer skalaren Funktion $f(x, y, z)$ ist der Vektor
>
> $$ \operatorname{grad} f = \nabla f = \frac{\partial f}{\partial x}\,\mathbf{e}_x + \frac{\partial f}{\partial y}\,\mathbf{e}_y + \frac{\partial f}{\partial z}\,\mathbf{e}_z . $$
>
> Das Symbol $\nabla = (\partial/\partial x,\ \partial/\partial y,\ \partial/\partial z)$ heißt **Nabla-Operator**. Der Gradient zeigt in die Richtung des steilsten Anstiegs von $f$, sein Betrag ist die Steigung dort.
>
> **Zusammenhang zwischen Kraft und Potential:** Die konservative Kraft ist
>
> $$ \mathbf{F} = -\nabla W_\mathrm{pot} . $$

> [!TIP] In einfachen Worten
> Stell dir die potentielle Energie als Gebirge vor. Die Kraft zeigt immer bergab, so wie ein Ball ins Tal rollt, und sie ist umso stärker, je steiler es ist. Das Minuszeichen sorgt dafür, dass die Kraft in Richtung sinkender Energie zeigt.

### Beispiele

- **Feder:** $W_\mathrm{pot} = \tfrac{1}{2}\,k\,x^2$ ergibt $F = -k\,x$, das Hookesche Gesetz.
- **Homogenes Schwerefeld:** $W_\mathrm{pot} = m\,g\,z$ ergibt $\mathbf{F} = -m\,g\,\mathbf{e}_z$, die Gewichtskraft nach unten.

Beides habe ich nachgerechnet. Mit dem Gradienten kann man auch aus einer Energiefunktion zeigen, dass eine Kraft konservativ ist, und die Kraft für beliebige Potentiale berechnen, zum Beispiel für das Gravitationspotential in 2.5.

## Weiter

- [2.4 Drehimpuls und Drehmoment](/exphy1/skript/mechanik-des-massenpunktes/drehimpuls-und-drehmoment/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 2.3.5 und 2.3.6 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
