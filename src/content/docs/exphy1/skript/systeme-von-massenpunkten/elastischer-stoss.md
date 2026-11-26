---
title: Elastischer Stoß mit ruhendem Körper
description: Endgeschwindigkeiten und Energieübertrag beim zentralen Stoß, der Kreis der möglichen Impulse beim schrägen Stoß und die Drehung der Impulse im Schwerpunktsystem.
weight: 5
---

*In einem Satz: Beim elastischen Stoß auf einen ruhenden Körper steht fest, wie viel Energie weitergegeben wird, und beim schrägen Stoß liegen alle möglichen Endimpulse auf einem Kreis.*

## Der zentrale Stoß

> [!NOTE] Definition
> Beim **zentralen Stoß** liegen alle Impulse auf einer Geraden. Körper 1 mit der Masse $m_1$ und der Geschwindigkeit $v_1$ trifft den ruhenden Körper 2 mit der Masse $m_2$. Bei einem elastischen Stoß gelten für die Endgeschwindigkeiten $v_1'$ und $v_2'$
>
> $$ v_1' = \frac{m_1 - m_2}{m_1 + m_2}\,v_1 , \qquad v_2' = \frac{2\,m_1}{m_1 + m_2}\,v_1 . $$
>
> Der Anteil der Anfangsenergie von Körper 1, der auf Körper 2 übergeht, ist
>
> $$ \frac{W_{\mathrm{kin},2}'}{W_{\mathrm{kin},1}} = \frac{4\,m_1 m_2}{(m_1 + m_2)^2} . $$

> [!TIP] In einfachen Worten
> Ein schwerer Körper, der auf einen leichten trifft, fliegt weiter und nimmt den leichten mit. Ein leichter Körper, der auf einen schweren trifft, prallt zurück. Am meisten Energie wird weitergegeben, wenn beide gleich schwer sind. Dann bleibt Körper 1 stehen und Körper 2 fährt mit der Geschwindigkeit von Körper 1 weiter, wie bei zwei gleich schweren Billardkugeln.

### Beispiel

Körper 1 hat $m_1 = 0{,}20\,\mathrm{kg}$ und $v_1 = 3{,}0\,\mathrm{m/s}$. Er trifft den ruhenden Körper 2 mit $m_2 = 0{,}60\,\mathrm{kg}$. Die Zahlen sind frei gewählt und keine Messwerte. Dann ist

$$
v_1' = \frac{0{,}20 - 0{,}60}{0{,}20 + 0{,}60}\cdot 3{,}0\,\mathrm{m/s} = -1{,}5\,\mathrm{m/s} , \qquad v_2' = \frac{2 \cdot 0{,}20}{0{,}80}\cdot 3{,}0\,\mathrm{m/s} = 1{,}5\,\mathrm{m/s} .
$$

Körper 1 prallt also zurück. Der Anteil der Energie, der auf Körper 2 geht, ist

$$
\frac{4 \cdot 0{,}20 \cdot 0{,}60}{(0{,}80)^2} = 0{,}75 .
$$

Zur Kontrolle: Vorher hat Körper 1 die Energie $\tfrac{1}{2}\cdot 0{,}20\,\mathrm{kg}\cdot(3{,}0\,\mathrm{m/s})^2 = 0{,}90\,\mathrm{J}$. Nachher haben Körper 1 und Körper 2 zusammen $0{,}225\,\mathrm{J} + 0{,}675\,\mathrm{J} = 0{,}90\,\mathrm{J}$, und $0{,}675\,\mathrm{J}$ sind $75\,\%$ davon.

> [!CAUTION] Stolperstelle
> Diese Formeln gelten nur, wenn Körper 2 vor dem Stoß ruht und der Stoß elastisch und zentral ist. Bei einem Stoß, der nicht genau auf der Verbindungslinie der Mittelpunkte liegt, ändern sich auch die Richtungen. Dafür braucht man den Kreis im nächsten Abschnitt.

### Herleitung

Impuls und kinetische Energie bleiben erhalten:

$$
m_1 v_1 = m_1 v_1' + m_2 v_2' , \qquad \tfrac{1}{2} m_1 v_1^2 = \tfrac{1}{2} m_1 v_1'^2 + \tfrac{1}{2} m_2 v_2'^2 .
$$

Aus der ersten Gleichung folgt $m_1 (v_1 - v_1') = m_2 v_2'$. Aus der zweiten folgt $m_1 (v_1^2 - v_1'^2) = m_2 v_2'^2$. Teilt man die zweite durch die erste, bleibt

$$
v_1 + v_1' = v_2' .
$$

Setzt man das in die Impulsgleichung ein, ergibt sich $v_1' = \frac{m_1 - m_2}{m_1 + m_2}\,v_1$ und damit auch $v_2' = \frac{2 m_1}{m_1 + m_2}\,v_1$. Die Energie von Körper 2 ist $\tfrac{1}{2} m_2 v_2'^2 = \tfrac{1}{2} m_1 v_1^2 \cdot \frac{4 m_1 m_2}{(m_1 + m_2)^2}$, und das ist der Anteil in der Definition.

## Der schräge Stoß und der Kreis der Impulse

Trifft Körper 1 den ruhenden Körper 2 nicht genau mittig, fliegen beide in verschiedene Richtungen weiter. Im Laborsystem gilt weiter die Impulserhaltung $\mathbf{p}_1 = \mathbf{p}_1' + \mathbf{p}_2'$ und für den elastischen Stoß zusätzlich die Energieerhaltung.

> [!NOTE] Definition
> Legt man die Richtung von $\mathbf{p}_1$ in die $x$-Achse und nennt die Spitze des Vektors $\mathbf{p}_2'$ den Punkt $(x, y)$, dann liegt sie auf einem Kreis:
>
> $$ (x - \mu v_1)^2 + y^2 = (\mu v_1)^2 , \qquad \mu = \frac{m_1 m_2}{m_1 + m_2} . $$
>
> Der Kreis hat den Mittelpunkt $(\mu v_1, 0)$ und den Radius $\mu v_1$. Dabei ist $\mu$ die [reduzierte Masse](/exphy1/skript/systeme-von-massenpunkten/reduzierte-masse/).

> [!TIP] In einfachen Worten
> Aus Impuls und Energie allein folgt nicht, in welche Richtung die Körper fliegen. Es folgt aber, dass jeder mögliche Endimpuls von Körper 2 auf diesem einen Kreis endet. Welchen Punkt auf dem Kreis der Stoß trifft, hängt davon ab, wie mittig der Treffer war.

Zwei Folgerungen:

- **Gleiche Massen** ($m_1 = m_2$): Die Endimpulse $\mathbf{p}_1'$ und $\mathbf{p}_2'$ stehen senkrecht aufeinander. Das erkennt man beim Billard, wenn die gestoßene Kugel nicht mittig getroffen wird.
- **Sehr schwerer Partner** ($m_2 \gg m_1$): Dann ist $\mu \approx m_1$, und Körper 1 behält seinen Impuls dem Betrag nach. Seine Richtung kann sich aber beliebig ändern, der Streuwinkel liegt zwischen $0$ und $\pi$. Im Extremfall prallt er zurück und sein Impuls ändert sich von $\mathbf{p}$ zu $-\mathbf{p}$. Die Impulsänderung hat dann den Betrag $2p$.

### Herleitung

Für die Spitze $(x, y)$ von $\mathbf{p}_2'$ gilt $p_2'^2 = x^2 + y^2$. Wegen $\mathbf{p}_1' = \mathbf{p}_1 - \mathbf{p}_2'$ ist $p_1'^2 = (p_1 - x)^2 + y^2$. Die Energieerhaltung lautet

$$
\frac{p_1^2}{2 m_1} = \frac{(p_1 - x)^2 + y^2}{2 m_1} + \frac{x^2 + y^2}{2 m_2} .
$$

Multipliziert man mit $2 m_1 m_2/(m_1 + m_2) = 2\mu$ und ordnet um, bleibt $x^2 - 2\mu v_1 x + y^2 = 0$ mit $p_1 = m_1 v_1$. Das ist $(x - \mu v_1)^2 + y^2 = (\mu v_1)^2$, der Kreis aus der Definition.

Für gleiche Massen folgt aus $|\mathbf{p}_1'|^2 + |\mathbf{p}_2'|^2 = p_1^2$ und $\mathbf{p}_1 = \mathbf{p}_1' + \mathbf{p}_2'$, dass $\mathbf{p}_1' \cdot \mathbf{p}_2' = 0$ ist. Die Vektoren sind also senkrecht.

## Im Schwerpunktsystem

Im [Schwerpunktsystem](/exphy1/skript/systeme-von-massenpunkten/massenmittelpunkt/) ist der Gesamtimpuls null, also $\mathbf{p}_{1S} = -\mathbf{p}_{2S}$. Das Schwerpunktsystem erhält man aus dem Laborsystem durch eine Galilei-Transformation mit $\mathbf{r}_i = \mathbf{R}_S + \mathbf{r}_{iS}$.

> [!NOTE] Merke
> Bei einem elastischen Stoß behält jeder Stoßpartner im Schwerpunktsystem seine kinetische Energie. Die Beträge der Impulse bleiben gleich, nur die Richtungen drehen sich. Vor und nach dem Stoß enden die Impulsvektoren auf demselben Kreis um den Ursprung des Schwerpunktsystems. Für zwei Teilchen ist $\mathbf{p}_{1S} = \mu\,(\mathbf{v}_1 - \mathbf{v}_2)$.

![Elastischer Stoß im Schwerpunktsystem: Die beiden entgegengesetzten Impulsvektoren drehen sich um den Winkel ϑ, ihre Beträge bleiben gleich.](/images/exphy1/stoss-schwerpunktsystem.svg)

*Eigene Zeichnung nach der Vorlesung.*

## Weiter

- [Maximal unelastischer Stoß](/exphy1/skript/systeme-von-massenpunkten/unelastischer-stoss/): Was passiert, wenn die Körper nach dem Stoß zusammenbleiben?
- [Rutherford-Streuung](/exphy1/skript/systeme-von-massenpunkten/rutherford-streuung/): Streuung an einem Potential, das nur vom Abstand abhängt.

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Teil zu Stößen im Laborsystem und im Schwerpunktsystem (Vorlesung vom 25.11.2026), eigene Mitschrift. Die Formeln habe ich nachgerechnet.
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
