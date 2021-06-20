import React from "react";

const Info = ({ informacion }) => {
  if (Object.keys(informacion).length === 0) return null;

  return (
    <div className="card border-light ">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información de Artista
      </div>
      <div className="card-body">
        <img src={informacion.strArtistThumb} alt="Logo Artista" />
        <p className="card-text">{informacion.strArtist}</p>
        <p className="card-text">{informacion.strGenre}</p>
        <p className="card-text">{informacion.strBiographyES}</p>
        <a
          href={`https://${informacion.strFacebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href={`https://${informacion.strTwitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href={`${informacion.strLastFMChart}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-lastfm"></i>
        </a>
      </div>
    </div>
  );
};

export default Info;
