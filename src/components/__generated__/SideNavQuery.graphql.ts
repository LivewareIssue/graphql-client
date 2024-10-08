/**
 * @generated SignedSource<<f83e2afc8198960da68ba18b49bc986e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SideNavQuery$variables = Record<PropertyKey, never>;
export type SideNavQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SideNavFooter_fragment" | "SignInModal_fragment">;
};
export type SideNavQuery = {
  response: SideNavQuery$data;
  variables: SideNavQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SideNavQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SignInModal_fragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SideNavFooter_fragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SideNavQuery",
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
    ]
  },
  "params": {
    "cacheID": "1924fda98796a868299bb71af7c4634e",
    "id": null,
    "metadata": {},
    "name": "SideNavQuery",
    "operationKind": "query",
    "text": "query SideNavQuery {\n  ...SignInModal_fragment\n  ...SideNavFooter_fragment\n}\n\nfragment SideNavFooter_fragment on Query {\n  viewer {\n    id\n    userName\n  }\n}\n\nfragment SignInModal_fragment on Query {\n  viewer {\n    id\n  }\n}\n"
  }
};

(node as any).hash = "748e487e6a68dcfede2ed10dfc7ddaed";

export default node;
