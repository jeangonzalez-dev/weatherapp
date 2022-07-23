import React from 'react';
import { Row, Col } from 'react-bootstrap';

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: 'Bogota',
    },
    {
      id: 2,
      title: 'London',
    },
    {
      id: 3,
      title: 'Sydney',
    },
    {
      id: 4,
      title: 'Tokyo',
    },
    {
      id: 5,
      title: 'Toronto',
    },
  ];

  return (
    <div>
      <Row className="d-flex justify-content-center">
        <Col md={10}>
          <div className="d-flex justify-content-center">
            {cities.map((city) => (
              <button
                key={city.id}
                className="mx-auto text-white text-2xl font-medium transition ease-out hover:scale-125"
                onClick={() => setQuery({ q: city.title })}
              >
                {city.title}
              </button>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TopButtons;
