import userData from './../assets/userData.json';
import friends from './../assets/friends.json';
import transactions from './../assets/transactions.json';
import 'modern-normalize';
import '../index.css';
import Profiler from './Profile/Profile';
import FriendList from './Friendlist/frienlist';
import TransactionHistory from './Transaction/transition';

const App = () => {
  return (
    <>
      <Profiler
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
