import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const CampsiteCard = ({ campsite }) => {

  return (
    const { image, name } = campsite;
    <Card>
        <CardImg
            width='100%'
            src={image}
            alt={name}
        />
        <CardImgOverlay>
            <CardTitle>
                {name}
            </CardTitle>
        </CardImgOverlay>
    </Card>
  )
}

export default CampsiteCard