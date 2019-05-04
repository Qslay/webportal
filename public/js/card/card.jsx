import React from 'react';
import {
  Card, CardBody,
  CardTitle
} from 'reactstrap';

const Menucard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.cardTitle}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Menucard;