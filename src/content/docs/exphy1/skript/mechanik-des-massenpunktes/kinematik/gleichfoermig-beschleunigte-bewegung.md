---
title: 2.1.5.1 Gleichförmig beschleunigte Bewegung
description: Freier Fall und schiefer Wurf, mit Fallzeit, Endgeschwindigkeit, Wurfweite, Wurfhöhe und Wurfdauer.
weight: 3
---

*In einem Satz: Bei konstanter Beschleunigung ist die Bahn eine Parabel, und alle Größen des Wurfs lassen sich aus den Anfangsbedingungen ausrechnen.*

## Konstante Beschleunigung

> [!NOTE] Definition
> Eine Bewegung heißt **gleichförmig beschleunigt**, wenn die Beschleunigung $\mathbf{a}$ nach Betrag und Richtung konstant ist. Integriert man zweimal, folgt
>
> $$ \mathbf{v}(t) = \mathbf{a}\,t + \mathbf{v}_0 , \qquad \mathbf{r}(t) = \tfrac{1}{2}\,\mathbf{a}\,t^2 + \mathbf{v}_0\,t + \mathbf{r}_0 . $$
>
> Die Vektoren $\mathbf{v}_0$ und $\mathbf{r}_0$ sind die Anfangsbedingungen zur Zeit $t = 0$.

> [!TIP] In einfachen Worten
> Der Ort ändert sich in $t$ quadratisch, die Geschwindigkeit linear. Das ist der Fall, wenn die Beschleunigung nicht vom Ort oder von der Zeit abhängt, zum Beispiel für alle Körper in der Nähe der Erdoberfläche, wo $g \approx 9{,}8\,\mathrm{m/s^2}$ gilt. Man nennt das ein homogenes Feld, weil die Beschleunigung überall gleich ist.

## Der freie Fall

Ein Körper wird in der Höhe $h$ ohne Anfangsgeschwindigkeit losgelassen. Die $z$-Achse zeigt nach oben, also ist $\mathbf{a} = -g\,\mathbf{e}_z$, $\mathbf{r}_0 = h\,\mathbf{e}_z$ und $\mathbf{v}_0 = 0$.

> [!NOTE] Ergebnis
> $$ z(t) = h - \tfrac{1}{2} g t^2 , \qquad v_z(t) = -g\,t , \qquad T = \sqrt{\frac{2h}{g}} , \qquad v_z(T) = -\sqrt{2\,g\,h} . $$
>
> Das negative Vorzeichen bedeutet, dass der Körper entgegen der $z$-Achse fällt.

Die Fallzeit $T$ folgt aus der Bedingung $z(T) = 0$. Setzt man $T$ in $v_z$ ein, ergibt sich die Aufprallgeschwindigkeit.

### Beispiel

Ein Stein fällt aus $h = 20\,\mathrm{m}$. Die Zahl ist frei gewählt. Dann ist

$$
T = \sqrt{\frac{2\cdot 20\,\mathrm{m}}{9{,}81\,\mathrm{m/s^2}}} \approx 2{,}0\,\mathrm{s} , \qquad |v_z(T)| = \sqrt{2\cdot 9{,}81\,\mathrm{m/s^2}\cdot 20\,\mathrm{m}} \approx 19{,}8\,\mathrm{m/s} \approx 71\,\mathrm{km/h} .
$$

## Der schiefe Wurf

Beim schiefen Wurf startet der Körper in der Höhe $h$ mit der Geschwindigkeit $v_0$ unter dem Abschusswinkel $\varphi$ gegen die Horizontale. Man zerlegt in $v_{0x} = v_0 \cos\varphi$ und $v_{0z} = v_0 \sin\varphi$. Der Wurf ist die Überlagerung einer gleichförmigen Bewegung in $x$-Richtung und eines senkrechten Wurfs in $z$-Richtung.

> [!NOTE] Ergebnis
> $$ x(t) = v_{0x}\,t , \qquad z(t) = h + v_{0z}\,t - \tfrac{1}{2} g t^2 . $$
>
> Wurfhöhe und Wurfweite:
>
> $$ H = h + \frac{v_0^2 \sin^2\varphi}{2g} , \qquad x_\mathrm{w} = \frac{v_0^2 \sin\varphi\cos\varphi}{g}\left(1 + \sqrt{1 + \frac{2\,g\,h}{v_0^2 \sin^2\varphi}}\right) . $$
>
> Die Wurfdauer folgt aus $x_\mathrm{w} = v_0 \cos\varphi \cdot T$, also $T = x_\mathrm{w}/(v_0\cos\varphi)$.

![Die Parabelbahn eines Wurfs aus der Höhe h unter dem Winkel phi mit höchster Höhe H und Wurfweite x_w.](/images/exphy1/schiefer-wurf.svg)

*Eigene Zeichnung: Der schiefe Wurf mit Wurfhöhe und Wurfweite.*

### Beispiel

Ein Ball wird vom Boden ($h = 0$) mit $v_0 = 15\,\mathrm{m/s}$ unter $\varphi = 30^\circ$ geworfen. Die Zahlen sind frei gewählt. Dann ist

$$
x_\mathrm{w} = \frac{(15\,\mathrm{m/s})^2 \cdot \sin 30^\circ \cos 30^\circ}{9{,}81\,\mathrm{m/s^2}}\cdot 2 \approx 19{,}9\,\mathrm{m} , \qquad H = \frac{(15\,\mathrm{m/s})^2 \cdot \sin^2 30^\circ}{2\cdot 9{,}81\,\mathrm{m/s^2}} \approx 2{,}9\,\mathrm{m} .
$$

Für $h = 0$ vereinfacht sich die Wurfweite zu $x_\mathrm{w} = v_0^2 \sin(2\varphi)/g$, und sie ist bei $\varphi = 45^\circ$ am größten.

> [!CAUTION] Stolperstelle
> Die quadratische Gleichung für $x_\mathrm{w}$ hat zwei Lösungen. Die mit dem Minuszeichen vor der Wurzel ist negativ, sie beschreibt den Schnittpunkt der gedachten Parabel hinter dem Abwurfpunkt und gehört nicht zum Wurf. Man nimmt das Pluszeichen.

### Herleitung

Aus $x = v_{0x} t$ folgt $t = x/v_{0x}$. Eingesetzt in $z(t)$ ergibt sich die Bahn als Funktion von $x$, eine Parabel:

$$
z(x) = h + \frac{v_{0z}}{v_{0x}}\,x - \frac{g}{2 v_{0x}^2}\,x^2 .
$$

Für den Aufprall ist $z(x_\mathrm{w}) = 0$. Das ist eine quadratische Gleichung in $x_\mathrm{w}$, die man durch quadratische Ergänzung löst:

$$
x_\mathrm{w} = \frac{v_{0x} v_{0z}}{g} \pm \sqrt{\frac{v_{0x}^2 v_{0z}^2}{g^2} + \frac{2\,h\,v_{0x}^2}{g}} .
$$

Mit $v_{0x} = v_0\cos\varphi$ und $v_{0z} = v_0\sin\varphi$ folgt daraus die Formel oben. Für die Wurfhöhe $H$ nutzt man, dass $v_z$ im höchsten Punkt null ist: $v_z(T_H) = -g T_H + v_{0z} = 0$, also $T_H = v_{0z}/g$. Setzt man $T_H$ in $z(t)$ ein, ergibt sich $H = h + v_0^2\sin^2\varphi/(2g)$.

## Weiter

- [2.1.5.2 Ungleichförmig beschleunigte Bewegung](/exphy1/skript/mechanik-des-massenpunktes/kinematik/ungleichfoermig-beschleunigte-bewegung/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.1.5.1 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
