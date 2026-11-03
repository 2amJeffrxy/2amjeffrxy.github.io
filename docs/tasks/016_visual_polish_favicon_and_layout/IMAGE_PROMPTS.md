# IMAGE_PROMPTS.md — Промпт для фирменного фавикона SFTG с классической ИИ-звездой (`✦`) и буквами S F T G (Задача 016)

---

## Фавикон: Классическая изогнутая ИИ-звезда (`✦` Gemini-style AI sparkle) и 4 аккуратные буквы `S F T G` (`public/favicon.png`)
**Почему прошлый вариант вышел «смятым»:** генератор нарисовал прямые лучи крестом, как у компаса, и слишком огромные буквы.  
**Как исправлено в промпте ниже:** жестко задана геометрия **классической ИИ-звезды (`✦` — плавные вогнутые дуги по кругу, широкое «тело» в центре и острые изящные вершины)**, а буквы `S`, `F`, `T`, `G` сделаны аккуратнее (на 30% компактнее), чтобы не зажимать звезду.

### Вариант 1 (Белый контур классической ИИ-звезды `✦` + аккуратные буквы `S F T G`):
```text
Square 1:1 minimalist tech logo icon on a solid vibrant sky-blue background (#2997D8). Strictly 2 solid colors only: pure white (#FFFFFF) and sky blue (#2997D8). Zero gradients, zero 3D shading. In the center, a large iconic AI sparkle star symbol (classic Gemini-style four-pointed astroid star ✦ with smooth continuous circular inward-curving concave arcs, a generous full-bodied diamond center, and graceful tapered tips — NOT a straight-lined cross and NOT pinched). The AI star is drawn with a clean uniform bold white outline stroke. In the four outer corners around the star, with generous breathing room, are four medium-sized clean geometric sans-serif uppercase letters in pure white: "S" (top-left), "F" (top-right), "T" (bottom-left), "G" (bottom-right). Perfect symmetry, crisp vector geometry, no random dots.
```

### Вариант 2 (Залитая белая ИИ-звезда `✦` + аккуратные буквы `S F T G` — еще четче читается в мелкой вкладке браузера):
```text
Square 1:1 minimalist tech app icon on a solid vibrant sky-blue background (#2997D8). Strictly 2 solid colors only: pure white (#FFFFFF) and sky blue (#2997D8). Zero gradients, zero 3D shading. In the center, a large solid pure-white iconic AI sparkle star symbol (classic Gemini-style four-pointed astroid star ✦ formed by four smooth quarter-circle inward curves with a wide full center and sharp elegant tips). Symmetrically placed in the four concave spaces around the star with plenty of air are four medium-small bold geometric sans-serif uppercase letters in pure white: "S" (top-left), "F" (top-right), "T" (bottom-left), "G" (bottom-right). Ultra-clean flat vector logo, no borders, no dots.
```
