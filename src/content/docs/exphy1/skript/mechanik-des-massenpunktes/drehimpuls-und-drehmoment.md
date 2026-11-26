---
title: 2.4 Drehimpuls und Drehmoment
description: Das Vektorprodukt aus Ort und Impuls, die Bewegungsgleichung der Drehung und warum der Drehimpuls bei einer Zentralkraft erhalten bleibt.
weight: 4
---

*In einem Satz: Der Drehimpuls ist Ort kreuz Impuls, das Drehmoment ist Ort kreuz Kraft, und ein äußeres Drehmoment ändert den Drehimpuls, so wie eine äußere Kraft den Impuls ändert.*

## Drehimpuls

> [!NOTE] Definition
> Der **Drehimpuls** eines Massenpunkts in Bezug auf den Koordinatenursprung ist das Vektorprodukt aus Ortsvektor und Impuls:
>
> $$ \mathbf{L} = \mathbf{r}\times\mathbf{p} , \qquad L_x = y\,p_z - z\,p_y , \quad L_y = z\,p_x - x\,p_z , \quad L_z = x\,p_y - y\,p_x . $$
>
> Er steht senkrecht auf $\mathbf{r}$ und auf $\mathbf{p}$, also senkrecht auf der Ebene der Bahn. Die Einheit ist $\mathrm{kg\,m^2/s}$.

> [!TIP] In einfachen Worten
> Der Drehimpuls sagt, wie viel "Drehschwung" ein Körper um einen Punkt hat. Er hängt vom gewählten Punkt ab. Auch ein Körper, der geradeaus fliegt, hat bezüglich eines Punktes neben seiner Bahn einen Drehimpuls, denn aus Sicht dieses Punktes dreht sich der Pfeil zum Körper.

![Ein Körper bewegt sich auf einer Geraden mit Impuls p. Bezogen auf einen Punkt im Abstand d hat er den Drehimpuls m v d, der aus der Zeichenebene zeigt.](/images/exphy1/drehimpuls-geradlinig.svg)

*Eigene Zeichnung: Auch eine geradlinige Bewegung hat einen Drehimpuls.*

Bei einer ebenen Bewegung zeigt $\mathbf{L}$ immer in Richtung der Ebenennormalen. Zerlegt man die Geschwindigkeit in $\mathbf{v} = \mathbf{v}_r + \mathbf{v}_\varphi$ mit $\mathbf{v}_r \parallel \mathbf{r}$ und $\mathbf{v}_\varphi \perp \mathbf{r}$, dann gilt

$$
\mathbf{L} = m\,\mathbf{r}\times\mathbf{v}_\varphi , \qquad L = m\,r^2\,\dot{\varphi} .
$$

### Beispiel

Ein Punkt der Masse $m = 0{,}50\,\mathrm{kg}$ läuft auf einem Kreis mit $r = 2{,}0\,\mathrm{m}$ mit der Bahngeschwindigkeit $v = 3{,}0\,\mathrm{m/s}$. Der Drehimpuls ist $L = m\,r\,v = 0{,}50\,\mathrm{kg}\cdot 2{,}0\,\mathrm{m}\cdot 3{,}0\,\mathrm{m/s} = 3{,}0\,\mathrm{kg\,m^2/s}$. Die Zahlen sind frei gewählt. Mit $\dot{\varphi} = v/r = 1{,}5\,\mathrm{s^{-1}}$ stimmt auch $m\,r^2\dot{\varphi} = 3{,}0\,\mathrm{kg\,m^2/s}$.

## Drehmoment

Wie ändert sich der Drehimpuls? Mit der Produktregel ist

$$
\frac{\mathrm{d}\mathbf{L}}{\mathrm{d}t} = \dot{\mathbf{r}}\times\mathbf{p} + \mathbf{r}\times\dot{\mathbf{p}} = \underbrace{\mathbf{v}\times\mathbf{p}}_{=\,0\ (\mathbf{v}\,\parallel\,\mathbf{p})} + \mathbf{r}\times\mathbf{F} .
$$

> [!NOTE] Definition
> Das **Drehmoment** in Bezug auf den Ursprung ist
>
> $$ \mathbf{M} = \mathbf{r}\times\mathbf{F} . $$
>
> Die Bewegungsgleichung der Drehung lautet
>
> $$ \dot{\mathbf{L}} = \mathbf{M} . $$
>
> Eine Drehbewegung entsteht oder ändert sich also nur, wenn ein äußeres Drehmoment wirkt. Das ist die Entsprechung zum zweiten Newtonschen Axiom $\dot{\mathbf{p}} = \mathbf{F}$.

Das ist die Grundlage für die Drehbewegung des starren Körpers. $\mathbf{L}$ und $\mathbf{M}$ beziehen sich immer auf einen festen Bezugspunkt.

### Rechte-Hand-Regeln

- **Richtung eines Vektorprodukts:** Der Daumen der rechten Hand zeigt in Richtung von $\mathbf{r}$, der Zeigefinger in Richtung von $\mathbf{p}$ oder $\mathbf{F}$. Dann zeigt der Mittelfinger in Richtung von $\mathbf{L}$ oder $\mathbf{M}$.
- **Drehsinn:** Zeigt der Daumen in Richtung von $\mathbf{L}$, geben die gekrümmten Finger den Drehsinn an.

## Die Zentralkraft

> [!NOTE] Ergebnis
> Bei einer **Zentralkraft** $\mathbf{F} = f(r)\,\mathbf{e}_r$ ist $\mathbf{r}\parallel\mathbf{F}$, also $\mathbf{M} = \mathbf{r}\times\mathbf{F} = 0$ und damit $\dot{\mathbf{L}} = 0$. Der Drehimpuls bezüglich des Kraftzentrums ist nach Betrag und Richtung konstant.

Das nutzt man bei der Planetenbewegung aus: Weil $\mathbf{L}$ konstant ist, liegt die Bahn in einer Ebene, und der Fahrstrahl überstreicht in gleichen Zeiten gleiche Flächen, siehe [2.5.1 Keplersche Gesetze](/exphy1/skript/mechanik-des-massenpunktes/gravitation/keplersche-gesetze/).

> [!CAUTION] Stolperstelle
> Drehimpuls und Drehmoment sind **axiale Vektoren**. Bei einer Raumspiegelung $(x, y, z) \to (-x, -y, -z)$ ändern sie ihr Vorzeichen nicht, sie haben gerade Parität. Ortsvektor und Impuls dagegen sind polare Vektoren und wechseln das Vorzeichen. Das kann man selbst nachprüfen: Das Vektorprodukt zweier Vektoren, die beide das Vorzeichen wechseln, wechselt es nicht.

## Weiter

- [2.5.1 Keplersche Gesetze](/exphy1/skript/mechanik-des-massenpunktes/gravitation/keplersche-gesetze/)
- [4.3 Drehimpuls eines Teilchensystems](/exphy1/skript/systeme-von-massenpunkten/drehimpuls-eines-teilchensystems/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.4 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und das Rechenbeispiel mit eigenen Zahlen stammen nicht aus der Vorlesung.
