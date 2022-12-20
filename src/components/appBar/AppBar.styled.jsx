import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const AppTitle = styled.h1``;

export const AppBarLink = styled(Link)`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
