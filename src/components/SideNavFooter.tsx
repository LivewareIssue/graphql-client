import { graphql, useFragment } from "react-relay";
import { UserCircleIcon } from './Icon';
import { SideNavFooter_userName$key } from './__generated__/SideNavFooter_userName.graphql';
import SideNavItem from './SideNavItem';

type Props = {
  fragmentKey?: SideNavFooter_userName$key | null
};

export const SideNavFooter = ({fragmentKey}: Props) => {
  const data = useFragment(
    graphql`
      fragment SideNavFooter_userName on EntUser {
        userName
      }
    `,
    fragmentKey,
  );

  return <SideNavItem to='/account' label={data?.userName ?? 'Account'} icon={UserCircleIcon}/>
}