import React from "react";
import NoData from "components/NoData/NoData";
import Card from "components/Card/Card";

const NotFound: React.FC = () => (
  <Card>
    <NoData message={`404\nOops... Looks like that page doesn't exist!`} />
  </Card>
);

export default NotFound;
