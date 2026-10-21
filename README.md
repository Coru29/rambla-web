# Rambla (sitio web)

Sitio de presentación de [Rambla](https://github.com/Coru29/rambla), un gestor de ventanas con scroll horizontal para macOS.

Es HTML, CSS y JavaScript sin dependencias ni paso de compilación, publicado con GitHub Pages: https://coru29.github.io/rambla-web/

## Probarlo localmente

```sh
python3 -m http.server 8765
# abrí http://localhost:8765
```

## Estructura

- `index.html`: la página, en español. El inglés está en `assets/app.js` y se elige con el botón ES/EN (o según el idioma del navegador).
- `assets/styles.css`: estilos, con modo claro y oscuro automático.
- `assets/app.js`: cambio de idioma, la demo interactiva de la tira, animaciones de entrada y botones de copiar.
- `tools/og.swift`: genera `assets/og.png`, la imagen que se ve al compartir el enlace.

## Créditos y licencias

- Código del sitio: MIT (ver `LICENSE`).
- Tipografía [Geist](https://github.com/vercel/geist-font): SIL Open Font License 1.1 (`assets/fonts/OFL.txt`).
- Íconos [Phosphor](https://phosphoricons.com): MIT.
- Foto de la rambla: [Sala de Medios, Intendencia de Montevideo](https://commons.wikimedia.org/wiki/File:Vistas_a%C3%A9reas_de_Montevideo,_febrero_de_2024_02.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). La versión del sitio está redimensionada y comprimida.
