---
title: 2.1.5.2 Ungleichförmig beschleunigte Bewegung
description: Die gleichförmige Kreisbewegung, Zentripetalbeschleunigung, Tangential- und Normalbeschleunigung und der Krümmungsradius.
weight: 4
---

*In einem Satz: Auch bei konstantem Tempo gibt es eine Beschleunigung, wenn sich die Richtung ändert, und sie lässt sich in einen Teil entlang der Bahn und einen Teil senkrecht dazu zerlegen.*

## Die gleichförmige Kreisbewegung

Eine Beschleunigung ist **ungleichförmig**, wenn $\mathbf{a}(t)$ nicht konstant ist. Das gilt auch, wenn nur die Richtung von $\mathbf{a}$ wechselt, der Betrag aber gleich bleibt. Das einfachste Beispiel ist die gleichförmige Kreisbewegung mit dem Radius $R$.

> [!NOTE] Definition
> Die **Winkelgeschwindigkeit** ist die zeitliche Änderung des Winkels $\varphi$ (im Bogenmaß), Einheit $\mathrm{s^{-1}}$:
>
> $$ \omega = \frac{\mathrm{d}\varphi}{\mathrm{d}t} = \dot{\varphi} . $$
>
> Die **Bahngeschwindigkeit** ist der Betrag der Geschwindigkeit auf der Kreisbahn, $v = R\,\omega$. Mit $\mathbf{r}(t) = (R\cos\omega t,\ R\sin\omega t)$ folgt
>
> $$ \mathbf{v}(t) = \omega\begin{pmatrix} -R\sin\omega t \\ R\cos\omega t \end{pmatrix} , \qquad \mathbf{a}(t) = -\omega^2\,\mathbf{r}(t) . $$
>
> Die Beschleunigung zeigt immer zum Kreismittelpunkt und steht senkrecht auf $\mathbf{v}$, denn $\mathbf{v}\cdot\mathbf{a} = 0$. Man nennt sie **Zentripetalbeschleunigung**. Ihr Betrag ist $a = \omega^2 R = v^2/R$.

> [!TIP] In einfachen Worten
> Die Geschwindigkeit ist ein Pfeil, der sich dreht, und das Drehen ist eine Beschleunigung. Sie zeigt nach innen und ändert nur die Richtung, nicht das Tempo. Ohne sie würde der Körper geradeaus weiterfliegen.

### Beispiel

Ein Rad mit $R = 0{,}50\,\mathrm{m}$ dreht sich zweimal pro Sekunde. Die Zahlen sind frei gewählt. Dann ist $\omega = 2\pi\cdot 2\,\mathrm{s^{-1}} \approx 12{,}6\,\mathrm{s^{-1}}$, und am Rand gilt

$$
v = R\,\omega \approx 6{,}3\,\mathrm{m/s} , \qquad a = \omega^2 R \approx 79\,\mathrm{m/s^2} \approx 8\,g .
$$

> [!CAUTION] Stolperstelle
> Zentripetalbeschleunigung ist keine zusätzliche Kraft. Sie beschreibt nur, wie stark die Geschwindigkeit ihre Richtung ändert. Welche Kraft sie hervorruft, hängt vom Beispiel ab (Seilkraft, Reibung, Schwerkraft). Die Zentrifugalkraft ist dagegen eine Trägheitskraft im mitrotierenden System, siehe [3.2.2 Rotierende Bezugssysteme](/exphy1/skript/bewegte-bezugssysteme/rotierende-bezugssysteme/).

## Tangential- und Normalbeschleunigung

> [!NOTE] Definition
> Bei einer beliebigen krummlinigen Bewegung zerlegt man die Beschleunigung in zwei senkrechte Anteile, $\mathbf{a} = \mathbf{a}_t + \mathbf{a}_n$ mit $\mathbf{a}_t\cdot\mathbf{a}_n = 0$. Mit dem Tangenteneinheitsvektor $\mathbf{e}_t = \mathbf{v}/v$ ist
>
> $$ \mathbf{a} = \dot{v}\,\mathbf{e}_t + v\,\dot{\mathbf{e}}_t . $$
>
> Die **Tangentialbeschleunigung** $\mathbf{a}_t = \dot{v}\,\mathbf{e}_t$ liegt in Richtung der Bahn und ändert den Betrag von $\mathbf{v}$. Die **Normalbeschleunigung** $\mathbf{a}_n = v\,\dot{\mathbf{e}}_t$ steht senkrecht dazu und ändert die Richtung von $\mathbf{v}$, also die Krümmung der Bahn.

> [!TIP] In einfachen Worten
> Beim Autofahren ist der Gaspedal-Teil die Tangentialbeschleunigung und der Lenkrad-Teil die Normalbeschleunigung. Beim freien Fall gibt es nur den ersten Teil, bei der gleichförmigen Kreisbewegung nur den zweiten.

Für die Beispiele aus der Vorlesung gilt:

| Bewegung | $\mathbf{a}_t$ | $\mathbf{a}_n$ |
| --- | --- | --- |
| freier Fall | $-g\,\mathbf{e}_z$ | $0$ |
| gleichförmige Kreisbewegung | $0$ | $-R\omega^2\,\mathbf{e}_r$ |

Dabei ist $\mathbf{e}_r$ der Einheitsvektor in Radialrichtung, vom Mittelpunkt weg.

### Herleitung, warum die beiden Teile senkrecht stehen

Der Einheitsvektor hat den Betrag $1$, also $\mathbf{e}_t\cdot\mathbf{e}_t = 1$. Leitet man das nach der Zeit ab, folgt $0 = 2\,\mathbf{e}_t\cdot\dot{\mathbf{e}}_t$. Also steht $\dot{\mathbf{e}}_t$ senkrecht auf $\mathbf{e}_t$, und damit steht $\mathbf{a}_n$ senkrecht auf $\mathbf{v}$.

## Der Krümmungsradius

Man legt die $xy$-Ebene so, dass $\mathbf{a}$ und $\mathbf{v}$ in ihr liegen, und schreibt $\mathbf{e}_t = \cos\varphi\,\mathbf{e}_x + \sin\varphi\,\mathbf{e}_y$ und $\mathbf{e}_n = -\sin\varphi\,\mathbf{e}_x + \cos\varphi\,\mathbf{e}_y$. Dann ist $\dot{\mathbf{e}}_t = \dot{\varphi}\,\mathbf{e}_n$.

> [!NOTE] Definition
> Der **Krümmungsradius** $\varrho$ ist durch $\varrho = \mathrm{d}s/\mathrm{d}\varphi$ definiert, also $v/\varrho = \dot{\varphi}$. Daraus folgt
>
> $$ \mathbf{a} = \dot{v}\,\mathbf{e}_t + \frac{v^2}{\varrho}\,\mathbf{e}_n , \qquad |\mathbf{a}| = \sqrt{\dot{v}^2 + \frac{v^4}{\varrho^2}} . $$

> [!TIP] In einfachen Worten
> Der Krümmungsradius ist der Radius des Kreises, der sich an der Stelle am besten an die Bahn anschmiegt. Eine enge Kurve hat einen kleinen $\varrho$, eine gerade Strecke einen unendlich großen. Die Normalbeschleunigung $v^2/\varrho$ wächst mit dem Quadrat des Tempos und mit der Enge der Kurve.

### Beispiel

Ein Ball wird mit $v_0 = 12\,\mathrm{m/s}$ unter $40^\circ$ geworfen. Im höchsten Punkt ist nur noch die Geschwindigkeit in $x$-Richtung übrig, $v = 12\,\mathrm{m/s}\cdot\cos 40^\circ \approx 9{,}2\,\mathrm{m/s}$, und die Beschleunigung $g$ zeigt senkrecht nach unten, also senkrecht zur Bahn. Dort ist $a_n = g$ und

$$
\varrho = \frac{v^2}{g} = \frac{(9{,}2\,\mathrm{m/s})^2}{9{,}81\,\mathrm{m/s^2}} \approx 8{,}6\,\mathrm{m} .
$$

Die Zahlen sind frei gewählt und keine Messwerte.

## Weiter

- [2.2.1 Kräfte](/exphy1/skript/mechanik-des-massenpunktes/dynamik/kraefte/): Woher die Beschleunigung kommt

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.1.5.2 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
