---
title: "Molekülanregung und Spektroskopie"
description: "Translation, Rotation, Schwingung und elektronische Anregung eines Moleküls, ihre Energiebereiche, Infrarot- und Raman-Spektroskopie und was die Symmetrie von C60 damit zu tun hat."
weight: 6
---

*In einem Satz: Ein Molekül kann auf vier Arten Energie aufnehmen, jede braucht einen anderen Strahlungsbereich, und aus den Spektren lassen sich Moleküle erkennen.*

## Die vier Arten der Anregung

> [!NOTE] Definition
> Ein Molekül kann sich auf vier Arten anregen lassen:
>
> - **Translation:** Das Molekül wird als Ganzes im Raum verschoben.
> - **Rotation:** Das Molekül dreht sich um sich selbst.
> - **Schwingung:** Die Abstände zwischen den Atomen ändern sich periodisch.
> - **Elektronische Anregung:** Ein Elektron, meist ein Bindungs- oder Valenzelektron, geht auf ein höheres Energieniveau.
>
> Die Energien gibt man in $\mathrm{kJ/mol}$ an, also pro Mol Teilchen.

> [!TIP] In einfachen Worten
> Stell dir einen Hantelkörper aus zwei Kugeln vor, die eine Feder verbindet. Er kann durch den Raum fliegen (Translation), sich drehen (Rotation) und die Feder zusammendrücken und dehnen (Schwingung). Elektronisch angeregt wird er, wenn man in das Innere der Kugeln eingreift. Je mehr Energie ein Vorgang braucht, desto kurzwelliger muss die Strahlung sein, die ihn auslöst.

| Anregung | Energiebereich (Größenordnung) | Strahlungsbereich |
| --- | --- | --- |
| Translation | $0$ bis $12\,\mathrm{kJ/mol}$ | in der Vorlesung kein eigener Strahlungsbereich genannt |
| Rotation | bis etwa $4\,\mathrm{kJ/mol}$ | Mikrowellen |
| Schwingung | bis etwa $100\,\mathrm{kJ/mol}$, die Skala der Folie reicht bis $300\,\mathrm{kJ/mol}$ | Infrarot |
| Elektronisch | bis über $1200\,\mathrm{kJ/mol}$ | sichtbares Licht und Ultraviolett |

Auf der Folie hat jede Anregungsart ihre eigene Energieachse. Die Spalten sind deshalb nicht direkt vergleichbar, und die Zahlen in der Tabelle sind nur Größenordnungen.

### Von der Energie zur Wellenlänge

Aus $E = h\,\nu = h\,c/\lambda$ folgt für ein Mol Photonen $\lambda\,[\mathrm{nm}] \approx 119\,600 / E\,[\mathrm{kJ/mol}]$. Das habe ich nachgerechnet:

| Energie | Wellenlänge | Bereich |
| --- | --- | --- |
| $1200\,\mathrm{kJ/mol}$ | etwa $100\,\mathrm{nm}$ | Ultraviolett |
| $100\,\mathrm{kJ/mol}$ | etwa $1{,}2\,\mu\mathrm{m}$ | Infrarot |
| $4\,\mathrm{kJ/mol}$ | etwa $30\,\mu\mathrm{m}$ | Ferninfrarot |

Die Vorlesung ordnet die Rotation den Mikrowellen zu. Bei den kleinsten Rotationsenergien stimmt das. Die obere Grenze von $4\,\mathrm{kJ/mol}$ liegt rechnerisch schon im Ferninfrarot.

## Schwingung: Infrarot und Raman

Zwei Atome in einem Molekül verhalten sich wie zwei Kugeln an einer Feder. Es gibt eine Energie, bei der das System in Resonanz kommt, und sie hängt von der Stärke der Bindung ab (der Federkonstanten $k$) und von den Massen der Atome. Für zwei Atome gilt $\nu = \frac{1}{2\pi}\sqrt{k/\mu}$ mit der reduzierten Masse $\mu = \frac{m_1 m_2}{m_1 + m_2}$. Schwerere Atome schwingen deshalb langsamer. Daran kann man Moleküle erkennen, denn jede Schwingung hat ihre **Bande** im Spektrum.

> [!NOTE] Zwei Verfahren
> - **Infrarotspektroskopie (IR):** Man strahlt Infrarot durch die Probe und misst, welche Anteile absorbiert werden. Das klappt, wenn sich bei der Schwingung das Dipolmoment des Moleküls ändert.
> - **Raman-Spektroskopie:** Man strahlt Licht ein und misst das gestreute Licht, in der Vorlesung senkrecht zur Einstrahlung (üblich sind auch andere Winkel, zum Beispiel die Rückstreuung). Das Licht wird dabei unelastisch gestreut, es verliert oder gewinnt Energie. Dafür muss sich die **Polarisierbarkeit** des Moleküls ändern.

> [!TIP] In einfachen Worten
> Bei IR schaut man, was hinten durch die Probe kommt und was fehlt. Bei Raman schaut man von der Seite auf das, was die Probe zerstreut. Welches Verfahren besser passt, hängt vom Molekül ab, und oft ergänzen sie sich.

Der Raman-Effekt ist sehr schwach. Seinen großen Aufschwung hat er erst mit starken Lasern als Lichtquelle und empfindlichen Detektoren genommen. Heute braucht man deutlich weniger Laserleistung als früher, weil die Detektoren viel besser geworden sind.

### Schwingung und Rotation zusammen

Eine Schwingungsbande hat eine Feinstruktur, weil sich das Molekül gleichzeitig dreht. Es entstehen **Rotations-Schwingungs-Spektren**. Das klassische Beispiel ist Chlorwasserstoff, HCl: Seine Schwingungsbande ist durch die Rotationsübergänge in viele einzelne Linien aufgespalten. So bekommt man auch Informationen über die Symmetrie und die Bindungsstärke.

## Symmetrie und C60

Je symmetrischer ein Molekül ist, desto mehr Schwingungen fallen im Spektrum aufeinander und desto weniger Banden sieht man. C60 besteht aus 60 Kohlenstoffatomen und ist aufgebaut wie ein Fußball aus Fünf- und Sechsecken. Es hat sehr hohe Symmetrie (Ikosaedersymmetrie), obwohl es 60 Atome hat. Deshalb zeigt es nur wenige Banden. Verändert man das Molekül chemisch (Derivatisierung), sinkt die Symmetrie, und die Zahl der Banden steigt stark an. Das ist ein gängiger Nachweis dafür, dass ein C60-Derivat entstanden ist.

## Elektronische Anregung und UV-Strahlung

Elektronische Anregung braucht die höchsten Energien, also Ultraviolett mit kurzer Wellenlänge und hoher Frequenz. Farblose Stoffe absorbieren kein sichtbares Licht, ihre elektronischen Anregungen liegen meist im UV. Farbige Stoffe lassen sich dagegen schon mit sichtbarem Licht elektronisch anregen. Bei sehr hoher Energie wird ein Elektron ganz aus dem Molekül gelöst.

> [!CAUTION] Stolperstelle
> Kurzwellige Strahlung ist gefährlich, weil sie Bindungen zerstören kann. Trifft sie das Erbgut (DNA), entstehen Schäden. Ein Sonnenbrand ist ein solcher Strahlenschaden. Nach vielen Jahren kann daraus Hautkrebs werden, das hängt von der Dosis und vom Immunsystem ab. Deshalb ist Sonnenschutz gerade in der Mittagssonne sinnvoll. Wärmestrahlung, also Infrarot, hat diese Wirkung nicht, weil ihre Energie viel zu klein ist.

## Verwandte Artikel

- [Elektromagnetische Strahlung und Relativität](/grundchem/elektromagnetische-strahlung-und-relativitaet/): die Gleichungen $c = \lambda\,\nu$ und $E = h\,\nu$
- [Linienspektren und Welle-Teilchen-Dualismus](/grundchem/linienspektren-und-welle-teilchen/)

## Quellen

- Vorlesung Grundlagen der Chemie vom 27.11.2026, in eigenen Worten zusammengefasst (Mitschrift, Folie zu den Energieniveaus der Anregungsarten, Tonaufzeichnung)
- Eigene Ergänzungen: Die Kästen "In einfachen Worten", die Umrechnung von $\mathrm{kJ/mol}$ in Wellenlängen, die Aussage zur Dipolmomentänderung bei IR und der Hinweis zur Wärmestrahlung stammen nicht aus der Vorlesung
