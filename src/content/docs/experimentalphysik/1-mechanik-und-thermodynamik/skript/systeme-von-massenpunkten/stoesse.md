---
title: Stöße
description: Impuls- und Energieerhaltung beim Stoß, elastische, unelastische und superelastische Stöße und das ballistische Pendel.
weight: 4
---

*In einem Satz: Bei jedem Stoß bleibt der Impuls erhalten, die Bewegungsenergie nur manchmal.*

## Impulserhaltung beim Stoß

> [!NOTE] Definition
> Stoßen zwei Teilchen in einem abgeschlossenen System, in dem nur innere Kräfte wirken, dann ist der Gesamtimpuls vor und nach dem Stoß gleich:
>
> $$ \mathbf{p}_1 + \mathbf{p}_2 = \mathbf{p}_1{}' + \mathbf{p}_2{}' $$
>
> Die gestrichenen Größen gelten nach dem Stoß. Der Impulserhaltungssatz gilt immer, solange keine äußeren Kräfte wirken.

> [!TIP] In einfachen Worten
> Was ein Körper an Schwung verliert, bekommt der andere. Das gilt für Billardkugeln genauso wie für Teilchen im Detektor am LHC. Die Rechnung ist darum für jeden Stoß dieselbe, egal wie kompliziert der Vorgang im Inneren ist.

### Herleitung über das dritte Newtonsche Gesetz

Auf Teilchen 1 wirkt die Kraft $\mathbf{F}_{12}$ und auf Teilchen 2 die Kraft $\mathbf{F}_{21} = -\mathbf{F}_{12}$. Dann ist

$$
\dot{\mathbf{p}}_1 + \dot{\mathbf{p}}_2 = \mathbf{F}_{12} + \mathbf{F}_{21} = 0 ,
$$

also ist $\mathbf{p}_1 + \mathbf{p}_2$ zeitlich konstant. Das ist die alternative Herleitung der Vorlesung. Sie ist nach den Folien nicht so elegant wie die folgende.

### Herleitung aus der Galilei-Invarianz

Diese Herleitung braucht das dritte Newtonsche Gesetz nicht. Sie setzt drei Dinge voraus:

1. **Massenerhaltung:** Die Gesamtmasse $m_1 + m_2$ ist vor und nach dem Stoß gleich.
2. **Energieerhaltung** in der Form $W_{kin} = W_{kin}' + \Delta W$. Dabei ist $\Delta W$ der Anteil, der in Reibung, Wärme oder innere Anregung geht. Er hat in allen Inertialsystemen denselben Wert.
3. **Galilei-Invarianz:** Derselbe Stoß lässt sich aus jedem Inertialsystem beschreiben, und die Energieerhaltung gilt dort in derselben Form (siehe [Inertialsysteme und Galilei-Transformation](/experimentalphysik/1-mechanik-und-thermodynamik/skript/bewegte-bezugssysteme/inertialsysteme-und-galilei-transformation/)).

Die Teilchen werden als Punktmassen idealisiert. Wie im Skriptum heißen die Geschwindigkeiten vor dem Stoß $\mathbf{v}_i$ und nach dem Stoß $\mathbf{u}_i$, also $\mathbf{p}_i = m_i\mathbf{v}_i$ und $\mathbf{p}_i{}' = m_i\mathbf{u}_i$. In $S$ lautet die Energieerhaltung

$$
\tfrac{1}{2} m_1 v_1^2 + \tfrac{1}{2} m_2 v_2^2 = \tfrac{1}{2} m_1 u_1^2 + \tfrac{1}{2} m_2 u_2^2 + \Delta W . \tag{a}
$$

Ein zweites System $S'$ bewegt sich mit der beliebigen Geschwindigkeit $\mathbf{V}$ relativ zu $S$. Dort gilt $\mathbf{v}_i' = \mathbf{v}_i - \mathbf{V}$ und $\mathbf{u}_i' = \mathbf{u}_i - \mathbf{V}$, und die Energieerhaltung hat dieselbe Form:

$$
\tfrac{1}{2} m_1 (\mathbf{v}_1 - \mathbf{V})^2 + \tfrac{1}{2} m_2 (\mathbf{v}_2 - \mathbf{V})^2 = \tfrac{1}{2} m_1 (\mathbf{u}_1 - \mathbf{V})^2 + \tfrac{1}{2} m_2 (\mathbf{u}_2 - \mathbf{V})^2 + \Delta W . \tag{b}
$$

Beim Ausmultiplizieren entsteht auf beiden Seiten der Term $\tfrac{1}{2}(m_1 + m_2)V^2$. Er hebt sich weg, weil die Gesamtmasse konstant ist. Zieht man (a) von (b) ab, bleibt

$$
(m_1\mathbf{v}_1 + m_2\mathbf{v}_2) \cdot \mathbf{V} = (m_1\mathbf{u}_1 + m_2\mathbf{u}_2) \cdot \mathbf{V} .
$$

Da $\mathbf{V}$ beliebig gewählt werden kann, müssen die Vektoren links und rechts gleich sein:

$$
m_1\mathbf{v}_1 + m_2\mathbf{v}_2 = m_1\mathbf{u}_1 + m_2\mathbf{u}_2 \quad \Leftrightarrow \quad \mathbf{p}_1 + \mathbf{p}_2 = \mathbf{p}_1{}' + \mathbf{p}_2{}' .
$$

Die Herleitung gilt für elastische und unelastische Stöße, denn $\Delta W$ fällt heraus. Wichtig ist, dass $\Delta W$ vom Bezugssystem unabhängig ist.

## Energie beim Stoß

> [!NOTE] Definition
> Die Energie bleibt insgesamt erhalten, aber ein Teil kann zwischen kinetischer und **innerer Energie** (Wärme, Verformung, Anregung) wechseln. Man definiert die Änderung der kinetischen Energie
>
> $$ \Delta W = W_{k,\text{vor}} - W_{k,\text{nach}} $$
>
> Je nach Vorzeichen unterscheidet man:
>
> | $\Delta W$ | Name | Was passiert |
> |---|---|---|
> | $\Delta W = 0$ | elastischer Stoß | die kinetische Energie bleibt erhalten |
> | $\Delta W > 0$ | unelastischer Stoß | ein Teil wird in innere Energie umgewandelt |
> | $\Delta W < 0$ | superelastischer Stoß (Stoß zweiter Art) | innere Energie wird frei und erhöht die kinetische Energie |

> [!TIP] In einfachen Worten
> Zwei Stahlkugeln prallen fast elastisch voneinander ab. Zwei Knetklumpen kleben aneinander, dabei geht Bewegungsenergie in Verformung und Wärme. Bei einem superelastischen Stoß steckt vorher Energie im Inneren, etwa in einer gespannten Feder oder einem angeregten Atom, und wird beim Stoß freigesetzt.

> [!CAUTION] Stolperstelle
> Die Erhaltung der kinetischen Energie gilt nur beim elastischen Stoß. Der Impulserhaltungssatz gilt immer. Unelastische und superelastische Stöße gibt es nur, wenn mindestens einer der Stoßpartner eine innere Struktur hat. Ein punktförmiges Teilchen ohne Struktur kann keine innere Energie aufnehmen.

## Das ballistische Pendel

Ein Geschoss der Masse $m$ mit der Geschwindigkeit $v$ trifft einen Pendelkörper der Masse $M$ und bleibt darin stecken. Beide schwingen zusammen um die Höhe $h$ nach oben. Gesucht sind die Geschwindigkeit $v$ und die Energie $\Delta W$, die beim Einschlag verloren geht.

> [!NOTE] Ergebnis
> $$ v = \left(1 + \frac{M}{m}\right)\sqrt{2gh}, \qquad \Delta W = M\left(1 + \frac{M}{m}\right) g\,h $$
>
> Da $\Delta W > 0$ ist, ist das Verschmelzen zweier Körper immer ein unelastischer Stoß.

### Beispiel

Gegeben sind $m = 10\,\mathrm{g}$, $M = 1\,\mathrm{kg}$ und $h = 5\,\mathrm{cm}$. Direkt nach dem Stoß bewegen sich beide mit

$$
v' = \sqrt{2gh} = \sqrt{2 \cdot 9{,}81\,\mathrm{m/s^2} \cdot 0{,}05\,\mathrm{m}} \approx 0{,}99\,\mathrm{m/s} .
$$

Das Geschoss hatte vorher

$$
v = \left(1 + \frac{1\,\mathrm{kg}}{0{,}01\,\mathrm{kg}}\right) \cdot 0{,}99\,\mathrm{m/s} = 101 \cdot 0{,}99\,\mathrm{m/s} \approx 100\,\mathrm{m/s} .
$$

Der Energieverlust beim Einschlag ist

$$
\Delta W = 1\,\mathrm{kg} \cdot 101 \cdot 9{,}81\,\mathrm{m/s^2} \cdot 0{,}05\,\mathrm{m} \approx 49{,}5\,\mathrm{J} .
$$

Die Anfangsenergie des Geschosses war $\tfrac{1}{2}\,m\,v^2 \approx 50{,}0\,\mathrm{J}$. Fast alles davon, $\Delta W / W_{k,\text{vor}} = M/(m+M) \approx 99\,\%$, geht in innere Energie. Der Pendelkörper hebt sich nur mit den restlichen etwa $0{,}5\,\mathrm{J}$.

> [!CAUTION] Stolperstelle
> Man darf nicht die Energie des Geschosses mit der Hubenergie des Pendels gleichsetzen. Beim Einschlag geht fast alles verloren. Erst nach dem Einschlag bleibt die mechanische Energie erhalten, dort darf man mit $\tfrac{1}{2}(m+M)v'^2 = (m+M)gh$ rechnen. Der Impulssatz gilt für den Einschlag, weil Gewichtskraft und Fadenkraft in dieser kurzen Zeit vernachlässigbar sind.

### Herleitung

**Impuls** (Geschoss bleibt stecken, beide haben danach die Geschwindigkeit $v'$):

$$
m\,v = (m + M)\,v' \tag{1}
$$

**Energie nach dem Stoß** (kinetische Energie wird in Lageenergie umgewandelt):

$$
\tfrac{1}{2}(m + M)\,v'^2 = (m + M)\,g\,h \quad \Leftrightarrow \quad v'^2 = 2gh \tag{2}
$$

**Einsetzen.** Aus (1) folgt $v = (1 + M/m)\,v'$. Mit (2) ist

$$
v^2 = \left(1 + \frac{M}{m}\right)^2 2gh . \tag{3}
$$

**Energiebilanz.** Die Energie vor dem Stoß ist gleich der Hubenergie plus dem Verlust:

$$
\tfrac{1}{2}\,m\,v^2 = (m + M)\,g\,h + \Delta W \quad \Leftrightarrow \quad \Delta W = \tfrac{1}{2}\,m\,v^2 - (m + M)\,g\,h .
$$

Mit (3) wird $\tfrac{1}{2}\,m\,v^2 = (m + M)\left(1 + \tfrac{M}{m}\right) g\,h$, und weiter

$$
\Delta W = (m + M)\left(1 + \frac{M}{m} - 1\right) g\,h = (m + M)\,\frac{M}{m}\,g\,h = M\left(1 + \frac{M}{m}\right) g\,h .
$$

Alle Größen sind positiv, also ist $\Delta W > 0$.

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.4 und Folien zur Galilei-Transformation (ballistisches Pendel)
- Skriptum Experimentalphysik 1, Kapitel 3, Satz 3.2 (Herleitung des Impulserhaltungssatzes aus der Galilei-Invarianz)
- W. Demtröder, Experimentalphysik 1 (Springer, 2006), auf den Folien als Quelle der Bilder genannt
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
