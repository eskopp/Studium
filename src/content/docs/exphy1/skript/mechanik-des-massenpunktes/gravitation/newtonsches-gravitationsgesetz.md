---
title: 2.5.2 Newtonsches Gravitationsgesetz
description: Wie Newton aus den Keplerschen Gesetzen auf die Kraft zwischen zwei Massen schloss und wie Cavendish die Gravitationskonstante gemessen hat.
weight: 2
---

*In einem Satz: Zwei Massen ziehen sich mit einer Kraft an, die mit dem Quadrat des Abstands abnimmt, und diese Kraft erklärt den freien Fall genauso wie die Planetenbahnen.*

## Das Gesetz

> [!NOTE] Newtonsches Gravitationsgesetz
> Zwischen zwei Massenpunkten mit den Massen $m_1$ und $m_2$ im Abstand $r$ wirkt die anziehende Kraft
>
> $$ \mathbf{F}(r) = -\gamma\,\frac{m_1 m_2}{r^2}\,\mathbf{e}_r , \qquad \mathbf{e}_r = \frac{\mathbf{r}}{|\mathbf{r}|} . $$
>
> Die **Gravitationskonstante** ist $\gamma = 6{,}674184(78)\cdot 10^{-11}\,\mathrm{m^3\,kg^{-1}\,s^{-2}}$.

> [!TIP] In einfachen Worten
> Je mehr Masse, desto stärker ziehen sich die Körper an. Und je weiter sie auseinander sind, desto schwächer, und zwar mit dem Quadrat: Doppelter Abstand heißt ein Viertel der Kraft. Newton erkannte, dass der fallende Apfel und der Mond denselben Grund für ihre Bewegung haben.

## Wie Newton auf das Gesetz kam

Das ist das Paradebeispiel für den **induktiven** Weg: Aus der beobachteten Bewegung schließt man auf die Kraft.

1. **Masse:** Wegen des dritten Axioms müssen beide Massen vorkommen, also $F \propto m_1\,m_2$.
2. **Zentralkraft:** Das zweite Keplersche Gesetz ist die Drehimpulserhaltung, also ist die Kraft eine Zentralkraft, $\mathbf{F} = m_1 m_2\,f(r)\,\mathbf{e}_r$.
3. **Abstandsabhängigkeit:** Man betrachtet der Einfachheit halber eine Kreisbahn mit dem Radius $r$. Die Kraft sollte mit dem Abstand abnehmen, also setzt man $f(r) = c/r^n$. Die Gravitation übernimmt die Rolle der Zentripetalkraft:

$$
\frac{c\,m_1 m_2}{r^n} = m_1\,\frac{v^2}{r} = m_1\,\frac{4\pi^2 r}{T^2} \quad\Longleftrightarrow\quad \frac{T^2}{r^3} = \frac{4\pi^2}{c\,m_2}\,r^{n-2} .
$$

Das dritte Keplersche Gesetz verlangt, dass $T^2/r^3$ konstant ist. Das geht nur für $n = 2$. Also ist $F \propto 1/r^2$, und die Konstante $c$ ist die Gravitationskonstante $\gamma$.

> [!CAUTION] Stolperstelle
> Die Herleitung gilt hier nur für Kreisbahnen. Dass sie auch für Ellipsen gilt, zeigt erst die Rechnung in [2.5.3 Planetenbahnen](/exphy1/skript/mechanik-des-massenpunktes/gravitation/planetenbahnen/). Außerdem ist die Sonne dabei als ruhend angenommen.

## Die Messung von $\gamma$

Henry Cavendish gelang es 1798 als Erstem, $\gamma$ im Labor zu messen. Er benutzte eine **Drehwaage**: An den Enden eines leichten Stabes hängen zwei kleine Bleikugeln an einem dünnen Torsionsdraht. Zwei große Bleikugeln werden symmetrisch dazu in den Abstand $r$ gebracht, ziehen die kleinen an und verdrehen den Stab um den Winkel $\theta$. Im Gleichgewicht hebt das rücktreibende Drehmoment des Drahtes das Drehmoment der Gravitation auf. Die kleine Auslenkung liest man mit einem Spiegel und einem Lichtstrahl ab.

### Beispiel

In einer modernen Version des Versuchs wählt man Bleikugeln mit $m = 15\,\mathrm{g}$ und $M = 1{,}5\,\mathrm{kg}$ im Abstand $r = 5\,\mathrm{cm}$. Dann ist

$$
F = \gamma\,\frac{m\,M}{r^2} = 6{,}674\cdot 10^{-11}\,\mathrm{\frac{m^3}{kg\,s^2}}\cdot\frac{0{,}015\,\mathrm{kg}\cdot 1{,}5\,\mathrm{kg}}{(0{,}05\,\mathrm{m})^2} \approx 6\cdot 10^{-10}\,\mathrm{N} .
$$

Das ist winzig: Die Gewichtskraft eines menschlichen Haares ist etwa 10000-mal größer. Deshalb können Luftzug oder Erschütterungen die Messung zerstören, und Torsionswaagen gehören zu den empfindlichsten mechanischen Messgeräten.

Auch heute versucht man, $\gamma$ genauer zu bestimmen, weil die Konstante in der Kosmologie, der Geophysik und der Astrophysik eine große Rolle spielt. Die Gravitation lässt sich nicht abschirmen, und sie ist schwach. Eine neuere Messung mit der Methode der Schwingungsdauer (time of swing) liefert $\gamma = 6{,}674184(78)\cdot 10^{-11}\,\mathrm{m^3\,kg^{-1}\,s^{-2}}$.

## Weiter

- [2.5.3 und 2.5.4 Planetenbahnen und effektives Potential](/exphy1/skript/mechanik-des-massenpunktes/gravitation/planetenbahnen/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.5.2 und Skriptum Kapitel 2. Dort wird auch die Arbeit von Q. Li et al., Nature 560, 582 (2018) genannt.
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" stammen nicht aus der Vorlesung. Das Zahlenbeispiel steht im Skriptum, den Wert habe ich nachgerechnet.
