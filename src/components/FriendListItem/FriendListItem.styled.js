import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 15px;
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline, theme }) =>
    isOnline ? theme.colors.green : theme.colors.red};
`;
