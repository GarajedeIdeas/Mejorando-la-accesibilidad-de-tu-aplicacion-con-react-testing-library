export const Lang = () => {
  return (
    <div>
      <h2>Idioma no especificado</h2>
      <p>
        El lector de pantallas leerá con la entonación y gramática del idioma
        definido. Si no se define, el lector de pantallas no podrá leer el
        contenido correctamente.
      </p>
      <aside lang="en">
        <a href="https://webaim.org/projects/million/#languages">
          WebAIM Languages
        </a>
        <div>
          <h2>Languages</h2>

          <p>
            77% of pages specified a document language. Despite being a WCAG
            failure, pages without a language defined had fewer errors on
            average than most pages with a language defined.
          </p>

          <p>
            This table shows the specified page language for the most common
            languages, number of pages in the sample, average number of errors,
            and percentage difference in errors from the overall average.
          </p>

          <table style={{ textAlign: "center" }}>
            <tbody>
              <tr>
                <th>Specified Language</th>
                <th># of home pages</th>
                <th>Avg. # of errors</th>
                <th>% difference</th>
              </tr>
              <tr>
                <td>English</td>
                <td>561,734</td>
                <td>43.7</td>
                <td style={{ color: "#222", backgroundColor: "#B6FFC9" }}>
                  −12.5%
                </td>
              </tr>
              <tr>
                <td>No language specified</td>
                <td>178,475</td>
                <td>47.3</td>
                <td style={{ color: "#222", backgroundColor: "#B6FFC9" }}>
                  −5.3%
                </td>
              </tr>
              <tr>
                <td>Dutch</td>
                <td>9,312</td>
                <td>47.6</td>
                <td style={{ color: "#222", backgroundColor: "#B6FFC9" }}>
                  −4.7%
                </td>
              </tr>
              <tr>
                <td>German</td>
                <td>29,878</td>
                <td>51.4</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +2.8%
                </td>
              </tr>
              <tr>
                <td>Japanese</td>
                <td>20,307</td>
                <td>54.6</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +9.3%
                </td>
              </tr>
              <tr>
                <td>French</td>
                <td>22,780</td>
                <td>57.2</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +14.4%
                </td>
              </tr>
              <tr>
                <td>Indonesian</td>
                <td>5,092</td>
                <td>58.7</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +17.4%
                </td>
              </tr>
              <tr>
                <td>Portuguese</td>
                <td>11,479</td>
                <td>59.4</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +18.7%
                </td>
              </tr>
              <tr style={{ backgroundColor: "#222" }}>
                <td>Spanish</td>
                <td>28,512</td>
                <td>59.8</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +19.6%
                </td>
              </tr>
              <tr>
                <td>Polish</td>
                <td>8,389</td>
                <td>62.9</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +25.8%
                </td>
              </tr>
              <tr>
                <td>Italian</td>
                <td>11,931</td>
                <td>66.0</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +31.9%
                </td>
              </tr>
              <tr>
                <td>Farsi</td>
                <td>9,632</td>
                <td>75.4</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +50.9%
                </td>
              </tr>
              <tr>
                <td>Arabic</td>
                <td>5,990</td>
                <td>75.8</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +51.5%
                </td>
              </tr>
              <tr>
                <td>Turkish</td>
                <td>7,331</td>
                <td>76.8</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +53.6%
                </td>
              </tr>
              <tr>
                <td>Russian</td>
                <td>29,307</td>
                <td>79.6</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +59.2%
                </td>
              </tr>
              <tr>
                <td>Chinese</td>
                <td>9,063</td>
                <td>88.8</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +77.6%
                </td>
              </tr>
              <tr>
                <td>Vietnamese</td>
                <td>5,648</td>
                <td>89.9</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +79.8%
                </td>
              </tr>
              <tr>
                <td>Korean</td>
                <td>7,147</td>
                <td>96.5</td>
                <td style={{ color: "#222", backgroundColor: "#FFB5BC" }}>
                  +92.9%
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            As with TLDs, there are significant differences in accessibility of
            pages in various languages. Latin-based languages generally fared
            much better than other languages.
          </p>
        </div>
      </aside>
    </div>
  );
};
