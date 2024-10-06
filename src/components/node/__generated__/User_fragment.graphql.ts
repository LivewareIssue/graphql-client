/**
 * @generated SignedSource<<90250f340211233c3d209c72030b6d62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type User_fragment$data = {
  readonly __typename: "EntUser";
  readonly email: string | null | undefined;
  readonly id: string;
  readonly roles: ReadonlyArray<string>;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "roles",
      "storageKey": null
    }
  ],
  "type": "EntUser",
  "abstractKey": null
};

(node as any).hash = "f06b269868672bded6c8bd649306fd98";

export default node;
