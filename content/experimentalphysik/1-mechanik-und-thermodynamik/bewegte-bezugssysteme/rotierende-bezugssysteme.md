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
> Einheit: $[\omega] = 1/\mathrm{s}$. Als Vektor $\vec\omega$ steht sie senkrecht auf der Ebene, die Ortsvektor $\vec r$ und Bahngeschwindigkeit $\vec v$ aufspannen. Die Rechte-Hand-Regel gibt die Richtung: Zeigt der Daumen in Richtung $\vec\omega$, zeigen die Finger in Drehrichtung. Es gilt
>
> $$ \vec v = \vec\omega \times \vec r $$

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
> In Vektorform: $\vec F_Z = -m\,\vec\omega \times (\vec\omega \times \vec r)$.

> [!TIP] In einfachen Worten
> Von außen sieht man: Der Körper würde geradeaus fliegen, und eine Kraft zum Zentrum, die **Zentripetalkraft**, zwingt ihn auf die Kreisbahn. Wer mitdreht, sieht den Körper ruhen und muss sich eine Kraft nach außen denken, die der Zentripetalkraft die Waage hält. Beide Kräfte sind gleich groß, aber nur eine davon gibt es im Inertialsystem.

### Beispiel

Eine Kugel mit $m = 1\,\mathrm{kg}$ dreht sich auf $r = 0{,}5\,\mathrm{m}$ mit einer Umdrehung pro Sekunde. Dann ist

$$
F_Z' = m\omega^2 r = 1\,\mathrm{kg} \cdot (6{,}28\,\mathrm{s^{-1}})^2 \cdot 0{,}5\,\mathrm{m} \approx 19{,}7\,\mathrm{N} .
$$

## Coriolis-Kraft

> [!NOTE] Definition
> Bewegt sich ein Körper der Masse $m$ in einem mit $\omega$ rotierenden System mit der Geschwindigkeit $\vec v'$ (nicht entlang der Drehachse), dann wirkt senkrecht zu seiner Bewegungsrichtung die **Coriolis-Kraft**
>
> $$ \vec F_C = -2m\,\vec\omega \times \vec v' $$
>
> Ihr Betrag ist $F_C = 2m\omega v'$, wenn $\vec v' \perp \vec\omega$.

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

Gesucht ist der Zusammenhang zwischen der Beschleunigung $\vec a$ im Inertialsystem $S$ und $\vec a'$ im rotierenden System $S'$. Beide Systeme haben denselben Ursprung, $\vec\omega$ ist konstant.

**Schritt 1.** Von $S$ aus gesehen drehen sich die Einheitsvektoren $\vec e'_x, \vec e'_y, \vec e'_z$ von $S'$ mit $\vec\omega$. Für jeden gilt $\dot{\vec e}{}'_i = \vec\omega \times \vec e'_i$.

**Schritt 2.** Der Ortsvektor ist $\vec r = x'\vec e'_x + y'\vec e'_y + z'\vec e'_z$. Ableiten nach der Zeit in $S$ nach der Produktregel liefert

$$
\vec v = \underbrace{\dot x'\vec e'_x + \dot y'\vec e'_y + \dot z'\vec e'_z}_{=\,\vec v'} + \underbrace{x'\dot{\vec e}{}'_x + y'\dot{\vec e}{}'_y + z'\dot{\vec e}{}'_z}_{=\,\vec\omega \times \vec r} .
$$

Also gilt $\vec v = \vec v' + \vec\omega \times \vec r$. Das ist die Formel $\vec v = \vec\omega \times \vec r$ für einen Punkt, der im rotierenden System ruht, plus die Eigenbewegung $\vec v'$.

**Schritt 3.** Dieselbe Rechnung gilt für jeden Vektor $\vec q$:

$$
\left(\frac{\mathrm{d}\vec q}{\mathrm{d}t}\right)_S = \left(\frac{\mathrm{d}\vec q}{\mathrm{d}t}\right)_{S'} + \vec\omega \times \vec q .
$$

**Schritt 4.** Man leitet $\vec v = \vec v' + \vec\omega \times \vec r$ in $S$ noch einmal ab und benutzt Schritt 3 für $\vec v'$:

$$
\vec a = \left(\frac{\mathrm{d}\vec v'}{\mathrm{d}t}\right)_S + \vec\omega \times \vec v = \vec a' + \vec\omega \times \vec v' + \vec\omega \times (\vec v' + \vec\omega \times \vec r) .
$$

Zusammengefasst und nach $\vec a'$ umgestellt:

$$
\vec a' = \vec a \; \underbrace{-\,2\,\vec\omega \times \vec v'}_{a_C} \; \underbrace{-\,\vec\omega \times (\vec\omega \times \vec r)}_{a_Z}
$$

Mit $m$ multipliziert sind $m a_C$ die Coriolis-Kraft und $m a_Z$ die Zentrifugalkraft.

## Zwei Beispiele für Fliehkräfte

### Das Drehpendel

Eine Kugel hängt an einem Faden und kreist so, dass der Faden den Winkel $\alpha$ zur Senkrechten hat. Von außen gesehen ist die Resultierende aus Gewichtskraft $m\vec g$ und Fadenkraft $\vec F_f$ die Zentripetalkraft. Trigonometrie liefert

$$
F_Z = m g \tan\alpha .
$$

Im mitdrehenden System ruht die Kugel. Dort gilt $m\vec g + \vec F_f + \vec F_Z' = 0$, also $\vec F_Z' = -\vec F_Z$. Das ist das d'Alembertsche Prinzip aus [Inertialsysteme und Galilei-Transformation](/experimentalphysik/1-mechanik-und-thermodynamik/bewegte-bezugssysteme/inertialsysteme-und-galilei-transformation/).

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
