import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardMedia,
  CardText as BaseCardText,
} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import MenuItemLink from 'component/MenuItemLink';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const InfoCard = styled(Card)`
  margin: .5em;
`;

const CardText = styled(BaseCardText)`
  position: relative;
  padding: 1px !important;
`;

const SeriesCard = ({ id, name, img, arcs, books }) => (
  <InfoCard>
    {(img &&
      <CardMedia overlay={<CardTitle title={name} />}>
        <img src={img} alt={name} />
      </CardMedia>) ||
      <CardTitle title={name} />}
    <CardText>
      <InfoCard>
        <CardTitle
          title="Setting"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <MenuItemLink to={`/series/${id}`}>General</MenuItemLink>
          <MenuItemLink to={`/series/${id}/political`}>
            Political
          </MenuItemLink>
          <MenuItemLink to={`/series/${id}/geo`}>
            Geographical
          </MenuItemLink>
          <MenuItemLink to={`/series/${id}/magic`}>
            Magic
          </MenuItemLink>
        </CardText>
      </InfoCard>
      {(books &&
        <InfoCard>
          <CardTitle
            title="Books"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            {books.map(({ id, name }) => (
              <MenuItemLink key={id} to={`/books/${id}`}>{name}</MenuItemLink>
            ))}
          </CardText>
        </InfoCard>) ||
        null}
      {(arcs &&
        <div>
          <Subheader>
            Story Arcs
          </Subheader>
          {arcs.map(props => <SeriesCard key={props.id} {...props} />)}
        </div>) ||
        null}
    </CardText>
  </InfoCard>
);

class Series extends Component {
  render() {
    const {
      series = [],
    } = this.props;
    return (
      <Row>
        {series.map(({ id, name, img, arcs, books }) => {
          const seriesProps = { id, name, img, arcs, books };
          return (
            <Col xs={12} md={4} key={id}>
              <SeriesCard {...seriesProps} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Series;
