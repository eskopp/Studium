---
title: "2.5.6 Exkursion: Der Virialsatz"
description: Wie das zeitliche Mittel der kinetischen Energie mit den Kräften zusammenhängt, und das Ergebnis für die Gravitation.
weight: 5
---

*In einem Satz: Im zeitlichen Mittel ist die kinetische Energie eines gebundenen Systems durch die Kräfte festgelegt, und bei der Gravitation ist sie halb so groß wie der Betrag der potentiellen Energie.*

Der Virialsatz ist seiner Natur nach **statistisch**, denn er betrifft Zeitmittelwerte. Er taucht später in der Thermodynamik wieder auf, bei den realen Gasen.

## Der Satz

> [!NOTE] Virialsatz
> Für ein System von Massenpunkten mit den Ortsvektoren $\mathbf{r}_i$ und den Kräften $\mathbf{F}_i$ gilt im zeitlichen Mittel (bei periodischer oder begrenzter Bewegung)
>
> $$ \overline{W_\mathrm{kin}} = -\frac{1}{2}\,\overline{\sum_i \mathbf{F}_i\cdot\mathbf{r}_i} . $$
>
> Die rechte Seite heißt **Clausiussches Virial**.

> [!TIP] In einfachen Worten
> In einem Bahnsystem, das sich nicht auseinanderentwickelt, steht die mittlere Bewegungsenergie in einem festen Verhältnis zu den Kräften, die das System zusammenhalten. Man kann damit zum Beispiel etwas über die Energie eines Sterns oder eines Gases sagen, ohne die ganze Bewegung zu kennen.

## Herleitung

Man betrachtet die Größe $\kappa = \sum_i \mathbf{p}_i\cdot\mathbf{r}_i$. Mit der Produktregel ist

$$
\dot{\kappa} = \sum_i \dot{\mathbf{p}}_i\cdot\mathbf{r}_i + \sum_i \mathbf{p}_i\cdot\dot{\mathbf{r}}_i .
$$

Wegen $\dot{\mathbf{p}}_i = \mathbf{F}_i$ ist der erste Summand $\sum_i\mathbf{F}_i\cdot\mathbf{r}_i$. Im zweiten Summanden ist $\mathbf{p}_i\cdot\dot{\mathbf{r}}_i = m_i v_i^2$, die Summe also $2\,W_\mathrm{kin}$:

$$
\dot{\kappa} = 2\,W_\mathrm{kin} + \sum_i \mathbf{F}_i\cdot\mathbf{r}_i .
$$

Mittelt man über ein Zeitintervall $\tau$, wird die linke Seite zu $[\kappa(\tau) - \kappa(0)]/\tau$. Bei einer periodischen Bewegung mit $\tau = T$ ist das null. Auch bei nichtperiodischen Bewegungen mit endlichen Koordinaten und Geschwindigkeiten geht der Ausdruck für große $\tau$ gegen null. Dann bleibt der Virialsatz.

## Anwendung auf eine Zentralkraft

Ein einzelnes Teilchen bewegt sich im Zentralfeld eines ruhenden Körpers. Die potentielle Energie sei $W_\mathrm{pot}(r) = a\,r^{n+1}$ mit einer Konstanten $a$ und ganzem $n$. Die Kraft ist dann $F = -\mathrm{d}W_\mathrm{pot}/\mathrm{d}r = -a\,(n+1)\,r^n$. Aus dem Virialsatz folgt

$$
\overline{W_\mathrm{kin}} = \frac{n + 1}{2}\,\overline{W_\mathrm{pot}} .
$$

Für das Newtonsche Gravitationsgesetz ist $n = -2$, also

> [!NOTE] Ergebnis
> $$ \overline{W_\mathrm{kin}} = -\tfrac{1}{2}\,\overline{W_\mathrm{pot}} . $$

### Beispiel für eine Kreisbahn

Auf einer Kreisbahn gilt $v^2 = \gamma M/r$, also $W_\mathrm{kin} = \tfrac{1}{2}\,m\,v^2 = \tfrac{1}{2}\,\gamma\,m\,M/r$, während $W_\mathrm{pot} = -\gamma\,m\,M/r$ ist. Das Verhältnis ist genau $W_\mathrm{kin}/W_\mathrm{pot} = -1/2$. Die Gesamtenergie ist dann

$$
W = W_\mathrm{kin} + W_\mathrm{pot} = -\tfrac{1}{2}\,\frac{\gamma\,m\,M}{r} = -W_\mathrm{kin} .
$$

> [!CAUTION] Stolperstelle
> Das Minuszeichen kommt von der Wahl des Nullniveaus im Unendlichen. Die gebundene Bahn hat eine **negative** Gesamtenergie. Der Satz ist ein Mittelwert, er gilt nicht in jedem Augenblick der Bewegung, nur bei der Kreisbahn ist er zu jeder Zeit erfüllt.

## Weiter

- [4 Systeme von Massenpunkten](/exphy1/skript/systeme-von-massenpunkten/): Was passiert, wenn mehrere Körper zusammen betrachtet werden?

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.5.6 und Skriptum Kapitel 2. Dort wird der Satz auf Rudolf Clausius (1870) zurückgeführt.
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" stammen nicht aus der Vorlesung. Das Ergebnis für die Kreisbahn habe ich nachgerechnet.
