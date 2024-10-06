/**
 * @generated SignedSource<<41f5fdc581045f8ad3d88500453e0fb6>>
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
      "concreteType": "EntUser",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
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

(node as any).hash = "c15675a809d5e0c54c6644e3a1f1f618";

export default node;
