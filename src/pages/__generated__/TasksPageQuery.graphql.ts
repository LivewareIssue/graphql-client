/**
 * @generated SignedSource<<5c8d4d19199f1316ed186694d806a560>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TasksPageQuery$variables = Record<PropertyKey, never>;
export type TasksPageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SideNav_viewer">;
};
export type TasksPageQuery = {
  response: TasksPageQuery$data;
  variables: TasksPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TasksPageQuery",
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
    "name": "TasksPageQuery",
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
    "cacheID": "73d85e2bfb40f4a96d7c04b7cb3ddcea",
    "id": null,
    "metadata": {},
    "name": "TasksPageQuery",
    "operationKind": "query",
    "text": "query TasksPageQuery {\n  ...SideNav_viewer\n}\n\nfragment SideNavFooter_userName on User {\n  userName\n}\n\nfragment SideNav_viewer on Query {\n  viewer {\n    id\n    ...SideNavFooter_userName\n  }\n}\n"
  }
};

(node as any).hash = "29d97010e27069271e8aea569ac95504";

export default node;