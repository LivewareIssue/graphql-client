/**
 * @generated SignedSource<<e9a4d64db2fa17d5106335b6a6ac2b0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SideNavFooter_fragment$data = {
  readonly viewer: {
    readonly id: string;
    readonly userName: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "SideNavFooter_fragment";
};
export type SideNavFooter_fragment$key = {
  readonly " $data"?: SideNavFooter_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SideNavFooter_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SideNavFooter_fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EntUser",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "userName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "3be7b6da5439ba07d0c6390474b145e5";

export default node;
