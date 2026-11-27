---
title: "Das Bohrsche Atommodell"
description: "Elektron auf einer Kreisbahn um das Proton: Radius, Geschwindigkeit und Energie hängen von der Quantenzahl n ab, und die Bahnen strahlen nicht."
weight: 4
---

*In einem Satz: Im Bohrschen Modell läuft das Elektron des Wasserstoffatoms nur auf bestimmten Kreisbahnen, deren Radius mit $n^2$ wächst, deren Geschwindigkeit mit $1/n$ sinkt und deren Energie mit $-1/n^2$ steigt.*

## Das Modell

> [!NOTE] Definition
> Das **Bohrsche Atommodell** beschreibt das Wasserstoffatom als Proton in der Mitte und ein Elektron auf einer Kreisbahn mit dem Radius $r$. Zwei Kräfte halten sich das Gleichgewicht: die elektrische Anziehung zwischen Proton und Elektron und die Zentrifugalkraft der Kreisbewegung. Von außen betrachtet liefert die elektrische Anziehung die Kraft, die das Elektron auf der Kreisbahn hält (Zentripetalkraft). Die Zentrifugalkraft gibt es nur aus Sicht des mitkreisenden Elektrons. Erlaubt sind nur Bahnen, für die der Drehimpuls ein ganzzahliges Vielfaches von $h/2\pi$ ist:
>
> $$ m\,v\,r = n\,\frac{h}{2\pi} , \qquad n = 1, 2, 3, \ldots $$
>
> Die ganze Zahl $n$ heißt **Quantenzahl**. Dabei ist $m$ die Masse des Elektrons, $v$ seine Geschwindigkeit und $h$ das Plancksche Wirkungsquantum. Auf diesen Bahnen strahlt das Elektron nicht (**Bohrsches Postulat**).

> [!TIP] In einfachen Worten
> Das Elektron ist wie ein Ball an einer Schnur um die Sonne, nur dass nicht jeder Abstand erlaubt ist. Es gibt eine Treppe aus erlaubten Bahnen, und $n$ zählt die Stufen. Zwischen den Stufen kann das Elektron nicht kreisen.

## Radius, Geschwindigkeit und Energie

Aus dem Kräftegleichgewicht und der Bedingung für den Drehimpuls folgen drei Formeln. Die Herleitung steht weiter unten.

> [!NOTE] Ergebnisse
> $$ r_n = \frac{\varepsilon_0\,h^2}{\pi\,m\,e^2}\,n^2 , \qquad v_n = \frac{1}{n}\,\frac{e^2}{2\,\varepsilon_0\,h} , \qquad E_n = -\frac{m\,e^4}{8\,\varepsilon_0^2\,h^2}\,\frac{1}{n^2} . $$
>
> Hier ist $e$ die Elementarladung, $\varepsilon_0$ die elektrische Feldkonstante und $E_n$ die Gesamtenergie des Elektrons.

> [!TIP] In einfachen Worten
> Je höher die Bahn, desto weiter ist das Elektron vom Kern entfernt, desto langsamer ist es, und desto weniger fest ist es gebunden. Die Energie ist negativ, weil man Arbeit leisten muss, um das Elektron vom Kern zu lösen. Bei $n \to \infty$ ist die Energie $0$, das Elektron ist dann frei.

### Beispiel: die erste Bahn

Für $n = 1$ ergeben die Formeln:

$$
r_1 = 0{,}053\,\mathrm{nm} , \qquad v_1 = 2{,}19\cdot 10^{6}\,\mathrm{m/s} , \qquad E_1 = -13{,}6\,\mathrm{eV} = -1313\,\mathrm{kJ/mol} .
$$

Für $n = 2$ ist der Radius viermal so groß, also $0{,}21\,\mathrm{nm}$, und die Geschwindigkeit nur halb so groß. Die Geschwindigkeit $2{,}19\cdot 10^{6}\,\mathrm{m/s}$ entspricht rund $2200\,\mathrm{km/s}$ oder $7{,}9$ Millionen Kilometer pro Stunde. Das ist weniger als ein Prozent der Lichtgeschwindigkeit $c \approx 3{,}00\cdot 10^{8}\,\mathrm{m/s}$, also noch weit von ihr entfernt. Die Folie der Vorlesung rundet auf $2{,}18\cdot 10^{6}\,\mathrm{m/s}$, rechnet grob mit $2000\,\mathrm{km/s}$ und kommt so auf $7{,}2$ Millionen Kilometer pro Stunde.

![Links drei Kreisbahnen um das Proton mit den Radien n zum Quadrat mal 0,053 Nanometer. Rechts die Energieniveaus des Wasserstoffatoms mit den Serien von Lyman, Balmer und Paschen.](/images/chemie/bohr-modell.svg)

*Eigene Zeichnung: Bahnen und Energieniveaus des Wasserstoffatoms. Die Zahlen habe ich mit den Formeln oben nachgerechnet.*

Die Abstände der Bahnen werden nach außen größer, die Abstände der Energieniveaus dagegen kleiner. Sie laufen auf die **Seriengrenze** bei $n \to \infty$ zu, wo das Elektron das Atom verlässt (Ionisation). Man muss dem Elektron im Grundzustand also die Energie $+1313\,\mathrm{kJ/mol}$ zuführen, um es vom Atom zu lösen. Diese **Ionisierungsenergie** ist positiv, der Betrag von $E_1$. Die Energie $E_1$ selbst ist negativ, weil das Elektron im Atom gebunden ist.

> [!CAUTION] Stolperstelle
> Das Postulat der strahlungslosen Bahn widerspricht der klassischen Elektrodynamik. Dort strahlt jede beschleunigte Ladung, verliert Energie und stürzt spiralförmig in den Kern. Das hat man nie beobachtet, also braucht das Modell diese Zusatzannahme, damit es funktioniert. Befriedigend ist das nicht. Trotzdem rechnet man mit dem Modell viele Dinge richtig, bis man an seine Grenzen stößt. Das ist bei wissenschaftlichen Modellen häufig so.

Die Vorlesung nutzt das auch, um zu erklären, warum man bei einem Atom mit mehreren Elektronen zuerst ein äußeres Elektron entfernt: Es ist weniger fest gebunden als ein inneres. Die Formeln oben gelten aber genau nur für Wasserstoff, also für ein Elektron. Bei mehreren Elektronen stoßen sich diese gegenseitig ab, und die Rechnung wird komplizierter. Als Bild bleibt es richtig.

### Herleitung

Die Anziehung zwischen Proton und Elektron (Coulomb-Kraft) hält das Elektron auf der Kreisbahn:

$$
\frac{m\,v^2}{r} = \frac{e^2}{4\pi\,\varepsilon_0\,r^2} \quad\Longrightarrow\quad m\,v^2\,r = \frac{e^2}{4\pi\,\varepsilon_0} .
$$

Teilt man diese Gleichung durch die Drehimpulsbedingung $m\,v\,r = n\,h/2\pi$, kürzen sich $m$ und $r$ weg, und es bleibt die Geschwindigkeit:

$$
v = \frac{e^2/(4\pi\,\varepsilon_0)}{n\,h/(2\pi)} = \frac{1}{n}\,\frac{e^2}{2\,\varepsilon_0\,h} .
$$

Den Radius erhält man aus der Drehimpulsbedingung, $r = n\,h/(2\pi\,m\,v)$. Setzt man $v$ ein, folgt $r_n = \varepsilon_0\,h^2\,n^2/(\pi\,m\,e^2)$.

Die Gesamtenergie ist die Summe aus kinetischer und potentieller Energie. Aus dem Kräftegleichgewicht folgt $m\,v^2 = e^2/(4\pi\,\varepsilon_0\,r)$, also ist die kinetische Energie halb so groß wie der Betrag der potentiellen:

$$
E = \tfrac{1}{2}\,m\,v^2 - \frac{e^2}{4\pi\,\varepsilon_0\,r} = -\tfrac{1}{2}\,m\,v^2 = -\frac{m\,e^4}{8\,\varepsilon_0^2\,h^2}\,\frac{1}{n^2} .
$$

## Verwandte Artikel

- [Elektromagnetische Strahlung und Relativität](/grundchem/atombau/elektromagnetische-strahlung-und-relativitaet/)
- [Linienspektren und Welle-Teilchen-Dualismus](/grundchem/atombau/linienspektren-und-welle-teilchen/): Wie die Niveaus aus der Grafik zu Spektrallinien führen

## Quellen

- Vorlesung Grundlagen der Chemie vom 27.11.2026, in eigenen Worten zusammengefasst (Mitschrift, Folien, Tonaufzeichnung)
- Eigene Ergänzungen: Die Herleitung, die Zahlenwerte für $n = 2$ und $E_1$ in $\mathrm{kJ/mol}$ und die Grafik habe ich nachgerechnet. Auf der Folie steht für $v_1$ der Wert $2{,}18\cdot 10^{6}\,\mathrm{m/s}$, mit den heutigen Konstanten ergibt sich $2{,}19\cdot 10^{6}\,\mathrm{m/s}$.
