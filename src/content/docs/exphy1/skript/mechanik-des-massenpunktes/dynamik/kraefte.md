---
title: 2.2.1 Kräfte
description: Kräfte als Vektoren, das Superpositionsprinzip, die Gewichtskraft, das Kräftegleichgewicht, das Hookesche Gesetz und die schiefe Ebene.
weight: 1
---

*In einem Satz: Kräfte sind Vektoren, mehrere Kräfte auf einen Punkt addiert man wie Vektoren, und im Gleichgewicht ist ihre Summe null.*

## Kraft und Superpositionsprinzip

> [!NOTE] Definition
> Die **Dynamik** ist der Teil der Physik, der die Ursachen von Bewegungen untersucht. Kräfte sind die Ursache für die Änderung des Bewegungszustands eines Körpers. Zwei Kräfte sind gleich, wenn sie dieselbe Wirkung haben, zum Beispiel eine Feder gleich weit dehnen. Eine Kraft ist ein Vektor.
>
> **Superpositionsprinzip:** Greifen an einem Punkt mehrere Kräfte $\mathbf{F}_i$ an, ist die resultierende Kraft ihre Vektorsumme, komponentenweise gerechnet:
>
> $$ \mathbf{F}_\mathrm{R} = \sum_{i=1}^{N} \mathbf{F}_i , \qquad F_{\mathrm{R}x} = \sum_i F_{ix} , \quad F_{\mathrm{R}y} = \sum_i F_{iy} , \quad F_{\mathrm{R}z} = \sum_i F_{iz} . $$

> [!TIP] In einfachen Worten
> Zieht jemand mit $3\,\mathrm{N}$ nach rechts und jemand anderes mit $4\,\mathrm{N}$ nach oben, ist die Wirkung so, als zöge eine einzige Kraft von $5\,\mathrm{N}$ schräg nach rechts oben. Man darf Kräfte aufteilen und wieder zusammensetzen, wie man es vom Kräfteparallelogramm aus der Schule kennt.

## Gewichtskraft und Kräftegleichgewicht

> [!NOTE] Definition
> Die **Gewichtskraft** ist die Kraft, mit der die Erde einen Körper anzieht:
>
> $$ \mathbf{G} = m_\mathrm{s}\,\mathbf{g} . $$
>
> Dabei ist $m_\mathrm{s}$ die **schwere Masse**, sie bestimmt das Gewicht. Die Einheit der Kraft ist $1\,\mathrm{N} = 1\,\mathrm{kg\,m/s^2}$. Ein Körper ist im **Kräftegleichgewicht**, wenn $\mathbf{F}_\mathrm{R} = 0$ gilt.

> [!TIP] In einfachen Worten
> Die schwere Masse sagt, wie stark die Erde an einem Körper zieht. Die träge Masse, die im nächsten Artikel kommt, sagt, wie stark er sich gegen Beschleunigung wehrt. Dass beide gleich groß sind, ist ein experimenteller Befund, siehe [3.3 Äquivalenz von schwerer und träger Masse](/exphy1/skript/bewegte-bezugssysteme/aequivalenzprinzip/).

### Das Hookesche Gesetz

Hängt man einen Körper an eine Feder, dehnt sie sich, bis die Federkraft die Gewichtskraft aufhebt. Dann hängt der Körper in Ruhe.

> [!NOTE] Gesetz von Hooke
> Die Dehnung einer Feder aus ihrer Ruhelänge $s_0$ ist proportional zur wirkenden Kraft:
>
> $$ F = k\,(s - s_0) . $$
>
> Dabei ist $k$ die **Federkonstante** mit der Einheit $\mathrm{N/m}$.

#### Beispiel

Ein Körper mit $m = 0{,}50\,\mathrm{kg}$ hängt an einer Feder mit $k = 50\,\mathrm{N/m}$. Die Zahlen sind frei gewählt. Im Gleichgewicht ist $k\,(s - s_0) = m\,g$, also

$$
s - s_0 = \frac{0{,}50\,\mathrm{kg}\cdot 9{,}81\,\mathrm{m/s^2}}{50\,\mathrm{N/m}} \approx 0{,}098\,\mathrm{m} \approx 10\,\mathrm{cm} .
$$

## Die schiefe Ebene im Gleichgewicht

Ein Körper ruht auf einer schiefen Ebene mit dem Neigungswinkel $\alpha$. Man zerlegt die Gewichtskraft in eine Komponente parallel und eine senkrecht zur Ebene:

> [!NOTE] Zerlegung
> $$ F_\parallel = F_\mathrm{H} = m_\mathrm{s}\,g\sin\alpha \quad (\text{Hangabtriebskraft}) , \qquad F_\perp = F_\mathrm{N} = m_\mathrm{s}\,g\cos\alpha \quad (\text{Normalkraft}) . $$

Damit der Körper nicht abrutscht, braucht es eine Zugkraft $\mathbf{Z} = -\mathbf{F}_\parallel$, zum Beispiel durch ein Seil. Die Normalkomponente wird durch eine **Zwangskraft** $\mathbf{N} = -\mathbf{F}_\perp$ ausgeglichen. Sie entsteht, weil die Unterlage ein wenig nachgibt und den Körper trägt. Die Summe aller vier Kräfte ist null.

![Ein Körper auf einer schiefen Ebene mit Gewichtskraft, Hangabtriebskraft, Normalkraft, Zugkraft und Zwangskraft.](/images/exphy1/schiefe-ebene.svg)

*Eigene Zeichnung: Die Gewichtskraft wird in Hangabtriebskraft und Normalkraft zerlegt.*

#### Beispiel

Ein Körper mit $m = 2{,}0\,\mathrm{kg}$ liegt auf einer Ebene mit $\alpha = 30^\circ$. Die Zahlen sind frei gewählt. Dann ist

$$
F_\mathrm{H} = 2{,}0\,\mathrm{kg}\cdot 9{,}81\,\mathrm{m/s^2}\cdot\sin 30^\circ = 9{,}8\,\mathrm{N} , \qquad F_\mathrm{N} = 2{,}0\,\mathrm{kg}\cdot 9{,}81\,\mathrm{m/s^2}\cdot\cos 30^\circ \approx 17\,\mathrm{N} .
$$

Das Seil muss mit $9{,}8\,\mathrm{N}$ ziehen, die Unterlage trägt mit $17\,\mathrm{N}$.

> [!CAUTION] Stolperstelle
> Die Normalkraft ist nicht immer gleich der Gewichtskraft. Auf der schiefen Ebene ist sie kleiner, denn sie gleicht nur die Komponente senkrecht zur Ebene aus. Und sie ist keine "Gegenkraft" der Gewichtskraft im Sinne des dritten Newtonschen Axioms, denn beide greifen am selben Körper an.

## Weiter

- [2.2.2 Die Newtonschen Axiome](/exphy1/skript/mechanik-des-massenpunktes/dynamik/newtonsche-axiome/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.2.1 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
