import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BtnLink = styled(Link)`
  display: inline-block;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
