import { graphql, PreloadedQuery, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
import { AccountPageQuery } from './__generated__/AccountPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import { Suspense } from 'react';
import Flexbox from '../components/layout/Flexbox';
import { layout } from '../layout.stylex';
import * as stylex from '@stylexjs/stylex';
import { SideNavQuery } from '../components/__generated__/SideNavQuery.graphql';
import Button from '../components/Button';
import signOut from '../authentication/signOut';

type Props = SimpleEntryPointProps<{
  accountPageQuery: AccountPageQuery,
  sideNavQuery: SideNavQuery
}>;

const AccountPageContent = ({ query }: {query: PreloadedQuery<AccountPageQuery>}) => {
  const data = usePreloadedQuery(graphql`
    query AccountPageQuery {
      viewer {
        id
      }
    }
  `, query);

  const env = useRelayEnvironment();
  
  return <div><Button onClick={() => signOut(env)}>Sign Out</Button></div>
}

export const AccountPage = ({ queries: {accountPageQuery, sideNavQuery} }: Props) => {
  return <Flexbox style={[layout.fullHeight, layout.row]}>
    <SideNav query={sideNavQuery} style={layout.sideNav} />
    <Flexbox style={[layout.column, layout.content]}>
      <Suspense>
        <AccountPageContent query={accountPageQuery} />
      </Suspense>
    </Flexbox>
  </Flexbox>;
}

const styles = stylex.create({

});

export default AccountPage;