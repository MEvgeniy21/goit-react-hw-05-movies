import styled from '@emotion/styled';

export const Ul = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[5]}px;
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;
