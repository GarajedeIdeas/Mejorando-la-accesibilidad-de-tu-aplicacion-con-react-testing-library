const inputStyle = {
  display: "block",
  margin: "0.25rem",
  padding: "0.5rem",
  fontSize: "1rem",
  maxWidth: "25rem",
  width: "100%",
};

export const Labels = () => {
  return (
    <div>
      <h2>Ausencia de Labels</h2>
      <form>
        <div>
          <label htmlFor="name">
            Nombre
            <input
              style={inputStyle}
              type="text"
              id="name"
              autoComplete="name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="surname">Apellidos</label>
          <input
            style={inputStyle}
            type="text"
            id="surname"
            autoComplete="surname"
          />
        </div>
        <div>
          <input
            aria-label="Domicilio"
            style={inputStyle}
            placeholder="Domicilio"
            autoComplete="address-line1"
            type="text"
            id="address-one"
            name="address-one"
          ></input>
        </div>
        <div>
          <input
            style={inputStyle}
            type="tel"
            aria-label="Teléfono"
            placeholder="Teléfono"
            autoComplete="phone"
          />
        </div>
        <div>
          <input
            style={inputStyle}
            type="search"
            aria-labelledby="search"
            placeholder="Busca la población mas cercana"
            autoComplete="search"
          />
          <button type="button" id="search">
            Buscar
          </button>
        </div>

        <input style={inputStyle} type="submit" value="Enviar" />
      </form>

      <aside lang="en">
        <article>
          <h2>Form Labeling</h2>
          <p>
            The number of form inputs on home pages increased 13.8% in one year,
            from 4.4 million to 5.0 million.
          </p>
          <p>
            <strong>
              35.8% of form inputs identified were not properly labeled
            </strong>
            (either via <code>&lt;label&gt;</code>, <code>aria-label</code>,
            <code>aria-labelledby</code>, or <code>title</code>).
          </p>
          <p>
            This is a notable improvement from 39% in 2022, 49% in 2021, 56% in
            2020, and 59% in 2019.
          </p>
          <a href="https://webaim.org/projects/million/#labels">
            WebAIM Milion
          </a>
        </article>
        <article>
          <h2>WCAG</h2>
          <p>
            The HTML and XHTML specifications allow both implicit and explicit
            labels. However, some assistive technologies do not correctly handle
            implicit labels (for example,
            <code>
              &lt;label&gt;First name &lt;input type="text"
              name="firstname"&gt;&lt;/label&gt;
            </code>
            ).
          </p>
          <p>
            <a href="https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/H44.html">
              H44: Using label elements to associate text labels with form
              controls
            </a>
          </p>
          <a href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html">
            WCAG labels
          </a>
        </article>
      </aside>
    </div>
  );
};
