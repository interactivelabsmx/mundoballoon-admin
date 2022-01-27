import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import Login from './login';

const Index = Login;

export const getServerSideProps = withAuthServer(null, { allowAll: true });

export default Index;
