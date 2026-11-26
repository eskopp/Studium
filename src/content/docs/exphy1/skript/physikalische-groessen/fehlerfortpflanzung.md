---
title: 1.3.3.3 Fehlerfortpflanzung
description: Wie sich Fehler gemessener Größen auf ein berechnetes Ergebnis auswirken, mit partiellen Ableitungen, den Regeln für Summen und Produkte und dem Beispiel der Erdbeschleunigung.
weight: 4
---

*In einem Satz: Hängt ein Ergebnis von mehreren gemessenen Größen ab, addiert man die Beiträge ihrer Fehler quadratisch, gewichtet mit den partiellen Ableitungen.*

## Partielle Ableitungen

Aus dem Fallversuch will man die Erdbeschleunigung bestimmen:

$$
g = \frac{2\,\Delta x}{\Delta t^2} .
$$

Dafür muss man neben der Fallzeit auch die Fallstrecke messen, und beide sind fehlerbehaftet. Wie wirken sich die Schwankungen auf $g$ aus? Dazu braucht man die Ableitung einer Funktion von zwei Veränderlichen.

> [!NOTE] Definition
> Die **partielle Ableitung** einer Funktion $f(x, y)$ nach $x$ bildet man, indem man $y$ als Konstante behandelt:
>
> $$ \frac{\partial f}{\partial x}\bigg|_{x = x_0} = \lim_{\Delta x \to 0}\frac{f(x_0 + \Delta x,\ y) - f(x_0,\ y)}{\Delta x} . $$
>
> Entsprechend leitet man nach $y$ ab. Bei einer Funktion einer Variablen ist die Ableitung die Steigung der Tangente, und man kann $f$ in der Nähe von $x_0$ durch eine Gerade nähern. Das nutzt man auch hier.

## Das Fehlerfortpflanzungsgesetz

> [!NOTE] Fehlerfortpflanzungsgesetz
> Hängt eine Größe $y = f(x_k)$ nur von einer Messgröße $x_k$ ab, ist der Fehler
>
> $$ \sigma_y = |f'(x_k)|\,\sigma_{x_k} . $$
>
> Setzt sich $y$ aus $n$ voneinander **unabhängigen** Messgrößen $x_k$ zusammen, addiert man die Beiträge quadratisch:
>
> $$ \sigma_y^2 = \sum_{k=1}^{n}\left(\frac{\partial y}{\partial x_k}\bigg|_{\bar{x}_k}\right)^2\sigma_{x_k}^2 . $$

> [!TIP] In einfachen Worten
> Jede Messgröße trägt zum Fehler des Ergebnisses so viel bei, wie das Ergebnis auf sie reagiert, und das sagt die Ableitung. Die Beiträge zählen quadratisch zusammen, weil zufällige Fehler sich teilweise aufheben. Der Gesamtfehler ist deshalb kleiner als die einfache Summe.

### Zwei Regeln

Aus dem Gesetz folgen zwei Regeln, die man sich merken sollte:

**Summe oder Differenz** $y = \sum_k \pm x_k$: Die Quadrate der **absoluten** Fehler addieren sich,

$$
\sigma_y^2 = \sum_k \sigma_{x_k}^2 .
$$

**Produkt oder Quotient** $y = \prod_k x_k^{\pm 1}$: Die Quadrate der **relativen** Fehler addieren sich,

$$
\left(\frac{\sigma_y}{y}\right)^2 = \sum_k\left(\frac{\sigma_{x_k}}{x_k}\right)^2 .
$$

Gehen Potenzen ein, zählt der Exponent mit: Bei $y \propto x^p$ ist $\sigma_y/y = |p|\,\sigma_x/x$.

## Beispiel: die Erdbeschleunigung

Die Fallstrecke ergibt sich aus der Differenz von zwei Punkten, $\Delta x = x_1 - x_2$, die mit dem Maßband bestimmt wurden. Beide haben den Fehler $\sigma_{x_1} = \sigma_{x_2} = 0{,}3\,\mathrm{mm}$. Nach der Regel für Differenzen ist

$$
\sigma_{\Delta x} = \sqrt{\sigma_{x_1}^2 + \sigma_{x_2}^2} = \sqrt{2}\cdot 0{,}3\,\mathrm{mm} \approx 0{,}4\,\mathrm{mm} .
$$

Also ist $\Delta x = (2 \pm 0{,}0004)\,\mathrm{m}$. Für $g = 2\Delta x/\Delta t^2$ gilt mit den partiellen Ableitungen $\partial g/\partial\Delta t = -4\Delta x/\Delta t^3$ und $\partial g/\partial\Delta x = 2/\Delta t^2$:

$$
\sigma_g^2 = \left(\frac{-4\,\Delta x}{\Delta t^3}\right)^2\sigma_{\Delta t}^2 + \left(\frac{2}{\Delta t^2}\right)^2\sigma_{\Delta x}^2 = g^2\left[\left(\frac{2\,\sigma_{\Delta t}}{\Delta t}\right)^2 + \left(\frac{\sigma_{\Delta x}}{\Delta x}\right)^2\right] .
$$

Der **absolute Fehler** ist $\sigma_g = g\,\sqrt{(2\sigma_{\Delta t}/\Delta t)^2 + (\sigma_{\Delta x}/\Delta x)^2}$, der **relative Fehler** ist $\sigma_g/g$. Die Zeit geht quadratisch in $g$ ein, deshalb zählt ihr relativer Fehler doppelt.

### Zahlenbeispiel

Mit den sieben Fallzeiten aus dem vorigen Artikel, $\overline{\Delta t} = 634{,}7\,\mathrm{ms}$ und $\sigma_{\overline{\Delta t}} = 3{,}4\,\mathrm{ms}$, ist

$$
g = \frac{2\cdot 2\,\mathrm{m}}{(0{,}6347\,\mathrm{s})^2} \approx 9{,}93\,\mathrm{m/s^2} , \qquad \frac{\sigma_g}{g} = \sqrt{\left(\frac{2\cdot 3{,}4}{634{,}7}\right)^2 + \left(\frac{0{,}4}{2000}\right)^2} \approx 1{,}1\,\% .
$$

Das ergibt $g = (9{,}93 \pm 0{,}11)\,\mathrm{m/s^2}$. Der Fehler kommt fast allein von der Zeitmessung, der Beitrag der Längenmessung ist verschwindend klein. Mit dem getrimmten Mittelwert wäre $\overline{\Delta t} = 631{,}8\,\mathrm{ms}$, und man erhielte $g \approx 10{,}0\,\mathrm{m/s^2}$ mit dem kleineren Fehler von etwa $0{,}02\,\mathrm{m/s^2}$.

> [!CAUTION] Stolperstelle
> Die quadratische Addition gilt nur für **voneinander unabhängige** Fehler, und sie beschreibt zufällige Streuungen. In manchen Fällen, zum Beispiel in einem Praktikum, rechnet man stattdessen mit dem **Größtfehler** und addiert die Beträge der Einzelbeiträge. Dann ist der Fehler größer. Welches Verfahren man verwenden soll, steht in der jeweiligen Anleitung. Die Regel in dieser Vorlesung ist die quadratische Addition.

## Weiter

- [2 Mechanik des Massenpunktes](/exphy1/skript/mechanik-des-massenpunktes/kinematik/skalare-vektoren-bahnkurve/): Das Ergebnis $g = 2\Delta x/\Delta t^2$ folgt aus der gleichförmig beschleunigten Bewegung.

## Quellen

- Vorlesung Experimentalphysik 1 (WS 2026), Folien Abschnitt 1.3.3.3 und Skriptum Kapitel 1
- Eigene Ergänzungen: Die Kästen "In einfachen Worten" und der Hinweis zum Größtfehler stammen nicht aus der Vorlesung. Die Zahlenwerte habe ich nachgerechnet.
