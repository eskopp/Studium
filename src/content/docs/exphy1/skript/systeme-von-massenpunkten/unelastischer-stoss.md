---
title: Maximal unelastischer Stoß
description: Zwei Körper bleiben nach dem Stoß zusammen, wie groß die gemeinsame Geschwindigkeit ist und wie viel Energie verloren geht.
weight: 6
---

*In einem Satz: Beim maximal unelastischen Stoß bleiben die Körper zusammen, der Impuls bleibt erhalten, und ein fester Teil der Bewegungsenergie geht verloren.*

## Gemeinsame Geschwindigkeit und Energieverlust

> [!NOTE] Definition
> Bei einem **maximal unelastischen Stoß** haften die beiden Körper aneinander und bewegen sich danach mit derselben Geschwindigkeit $V$. Für einen eindimensionalen Stoß gilt die Impulserhaltung
>
> $$ m_1 v_1 + m_2 v_2 = (m_1 + m_2)\,V , \qquad V = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} . $$
>
> Die gemeinsame Geschwindigkeit ist die Geschwindigkeit des [Schwerpunkts](/exphy1/skript/systeme-von-massenpunkten/massenmittelpunkt/). Der Verlust an kinetischer Energie ist
>
> $$ \Delta W = \tfrac{1}{2} m_1 v_1^2 + \tfrac{1}{2} m_2 v_2^2 - \tfrac{1}{2}(m_1 + m_2) V^2 = \tfrac{1}{2}\,\mu\,(v_1 - v_2)^2 , \qquad \mu = \frac{m_1 m_2}{m_1 + m_2} . $$

> [!TIP] In einfachen Worten
> Nach dem Stoß fährt das Paar so weiter, wie sich der Schwerpunkt vorher bewegt hat. Nur die Bewegung der beiden Körper gegeneinander ist verloren. Sie wird zu Wärme, zu Verformung oder zu innerer Anregung. Je schneller die Körper aufeinander zukommen, desto mehr geht verloren, und zwar mit dem Quadrat der Relativgeschwindigkeit $v_1 - v_2$.

### Beispiel

Zwei gleich schwere Wagen mit $m_1 = m_2 = 0{,}50\,\mathrm{kg}$ stoßen zusammen. Wagen 1 fährt mit $v_1 = 2{,}0\,\mathrm{m/s}$, Wagen 2 steht. Die Zahlen sind frei gewählt und keine Messwerte. Dann ist

$$
V = \frac{0{,}50\,\mathrm{kg}\cdot 2{,}0\,\mathrm{m/s}}{1{,}0\,\mathrm{kg}} = 1{,}0\,\mathrm{m/s} .
$$

Die reduzierte Masse ist $\mu = 0{,}25\,\mathrm{kg}$, und der Verlust ist

$$
\Delta W = \tfrac{1}{2}\cdot 0{,}25\,\mathrm{kg}\cdot (2{,}0\,\mathrm{m/s})^2 = 0{,}50\,\mathrm{J} .
$$

Vorher hatte Wagen 1 die Energie $\tfrac{1}{2}\cdot 0{,}50\,\mathrm{kg}\cdot(2{,}0\,\mathrm{m/s})^2 = 1{,}0\,\mathrm{J}$. Es geht also genau die Hälfte verloren. Das gilt immer, wenn zwei gleich schwere Körper zusammenstoßen und einer ruht: Das Paar fährt mit der halben Geschwindigkeit weiter und hat die halbe Energie.

Stoßen die zwei Wagen dagegen frontal mit $v_1 = 2{,}0\,\mathrm{m/s}$ und $v_2 = -2{,}0\,\mathrm{m/s}$ zusammen, ist $V = 0$. Beide kommen zum Stillstand, und die gesamte Anfangsenergie von $2{,}0\,\mathrm{J}$ wird umgewandelt.

> [!CAUTION] Stolperstelle
> Der Impuls bleibt erhalten, die kinetische Energie nicht. Wer beim Zusammenstoß mit $\tfrac{1}{2}m_1v_1^2 + \tfrac{1}{2}m_2v_2^2 = \tfrac{1}{2}(m_1+m_2)V^2$ rechnet, bekommt ein falsches $V$. Man berechnet $V$ immer aus dem Impuls und danach den Verlust aus der Differenz der Energien.

In der Vorlesung wurde das mit zwei gleich schweren Wagen auf einer Luftkissenbahn gezeigt. Ein Stück Knetmasse sorgt dafür, dass sie beim Stoß zusammenhaften.

### Herleitung

Setzt man $V$ in die Energiedifferenz ein und ordnet nach den Geschwindigkeiten, bleiben nur Terme in der Relativgeschwindigkeit übrig:

$$
\Delta W = \frac{m_1 m_2}{2\,(m_1 + m_2)}\,(v_1 - v_2)^2 = \tfrac{1}{2}\,\mu\,(v_1 - v_2)^2 .
$$

Das ist genau die kinetische Energie der Relativbewegung mit der reduzierten Masse. Im Schwerpunktsystem ruht das Paar nach dem Stoß, deshalb wird dort die ganze kinetische Energie umgewandelt.

## Weiter

- [Elastischer Stoß mit ruhendem Körper](/exphy1/skript/systeme-von-massenpunkten/elastischer-stoss/)
- [Stöße](/exphy1/skript/systeme-von-massenpunkten/stoesse/): die Einteilung in elastisch, unelastisch und superelastisch

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Teil zu unelastischen Stößen (Vorlesung vom 25.11.2026), eigene Mitschrift. Die Formeln habe ich nachgerechnet.
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Rechenbeispiele mit eigenen Zahlen stammen nicht aus der Vorlesung.
