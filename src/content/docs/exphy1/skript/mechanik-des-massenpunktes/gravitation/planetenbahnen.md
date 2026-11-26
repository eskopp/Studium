---
title: 2.5.3 und 2.5.4 Planetenbahnen und effektives Potential
description: Warum das Gravitationsgesetz zu Kegelschnitten als Bahnen führt, wie die Gesamtenergie die Bahnform bestimmt und was das effektive Potential zeigt.
weight: 3
---

*In einem Satz: Aus Energie- und Drehimpulserhaltung folgt, dass sich ein Körper im Gravitationsfeld auf einem Kegelschnitt bewegt, und das Vorzeichen der Gesamtenergie entscheidet, welcher es ist.*

Diese Rechnungen wurden in der Vorlesung im Einzelnen nicht durchgeführt, sie stehen im Skriptum und sind für das Verständnis wichtig.

## Voraussetzungen

Die Sonne wird als ortsfest angesehen, und man benutzt zwei Erhaltungsgrößen:

- **Energie:** Die Gravitationskraft ist eine Zentralkraft und damit konservativ, also $W = W_\mathrm{kin} + W_\mathrm{pot} = \text{konstant}$.
- **Drehimpuls:** Wegen der Zentralkraft ist $\mathbf{L} = \mathbf{r}\times\mathbf{p}$ konstant. Die Bewegung ist daher eben, und man beschreibt sie mit Polarkoordinaten $(r, \varphi)$.

> [!TIP] In einfachen Worten
> Zwei Erhaltungssätze ersetzen die schwierige Bewegungsgleichung. Statt eine Differentialgleichung zweiter Ordnung zu lösen, genügt es, aus Energie und Drehimpuls eine Gleichung erster Ordnung für den Abstand $r$ zu bauen.

## Energie und Drehimpuls

Die kinetische Energie zerlegt sich in einen Radialanteil und einen Winkelanteil, $W_\mathrm{kin} = \tfrac{1}{2}m\,(\dot{r}^2 + r^2\dot{\varphi}^2)$. Mit dem Drehimpuls $L = m\,r^2\dot{\varphi}$ ist $\dot{\varphi} = L/(m r^2)$, und die Gesamtenergie wird zu

$$
W = \tfrac{1}{2}\,m\,\dot{r}^2 + \frac{L^2}{2 m r^2} + W_\mathrm{pot}(r) .
$$

Für die Gravitation ist die potentielle Energie (Nullniveau im Unendlichen)

$$
W_\mathrm{pot}(r) = -\gamma\,\frac{m\,M}{r} .
$$

Man prüft: $F = -\mathrm{d}W_\mathrm{pot}/\mathrm{d}r = -\gamma m M/r^2$ ergibt das Gravitationsgesetz.

## Die Bahnkurve

Löst man nach $\dot{r}$ auf und integriert $\mathrm{d}\varphi/\mathrm{d}r = \dot{\varphi}/\dot{r}$, erhält man die Bahn als Kegelschnitt in Polarkoordinaten, mit dem Brennpunkt im Ursprung:

> [!NOTE] Ergebnis
> $$ r = \frac{a\,(1 - \varepsilon^2)}{1 + \varepsilon\cos\varphi} , \qquad a = -\gamma\,\frac{m\,M}{2W} , \qquad \varepsilon = \sqrt{1 + \frac{2\,W\,L^2}{\gamma^2 m^3 M^2}} . $$

Perihel und Aphel folgen aus $\dot{r} = 0$. Für die Ellipse ist $r_\mathrm{min} = a(1 - \varepsilon)$ bei $\varphi = 0$ und $r_\mathrm{max} = a(1 + \varepsilon)$ bei $\varphi = \pi$.

### Fallunterscheidung nach der Gesamtenergie

| Energie | Bahn | $\varepsilon$ |
| --- | --- | --- |
| $W < 0$ | Kreis oder Ellipse, der Körper bleibt gebunden | $\varepsilon < 1$ |
| $W = 0$ | Parabel, der Körper entkommt gerade noch | $\varepsilon = 1$ |
| $W > 0$ | Hyperbel, der Körper entkommt | $\varepsilon > 1$ |

Für $W < 0$ ist $a > 0$ eine echte Halbachse. Für $W = 0$ geht $a \to \infty$. Die Parabel hat den kleinsten Abstand $r_\mathrm{min} = L^2/(2\gamma m^2 M)$.

### Beispiel

Die Fluchtgeschwindigkeit von der Erdoberfläche folgt aus $W = 0$: $\tfrac{1}{2}m v^2 = \gamma m M/R$, also

$$
v = \sqrt{\frac{2\gamma M_\mathrm{Erde}}{R_\mathrm{Erde}}} \approx 11\,\mathrm{km/s} .
$$

Die Werte für die Erde sind frei eingesetzt und nachgerechnet. Wer mit weniger als dieser Geschwindigkeit startet, hat $W < 0$ und bleibt auf einer gebundenen Bahn.

> [!CAUTION] Stolperstelle
> Die Gleichung für $\varepsilon$ zeigt, dass die Bahnform nur von **zwei** Größen abhängt, der Energie $W$ und dem Drehimpuls $L$. Die Richtung der Anfangsgeschwindigkeit steckt in $L$. Zwei Körper mit gleichem $W$ und verschiedenem $L$ laufen auf Ellipsen derselben Halbachse $a$, aber mit verschiedener Exzentrizität.

## Das effektive Potential

Der Winkelanteil der kinetischen Energie hängt nur von $r$ ab. Man fasst ihn mit der potentiellen Energie zusammen.

> [!NOTE] Definition
> Die **effektive potentielle Energie** ist
>
> $$ W_\mathrm{pot}^\mathrm{e}(r) = W_\mathrm{pot}(r) + \frac{L^2}{2 m r^2} , $$
>
> das **effektive Potential** ist $V_\mathrm{pot}^\mathrm{e} = W_\mathrm{pot}^\mathrm{e}/m$ mit der Einheit $\mathrm{J/kg}$. Der erste Summand heißt Radialpotential, der zweite $L^2/(2mr^2)$ **Zentrifugalpotential**. Im Gravitationsfeld ist
>
> $$ W_\mathrm{pot}^\mathrm{e}(r) = -\gamma\,\frac{m\,M}{r} + \frac{L^2}{2 m r^2} . $$

> [!TIP] In einfachen Worten
> Die Bewegung im Abstand $r$ sieht aus wie die eindimensionale Bewegung eines Balls in einem Tal, dessen Form das effektive Potential vorgibt. Das Zentrifugalpotential ist eine Wand, die den Körper von der Sonne fernhält, solange er Drehimpuls hat.

Mit dem effektiven Potential und dem Radialanteil $W_\mathrm{kin}^{(r)} = \tfrac{1}{2}m\dot{r}^2$ lassen sich die Bahnen unterscheiden:

- **Kreis:** $W < 0$ und $W_\mathrm{kin}^{(r)} = 0$. Der Radius ist das Minimum des effektiven Potentials, $\mathrm{d}W_\mathrm{pot}^\mathrm{e}/\mathrm{d}r = 0$, also $r_0 = L^2/(\gamma m^2 M)$.
- **Ellipse:** $W < 0$ und $W_\mathrm{kin}^{(r)} > 0$. Der Radius schwankt zwischen zwei Umkehrpunkten $a(1 \pm \varepsilon)$.
- **Parabel und Hyperbel:** $W \ge 0$. Der Körper kommt aus dem Unendlichen, nähert sich bis zum kleinsten Abstand und fliegt wieder davon.

### Beispiel zum Kreis

Aus $L = m\,v\,r_0$ und $r_0 = L^2/(\gamma m^2 M)$ folgt $v^2 = \gamma M/r_0$. Für die Erde ist $v = \sqrt{\gamma M_\mathrm{Sonne}/a} \approx 29{,}8\,\mathrm{km/s}$. Das ist die Bahngeschwindigkeit der Erde, in guter Näherung eine Kreisbahn.

## Weiter

- [2.5.5 Gravitationsfeld ausgedehnter Körper](/exphy1/skript/mechanik-des-massenpunktes/gravitation/gravitationsfeld-ausgedehnter-koerper/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 2.5.3 und 2.5.4 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Zahlenwerte stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
