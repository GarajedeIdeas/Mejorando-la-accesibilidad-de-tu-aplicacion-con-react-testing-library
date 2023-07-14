export const AltText = () => {
  return (
    <div>
      <h2>Texto Alternativo</h2>
      <img
        src="https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <h3>Descripción</h3>
      <p>
        Camisa de manga larga con cuello de solapa y cierre de botones en la
        parte delantera. Detalle de bolsillo en el pecho. Bajo redondeado.
        Cierre frontal con botones.
      </p>

      <aside>
        <h2>Images and Alternative Text</h2>
        <p>
          There were over 43 million images in the sample, or 43.4 images per
          home page on average. The number of images increased a surprising 9.1%
          over the last year—home pages are becoming increasingly graphical.{" "}
          <strong>
            22.1% of all home page images (9.6 per page on average) had missing{" "}
            <a href="/techniques/alttext/">alternative text</a>
          </strong>{" "}
          (not counting <code>alt=""</code>). Over half of the images missing
          alternative text were linked images—resulting in links that were not
          descriptive.
        </p>

        <p>
          10.9% of images with alternative text had questionable or repetitive
          alternative text—such as alt="image", "graphic", "blank", a file name,
          etc., or alternative text identical to adjacent text or alternative
          text.
        </p>

        <p>
          <strong>
            These data show that one may expect over one third of the images on
            popular home pages to have missing, questionable, or repetitive
            alternative text.
          </strong>
        </p>
        <a href="https://webaim.org/projects/million/#alttext">
          WebAIM: Million - Analysis of Alt Text
        </a>
      </aside>
    </div>
  );
};
