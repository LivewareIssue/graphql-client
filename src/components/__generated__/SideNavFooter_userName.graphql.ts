/**
 * @generated SignedSource<<5450845c4c6af88933fdf1d92a3fb229>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SideNavFooter_userName$data = {
  readonly userName: string | null | undefined;
  readonly " $fragmentType": "SideNavFooter_userName";
};
export type SideNavFooter_userName$key = {
  readonly " $data"?: SideNavFooter_userName$data;
  readonly " $fragmentSpreads": FragmentRefs<"SideNavFooter_userName">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SideNavFooter_userName",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userName",
      "storageKey": null
    }
  ],
  "type": "EntUser",
  "abstractKey": null
};

(node as any).hash = "01c7366edc6e0a18c2d38870b780855c";

export default node;
