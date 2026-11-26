---
title: 4.5 Streuung in einem kugelsymmetrischen Potential
description: Der Streuwinkel im Zentralkraftfeld, abgeleitet aus Stoßparameter, Drehimpuls und Impulsänderung, und was das Geiger-Marsden-Rutherford-Experiment über den Atomkern zeigte.
weight: 7
---

*In einem Satz: Aus dem Stoßparameter und der Energie eines Teilchens folgt, um welchen Winkel es an einem Zentrum abgelenkt wird, und die großen Winkel im Rutherford-Experiment zeigten, dass der Atomkern winzig ist.*

## Worum es geht

Bei den Planeten hat man die Ablenkung von Kometen auf Parabel- oder Hyperbelbahnen schon als Streuung gesehen. Jetzt wird das für ein beliebiges Potential, das nur vom Abstand abhängt, ausgerechnet. Das wichtigste Beispiel ist das **Geiger-Marsden-Rutherford-Experiment**: Alphateilchen, also zweifach positiv geladene Heliumkerne, werden auf eine sehr dünne Goldfolie geschossen, und man misst die Streuwinkel (Energie der Größenordnung MeV). Die positiv geladenen Alphateilchen wechselwirken mit dem positiv geladenen Goldkern über die **Coulomb-Kraft**, die wie die Gravitation eine Radialkraft mit derselben Abstandsabhängigkeit ist.

Nach dem Rosinenkuchenmodell von Thomson (1904), bei dem die Elektronen in einem das ganze Atom ausfüllenden positiven Hintergrund verteilt sind, waren große Streuwinkel nicht möglich. Man fand sie aber, und das ließ sich nur erklären, wenn der **Atomkern sehr viel kleiner als die Atomhülle** ist.

## Das Potential und der Stoßparameter

> [!NOTE] Definition
> Die potentielle Energie im kugelsymmetrischen Potential ist $W_\mathrm{pot} = a/r$, die Kraft ist die Zentralkraft
>
> $$ \mathbf{F} = -\nabla W_\mathrm{pot} = \frac{a}{r^2}\,\mathbf{e}_r . $$
>
> Für $a > 0$ ist sie abstoßend, für $a < 0$ anziehend. Im Schwerpunktsystem zweier Teilchen ist der Drehimpuls $\mathbf{L} = \mathbf{r}\times\mu\mathbf{v}$ mit der reduzierten Masse $\mu$, dem Relativabstand $\mathbf{r}$ und der Relativgeschwindigkeit $\mathbf{v}$. Da die Kraft eine Zentralkraft ist, gilt $\dot{\mathbf{L}} = 0$ (siehe [2.4](/exphy1/skript/mechanik-des-massenpunktes/drehimpuls-und-drehmoment/)). Die Bahn liegt deshalb in einer Ebene.
>
> Der **Stoßparameter** $b$ ist der Abstand der Flugbahn lange vor der Streuung zu einer Parallelen durch das Streuzentrum. Der Drehimpuls des einfallenden Teilchens ist
>
> $$ L = \mu\,v_0\,b = \mu\,r^2\,\dot{\varphi} . $$

> [!TIP] In einfachen Worten
> Stell dir vor, ein Teilchen fliegt auf ein Zentrum zu, das es abstößt. Wenn es genau auf das Zentrum zielt, $b = 0$, prallt es zurück. Je weiter es seitlich vorbeifliegt, desto weniger wird es abgelenkt. Der Stoßparameter ist also der "Zielfehler", und der Streuwinkel hängt nur von ihm und von der Energie ab.

## Der Streuwinkel

Die Ablenkung von der $x$-Achse kommt von der $y$-Komponente der Kraft, $F_y = F\sin\varphi = \dfrac{a}{r^2}\sin\varphi = \mu\,\dot{v}_y$. Mit der Drehimpulserhaltung $r^2\dot{\varphi} = v_0 b$ ist $\dot{v}_y = \dfrac{a\,\dot{\varphi}\,\sin\varphi}{\mu\,v_0\,b}$, also

$$
\mathrm{d}v_y = \frac{a\sin\varphi}{\mu\,v_0\,b}\,\mathrm{d}\varphi .
$$

Lange vor der Streuung ist $v_y = 0$ und $\varphi = 0$. Lange danach ist $v_y = v_0\sin\vartheta$, wobei $\vartheta = \pi - \varphi_\mathrm{max}$ der **Streuwinkel** und $\varphi_\mathrm{max}$ der größte Ablenkwinkel ist. Integriert man:

$$
v_0\sin\vartheta = \int_0^{\pi - \vartheta}\frac{a\sin\varphi}{\mu\,v_0\,b}\,\mathrm{d}\varphi = \frac{a\,(1 + \cos\vartheta)}{\mu\,v_0\,b} .
$$

Wegen $(1 + \cos\vartheta)/\sin\vartheta = \cot(\vartheta/2)$ folgt das Ergebnis.

> [!NOTE] Streuwinkel
> $$ \cot\frac{\vartheta}{2} = \frac{\mu\,v_0^2\,b}{a} = \frac{2\,W_\mathrm{kin}}{W_\mathrm{pot}(b)} . $$
>
> Beim zentralen Stoß, $b = 0$, ist $\cot(\vartheta/2) = 0$, also $\vartheta = \pi$: Rückstreuung. Der **Umkehrpunkt** $r_0$ ergibt sich aus $W_\mathrm{kin} = W_\mathrm{pot}(r_0)$, also $\tfrac{1}{2}\mu v_0^2 = a/r_0$ und
>
> $$ r_0 = \frac{2a}{\mu\,v_0^2} . $$

> [!TIP] In einfachen Worten
> Je größer die Energie, desto kleiner der Winkel bei gleichem Stoßparameter. Und je größer der Stoßparameter, desto kleiner der Winkel. Nur Teilchen, die fast direkt auf den Kern zielen, werden stark zurückgeworfen. Dass man trotzdem einige solcher Teilchen findet, zeigt, dass der Kern sehr klein und sehr kompakt ist.

### Beispiel

Ein Alphateilchen mit $W_\mathrm{kin} = 5\,\mathrm{MeV}$ trifft einen Goldkern. Die Zahlen sind frei gewählt. Mit den Ladungszahlen $2$ und $79$ ist $a = 2\cdot 79\cdot 1{,}44\,\mathrm{MeV\,fm} \approx 228\,\mathrm{MeV\,fm}$. Dann ist

$$
b = \frac{a}{2\,W_\mathrm{kin}}\cot\frac{\vartheta}{2} \approx 23\,\mathrm{fm}\cdot\cot\frac{\vartheta}{2} .
$$

Für $\vartheta = 90^\circ$ ist $\cot 45^\circ = 1$, also $b \approx 23\,\mathrm{fm}$. Für $\vartheta = 30^\circ$ ist $\cot 15^\circ \approx 3{,}73$, also $b \approx 85\,\mathrm{fm}$. Bei einem Frontalstoß ($b = 0$) ist $r_0 = a/W_\mathrm{kin} \approx 46\,\mathrm{fm}$. Ein Atom hat einen Durchmesser von etwa $10^{5}\,\mathrm{fm}$. Selbst bei einem Frontalstoß bleibt das Alphateilchen also weit außerhalb des Atoms, und der Kern muss viel kleiner sein.

Die Formel für den Streuwinkel habe ich zusätzlich mit einer numerischen Rechnung der Bahn geprüft: Sie liefert $89{,}7^\circ$ und $29{,}8^\circ$ für die beiden Werte, die Abweichung kommt von der endlichen Rechenstrecke.

> [!CAUTION] Stolperstelle
> Die Rechnung gilt für die Relativbewegung mit der reduzierten Masse. Ist ein Teilchen, wie der Goldkern, viel schwerer, ist $\mu \approx m_\mathrm{Alpha}$, und der Kern bleibt praktisch in Ruhe. Das gilt bei Gold, weil es rund fünfzigmal schwerer ist. Außerdem ist $\vartheta$ der Streuwinkel der Bahn im Schwerpunktsystem, nicht der Winkel $\varphi$, den der Radiusvektor überstreicht. Beide hängen über $\vartheta = \pi - \varphi_\mathrm{max}$ zusammen.

## Weiter

- [4.4.2 Elastische Stöße](/exphy1/skript/systeme-von-massenpunkten/elastischer-stoss/): Streuung an einem sehr schweren Partner
- [2.5.3 Planetenbahnen](/exphy1/skript/mechanik-des-massenpunktes/gravitation/planetenbahnen/): Kegelschnitte als Bahnen im Gravitationsfeld

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.5 und Skriptum Kapitel 4, Abschnitt 4.5. Dort stehen auch die Literaturangaben zum Experiment (H. Geiger, E. Marsden, 1908 bis 1913) und zum Modell von J. J. Thomson (1904).
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und das Rechenbeispiel mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Herleitung und die Zahlenwerte habe ich nachgerechnet.
