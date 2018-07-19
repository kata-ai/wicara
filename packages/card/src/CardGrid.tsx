import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

export interface CardGridProps {
  className?: string;
  centered?: boolean;
  cardsPerRow?: 2 | 3;
}

class CardGrid extends React.Component<CardGridProps> {
  render() {
    const { centered, className, cardsPerRow = 3 } = this.props;
    return (
      <Wrapper className={classnames(className)}>
        {React.Children.map(
          this.props.children,
          Item => (Item ? <CardWrapper cardsPerRow={cardsPerRow}>{Item}</CardWrapper> : Item)
        )}
      </Wrapper>
    );
  }
}

export default CardGrid;

const Wrapper = styled<CardGridProps, 'div'>('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.615384615rem;
  justify-content: ${props => props.centered && 'center'};
`;

const CardWrapper = styled<CardGridProps, 'div'>('div')`
  flex: 0 1 50%;
  padding: 0 0.615384615rem;
  margin-bottom: 1.230769231rem;

  @media (min-width: 1050px) {
    flex: ${props => props.cardsPerRow === 3 && '0 1 33.33%'};
  }
`;