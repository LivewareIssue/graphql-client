/**
 * @generated SignedSource<<aea563674e27cdc2e1539cd54b0e0852>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type User_fragment$data = {
  readonly __typename: "User";
  readonly email: string | null | undefined;
  readonly id: string;
  readonly userName: string | null | undefined;
  readonly " $fragmentType": "User_fragment";
};
export type User_fragment$key = {
  readonly " $data"?: User_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"User_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "User_fragment",
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
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "55f0d21ece8cac536df6141be169c4bc";

export default node;
