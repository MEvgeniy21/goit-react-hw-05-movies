import styled from '@emotion/styled';

export const Img = styled.img`
  width: 240px;
  height: 357px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
`;

export const List = styled.ul`
  margin-left: ${p => p.theme.space[5]}px;
`;
