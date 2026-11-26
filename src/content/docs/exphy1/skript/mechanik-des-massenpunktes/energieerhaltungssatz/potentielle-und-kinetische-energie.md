---
title: 2.3.3 und 2.3.4 Potentielle und kinetische Energie
description: Wie man aus einer konservativen Kraft die potentielle Energie bekommt, die Energie der Lage und der Feder und die kinetische Energie.
weight: 2
---

*In einem Satz: Die potentielle Energie ist die gespeicherte Arbeit einer konservativen Kraft, die kinetische Energie ist die Arbeit, die in der Bewegung steckt.*

## Potentielle Energie

> [!NOTE] Definition
> Für eine konservative Kraft $\mathbf{F}(\mathbf{r})$ ist die **Differenz der potentiellen Energie** zwischen zwei Orten
>
> $$ \Delta W_\mathrm{pot} = -\bigl[W_\mathrm{pot}(\mathbf{r}_2) - W_\mathrm{pot}(\mathbf{r}_1)\bigr] = \int_{\mathbf{r}_1}^{\mathbf{r}_2}\mathbf{F}(\mathbf{r})\cdot\mathrm{d}\mathbf{r} . $$
>
> Das Minuszeichen ist eine Vorzeichenkonvention: Verrichtet die Kraft Arbeit am Körper, sinkt seine potentielle Energie. Muss man gegen die Kraft Arbeit aufwenden, steigt sie. Am **Nullniveau** (NN) wählt man $W_\mathrm{pot}(\mathrm{NN}) = 0$, und die potentielle Energie an einem Ort $\mathbf{r}$ ist
>
> $$ W_\mathrm{pot}(\mathbf{r}) = -\int_\mathrm{NN}^{\mathbf{r}}\mathbf{F}(\mathbf{r}')\cdot\mathrm{d}\mathbf{r}' . $$

> [!TIP] In einfachen Worten
> Die potentielle Energie sagt, wie viel Arbeit in einer Lage "gespeichert" ist. Ein Stein auf dem Dach kann beim Herunterfallen Arbeit verrichten. Wo man das Nullniveau legt, ist egal, denn für die Bewegung zählen nur Unterschiede der Energie.

### Die Energie der Lage

Ein Massenpunkt der Masse $m$ ist um die Höhe $h$ über dem Nullniveau. In Erdnähe ist die Gewichtskraft homogen, $\mathbf{G} = -m g\,\mathbf{e}_z$. Dann ist

$$
W_\mathrm{pot} = -\int_0^h \mathbf{G}\cdot\mathrm{d}\mathbf{r} = \int_0^h m g\,\mathrm{d}z = m\,g\,h .
$$

### Die Energie der gespannten Feder

Auf dieselbe Weise ergibt sich für die gespannte Feder mit dem Nullniveau bei der Ruhelänge $x_0$

$$
W_\mathrm{pot} = \tfrac{1}{2}\,k\,(x - x_0)^2 .
$$

#### Beispiel

Ein Stein mit $m = 2{,}0\,\mathrm{kg}$ liegt auf einem Dach $h = 5{,}0\,\mathrm{m}$ über dem Boden. Seine Energie der Lage gegenüber dem Boden ist

$$
W_\mathrm{pot} = 2{,}0\,\mathrm{kg}\cdot 9{,}81\,\mathrm{m/s^2}\cdot 5{,}0\,\mathrm{m} \approx 98\,\mathrm{J} .
$$

Die Zahlen sind frei gewählt. Legt man das Nullniveau stattdessen aufs Dach, ist sie null, und der Boden liegt bei $-98\,\mathrm{J}$. Die Differenz bleibt dieselbe.

> [!CAUTION] Stolperstelle
> $W_\mathrm{pot} = m g h$ gilt nur, solange $g$ konstant ist, also in Erdnähe. Bei großen Höhen oder für Satelliten muss man die ortsabhängige Gravitationskraft verwenden, siehe 2.5.

## Kinetische Energie

Um einen Massenpunkt zu beschleunigen, braucht man Arbeit. Mit $\mathbf{F} = m\,\ddot{\mathbf{r}}$ und $\mathrm{d}\mathbf{r} = \dot{\mathbf{r}}\,\mathrm{d}t$ ist

$$
\Delta W = \int_{\mathbf{r}_1}^{\mathbf{r}_2}\mathbf{F}\cdot\mathrm{d}\mathbf{r} = \int_{t_1}^{t_2} m\,\ddot{\mathbf{r}}\cdot\dot{\mathbf{r}}\,\mathrm{d}t = \int_{t_1}^{t_2}\frac{\mathrm{d}}{\mathrm{d}t}\Bigl(\tfrac{1}{2}\,m\,v^2\Bigr)\mathrm{d}t = \tfrac{1}{2}\,m\,(v_2^2 - v_1^2) .
$$

> [!NOTE] Definition
> Die **kinetische Energie** eines Massenpunkts der Masse $m$ mit der Geschwindigkeit $v$ ist
>
> $$ W_\mathrm{kin} = \tfrac{1}{2}\,m\,v^2 . $$
>
> Die insgesamt verrichtete Arbeit ist die Änderung der kinetischen Energie.

> [!TIP] In einfachen Worten
> Je schneller ein Körper ist, desto mehr Arbeit hat es gekostet, ihn so schnell zu machen. Und weil das Tempo quadratisch eingeht, braucht man für das Doppelte an Tempo die vierfache Energie. Deshalb ist der Bremsweg bei doppelter Geschwindigkeit etwa viermal so lang.

#### Beispiel

Ein Wagen mit $m = 1000\,\mathrm{kg}$ beschleunigt von $0$ auf $20\,\mathrm{m/s}$. Die Arbeit dafür ist $\tfrac{1}{2}\cdot 1000\,\mathrm{kg}\cdot(20\,\mathrm{m/s})^2 = 2{,}0\cdot 10^5\,\mathrm{J}$. Von $20$ auf $40\,\mathrm{m/s}$ kostet es das Dreifache davon, $6{,}0\cdot 10^5\,\mathrm{J}$.

## Weiter

- [2.3.5 und 2.3.6 Erhaltung der Energie und Kraft aus dem Potential](/exphy1/skript/mechanik-des-massenpunktes/energieerhaltungssatz/erhaltung-der-energie/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitte 2.3.3 und 2.3.4 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
