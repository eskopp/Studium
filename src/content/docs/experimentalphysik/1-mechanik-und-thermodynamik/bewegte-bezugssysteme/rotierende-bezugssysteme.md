---
title: Rotierende Bezugssysteme
description: Winkelgeschwindigkeit, Zentrifugalkraft und Coriolis-Kraft, mit Herleitung und zwei Beispielen.
weight: 2
---

*In einem Satz: Wer sich mitdreht, spürt zwei Kräfte, die es von außen betrachtet nicht gibt, die Fliehkraft und die Coriolis-Kraft.*

## Winkelgeschwindigkeit und Bahngeschwindigkeit

> [!NOTE] Definition
> Die **Winkelgeschwindigkeit** $\omega$ ist der pro Zeit überstrichene Winkel im Bogenmaß:
>
> $$ \omega = \frac{\mathrm{d}\varphi}{\mathrm{d}t} = \dot\varphi $$
>
> Einheit: $[\omega] = 1/\mathrm{s}$. Als Vektor $\boldsymbol{\omega}$ steht sie senkrecht auf der Ebene, die Ortsvektor $\mathbf{r}$ und Bahngeschwindigkeit $\mathbf{v}$ aufspannen. Die Rechte-Hand-Regel gibt die Richtung: Zeigt der Daumen in Richtung $\boldsymbol{\omega}$, zeigen die Finger in Drehrichtung. Es gilt
>
> $$ \mathbf{v} = \boldsymbol{\omega} \times \mathbf{r} $$

> [!TIP] In einfachen Worten
> $\omega$ sagt, wie schnell sich etwas dreht, gemessen in Radiant pro Sekunde. Eine volle Umdrehung hat $2\pi$ Radiant. Wer weiter außen sitzt, legt bei gleichem $\omega$ pro Sekunde einen längeren Weg zurück und ist deshalb schneller. Das steckt in $v = \omega r$.

### Beispiel

Ein Karussell macht eine Umdrehung pro Sekunde, also $\omega = 2\pi\,\mathrm{s^{-1}} \approx 6{,}28\,\mathrm{s^{-1}}$. Ein Kind sitzt bei $r = 2\,\mathrm{m}$. Dann ist

$$
v = \omega r \approx 6{,}28\,\mathrm{s^{-1}} \cdot 2\,\mathrm{m} \approx 12{,}6\,\mathrm{m/s} .
$$

## Zentrifugalkraft

> [!NOTE] Definition
> Bewegt sich ein Körper der Masse $m$ auf einer Kreisbahn mit Radius $r$ und Winkelgeschwindigkeit $\omega$, dann wirkt im mitbewegten System eine vom Drehzentrum weg zeigende Trägheitskraft, die **Zentrifugal- oder Fliehkraft**:
>
> $$ F_Z' = m\,\omega^2 r $$
>
> In Vektorform: $\mathbf{F}_Z = -m\,\boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r})$.

> [!TIP] In einfachen Worten
> Von außen sieht man: Der Körper würde geradeaus fliegen, und eine Kraft zum Zentrum, die **Zentripetalkraft**, zwingt ihn auf die Kreisbahn. Wer mitdreht, sieht den Körper ruhen und muss sich eine Kraft nach außen denken, die der Zentripetalkraft die Waage hält. Beide Kräfte sind gleich groß, aber nur eine davon gibt es im Inertialsystem.

### Beispiel

Eine Kugel mit $m = 1\,\mathrm{kg}$ dreht sich auf $r = 0{,}5\,\mathrm{m}$ mit einer Umdrehung pro Sekunde. Dann ist

$$
F_Z' = m\omega^2 r = 1\,\mathrm{kg} \cdot (6{,}28\,\mathrm{s^{-1}})^2 \cdot 0{,}5\,\mathrm{m} \approx 19{,}7\,\mathrm{N} .
$$

## Coriolis-Kraft

> [!NOTE] Definition
> Bewegt sich ein Körper der Masse $m$ in einem mit $\omega$ rotierenden System mit der Geschwindigkeit $\mathbf{v}'$ (nicht entlang der Drehachse), dann wirkt senkrecht zu seiner Bewegungsrichtung die **Coriolis-Kraft**
>
> $$ \mathbf{F}_C = -2m\,\boldsymbol{\omega} \times \mathbf{v}' $$
>
> Ihr Betrag ist $F_C = 2m\omega v'$, wenn $\mathbf{v}' \perp \boldsymbol{\omega}$.

> [!TIP] In einfachen Worten
> Rollt eine Kugel auf einer sich drehenden Scheibe geradlinig nach außen, dann sieht ein Beobachter auf der Scheibe, wie sie zur Seite abgelenkt wird. Der Grund: Weiter außen bewegt sich der Boden schneller als weiter innen, und die Kugel hält ihre alte Seitwärtsgeschwindigkeit. Die Scheibe "läuft ihr davon". Die Kraft ändert nur die Richtung der Bewegung, nicht den Betrag der Geschwindigkeit.

### Beispiel

Auf einer Scheibe mit $\omega = 2\pi\,\mathrm{s^{-1}}$ rollt eine Kugel mit $m = 0{,}1\,\mathrm{kg}$ radial nach außen mit $v' = 1\,\mathrm{m/s}$. Die Coriolis-Kraft hat den Betrag

$$
F_C = 2m\omega v' = 2 \cdot 0{,}1\,\mathrm{kg} \cdot 6{,}28\,\mathrm{s^{-1}} \cdot 1\,\mathrm{m/s} \approx 1{,}26\,\mathrm{N} .
$$

> [!CAUTION] Stolperstelle
> Die Coriolis-Kraft wirkt nur auf Körper, die sich im rotierenden System bewegen. Ein Körper, der dort ruht, spürt nur die Fliehkraft.

### Herleitung der Beschleunigung im rotierenden System

Gesucht ist der Zusammenhang zwischen der Beschleunigung $\mathbf{a}$ im Inertialsystem $S$ und $\mathbf{a}'$ im rotierenden System $S'$. Beide Systeme haben denselben Ursprung, $\boldsymbol{\omega}$ ist konstant.

**Schritt 1.** Von $S$ aus gesehen drehen sich die Einheitsvektoren $\mathbf{e}'_x, \mathbf{e}'_y, \mathbf{e}'_z$ von $S'$ mit $\boldsymbol{\omega}$. Für jeden gilt $\dot{\mathbf{e}}{}'_i = \boldsymbol{\omega} \times \mathbf{e}'_i$.

**Schritt 2.** Der Ortsvektor ist $\mathbf{r} = x'\mathbf{e}'_x + y'\mathbf{e}'_y + z'\mathbf{e}'_z$. Ableiten nach der Zeit in $S$ nach der Produktregel liefert

$$
\mathbf{v} = \underbrace{\dot x'\mathbf{e}'_x + \dot y'\mathbf{e}'_y + \dot z'\mathbf{e}'_z}_{=\,\mathbf{v}'} + \underbrace{x'\dot{\mathbf{e}}{}'_x + y'\dot{\mathbf{e}}{}'_y + z'\dot{\mathbf{e}}{}'_z}_{=\,\boldsymbol{\omega} \times \mathbf{r}} .
$$

Also gilt $\mathbf{v} = \mathbf{v}' + \boldsymbol{\omega} \times \mathbf{r}$. Das ist die Formel $\mathbf{v} = \boldsymbol{\omega} \times \mathbf{r}$ für einen Punkt, der im rotierenden System ruht, plus die Eigenbewegung $\mathbf{v}'$.

**Schritt 3.** Dieselbe Rechnung gilt für jeden Vektor $\mathbf{q}$:

$$
\left(\frac{\mathrm{d}\mathbf{q}}{\mathrm{d}t}\right)_S = \left(\frac{\mathrm{d}\mathbf{q}}{\mathrm{d}t}\right)_{S'} + \boldsymbol{\omega} \times \mathbf{q} .
$$

**Schritt 4.** Man leitet $\mathbf{v} = \mathbf{v}' + \boldsymbol{\omega} \times \mathbf{r}$ in $S$ noch einmal ab und benutzt Schritt 3 für $\mathbf{v}'$:

$$
\mathbf{a} = \left(\frac{\mathrm{d}\mathbf{v}'}{\mathrm{d}t}\right)_S + \boldsymbol{\omega} \times \mathbf{v} = \mathbf{a}' + \boldsymbol{\omega} \times \mathbf{v}' + \boldsymbol{\omega} \times (\mathbf{v}' + \boldsymbol{\omega} \times \mathbf{r}) .
$$

Zusammengefasst und nach $\mathbf{a}'$ umgestellt:

$$
\mathbf{a}' = \mathbf{a} \; \underbrace{-\,2\,\boldsymbol{\omega} \times \mathbf{v}'}_{\mathbf{a}_C} \; \underbrace{-\,\boldsymbol{\omega} \times (\boldsymbol{\omega} \times \mathbf{r})}_{\mathbf{a}_Z}
$$

Mit $m$ multipliziert sind $m\,\mathbf{a}_C$ die Coriolis-Kraft und $m\,\mathbf{a}_Z$ die Zentrifugalkraft.

## Zwei Beispiele für Fliehkräfte

### Das Drehpendel

Eine Kugel hängt an einem Faden und kreist so, dass der Faden den Winkel $\alpha$ zur Senkrechten hat. Von außen gesehen ist die Resultierende aus Gewichtskraft $m\mathbf{g}$ und Fadenkraft $\mathbf{F}_f$ die Zentripetalkraft. Trigonometrie liefert

$$
F_Z = m g \tan\alpha .
$$

Im mitdrehenden System ruht die Kugel, also ist $\mathbf{a}' = 0$. Dort gilt $m\mathbf{g} + \mathbf{F}_f + \mathbf{F}_Z' = 0$, also $\mathbf{F}_Z' = -\mathbf{F}_Z$. Das ist das d'Alembertsche Prinzip aus [Inertialsysteme und Galilei-Transformation](/experimentalphysik/1-mechanik-und-thermodynamik/bewegte-bezugssysteme/inertialsysteme-und-galilei-transformation/).

### Der Satellit

Von der Erde aus gesehen sorgt die Gravitationskraft für die Kreisbahn, es gilt $-m\omega^2 r = -\gamma\,\dfrac{mM}{r^2}$. Daraus folgt der Bahnradius

$$
r = \sqrt[3]{\frac{\gamma M}{\omega^2}} .
$$

Der Astronaut im Satelliten fühlt sich kräftefrei. Für ihn heben sich Gravitationskraft und Fliehkraft auf, $F + F_Z' = 0$. Beide Sichtweisen liefern denselben Radius.

## Weiter

Zwei Anwendungen der Coriolis-Kraft stehen in [Foucault-Pendel und Zyklonen](/experimentalphysik/1-mechanik-und-thermodynamik/bewegte-bezugssysteme/foucault-pendel-und-zyklonen/).

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 3.2.2 und Skriptum Kapitel 3 (anschauliche und vektorielle Herleitung)
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
