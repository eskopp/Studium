---
title: 2.3.1 und 2.3.2 Arbeit, Leistung und konservative Kräfte
description: Mechanische Arbeit als Skalarprodukt und Wegintegral, Leistung als Kraft mal Geschwindigkeit und wann eine Kraft konservativ heißt.
weight: 1
---

*In einem Satz: Arbeit ist Kraft mal Weg in Kraftrichtung, Leistung ist Arbeit pro Zeit, und bei einer konservativen Kraft hängt die Arbeit nicht vom Weg ab.*

## Arbeit

> [!NOTE] Definition
> Legt ein Massenpunkt unter der Kraft $\mathbf{F}$ das Wegstück $\Delta\mathbf{r}$ zurück, wird an ihm die **mechanische Arbeit**
>
> $$ \Delta W = \mathbf{F}\cdot\Delta\mathbf{r} = |\mathbf{F}|\,|\Delta\mathbf{r}|\cos\alpha = F_r\,\Delta r $$
>
> verrichtet. Dabei ist $\alpha$ der Winkel zwischen $\Delta\mathbf{r}$ und $\mathbf{F}$ und $F_r$ die Komponente von $\mathbf{F}$ in Wegrichtung. Die Einheit ist $1\,\mathrm{N\,m} = 1\,\mathrm{J}$.
>
> Ist die Kraft nicht konstant oder der Weg gekrümmt, teilt man den Weg in kleine Stücke und erhält ein **Wegintegral** (Linien- oder Kurvenintegral):
>
> $$ W = \int_{P_1}^{P_2} \mathbf{F}\cdot\mathrm{d}\mathbf{r} . $$

> [!TIP] In einfachen Worten
> Nur der Teil der Kraft, der in Richtung der Bewegung zeigt, verrichtet Arbeit. Wer einen schweren Koffer waagerecht durch den Flur trägt, verrichtet im physikalischen Sinn keine Arbeit am Koffer, denn die Kraft nach oben steht senkrecht auf dem Weg. Wer ihn hochhebt, verrichtet Arbeit.

![Ein Kraftvektor F und ein Wegvektor Delta r schließen den Winkel alpha ein. Die Arbeit ist die Kraftkomponente in Wegrichtung mal die Weglänge.](/images/exphy1/arbeit-skalarprodukt.svg)

*Eigene Zeichnung: Arbeit als Skalarprodukt aus Kraft und Weg.*

Zwei Beispiele aus der Vorlesung:

- **Gleichförmige Kreisbewegung:** Die Zentripetalkraft steht immer senkrecht auf der Bahn, also ist $\mathrm{d}W = \mathbf{F}_\mathrm{Z}\cdot\mathrm{d}\mathbf{r} = 0$. Sie verrichtet keine Arbeit und ändert deshalb nicht das Tempo.
- **Federdehnung:** Die rücktreibende Federkraft ist $F_\mathrm{F} = -k\,(x - x_0)$. Zum Dehnen muss man mindestens mit der Gegenkraft $F = k\,(x - x_0)$ ziehen. Die Arbeit steht direkt unter der Liste.

$$
W = \int_{x_0}^{x} k\,(x' - x_0)\,\mathrm{d}x' = \tfrac{1}{2}\,k\,(x - x_0)^2 .
$$

![Ein Kraft-Weg-Diagramm mit einer Geraden. Die Fläche unter der Geraden ist ein Dreieck und entspricht der Federenergie.](/images/exphy1/feder-arbeit.svg)

*Eigene Zeichnung: Die Arbeit beim Dehnen einer Feder ist die Fläche unter der Kraft.*

### Beispiel

Eine Feder mit $k = 50\,\mathrm{N/m}$ wird um $0{,}10\,\mathrm{m}$ gedehnt. Die Zahlen sind frei gewählt. Die Arbeit ist

$$
W = \tfrac{1}{2}\cdot 50\,\mathrm{N/m}\cdot(0{,}10\,\mathrm{m})^2 = 0{,}25\,\mathrm{J} .
$$

Wer dagegen einen Körper mit $m = 10\,\mathrm{kg}$ gleichmäßig um $2{,}0\,\mathrm{m}$ anhebt, verrichtet $W = m\,g\,h = 10\,\mathrm{kg}\cdot 9{,}81\,\mathrm{m/s^2}\cdot 2{,}0\,\mathrm{m} \approx 196\,\mathrm{J}$.

## Leistung

> [!NOTE] Definition
> Die **Leistung** ist die Arbeit pro Zeit. Einheit ist $1\,\mathrm{W} = 1\,\mathrm{J/s}$.
>
> $$ P = \frac{\mathrm{d}W}{\mathrm{d}t} = \dot{W} = \mathbf{F}\cdot\mathbf{v} . $$

Die zweite Schreibweise folgt aus $\Delta W/\Delta t = \mathbf{F}\cdot\Delta\mathbf{r}/\Delta t$.

> [!TIP] In einfachen Worten
> Zwei Personen tragen dieselbe Kiste in dieselbe Etage. Die Arbeit ist gleich, aber wer es in der halben Zeit schafft, bringt die doppelte Leistung.

#### Beispiel

Eine Kraft von $500\,\mathrm{N}$ in Bewegungsrichtung schiebt einen Wagen mit $2{,}0\,\mathrm{m/s}$. Die Leistung ist $P = 500\,\mathrm{N}\cdot 2{,}0\,\mathrm{m/s} = 1000\,\mathrm{W} = 1{,}0\,\mathrm{kW}$.

## Konservative Kräfte

Zwei Punkte $P_1$ und $P_2$ seien durch zwei verschiedene Wege $a$ und $b$ verbunden. Die Arbeit entlang der Wege ist $W_a$ und $W_b$.

> [!NOTE] Definition
> Eine Kraft heißt **konservativ**, wenn die verrichtete Arbeit nicht vom Weg abhängt, also $W_a = W_b$. Gleichwertig sind zwei weitere Aussagen:
>
> - Das Integral über einen geschlossenen Weg verschwindet: $\displaystyle\oint \mathbf{F}\cdot\mathrm{d}\mathbf{r} = 0$.
> - Die Arbeit hängt nur vom Anfangs- und vom Endpunkt ab.

Die Gleichwertigkeit sieht man so: $0 = W_a - W_b = \int_{P_1}^{P_2}\mathbf{F}\cdot\mathrm{d}\mathbf{r}_a + \int_{P_2}^{P_1}\mathbf{F}\cdot\mathrm{d}\mathbf{r}_b$. Das ist das Integral über den geschlossenen Weg, der auf $a$ hin und auf $b$ zurück läuft.

> [!TIP] In einfachen Worten
> Bei einer konservativen Kraft geht keine Energie verloren, wenn man im Kreis geht. Die Schwerkraft ist so eine Kraft: Egal, ob man auf einer Treppe oder einer Rampe auf einen Berg steigt, die Hubarbeit gegen die Schwerkraft ist dieselbe. Reibung ist nicht konservativ, denn je länger der Weg, desto mehr Arbeit geht verloren.

Zwei Beispiele für konservative Kräfte, die man selbst nachrechnen kann:

- **Räumlich homogene Kraft** $\mathbf{F} = F_z\,\mathbf{e}_z$ mit $F_z = \text{konstant}$. Das Integral hängt nur von der Höhendifferenz ab, und über einen geschlossenen Weg ist sie null.
- **Zentralkraft** $\mathbf{F} = f(r)\,\mathbf{e}_r$. Nur der radiale Teil des Weges trägt bei, $\mathbf{F}\cdot\mathrm{d}\mathbf{r} = f(r)\,\mathrm{d}r$. Über einen geschlossenen Weg kommt man zum selben $r$ zurück, das Integral ist null.

> [!CAUTION] Stolperstelle
> "Konservativ" heißt nicht, dass die Kraft konstant ist. Die Federkraft und die Gravitationskraft sind konservativ, ändern sich aber mit dem Ort. Entscheidend ist allein, ob die Arbeit vom Weg abhängt.

## Weiter

- [2.3.3 und 2.3.4 Potentielle und kinetische Energie](/exphy1/skript/mechanik-des-massenpunktes/energieerhaltungssatz/potentielle-und-kinetische-energie/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 2.3.1 und 2.3.2 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
