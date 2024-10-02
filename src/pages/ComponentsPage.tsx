import { graphql, usePreloadedQuery } from 'react-relay';
import { ComponentsPageQuery } from './__generated__/ComponentsPageQuery.graphql';
import { SimpleEntryPointProps } from '@loop-payments/react-router-relay';
import SideNav from '../components/SideNav';
import Input from '../components/Input';
import SideNavItem from '../components/SideNavItem';
import { HomeIcon } from '../components/Icon';
import { SideNavFooter } from '../components/SideNavFooter';
import Button from '../components/Button';
import SideNavHeader from '../components/SideNavHeader';

type Props = SimpleEntryPointProps<{
  query: ComponentsPageQuery,
}>;

const ComponentsPage = ({ queries: {query} }: Props) => {
  const data = usePreloadedQuery(graphql`
    query ComponentsPageQuery {
      ...SideNav_viewer
      viewer {
        ...SideNavFooter_userName
      }
    }
  `, query);
  
  return <SideNav fragmentKey={data}>
    <Input />
    <Button>Hello</Button>
    <SideNavHeader title={'Title'}/>
    <SideNavItem icon={HomeIcon} to={'/'} label={'Home'} />
    <SideNavFooter fragmentKey={data.viewer}/>
  </SideNav>;
}

export default ComponentsPage;