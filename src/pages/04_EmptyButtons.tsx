export const EmptyButtons = () => {
  return (
    <div>
      <h2>Botones vacíos</h2>
      <div>
        <button type="button">
          <svg
            aria-label="Guardar"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3zm3-10H5V5h10v4z"
            />
          </svg>
        </button>
      </div>
      <aside>
        <p>
          Se produce un error de accesibilidad porque el botón no tiene
          contenido escrito. Suele pasar con botones de acciones con iconos.
        </p>
      </aside>
    </div>
  );
};
