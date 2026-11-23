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
> $$ \vec p_1 + \vec p_2 = \vec p_1{}' + \vec p_2{}' $$
>
> Die gestrichenen Größen gelten nach dem Stoß. Der Impulserhaltungssatz gilt immer, solange keine äußeren Kräfte wirken.

> [!TIP] In einfachen Worten
> Was ein Körper an Schwung verliert, bekommt der andere. Das gilt für Billardkugeln genauso wie für Teilchen im Detektor am LHC. Die Rechnung ist darum für jeden Stoß dieselbe, egal wie kompliziert der Vorgang im Inneren ist.

### Herleitung

Auf Teilchen 1 wirkt die Kraft $\vec F_{12}$ und auf Teilchen 2 die Kraft $\vec F_{21} = -\vec F_{12}$. Dann ist

$$
\dot{\vec p}_1 + \dot{\vec p}_2 = \vec F_{12} + \vec F_{21} = 0 ,
$$

also ist $\vec p_1 + \vec p_2$ zeitlich konstant. Das ist ein Weg über das dritte Newtonsche Gesetz. Eleganter ist die Herleitung über die Invarianz des Stoßes gegenüber Galilei-Transformationen, siehe [Inertialsysteme und Galilei-Transformation](/experimentalphysik/1-mechanik-und-thermodynamik/bewegte-bezugssysteme/inertialsysteme-und-galilei-transformation/). Sie braucht das dritte Newtonsche Gesetz nicht.

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
- W. Demtröder, Experimentalphysik 1 (Springer, 2006), auf den Folien als Quelle der Bilder genannt
