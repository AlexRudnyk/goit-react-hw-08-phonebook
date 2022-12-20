import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
`;

export const AppBarLink = styled(Link)`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
