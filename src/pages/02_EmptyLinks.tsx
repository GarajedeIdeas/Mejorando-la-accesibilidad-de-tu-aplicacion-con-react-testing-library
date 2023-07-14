const likeAButton = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "0.25rem",
  textDecoration: "none",
  color: "#ccc",
  transition: "all 0.3s ease",
  margin: "0.5rem",
  ":hover": {
    backgroundColor: "#eee",
  },
};

export const EmptyLinks = () => {
  const condicionChunga = 0;
  return (
    <div>
      <h2>Enlaces vacíos</h2>
      <div>
        <a
          href="https://www.linkedin.com/in/jorditurull/"
          aria-label="link al perfil de linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3h.003Z"
            />
          </svg>
        </a>
      </div>
      <a href={condicionChunga > 1 ? undefined : "#"} style={likeAButton}>
        Yo si tengo contenido pero a veces pierdo el link
      </a>
      <aside>
        <p>
          Se produce un error de accesibilidad porque el enlace no tiene un href
          válido o no tiene contenido para informar a los usuarios de tecnología
          de asistencia sobre el destino del enlace.
        </p>
      </aside>
    </div>
  );
};
