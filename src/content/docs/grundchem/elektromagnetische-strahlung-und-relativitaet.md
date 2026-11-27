---
title: "Elektromagnetische Strahlung und Relativität"
description: "Wellenlänge, Frequenz und Photonenenergie (c = λ·ν, E = h·ν, E = m·c²), die Grenze der Lichtgeschwindigkeit und warum GPS Relativitätstheorie braucht."
weight: 5
---

*In einem Satz: Licht ist eine Welle mit Wellenlänge und Frequenz, es kommt in Energiepaketen, und die Lichtgeschwindigkeit im Vakuum ist die Grenze, mit der sich Information ausbreiten kann.*

## Drei Gleichungen, die man kennen muss

Elektromagnetische Strahlung ist die Quelle der Informationen, die man aus Atomen und Molekülen holt. Springt ein Elektron auf eine andere Bahn, nimmt es Energie auf oder gibt sie ab, und das lässt sich als Strahlung messen.

> [!NOTE] Definition
> Strahlung wird durch drei Größen beschrieben: die **Wellenlänge** $\lambda$ (Einheit $\mathrm{m}$), die **Frequenz** $\nu$ (Einheit $\mathrm{Hz} = 1/\mathrm{s}$) und die **Lichtgeschwindigkeit** $c$. Im Vakuum gilt $c = 299\,792\,458\,\mathrm{m/s}$. Sie hängen zusammen über
>
> $$ c = \lambda\cdot\nu . $$
>
> **Max Planck** erkannte um 1900, dass ein System Strahlung nicht stetig abgibt, sondern in kleinsten Energiepaketen, den **Quanten**. Bei Licht heißen sie **Lichtquanten** oder **Photonen**. Die Energie eines Photons ist
>
> $$ E = h\cdot\nu , \qquad h = 6{,}626\cdot 10^{-34}\,\mathrm{J\,s} . $$
>
> Dabei ist $h$ das **Plancksche Wirkungsquantum**. Dazu kommt die Beziehung von Einstein, die Energie und Masse verknüpft:
>
> $$ E = m\cdot c^2 . $$

> [!TIP] In einfachen Worten
> Eine Welle hat einen Abstand von Berg zu Berg ($\lambda$) und eine Zahl von Bergen pro Sekunde ($\nu$). Das Produkt ist die Geschwindigkeit. Je kürzer die Welle, desto mehr Berge pro Sekunde und desto mehr Energie pro Photon. Und Masse ist nichts anderes als sehr konzentrierte Energie.

### Beispiel: ein grünes Photon

Grünes Laserlicht hat die Wellenlänge $\lambda = 532\,\mathrm{nm}$ (frei gewählte Zahl). Dann ist

$$
\nu = \frac{c}{\lambda} = \frac{3{,}00\cdot 10^{8}\,\mathrm{m/s}}{532\cdot 10^{-9}\,\mathrm{m}} \approx 5{,}64\cdot 10^{14}\,\mathrm{Hz} , \qquad E = h\,\nu \approx 3{,}73\cdot 10^{-19}\,\mathrm{J} \approx 2{,}33\,\mathrm{eV} .
$$

Für ein Mol solcher Photonen sind das etwa $225\,\mathrm{kJ/mol}$. Mit dieser Einheit rechnet die Chemie, und in ihr stehen auch die Energiebereiche im Artikel [Molekülanregung und Spektroskopie](/grundchem/anregung-und-spektroskopie/).

> [!CAUTION] Stolperstelle
> Die Gleichung $c = \lambda\,\nu$ gilt in dieser Form für das Vakuum. In Materie ist die Lichtgeschwindigkeit kleiner. Die Frequenz bleibt beim Eintritt in ein Medium gleich, die Wellenlänge wird kürzer. Auf der Folie der Vorlesung steht außerdem $c = 299\,792\,658\,\mathrm{m/s}$. Das ist ein Zahlendreher, richtig ist $299\,792\,458\,\mathrm{m/s}$.

## Gibt es etwas, das schneller ist als das Licht?

Die Vorlesung unterscheidet drei Fälle. In keinem wird Information schneller als $c$ im Vakuum übertragen.

1. **Licht in Materie.** Dort ist Licht langsamer als im Vakuum. Elektronen, die man in ein Medium schießt, können dort schneller sein als das Licht in diesem Medium, aber nicht schneller als $c$ im Vakuum.
2. **Scheinbare Überlichtgeschwindigkeit.** Man richtet einen starken Laser auf den Mond und schwenkt ihn. Der Lichtpunkt auf dem Mond kann sich schneller bewegen als das Licht. Es wandert aber nichts von einem Punkt zum anderen, deshalb lässt sich damit keine Information senden.
3. **Ausdehnung des Raumes.** Weit entfernte Galaxien entfernen sich von uns, weil der Raum selbst wächst. Diese Ausdehnung unterliegt der Grenze nicht, denn die Grenze gilt für Bewegung im Raum und nicht für den Raum. Galaxien jenseits des **beobachtbaren Universums** entfernen sich so schnell, dass ihr Licht uns nie erreicht.

> [!NOTE] Merke
> Die Vakuumlichtgeschwindigkeit ist die höchste Geschwindigkeit, mit der Information übertragen werden kann.

## Raumzeit und GPS

Nach der allgemeinen Relativitätstheorie von Einstein sind Raum, Zeit und Materie miteinander verknüpft. Die vierdimensionale Raumzeit wird durch Masse gekrümmt, und ohne Materie gäbe es weder Raum noch Zeit.

Zu Einsteins Zeit hatte die Theorie keine praktische Anwendung. Heute braucht sie jeder, der ein Navigationsgerät benutzt. Die Satelliten des GPS sind weit weg von der Erde, dort ist die Gravitation schwächer, und sie bewegen sich schnell. Beides verändert den Gang ihrer Uhren. Will man den Ort auf etwa einen Meter genau bestimmen, muss man das einrechnen.

### Beispiel: wie groß der Effekt ist

Ein GPS-Satellit fliegt auf einer Bahn mit $r = 26\,571\,\mathrm{km}$ und etwa $3{,}87\,\mathrm{km/s}$. Gegenüber einer Uhr auf der Erde geht seine Uhr

- wegen der Geschwindigkeit pro Tag um etwa $7{,}2\,\mu\mathrm{s}$ nach,
- wegen der schwächeren Gravitation pro Tag um etwa $45{,}7\,\mu\mathrm{s}$ vor.

Zusammen geht sie pro Tag um etwa $38{,}5\,\mu\mathrm{s}$ vor. Das entspricht einem Laufzeitfehler von $c\cdot 38{,}5\,\mu\mathrm{s} \approx 11{,}5\,\mathrm{km}$ pro Tag, wenn man es nicht korrigiert. Diese Werte habe ich selbst nachgerechnet, sie stehen nicht in der Vorlesung. Sie zeigen aber, warum die Aussage "auf einen Meter genau" ohne Relativitätstheorie nicht möglich wäre.

## Am Rande erwähnt

Die Vorlesung ist auch kurz auf Fragen eingegangen, die über den Stoff hinausgehen. Sie sind Ausblick und keine Prüfungsthemen:

- **Kosmologie.** Das Universum dehnt sich entweder immer weiter aus, bis kaum noch Wechselwirkungen stattfinden, oder die Ausdehnung kehrt sich um und endet in einer Singularität. Das hängt unter anderem von der Menge der Dunklen Materie ab, und das ist nicht geklärt. Ein sich wiederholendes (zyklisches) Universum ist eine mögliche Vorstellung.
- **Raumfahrt.** Der nächste Stern ist so weit weg, dass man mit herkömmlichen Mitteln Generationen bräuchte. In der Science-Fiction gibt es Wurmlöcher als Abkürzung und Warp-Blasen, in denen sich das Raumschiff in einer eigenen Raumblase bewegt. Ein "Strukturintegritätsfeld" soll das Schiff bei der Beschleunigung zusammenhalten. Das sind erfundene Konzepte, auch wenn sie manchmal an echte Physik angelehnt sind.
- **Grundlagenforschung.** Viele wichtige Entdeckungen entstanden ohne ein Anwendungsziel. Die Relativitätstheorie ist dafür ein Beispiel.

## Verwandte Artikel

- [Das Bohrsche Atommodell](/grundchem/bohrsches-atommodell/)
- [Linienspektren und Welle-Teilchen-Dualismus](/grundchem/linienspektren-und-welle-teilchen/): Hier folgt aus diesen Gleichungen die Wellenlänge von Teilchen

## Quellen

- Vorlesung Grundlagen der Chemie vom 27.11.2026, in eigenen Worten zusammengefasst (Mitschrift, Folien, Tonaufzeichnung)
- Eigene Ergänzungen: Die Kästen "In einfachen Worten", das Beispiel mit dem grünen Photon, die Aussage zur Frequenz im Medium und die Rechnung zum GPS stammen nicht aus der Vorlesung und sind nachgerechnet (Gravitationskonstante, Erdmasse und Erdradius aus den üblichen Tabellenwerten)
