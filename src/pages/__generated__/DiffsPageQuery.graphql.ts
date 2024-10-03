/**
 * @generated SignedSource<<384bd55aeeb425df01cf754f4fba2fc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DiffsPageQuery$variables = Record<PropertyKey, never>;
export type DiffsPageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SideNav_viewer">;
};
export type DiffsPageQuery = {
  response: DiffsPageQuery$data;
  variables: DiffsPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DiffsPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SideNav_viewer"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DiffsPageQuery",
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
            "name": "userName",
            "storageKey": null
          },
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
    ]
  },
  "params": {
    "cacheID": "2d3c1ae7f7beed799dfad940184c02c0",
    "id": null,
    "metadata": {},
    "name": "DiffsPageQuery",
    "operationKind": "query",
    "text": "query DiffsPageQuery {\n  ...SideNav_viewer\n}\n\nfragment SideNavFooter_userName on User {\n  userName\n}\n\nfragment SideNav_viewer on Query {\n  viewer {\n    ...SideNavFooter_userName\n    id\n  }\n}\n"
  }
};

(node as any).hash = "71895f100ccbbc44f37e5acc07524d68";

export default node;
