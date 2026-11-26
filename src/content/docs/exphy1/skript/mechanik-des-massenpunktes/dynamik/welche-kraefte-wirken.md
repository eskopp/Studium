---
title: 2.2.2.1 Welche Kräfte wirken?
description: Das zweite Axiom richtig anwenden, mit Freischneiden, einem gezogenen Block und zwei Blöcken am Seil.
weight: 3
---

*In einem Satz: Bei jeder Aufgabe zur Dynamik legt man zuerst eine gedachte Hülle um den Körper und schreibt alle Kräfte auf, die durch diese Hülle wirken.*

## Zwei Wege, das zweite Axiom zu lesen

> [!NOTE] Definition
> Das zweite Axiom $\mathbf{F} = m\mathbf{a}$ kann man auf zwei Arten verwenden:
>
> - **Deduktiv:** Man kennt alle Kräfte und berechnet daraus die Bewegung.
> - **Induktiv:** Man kennt die Bewegung und schließt auf die wirkenden Kräfte zurück.
>
> Das **Freischneiden** ist die Methode für den ersten Weg: Man zeichnet eine **Isolationsfläche**, also eine gedachte Hülle, um den Körper und trägt alle Kräfte ein, die von außen durch diese Fläche wirken.

> [!TIP] In einfachen Worten
> Der deduktive Weg ist der Weg der Aufgaben: Das Seil zieht mit so viel, wie schnell wird der Block? Der induktive Weg ist der Weg der Entdeckungen: Newton hat aus den beobachteten Planetenbahnen auf das Gravitationsgesetz geschlossen. Zuerst üben wir den deduktiven Weg.

## Ein Block auf einer glatten Unterlage

Ein Block wird mit einem Seil gezogen, die Unterlage ist reibungsfrei. Die Kräfte durch die Hülle sind die Gewichtskraft $\mathbf{G}$, die Normalkraft $\mathbf{N}$ der Unterlage und die Seilkraft $\mathbf{T}$:

$$
\mathbf{G} + \mathbf{N} + \mathbf{T} = m_\mathrm{t}\,\mathbf{a} .
$$

Der Block hebt nicht ab, also ist $\mathbf{G} + \mathbf{N} = 0$, und es bleibt $T = m_\mathrm{t}\,a$.

### Seil schräg nach oben

Zieht das Seil unter dem Winkel $\theta$ zur Horizontalen, zerlegt sich die Seilkraft in $T_\perp = T\sin\theta$ und $T_\parallel = T\cos\theta$. Mit der $x$-Achse nach rechts und der $z$-Achse nach oben gilt

$$
-G + N + T\sin\theta = 0 , \qquad T\cos\theta = m_\mathrm{t}\,a .
$$

Daraus folgt $N = G - T\sin\theta$. Der senkrechte Teil der Seilkraft hilft also, den Block zu tragen, und die Normalkraft wird kleiner.

![Ein Block auf glatter Unterlage wird mit einem Seil unter dem Winkel theta gezogen, mit Gewichtskraft, Normalkraft und den Komponenten der Seilkraft.](/images/exphy1/freischneiden-block.svg)

*Eigene Zeichnung: Freischneiden des gezogenen Blocks mit gedachter Hülle.*

#### Beispiel

Ein Block mit $m = 4{,}0\,\mathrm{kg}$ wird mit $T = 20\,\mathrm{N}$ unter $\theta = 30^\circ$ gezogen. Die Zahlen sind frei gewählt. Dann ist

$$
N = 4{,}0\,\mathrm{kg}\cdot 9{,}81\,\mathrm{m/s^2} - 20\,\mathrm{N}\cdot\sin 30^\circ \approx 29\,\mathrm{N} , \qquad a = \frac{20\,\mathrm{N}\cdot\cos 30^\circ}{4{,}0\,\mathrm{kg}} \approx 4{,}3\,\mathrm{m/s^2} .
$$

> [!CAUTION] Stolperstelle
> Wird $T\sin\theta$ größer als $G$, ergäbe die Rechnung $N < 0$. Das hat physikalisch keinen Sinn, denn die Unterlage kann nur drücken, nicht ziehen. In diesem Fall hebt der Block ab, und die Gleichung $-G + N + T\sin\theta = 0$ gilt nicht mehr. In unserem Beispiel passiert das erst für $T > 78\,\mathrm{N}$.

## Zwei Blöcke am Seil

Zwei Blöcke mit den trägen Massen $m_1$ und $m_2$ sind durch ein masseloses Seil verbunden. Am rechten Block zieht die Kraft $F$, die Unterlage ist reibungsfrei. Das Besondere ist, dass man die Hülle an beliebigen Stellen legen darf:

- **Um beide Blöcke:** $F = (m_1 + m_2)\,a$. Also haben beide dieselbe Beschleunigung.
- **Um den linken Block:** $T = m_1\,a$.
- **Um den rechten Block:** $F - T = m_2\,a$.
- **Um das Seil:** An beiden Enden wirken $T_1$ und $T_2$. Die Summe ist die träge Masse des Seils mal $a$, und die ist hier null. Also haben beide Seilkräfte denselben Betrag $T$, die **Seilspannung**.

Addiert man die beiden letzten Gleichungen, kommt die Gleichung für das ganze System zurück. Aus ihnen folgt

$$
a = \frac{F}{m_1 + m_2} , \qquad T = \frac{m_1}{m_1 + m_2}\,F .
$$

#### Beispiel

Mit $m_1 = 2{,}0\,\mathrm{kg}$, $m_2 = 3{,}0\,\mathrm{kg}$ und $F = 10\,\mathrm{N}$ (frei gewählt) ist $a = 2{,}0\,\mathrm{m/s^2}$ und $T = 4{,}0\,\mathrm{N}$. Die Spannung im Seil ist kleiner als die Zugkraft, weil das Seil nur den linken Block beschleunigen muss.

## Weiter

- [2.2.2.2 und 2.2.2.3 Freier Fall und mathematisches Pendel](/exphy1/skript/mechanik-des-massenpunktes/dynamik/freier-fall-und-pendel/)

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.2.2.1 und Skriptum Kapitel 2
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
