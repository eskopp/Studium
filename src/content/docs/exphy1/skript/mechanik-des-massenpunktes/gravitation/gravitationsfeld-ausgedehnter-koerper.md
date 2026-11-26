---
title: 2.5.5 Gravitationsfeld ausgedehnter Körper
description: Warum man eine Kugel von außen wie einen Massenpunkt behandeln darf und warum im Inneren einer Hohlkugel keine Gravitationskraft wirkt.
weight: 4
---

*In einem Satz: Von außen wirkt eine kugelförmige Masse wie ein Massenpunkt in ihrem Mittelpunkt, und im Inneren einer Hohlkugel heben sich alle Kräfte auf.*

## Dichte und Summe über Bausteine

> [!NOTE] Definition
> Für eine allgemeine Massenverteilung ist die **Dichte** $\varrho = \mathrm{d}m/\mathrm{d}V$ mit der Einheit $\mathrm{kg/m^3}$. Den Beitrag eines Bausteins $\mathrm{d}m$ am Ort $\mathbf{r}'$ zur potentiellen Energie einer Probemasse $m$ am Ort $\mathbf{r}$ schreibt man
>
> $$ \mathrm{d}W_\mathrm{pot} = -\gamma\,\frac{m\,\mathrm{d}m}{|\mathbf{r} - \mathbf{r}'|} = -\gamma\,\varrho\,m\,\frac{\mathrm{d}V}{|\mathbf{r} - \mathbf{r}'|} . $$

Die gesamte potentielle Energie ist die Summe über alle Bausteine, ein Volumenintegral über den Körper. Dieses Integral wird hier nicht ausgerechnet, denn die Grundlagen der Volumenintegration kommen erst in der Vektoranalysis. Die Ergebnisse für zwei Fälle sind aber wichtig.

## Die homogene Vollkugel

Eine Kugel mit dem Radius $R$ und konstanter Dichte hat die Masse $M$. Eine Probemasse $m$ im Abstand $r$ vom Mittelpunkt hat

> [!NOTE] Ergebnis
> $$ W_\mathrm{pot}(r) = \begin{cases} -\gamma\,\dfrac{m\,M}{r} & r > R \\[2mm] \dfrac{\gamma\,m\,M}{R}\left(\dfrac{r^2}{2R^2} - \dfrac{3}{2}\right) & r < R \end{cases} \qquad \mathbf{F}(r) = -\nabla W_\mathrm{pot} = \begin{cases} -\gamma\,\dfrac{m\,M}{r^2}\,\mathbf{e}_r & r > R \\[2mm] -\gamma\,\dfrac{m\,M}{R^3}\,r\,\mathbf{e}_r & r < R \end{cases} $$

Außerhalb der Kugel sind Energie und Kraft **dieselben wie bei einem Massenpunkt der Masse $M$ im Mittelpunkt**. Im Inneren wächst die Kraft linear mit dem Abstand vom Mittelpunkt, denn nur die Masse innerhalb des Radius $r$ zieht.

> [!TIP] In einfachen Worten
> Deshalb darf man die Erde oder die Sonne beim Rechnen als Punkt behandeln, solange man außerhalb bleibt. Und tief im Inneren der Erde wäre man leichter: In der Mitte der Erde ist die Gravitationskraft null, auf halber Strecke zum Mittelpunkt nur halb so groß wie an der Oberfläche.

Das Ergebnis ist stetig: An der Oberfläche $r = R$ ergeben beide Zeilen $-\gamma m M/R$ für die Energie.

## Die Hohlkugel

Bei einer dünnen Kugelschale mit dem Radius $R$ liegt die gesamte Masse $M$ homogen auf der Schale:

> [!NOTE] Ergebnis
> $$ W_\mathrm{pot}(r) = \begin{cases} -\gamma\,\dfrac{m\,M}{r} & r > R \\[2mm] -\gamma\,\dfrac{m\,M}{R} & r < R \end{cases} \qquad \mathbf{F}(r) = \begin{cases} -\gamma\,\dfrac{m\,M}{r^2}\,\mathbf{e}_r & r > R \\[2mm] 0 & r < R \end{cases} $$

Außen gilt wieder das Punktmassen-Ergebnis. Im Inneren ist die potentielle Energie konstant, also verschwindet die Kraft: **Im Inneren der Hohlkugel gibt es kein Gravitationsfeld.**

### Warum die Kräfte sich aufheben

Das liegt an der Abhängigkeit $F \propto 1/r^2$. Man wählt einen beliebigen Punkt $P$ im Inneren und einen schmalen Doppelkegel mit der Spitze in $P$. Er schneidet aus der Kugelfläche zwei gegenüberliegende Stücke mit den Flächen $A_1$ und $A_2$ heraus. Für die Abstände $r_1$ und $r_2$ von $P$ gilt

$$
\frac{A_1}{A_2} = \frac{r_1^2}{r_2^2} .
$$

Wegen der gleichmäßigen Massenverteilung sind die Massen der Stücke proportional zu den Flächen, also $M_1/M_2 = r_1^2/r_2^2$. Die Kräfte in $P$ sind $F_1 \propto M_1/r_1^2$ und $F_2 \propto M_2/r_2^2$, also

$$
\frac{F_1}{F_2} = \frac{M_1}{M_2}\cdot\frac{r_2^2}{r_1^2} = 1 .
$$

Beide Kräfte sind gleich groß und zeigen in entgegengesetzte Richtungen. Das gilt für jeden Doppelkegel, deshalb heben sich alle Beiträge auf.

> [!CAUTION] Stolperstelle
> Das gilt nur für Kräfte, die genau wie $1/r^2$ mit dem Abstand abnehmen. Bei einem anderen Kraftgesetz würde die Hohlkugel im Inneren eine Kraft ausüben. Das Ergebnis ist also eine Besonderheit der $1/r^2$-Abhängigkeit.

## Weiter

- [2.5.6 Der Virialsatz](/exphy1/skript/mechanik-des-massenpunktes/gravitation/virialsatz/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.5.5 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" stammen nicht aus der Vorlesung. Die Ergebnisse für die Vollkugel habe ich nachgerechnet (Stetigkeit an der Oberfläche, Kraft aus dem Gradienten).
