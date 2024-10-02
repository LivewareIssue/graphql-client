import { graphql, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import { AccountPageQuery } from './__generated__/AccountPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import Button from '../components/Button';
import signOut from '../authentication/signOut';

type Props = SimpleEntryPointProps<{
  query: AccountPageQuery,
}>;

const AccountPage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query AccountPageQuery {
      ...SideNav_viewer
    }
  `, query);

  const env = useRelayEnvironment();
  
  return <SideNav fragmentKey={data}>
    <Button onClick={() => signOut(env)}>Sign Out</Button>
  </SideNav>;
}

export default AccountPage;