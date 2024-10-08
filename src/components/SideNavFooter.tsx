import { graphql, useFragment } from "react-relay";
import { UserCircleIcon } from './Icon';
import { SideNavFooter_fragment$key } from './__generated__/SideNavFooter_fragment.graphql';
import SideNavItem from './SideNavItem';

type Props = {
  fragmentKey?: SideNavFooter_fragment$key | null
};

export const SideNavFooter = ({fragmentKey}: Props) => {
  const data = useFragment(
    graphql`
      fragment SideNavFooter_fragment on Query {
        viewer {
          id
          userName
        }
      }
    `,
    fragmentKey,
  );

  return <SideNavItem to='/account' label={data?.viewer?.userName ?? undefined} icon={UserCircleIcon}/>
}