/**
 * @generated SignedSource<<6aeb091e1ea022990e153be2970c0083>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SideNav_viewer$data = {
  readonly viewer: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"SideNavFooter_userName">;
  } | null | undefined;
  readonly " $fragmentType": "SideNav_viewer";
};
export type SideNav_viewer$key = {
  readonly " $data"?: SideNav_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"SideNav_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SideNav_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "SideNavFooter_userName"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "c0818d4062cd75d57954792d33adf922";

export default node;
