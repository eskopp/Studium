---
title: "Linienspektren und Welle-Teilchen-Dualismus"
description: "Warum jedes Element eigene Spektrallinien hat, wie die Serien des Wasserstoffs entstehen und warum jedes bewegte Objekt eine Wellenlänge hat (de Broglie)."
weight: 7
---

*In einem Satz: Wenn ein Elektron auf ein tieferes Niveau fällt, sendet es Licht mit ganz bestimmter Wellenlänge aus, und umgekehrt kann man jedem bewegten Teilchen eine Wellenlänge zuordnen.*

## Linienspektren

> [!NOTE] Definition
> Ein **Linienspektrum** entsteht, wenn angeregte Elektronen auf tiefere Niveaus zurückfallen. Jeder Übergang gibt ein Photon mit der Energie $E_\text{höher} - E_\text{tiefer} = h\,\nu$ ab. Weil die Niveaus für jedes Element anders liegen, hat jedes Element seine eigenen Linien.

> [!TIP] In einfachen Worten
> Die Linien sind wie ein Fingerabdruck. Jede Linie gehört zu einem bestimmten Sprung zwischen zwei Stufen der Elektronentreppe. Wie lang der Pfeil im Energiediagramm ist, bestimmt die Farbe.

### Die Serien des Wasserstoffs

Beim Wasserstoffatom sortiert man die Übergänge nach dem Niveau, auf das das Elektron zurückfällt, egal von wo es kommt:

| Serie | Rückfall auf | Bereich | Wellenlängen (nachgerechnet) |
| --- | --- | --- | --- |
| Lyman | $n = 1$ | ultraviolett | $91$ bis $122\,\mathrm{nm}$ |
| Balmer | $n = 2$ | sichtbar | $365$ bis $656\,\mathrm{nm}$ |
| Paschen | $n = 3$ | infrarot | $820$ bis $1875\,\mathrm{nm}$ |

Die Grafik dazu steht im Artikel [Das Bohrsche Atommodell](/grundchem/bohrsches-atommodell/).

#### Beispiel: die rote Balmer-Linie

Der Sprung von $n = 3$ nach $n = 2$ hat die Energie $E_3 - E_2 = (-1{,}51 + 3{,}40)\,\mathrm{eV} = 1{,}89\,\mathrm{eV}$. Mit $\lambda = h\,c/E$ ist

$$
\lambda = \frac{h\,c}{1{,}89\,\mathrm{eV}} \approx 656\,\mathrm{nm} ,
$$

das ist rotes Licht. Die Zahlen habe ich mit den Formeln aus dem Bohr-Artikel nachgerechnet.

### Alkalimetalle und die Flammenfarbe

Bei den Alkalimetallen (Li, Na, K, Rb, Cs) ist das Bild komplizierter, weil sie mehr als ein Elektron haben. Trotzdem gibt es in jedem Spektrum **Hauptlinien**, die man auch in einer Flamme sieht. Man gibt sie oft als **Wellenzahl** $1/\lambda$ in $\mathrm{cm^{-1}}$ an.

- **Natrium** hat eine sehr intensive gelbe Linie. Weil Natrium überall vorkommt (im Staub, in Salzen), färbt es fast jede Flamme gelb. Wer andere Elemente nachweisen will, muss das Gerät gründlich reinigen. Auch die gelben Natriumdampflampen nutzen diese Linie.
- **Kalium und Rubidium** haben Linien im roten und im blauen Bereich. Mit dem Auge sind sie schwer zu unterscheiden, und das Natriumgelb kann sie überdecken. Mit einem Spektroskop erkennt man sie sicher an ihren Linien.

So kann man die Zusammensetzung von Sternen und von Atmosphären fremder Planeten bestimmen, ohne eine Probe zu holen.

## Welle-Teilchen-Dualismus

Licht verhält sich je nach Experiment wie eine Welle oder wie ein Teilchen. Die Vorlesung leitet daraus ab, dass auch Teilchen Wellen sind.

> [!NOTE] de-Broglie-Beziehung
> Aus $c = \lambda\,\nu$ folgt $\nu = c/\lambda$. Setzt man das in $E = h\,\nu$ ein, ist $E = h\,c/\lambda$. Mit $E = m\,c^2$ ergibt sich $h\,c/\lambda = m\,c^2$, also $\lambda = h/(m\,c)$. Für beliebige Geschwindigkeit $v$ schreibt man
>
> $$ \lambda = \frac{h}{m\,v} = \frac{h}{p} . $$
>
> Hier ist $p = m\,v$ der **Impuls**. Jedes bewegte Objekt lässt sich als Welle beschreiben, und die Umrechnung zwischen beiden Bildern ist das Plancksche Wirkungsquantum $h$.

> [!TIP] In einfachen Worten
> Je größer der Impuls, desto kürzer die Welle. Ein schnelles, schweres Teilchen hat eine winzige Wellenlänge und verhält sich wie ein Teilchen. Ein leichtes Teilchen wie das Elektron hat eine Wellenlänge, die so groß ist wie ein Atom, und zeigt deutlich Welleneigenschaften.

### Beispiele

Ein Baseball mit $m = 0{,}15\,\mathrm{kg}$ und $v = 40\,\mathrm{m/s}$ (frei gewählte Zahlen) hat

$$
\lambda = \frac{6{,}63\cdot 10^{-34}\,\mathrm{J\,s}}{0{,}15\,\mathrm{kg}\cdot 40\,\mathrm{m/s}} \approx 1{,}1\cdot 10^{-34}\,\mathrm{m} .
$$

Das ist unvorstellbar klein, man merkt davon nichts. Ein Elektron auf der ersten Bohrschen Bahn ($v_1 = 2{,}19\cdot 10^{6}\,\mathrm{m/s}$) hat dagegen

$$
\lambda = \frac{h}{m\,v_1} \approx 0{,}333\,\mathrm{nm} .
$$

Das ist genau der Umfang der ersten Bahn, $2\pi\,r_1 = 0{,}333\,\mathrm{nm}$. Das ist kein Zufall: Die Drehimpulsbedingung $m\,v\,r = n\,h/2\pi$ lässt sich als $2\pi\,r = n\,\lambda$ schreiben. Auf der $n$-ten Bahn passen also genau $n$ Wellenlängen um den Kern. Diese Überlegung habe ich selbst ergänzt, sie stand nicht in der Vorlesung.

> [!CAUTION] Stolperstelle
> Die Herleitung oben ist eine Merkhilfe. Sie benutzt $E = m\,c^2$ für ein Photon, das keine Ruhemasse hat, und ersetzt dann $c$ durch $v$. Die Beziehung $\lambda = h/p$ gilt trotzdem allgemein und wurde von de Broglie auf alle Teilchen übertragen. Für ein Photon ist $p = h/\lambda$.

### Welle oder Teilchen?

Ob man Welle oder Teilchen findet, hängt vom Aufbau des Experiments ab: Wer nach Teilchen sucht, findet Teilchen, und wer nach einer Welle sucht, findet eine Welle. Das ist der Kern des Dualismus, und er ist für den Alltag ungewohnt.

## Ausblick

Im wellenmechanischen Modell wird das Elektron als **Materiewelle** beschrieben, und die **Schrödinger-Gleichung** ist eine Wellengleichung. Daraus folgt die **Heisenbergsche Unschärferelation**. Sie hebt die klassische Vorstellung auf, dass die Zukunft vollständig festgelegt wäre, wenn man Ort und Geschwindigkeit aller Teilchen kennt (der "Laplacesche Dämon"). Beides war am 27.11.2026 nur der Ausblick, die Vorlesung vertieft es in der nächsten Sitzung. Dieser Artikel wird dann ergänzt.

## Verwandte Artikel

- [Das Bohrsche Atommodell](/grundchem/bohrsches-atommodell/)
- [Elektromagnetische Strahlung und Relativität](/grundchem/elektromagnetische-strahlung-und-relativitaet/)
- [Molekülanregung und Spektroskopie](/grundchem/anregung-und-spektroskopie/)

## Quellen

- Vorlesung Grundlagen der Chemie vom 27.11.2026, in eigenen Worten zusammengefasst (Mitschrift, Folien zu den Wasserstoffserien und zu den Alkalimetallen, Tonaufzeichnung)
- Eigene Ergänzungen: Die Kästen "In einfachen Worten", die Wellenlängen der Serien, das Beispiel zur Balmer-Linie, die Beispiele zur de-Broglie-Wellenlänge und der Zusammenhang mit dem Bahnumfang sind nachgerechnet und stammen nicht aus der Vorlesung
