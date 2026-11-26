---
title: 2.2.2.4 Raketengrundgleichung
description: Bewegung mit veränderlicher Masse, warum das zweite Axiom alle Teile des Systems braucht und wie man die Endgeschwindigkeit einer Rakete ausrechnet.
weight: 5
---

*In einem Satz: Eine Rakete beschleunigt, indem sie Masse nach hinten ausstößt, und ihre Endgeschwindigkeit hängt vom Logarithmus des Massenverhältnisses ab.*

## Ein Wagen, der Wasser verliert

Zuerst ein einfacheres Beispiel, der Sprinklerwagen von Sommerfeld: Ein Wagen der Masse $m$ berieselt den Asphalt mit Wasser, das ihn mit einer Relativgeschwindigkeit verlässt. Von außen wirkt keine Kraft. Setzt man $\dot{\mathbf{p}} = \mathbf{F}$ ohne Nachdenken an, folgt

$$
\dot{p} = \frac{\mathrm{d}}{\mathrm{d}t}(m v) = \dot{m}\,v + m\,\dot{v} = 0 .
$$

Das scheint der Erfahrung zu widersprechen, denn der Wagen beschleunigt ja. Der Fehler liegt in der Deutung. Die Gleichung beschreibt **alle Teile eines abgeschlossenen Systems** zusammen, also Wagen, restliches Wasser und ausgeströmtes Wasser. Da dabei keine Masse verloren geht, ist $\dot{m} = 0$ und $m\dot{v} = 0$. Das heißt nur, dass das Massenzentrum des Gesamtsystems nicht beschleunigt wird.

> [!TIP] In einfachen Worten
> Der Wagen und das Wasser, das er ausstößt, drücken sich gegenseitig auseinander. Der Schwerpunkt des Ganzen bleibt in Ruhe, aber die Teile fliegen in entgegengesetzte Richtungen. Der Wagen allein ist kein abgeschlossenes System, deshalb darf man für ihn nicht $\dot{p} = 0$ schreiben.

## Die Bewegungsgleichung der Rakete

Man nennt $R$ den Wagen (später die Rakete) mit dem noch unverbrauchten Treibstoff und $T$ den ausgestoßenen Treibstoff. Für die zwei wechselwirkenden Systeme gilt das dritte Axiom, $\mathbf{F}_{RT} + \mathbf{F}_{TR} = 0$:

$$
\dot{m}_R v_R + m_R \dot{v}_R + \dot{m}_T v_T + m_T \dot{v}_T = 0 .
$$

Die Rakete verliert genauso viel Masse, wie der Treibstoff gewinnt, $\dot{m}_R = -\dot{m}_T$. Die Relativgeschwindigkeit des Treibstoffs zur Rakete ist $u = v_T - v_R$. Damit wird die Gleichung zu

$$
0 = \dot{m}_T\,u + m_R\dot{v}_R + m_T\dot{v}_T .
$$

Umgestellt nach der Beschleunigung der Rakete:

$$
\dot{v}_R = u\,\frac{\mathrm{d}}{\mathrm{d}t}\ln m_R - \frac{m_T}{m_R}\,\dot{v}_T .
$$

Dabei wurde $\frac{\mathrm{d}}{\mathrm{d}t}\ln m_R = \dot{m}_R/m_R$ benutzt.

> [!NOTE] Raketengrundgleichung
> Ist die Masse des ausgestoßenen Treibstoffs zu jedem Zeitpunkt sehr klein gegen die der Rakete, entfällt der letzte Term. Im Weltraum ohne Gravitation gilt
>
> $$ \dot{v}_R = u\,\frac{\mathrm{d}}{\mathrm{d}t}\ln m_R , $$
>
> und beim Start von der Erde mit der konstanten Erdbeschleunigung
>
> $$ \dot{v}_R = -g + u\,\frac{\mathrm{d}}{\mathrm{d}t}\ln m_R . $$
>
> Der zweite Summand heißt **Rückstoß**. Die $z$-Achse zeigt nach oben, deshalb ist $u < 0$, wenn der Treibstoff nach unten ausgestoßen wird.

## Die Endgeschwindigkeit

Der gesamte Treibstoff $m_T$ wird in der Brenndauer $\tau$ gleichmäßig ausgestoßen. Mit der Masse $m_{R0}$ der Rakete ohne Treibstoff ist

$$
m_R(t) = m_{R0} + m_T - \frac{m_T}{\tau}\,t .
$$

Integriert man die Gleichung über die Brenndauer, ergibt sich

> [!NOTE] Ergebnis
> $$ \Delta v_R = -g\,\tau - u\,\ln\frac{m_{R0} + m_T}{m_{R0}} . $$

Mit $u < 0$ ist der zweite Term positiv: Er ist der Gewinn durch den Rückstoß. Der erste Term ist der Verlust durch die Schwerkraft während der Brenndauer.

### Beispiel

Eine Rakete mit $m_{R0} = 4\,\mathrm{t}$ trägt $m_T = 9\,\mathrm{t}$ Treibstoff, den sie in $\tau = 60\,\mathrm{s}$ mit $u = -2{,}1\cdot 10^3\,\mathrm{m/s}$ nach unten ausstößt. Sie startet in Ruhe. Dann ist

$$
\Delta v_R = -9{,}81\,\mathrm{m/s^2}\cdot 60\,\mathrm{s} + 2{,}1\cdot 10^3\,\mathrm{m/s}\cdot\ln\frac{13}{4} \approx -589\,\mathrm{m/s} + 2475\,\mathrm{m/s} \approx 1{,}9\cdot 10^3\,\mathrm{m/s} .
$$

Das Beispiel stammt aus der Vorlesung, die Zwischenwerte habe ich nachgerechnet.

> [!CAUTION] Stolperstelle
> Die Endgeschwindigkeit wächst nur mit dem **Logarithmus** des Massenverhältnisses. Wer doppelt so viel Treibstoff mitnimmt, wird nicht doppelt so schnell.

### Herleitung der Integration

Die Beschleunigung ist $\dot{v}_R = -g - \dfrac{u/\tau}{m_{R0}/m_T + 1 - t/\tau}$. Mit der Substitution $x = m_{R0}/m_T + 1 - t/\tau$ wird aus dem Integral über die Brenndauer ein Integral $\int \mathrm{d}x/x$ von $m_{R0}/m_T$ bis $m_{R0}/m_T + 1$. Es ergibt $\ln\dfrac{m_{R0}/m_T + 1}{m_{R0}/m_T} = \ln\dfrac{m_{R0} + m_T}{m_{R0}}$. Zusammen mit dem Beitrag $-g\tau$ von der Schwerkraft erhält man das Ergebnis oben.

## Weiter

- [2.3 Energieerhaltungssatz](/exphy1/skript/mechanik-des-massenpunktes/energieerhaltungssatz/arbeit-und-leistung/): Der zweite große Erhaltungssatz

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 2.2.2.4 und Skriptum Kapitel 2. Dort werden auch die frühen Herleitungen durch Moore und durch Coquilhat sowie die Gleichung nach Ziolkowski genannt.
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und die Erklärung zur Stolperstelle stammen nicht aus der Vorlesung. Die Formeln habe ich nachgerechnet.
