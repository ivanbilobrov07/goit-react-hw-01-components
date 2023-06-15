import userData from 'data/user.json';
import statisticData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

const { username, tag, location, avatar, stats: userStats } = userData;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={userStats}
      />
      <Statistics title="" stats={statisticData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
};
