---
title: Reduzierte Masse
description: Wie man die Bewegung zweier Körper aufeinander zu einem Einkörperproblem macht.
weight: 2
---

*In einem Satz: Zwei Körper, die nur aufeinander wirken, verhalten sich in ihrer Relativbewegung wie ein einziger Körper mit einer kleineren Masse.*

## Reduzierte Masse

> [!NOTE] Definition
> Zwei Teilchen mit den Massen $m_1$ und $m_2$ üben die Kräfte $\vec F_{12}$ (von 2 auf 1) und $\vec F_{21} = -\vec F_{12}$ aufeinander aus. Mit dem Relativvektor $\vec r = \vec r_1 - \vec r_2$ gilt
>
> $$ \mu\,\ddot{\vec r} = \vec F_{12}, \qquad \mu = \frac{m_1 m_2}{m_1 + m_2} \qquad \Leftrightarrow \qquad \frac{1}{\mu} = \frac{1}{m_1} + \frac{1}{m_2} $$
>
> $\mu$ heißt **reduzierte Masse**. Die kinetische Energie im Schwerpunktsystem ist
>
> $$ W_k^{(S)} = \tfrac{1}{2}\,\mu\,v_{12}^2, \qquad \vec v_{12} = \vec v_1 - \vec v_2 $$

> [!TIP] In einfachen Worten
> Die Relativbewegung zweier Körper beschreibt man wie die Bewegung eines einzigen Körpers der Masse $\mu$, der von der Kraft $F_{12}$ angetrieben wird. $\mu$ ist immer kleiner als beide Einzelmassen. Ist ein Körper viel schwerer als der andere, ist $\mu$ fast so groß wie die kleinere Masse. Dann bleibt der schwere Körper praktisch in Ruhe.

### Beispiel: Erde und Mond

Für Erde ($m_E$) und Mond ($m_M$) mit dem Abstand $r$ gilt auf den Folien

$$
\mu = \frac{m_E m_M}{m_E + m_M} \approx 0{,}99\,m_M .
$$

Der Schwerpunkt des Systems liegt in Richtung der schwereren Erde:

$$
r_{SE} = \frac{m_M}{m_E + m_M}\,r \approx 0{,}01\,r, \qquad r_{SM} = \frac{m_E}{m_E + m_M}\,r \approx 0{,}99\,r .
$$

Beide Entfernungen zusammen ergeben den Abstand $r$. Die Erde ist also viel schwerer, und der gemeinsame Schwerpunkt liegt sehr nah an ihr.

> [!CAUTION] Stolperstelle
> Die reduzierte Masse ist keine Masse, die man auf der Waage findet. Sie ist eine Rechengröße für die Relativbewegung. Die Schwerpunktbewegung bleibt davon unberührt, dafür gilt $M = m_1 + m_2$.

### Herleitung

Nach dem zweiten und dritten Newtonschen Gesetz gilt $m_1\ddot{\vec r}_1 = \vec F_{12}$ und $m_2\ddot{\vec r}_2 = -\vec F_{12}$. Die Differenz der Beschleunigungen ist

$$
\ddot{\vec r}_1 - \ddot{\vec r}_2 = \left(\frac{1}{m_1} + \frac{1}{m_2}\right)\vec F_{12} = \frac{1}{\mu}\,\vec F_{12} .
$$

Das ist $\mu\,\ddot{\vec r} = \vec F_{12}$.

Für die kinetische Energie benutzt man, dass im Schwerpunktsystem $m_1\vec v_{1S} + m_2\vec v_{2S} = 0$ gilt (siehe [Massenmittelpunkt](/experimentalphysik/1-mechanik-und-thermodynamik/systeme-von-massenpunkten/massenmittelpunkt/)). Daraus folgt

$$
\vec v_{1S} = \frac{m_2}{m_1 + m_2}\,\vec v_{12}, \qquad \vec v_{2S} = -\frac{m_1}{m_1 + m_2}\,\vec v_{12} .
$$

Eingesetzt in die kinetische Energie:

$$
W_k^{(S)} = \tfrac{1}{2}\,\frac{m_1 m_2^2 + m_2 m_1^2}{(m_1 + m_2)^2}\,v_{12}^2 = \tfrac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,v_{12}^2 = \tfrac{1}{2}\,\mu\,v_{12}^2 .
$$

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.2 (Erde-Mond-Beispiel mit den Näherungswerten $0{,}99$ und $0{,}01$)
