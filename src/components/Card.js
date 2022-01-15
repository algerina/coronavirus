import React from 'react';

const Card = (params) => {
  const { country, todayCases, countryInfo: { flag } } = params.data; // eslint-disable-line
  return (
    <div className="tc bg--light-blue dib pa1 grow bw2 shadow-5 w-48-ns">
      <div>
        <img src={flag} alt="flag" />
      </div>
      <div>
        <h2>{country}</h2>
        <p>{`Daily cases: ${todayCases}`}</p>

      </div>
    </div>
  );
};
export default Card;
