/**
 * @generated SignedSource<<708799565ea44e2c1ee9630b5d7c56eb>>
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "f27dda1356de39e14858e7fee906a1c4";

export default node;
