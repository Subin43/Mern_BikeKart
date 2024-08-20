import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardComponent = ({src,Title,text1,text2,button,onClick}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={src} />
    <Card.Body>
      <Card.Title>{Title}</Card.Title>
      <Card.Text>
        {text1}
      </Card.Text>
      <Card.Text>
        {text2}
      </Card.Text>
      <Button variant="primary" onClick={onClick}>{button}</Button>
    </Card.Body>
  </Card>
  )
}

export default CardComponent