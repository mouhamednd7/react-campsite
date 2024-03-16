import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
  const campsites = selectAllCampsites();
  return (
    <Row>
      {CAMPSITES.map((campsite) => (
        <Col key={campsite.id} md="5" className="m-4">
          <CampsiteCard campsite={campsite} />
        </Col>
      ))}
    </Row>
  );
};

export default CampsitesList;
