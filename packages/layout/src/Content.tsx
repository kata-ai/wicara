import React from 'react';
import styled from 'styled-components';

const Content: React.SFC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Content;

const Wrapper = styled('div')`
  display: table-cell;
`;
