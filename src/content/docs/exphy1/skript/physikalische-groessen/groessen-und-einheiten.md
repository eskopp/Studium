---
title: 1.1 und 1.2 Physik, physikalische Größen und Einheiten
description: Was eine physikalische Größe ist, wie das SI-System aufgebaut ist, wie Meter, Sekunde und Kilogramm heute definiert sind und was ein Winkel für eine Einheit hat.
weight: 1
---

*In einem Satz: Eine physikalische Größe ist eine Zahl mit Einheit, und die Einheiten des SI-Systems hängen heute an Naturkonstanten.*

## Was die Physik tut

Die Physik ist eine experimentelle Wissenschaft: Den Naturgesetzen liegen Beobachtungen zugrunde. Sie versucht nicht, die Frage nach dem **Warum** zu beantworten, sondern zu klären, **wie** etwas funktioniert. Man sucht ein Modell, das die Beobachtungen möglichst gut beschreibt und auf viele Erscheinungen passt. Dieser Kurs behandelt vier Säulen: klassische Mechanik, kinetische Gastheorie und Thermodynamik, Elektrodynamik und Quantenmechanik. In allen vieren ist das Messen von Größen entscheidend.

## Physikalische Größen

> [!NOTE] Definition
> Eine **physikalische Größe** ist durch eine Maßzahl und eine Maßeinheit gegeben:
>
> $$ \text{Größe} = \{\text{Maßzahl}\}\cdot[\text{Maßeinheit}] . $$

> [!TIP] In einfachen Worten
> Eine Länge ist nie nur eine Zahl. "3" sagt nichts, "3 m" schon. Das gilt auch beim Rechnen: Einheiten rechnet man mit, und wenn die Einheiten am Ende nicht zur gesuchten Größe passen, ist die Rechnung falsch.

#### Beispiel

Für die Länge $L$ eines Stabes ist $\{L\} = 3$ die Maßzahl und $[L] = \mathrm{m}$ die Einheit. Zusammen ergibt das $L = 3\,\mathrm{m}$.

## Die SI-Grundeinheiten

Im **Système International d'Unités (SI)** gibt es sieben Grundeinheiten:

| Größe | Einheit | Zeichen |
| --- | --- | --- |
| Länge | Meter | m |
| Masse | Kilogramm | kg |
| Zeit | Sekunde | s |
| Stromstärke | Ampere | A |
| Temperatur | Kelvin | K |
| Stoffmenge | Mol | mol |
| Lichtstärke | Candela | cd |

Im ersten Semester braucht man vor allem Länge, Masse und Zeit. Seit dem 20. Mai 2019 werden alle SI-Einheiten ausschließlich über Naturkonstanten definiert. Das Messen bedeutet den Vergleich einer Größe mit einem Standard dieses Systems.

## Wie Meter, Sekunde und Kilogramm definiert sind

> [!NOTE] Definitionen
> - **Meter:** Ein Meter ist der Weg, den das Licht im Vakuum in $1/299\,792\,458$ Sekunden zurücklegt. Damit ist die Lichtgeschwindigkeit auf $c = 299\,792\,458\,\mathrm{m/s}$ festgelegt.
> - **Sekunde:** Eine Sekunde ist das $9\,192\,631\,770$-fache der Periodendauer der Strahlung beim Übergang zwischen den beiden Hyperfeinstrukturniveaus des Grundzustands von Cs-133.
> - **Kilogramm:** Das Plancksche Wirkungsquantum wird auf $h = 6{,}62607015\cdot 10^{-34}\,\mathrm{kg\,m^2/s}$ exakt festgelegt (seit 2019, der Wert $6{,}62607004\cdot 10^{-34}$ auf älteren Unterlagen ist der Messwert davor), wobei Meter und Sekunde über $c$ und die Cs-Frequenz definiert sind.

> [!TIP] In einfachen Worten
> Früher gab es Urnormale: Der Meter war ein Stab aus Platin und Iridium in Paris, das Kilogramm ein Zylinder aus demselben Material. Beide können sich verändern. Eine Naturkonstante ist für jeden Ort und jede Zeit gleich, deshalb hat man die Einheiten auf sie zurückgeführt. Die Zahl $299\,792\,458$ ist dabei nicht gemessen, sondern festgelegt.

Die Definition des Meters braucht also schon die Sekunde. Das Wirkungsquantum und die Hyperfeinstruktur lernt man erst im vierten Semester kennen, die Definitionen muss man vorerst so hinnehmen.

### Das Avogadro-Experiment

Die Physikalisch-Technische Bundesanstalt hat Silizium-Atome in einer genau vermessenen Siliziumkugel gezählt, um die Avogadro-Konstante $N_\mathrm{A}$ zu bestimmen. Über die Beziehung $N_\mathrm{A}\cdot h = 3{,}9903127110(18)\cdot 10^{-10}\,\mathrm{J\,s/mol}$ folgt daraus das Wirkungsquantum. Mit dem Kugelvolumen $V_\mathrm{K}$, dem Volumen je Atom $V_\mathrm{A}$, der Molmasse $M_\mathrm{mol}$ und der Masse $m_\mathrm{K}$ der Kugel ist

$$
N_\mathrm{A} = \frac{V_\mathrm{K}}{V_\mathrm{A}}\cdot\frac{M_\mathrm{mol}}{m_\mathrm{K}} .
$$

Silizium eignet sich, weil es sehr rein und nahezu defektfrei herstellbar ist. Hochangereichertes Silizium besteht zu $99{,}99\,\%$ aus dem Isotop $^{28}\mathrm{Si}$. Den Durchmesser misst man interferometrisch, das Atomvolumen über die Beugung von Röntgenstrahlung.

## Vorsilben für Zehnerpotenzen

| Potenz | Vorsilbe | Potenz | Vorsilbe |
| --- | --- | --- | --- |
| $10^{-12}$ | piko (p) | $10^{3}$ | kilo (k) |
| $10^{-9}$ | nano (n) | $10^{6}$ | Mega (M) |
| $10^{-6}$ | mikro (µ) | $10^{9}$ | Giga (G) |
| $10^{-3}$ | milli (m) | $10^{12}$ | Tera (T) |
| $10^{-2}$ | zenti (c) | $10^{2}$ | hekto (h) |
| $10^{-1}$ | dezi (d) | $10^{1}$ | deka (da) |

Weitere sind $10^{-15}$ femto (f), $10^{-18}$ atto (a), $10^{15}$ Peta (P) und $10^{18}$ Exa (E). Man kann sie an alle Einheiten hängen, zum Beispiel Nanometer (nm), Femtosekunde (fs) und Kiloampere (kA). Außerhalb des SI sind das Pfund ($500\,\mathrm{g}$), die Tonne ($1\,\mathrm{t} = 1000\,\mathrm{kg}$), das Ar ($1\,\mathrm{a} = 100\,\mathrm{m^2}$) und das Hektar ($1\,\mathrm{ha} = 10\,000\,\mathrm{m^2}$) üblich.

> [!CAUTION] Stolperstelle
> Das Kilogramm ist die einzige SI-Einheit mit einer Vorsilbe im Namen. Die Vorsilben setzt man deshalb auf das Gramm: $10^{-6}\,\mathrm{kg} = 1\,\mathrm{mg}$ und nicht "Mikrokilogramm".

## Winkel

Bücher sind sich bei der Einheit des Winkels nicht immer einig. Man findet zum Beispiel "$1\,\mathrm{rad} = 360/2\pi = 57{,}3^\circ$". Auf der linken Seite steht ein Radiant, in der Mitte eine reine Zahl und rechts Grad. Das passt nicht zusammen. Der Widerspruch löst sich, wenn man klärt, was ein Winkel eigentlich ist.

> [!NOTE] Definition
> Ein **ebener Winkel** ist das Verhältnis aus Bogenlänge $b$ und Radius $r$, ein **Raumwinkel** das Verhältnis aus Kugelflächenstück $f$ und $r^2$:
>
> $$ \beta = \frac{b}{r} , \qquad \Omega = \frac{f}{r^2} . $$
>
> Winkel sind also **dimensionslose Zahlen**. Das Zeichen $^\circ$ steht für eine Zahl, den 360. Teil des Kreisumfangs bezogen auf den Radius:
>
> $$ 1^\circ = \frac{2\pi r}{360\,r} = \frac{\pi}{180} = 0{,}01745\ldots $$

So wie $\pi$ das Zeichen für die Zahl $3{,}14\ldots$ ist, ist $^\circ$ das Zeichen für die Zahl $0{,}01745\ldots$. Ein Radiant ist $180/\pi \approx 57{,}3$ Grad.

## Weiter

- [1.3 Messfehler und Verteilungen](/exphy1/skript/physikalische-groessen/messfehler-und-verteilungen/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 1.1 und 1.2 und Skriptum Kapitel 1, dort auch die Hinweise auf R. W. Pohl zur Winkeleinheit
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" stammen nicht aus der Vorlesung. Die Zahlenwerte habe ich nachgerechnet.
