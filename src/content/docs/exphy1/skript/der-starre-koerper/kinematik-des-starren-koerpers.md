---
title: 5.1 Kinematik des starren Körpers
description: Der starre Körper als System von Massenpunkten, sein Massenmittelpunkt, das Euler-Theorem, die Überlagerung von Translation und Rotation, sechs Freiheitsgrade und die Eulerschen Winkel.
weight: 1
---

*In einem Satz: Jede Bewegung eines starren Körpers setzt sich aus der Bewegung seines Schwerpunkts und einer Drehung um eine Achse durch den Schwerpunkt zusammen, und dafür braucht man sechs Koordinaten.*

Das Ziel des Kapitels ist die Beschreibung der Kreiselbewegung. Dafür kommen Kinematik, Dynamik und Statik des starren Körpers, das Trägheitsmoment und die Rotation um freie und feste Achsen. Dieser Artikel behandelt den ersten Schritt, die Kinematik.

## Der starre Körper

> [!NOTE] Definition
> Ein **starrer Körper** ist ein System von Massenpunkten, bei dem die Abstände der Massenpunkte untereinander auch unter der Einwirkung äußerer Kräfte unverändert bleiben:
>
> $$ |\mathbf{r}_i - \mathbf{r}_j| = \text{konstant} \quad\text{für alle } i, j . $$
>
> Man stellt sich den ausgedehnten Körper aus starr verbundenen Massenelementen $m_i$ mit den Volumina $\Delta V_i$ zusammengesetzt vor.

> [!TIP] In einfachen Worten
> Ein starrer Körper verformt sich nicht. Ein Stein, ein Rad oder ein Brett sind in guter Näherung starr, eine Gummiente oder ein Wasserball nicht. Das Modell ist wie der Massenpunkt eine Idealisierung, aber eine sehr nützliche.

Der Massenmittelpunkt eines kontinuierlichen Körpers entsteht aus dem Fall der Massenpunkte, indem man die Summe durch ein Integral über das Volumen $V$ ersetzt, mit der Dichte $\varrho(\mathbf{r})$:

> [!NOTE] Definition
> $$ \mathbf{r}_S = \frac{1}{M}\int_V \mathbf{r}\,\mathrm{d}m = \frac{1}{M}\int_V \mathbf{r}\,\varrho(\mathbf{r})\,\mathrm{d}V . $$
>
> Das gilt komponentenweise. Bei einem **homogenen** Körper ($\varrho = \text{konstant}$) ist $\mathbf{r}_S = \frac{1}{V}\int_V \mathbf{r}\,\mathrm{d}V$.

Wie bei den Massenpunkten im Abschnitt [4.1 Massenmittelpunkt](/exphy1/skript/systeme-von-massenpunkten/massenmittelpunkt/) bewegt sich der Schwerpunkt so, als wäre die ganze Masse dort vereint und die äußere Kraft griffe dort an.

## Das Euler-Theorem

> [!NOTE] Satz (Euler-Theorem)
> Wird ein starrer Körper in einem Punkt festgehalten, ist die allgemeine Bewegung eine Drehung um eine Achse, die durch diesen Punkt läuft.

Der Satz geht auf Leonhard Euler zurück. Er ist anschaulich, sein Beweis aber schwierig, und er wird hier ohne Beweis verwendet. Wichtig: Die Drehachse muss bei einer allgemeinen Drehung **nicht fest** sein. Sie ist nur **momentan** und kann ihre Richtung im Raum ändern.

## Translation und Rotation überlagern sich

Man verallgemeinert die Transformation zwischen [Labor- und Schwerpunktsystem](/exphy1/skript/systeme-von-massenpunkten/massenmittelpunkt/) auf einen Körper, der sich relativ zum Labor sowohl verschiebt als auch dreht. Für ein Massenelement $i$ mit dem Ort $\mathbf{r}_i$ im Labor und $\mathbf{r}_{iS} = \mathbf{r}_i - \mathbf{r}_S$ im Schwerpunktsystem gilt $\mathbf{v}_{iS} = \mathbf{v}_i - \mathbf{v}_S$.

Weil der Körper starr ist, ist $|\mathbf{r}_{iS}|$ konstant. Dann ist auch das Quadrat konstant, und

$$
\frac{\mathrm{d}}{\mathrm{d}t}\,\mathbf{r}_{iS}^2 = 2\,\mathbf{r}_{iS}\cdot\mathbf{v}_{iS} = 0 \quad\Longrightarrow\quad \mathbf{v}_{iS} \perp \mathbf{r}_{iS} .
$$

Aus der Diskussion der rotierenden Bezugssysteme (siehe [3.2.2](/exphy1/skript/bewegte-bezugssysteme/rotierende-bezugssysteme/)) kennt man $\mathbf{v}_{iS} = \boldsymbol{\omega}\times\mathbf{r}_{iS}$, wobei die Winkelgeschwindigkeit $\boldsymbol{\omega}$ parallel zur Drehachse durch den Schwerpunkt ist. Damit gilt:

> [!NOTE] Ergebnis
> $$ \mathbf{v}_i = \mathbf{v}_S + \boldsymbol{\omega}\times\mathbf{r}_{iS} . $$
>
> Die Geschwindigkeit eines herausgegriffenen Massenpunkts ist die Überlagerung aus der Translation des Schwerpunkts und der Rotation um eine Achse durch den Schwerpunkt.

> [!TIP] In einfachen Worten
> Ein Körper, der durch die Luft fliegt und dabei trudelt, bewegt sich in zwei Teilen: Sein Schwerpunkt fliegt eine Parabel, und der Körper dreht sich um diesen Punkt. Beides kann man getrennt betrachten und dann addieren.

### Beispiel: das rollende Rad

Ein Rad mit dem Radius $R = 0{,}30\,\mathrm{m}$ rollt ohne zu rutschen mit $v_S = 2{,}0\,\mathrm{m/s}$ in $x$-Richtung. Die Zahlen sind frei gewählt. Die Drehachse zeigt in $y$-Richtung mit $\omega = v_S/R \approx 6{,}7\,\mathrm{s^{-1}}$. Der Berührpunkt unten hat $\mathbf{r}_{iS} = -R\,\mathbf{e}_z$ und die Geschwindigkeit

$$
\mathbf{v} = v_S\,\mathbf{e}_x + \omega\,\mathbf{e}_y\times(-R\,\mathbf{e}_z) = v_S\,\mathbf{e}_x - v_S\,\mathbf{e}_x = 0 .
$$

Der Berührpunkt ruht also, sonst würde das Rad rutschen. Der höchste Punkt hat dagegen $\mathbf{r}_{iS} = +R\,\mathbf{e}_z$ und die doppelte Geschwindigkeit $2\,v_S = 4{,}0\,\mathrm{m/s}$.

![Ein rollendes Rad mit den Geschwindigkeiten des Mittelpunkts, des höchsten Punkts und des ruhenden Berührpunkts.](/images/exphy1/rollendes-rad.svg)

*Eigene Zeichnung: Beim Rollen ruht der Berührpunkt, der höchste Punkt hat die doppelte Geschwindigkeit.*

> [!CAUTION] Stolperstelle
> Die Zerlegung ist am einfachsten, wenn man die Drehachse durch den Schwerpunkt legt. Man kann die Drehachse auch an einen anderen Punkt legen, aber dann ändert sich die Translation, die man dazurechnen muss. Und aus $\mathbf{v}_{iS} \perp \mathbf{r}_{iS}$ allein folgt noch nicht, dass die Bewegung eine Drehung ist. Dafür steht das Euler-Theorem.

## Freiheitsgrade

> [!NOTE] Definition
> Die Zahl der **Freiheitsgrade** ist die Zahl der unabhängigen Parameter, die man braucht, um Lage und Orientierung des Körpers im Raum festzulegen.

Beispiele sind ein Massenpunkt im Raum mit $3$ Freiheitsgraden und ein Massenpunkt in einer Ebene mit $2$. Für $N$ freie Massenpunkte sind es $3N$.

Beim starren Körper wählt man drei Punkte aus:

- **Punkt 1** braucht $3$ Koordinaten.
- **Punkt 2** kann nur noch auf einer Kugeloberfläche um Punkt 1 liegen, weil der Abstand fest ist, also genügen $2$ Koordinaten.
- **Punkt 3** kann nur noch auf einem Kreis um die Verbindungslinie von 1 und 2 liegen, es bleibt $1$ Parameter.

Das sind zusammen $3 + 2 + 1 = 6$ Freiheitsgrade: drei Ortskoordinaten für die Translation des Schwerpunkts und drei Winkelkoordinaten für die Rotation um den Schwerpunkt. Der **freie starre Körper hat sechs Freiheitsgrade der Bewegung**.

## Die Eulerschen Winkel

> [!NOTE] Definition
> Zur Beschreibung der Orientierung verwendet man die **Eulerschen Winkel** $(\theta, \varphi, \psi)$. Mit ihnen bringt man das raumfeste Laborsystem $(x, y, z)$ mit einem körperfesten Bezugssystem $(x', y', z')$ gleichen Ursprungs in drei Schritten zur Deckung. Das Winkelpaar $(\theta, \varphi)$ legt die Richtung der körperfesten $z'$-Achse fest, und der Winkel $\psi$ beschreibt zusätzlich eine Drehung um die $z'$-Achse.

> [!TIP] In einfachen Worten
> Wie man ein Flugzeug in der Luft beschreibt: Man sagt, wohin die Nase zeigt (zwei Winkel), und wie es um die Längsachse gerollt ist (ein dritter Winkel). Zusammen mit dem Ort des Schwerpunkts sind das die sechs Zahlen.

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Kapitel 5, Abschnitt 5.1, und Skriptum Kapitel 5. Die Bilder dort stammen aus W. Demtröder, Experimentalphysik 1 (Springer, 2006) und R. Gross, A. Marx, Physik 1 (TU München).
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und das Rechenbeispiel mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
