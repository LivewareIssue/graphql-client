/**
 * @generated SignedSource<<67c5d6e478ef26c1634dbe1ceafefb0e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SignInModal_fragment$data = {
  readonly viewer: {
    readonly id: string;
  } | null | undefined;
  readonly " $fragmentType": "SignInModal_fragment";
};
export type SignInModal_fragment$key = {
  readonly " $data"?: SignInModal_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SignInModal_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SignInModal_fragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "701c85108c3d800c7e6fd3b6c29d1e7a";

export default node;
