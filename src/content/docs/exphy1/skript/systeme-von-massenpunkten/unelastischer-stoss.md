---
title: 4.4.3 Unelastische Stöße
description: Der maximal unelastische Stoß, bei dem die Körper zusammenbleiben, der Verlust an Energie und die Vergleichsfälle zum elastischen Stoß.
weight: 6
---

*In einem Satz: Beim maximal unelastischen Stoß bleiben die Körper zusammen, der Impuls bleibt erhalten, und die Energie der Relativbewegung geht in innere Energie über.*

## Gemeinsame Geschwindigkeit und Energieverlust

Bei einem **unelastischen Stoß** ist $\Delta W > 0$. Der **maximal unelastische Stoß** liegt vor, wenn beide Körper nach dem Stoß zusammenbleiben.

> [!NOTE] Definition
> Die gemeinsame Geschwindigkeit folgt aus der Impulserhaltung und ist die Schwerpunktgeschwindigkeit:
>
> $$ m_1 v_1 + m_2 v_2 = (m_1 + m_2)\,v' \quad\Longleftrightarrow\quad v' = \frac{m_1 v_1 + m_2 v_2}{M} \equiv v_S , \qquad M = m_1 + m_2 . $$
>
> Der Energieverlust ist
>
> $$ \Delta W = \tfrac{1}{2} m_1 v_1^2 + \tfrac{1}{2} m_2 v_2^2 - \tfrac{1}{2}(m_1 + m_2)\,v_S^2 = \tfrac{1}{2}\,\mu\,(v_1 - v_2)^2 , \qquad \mu = \frac{m_1 m_2}{m_1 + m_2} . $$
>
> **Satz:** Beim maximal unelastischen Stoß wird die kinetische Energie der **Relativbewegung** in innere Energie umgewandelt. Der Anteil $\tfrac{1}{2} M v_S^2$ bleibt als kinetische Energie erhalten.

> [!TIP] In einfachen Worten
> Nach dem Stoß fährt das Paar so weiter, wie sich der Schwerpunkt vorher bewegt hat. Nur die Bewegung der beiden Körper gegeneinander ist verloren. Sie wird zu Wärme, zu Verformung oder zu innerer Anregung. Je schneller die Körper aufeinander zukommen, desto mehr geht verloren, und zwar mit dem Quadrat der Relativgeschwindigkeit $v_1 - v_2$.

### Beispiel

Zwei gleich schwere Wagen mit $m_1 = m_2 = 0{,}50\,\mathrm{kg}$ stoßen zusammen. Wagen 1 fährt mit $v_1 = 2{,}0\,\mathrm{m/s}$, Wagen 2 steht. Die Zahlen sind frei gewählt. Dann ist $v_S = 1{,}0\,\mathrm{m/s}$, $\mu = 0{,}25\,\mathrm{kg}$ und

$$
\Delta W = \tfrac{1}{2}\cdot 0{,}25\,\mathrm{kg}\cdot (2{,}0\,\mathrm{m/s})^2 = 0{,}50\,\mathrm{J} .
$$

Vorher hatte Wagen 1 die Energie $1{,}0\,\mathrm{J}$. Es geht also genau die Hälfte verloren. Das gilt immer, wenn zwei gleich schwere Körper zusammenstoßen und einer ruht: Das Paar fährt mit der halben Geschwindigkeit weiter und hat die halbe Energie.

> [!CAUTION] Stolperstelle
> Der Impuls bleibt erhalten, die kinetische Energie nicht. Wer beim Zusammenstoß mit $\tfrac{1}{2}m_1v_1^2 + \tfrac{1}{2}m_2v_2^2 = \tfrac{1}{2}(m_1+m_2)V^2$ rechnet, bekommt ein falsches $V$. Man berechnet $V$ immer aus dem Impuls und danach den Verlust aus der Differenz der Energien.

### Herleitung

Setzt man $v_S$ in die Energiedifferenz ein und ordnet nach den Geschwindigkeiten, bleiben nur Terme in der Relativgeschwindigkeit übrig:

$$
\Delta W = \frac{m_1 m_2}{2\,(m_1 + m_2)}\,(v_1 - v_2)^2 = \tfrac{1}{2}\,\mu\,(v_1 - v_2)^2 .
$$

Im Schwerpunktsystem ruht das Paar nach dem Stoß, deshalb wird dort die ganze kinetische Energie umgewandelt.

## Zwei Spezialfälle im Vergleich zum elastischen Stoß

**Fall 1: ruhender, schwerer Partner** ($v_2 = 0$, $m_1 \ll m_2$, $\mu \approx m_1$). Unelastisch gilt $m_1 v_1 = M v$, also $v = (m_1/M)\,v_1$, und der Verlust ist $\Delta W = W_\mathrm{kin,1}\,(1 - m_1/M) \approx W_\mathrm{kin,1}$: Fast die gesamte Energie geht verloren. Beim **elastischen** Stoß unter denselben Voraussetzungen ist $p_2' \approx 2p_1$ und $p_1' \approx -p_1$. Der schwere Körper bekommt also das Doppelte des Anfangsimpulses, und der leichte wird reflektiert.

**Fall 2: Frontalstoß gleich schwerer Körper.** Unelastisch gilt bei entgegengesetzt gleichen Impulsen $0 = p_1 + p_2$ und danach $p_1' = p_2' = 0$. Es ist $\Delta W = W_\mathrm{kin,1} + W_\mathrm{kin,2}$, die gesamte kinetische Energie wird in innere Energie umgewandelt. Beim elastischen Stoß dagegen ruht Körper 1 nach dem Stoß, wenn Körper 2 vorher ruhte, und bei $p_1 = -p_2$ kehren beide ihre Impulse um.

In der Vorlesung wurde der unelastische Stoß mit zwei gleich schweren Wagen auf einer Luftkissenbahn gezeigt. Ein Stück Knetmasse sorgt dafür, dass sie beim Stoß zusammenhaften.

## Weiter

- [4.4.2 Elastische Stöße](/exphy1/skript/systeme-von-massenpunkten/elastischer-stoss/)
- [4.4 Stöße](/exphy1/skript/systeme-von-massenpunkten/stoesse/): die Einteilung in elastisch, unelastisch und superelastisch

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 4.4.3 und Skriptum Kapitel 4, Abschnitt 4.4.3, dazu meine Mitschrift der Vorlesung vom 25.11.2026
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
