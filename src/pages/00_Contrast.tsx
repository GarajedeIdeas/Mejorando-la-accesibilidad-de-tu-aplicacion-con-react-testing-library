const baseStyle = {
  padding: "1rem",
  margin: "0.25rem",
  display: "inline-block",
};

export const Contrast = () => {
  return (
    <div>
      <h2>Contraste</h2>
      <ul>
        <li>
          <span
            style={{
              ...baseStyle,
              color: "#767676",
              backgroundColor: "#fff",
            }}
          >
            Gris (#767676) en blanco
          </span>
        </li>
        <li>
          <span
            style={{
              ...baseStyle,
              color: "#CC21CC",
              backgroundColor: "#fff",
            }}
          >
            Púrpura (#CC21CC) en blanco
          </span>
        </li>
        <li>
          <span
            style={{
              ...baseStyle,
              color: "#000063",
              backgroundColor: "#808080",
            }}
          >
            Azul (#000063) en gris (#808080)
          </span>
        </li>
        <li>
          <span
            style={{
              ...baseStyle,
              color: "#E60000",
              backgroundColor: "#FFFF47",
            }}
          >
            Rojo (#E60000) en amarillo (#FFFF47)
          </span>
        </li>
      </ul>
      <p>
        La excepción a esta regla es el texto grande, que puede tener un
        contraste más bajo.
      </p>
      <h3>Texto grande</h3>
      <p style={{ fontSize: "4rem" }}> 18pt o más grande</p>
      <p style={{ fontSize: "1rem", fontWeight: 800 }}>
        14pt o más grande si es negrita.
      </p>
      <p>
        NOTA: En las páginas web, los píxeles son mucho más comunes para el
        tamaño del texto que los puntos. 18 puntos se mapea a 24 píxeles y 14
        puntos a aproximadamente 18,67 píxeles. En CSS, el texto en negrita
        normalmente tiene font-weight:bold, o font-weight:700 o mayor.
      </p>
      <aside lang="en">
        <h3>Aside</h3>
        <a href="https://webaim.org/articles/contrast/">WebAIM Contrast</a>
        <p>
          In WCAG 2, contrast is a measure of the difference in perceived
          "luminance" or brightness between two colors (the phrase "color
          contrast" is never used in WCAG). This brightness difference is
          expressed as a ratio ranging from 1:1 (e.g. white on white) to 21:1
          (e.g., black on a white). To give a frame of reference, on a white
          background:
        </p>
        <ul>
          <li>
            Pure red (#FF0000) has a ratio of 4:1.{" "}
            <span
              style={{
                color: "#ff0000",
                backgroundColor: "#fff",
                fontSize: "2rem",
              }}
            >
              I am red text.
            </span>
          </li>
          <li>
            {" "}
            Pure green (#00FF00) has a very low ratio of 1.4:1.{" "}
            <span style={{ color: "#008900", backgroundColor: "#fff" }}>
              I am green text.
            </span>
          </li>
          <li>
            Pure blue (#000FF) has a contrast ratio of 8.6:1.
            <span style={{ color: "#0000ff", backgroundColor: "#fff" }}>
              I am blue text
            </span>
            .
          </li>
        </ul>
        <p>
          AA: It requires 3:1 contrast for large text and 4.5:1 for normal text
        </p>
        <p>
          AAA: It requires 4.5:1 contrast for large text and 7:1 for normal text
        </p>
      </aside>
    </div>
  );
};
