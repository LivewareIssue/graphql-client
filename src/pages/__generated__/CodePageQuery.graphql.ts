/**
 * @generated SignedSource<<ab4f7f5f5d6404327838676af7a4984b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CodePageQuery$variables = Record<PropertyKey, never>;
export type CodePageQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SideNav_viewer">;
};
export type CodePageQuery = {
  response: CodePageQuery$data;
  variables: CodePageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CodePageQuery",
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
    "name": "CodePageQuery",
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
    "cacheID": "78302cedb31a017ee3e8e343641a7120",
    "id": null,
    "metadata": {},
    "name": "CodePageQuery",
    "operationKind": "query",
    "text": "query CodePageQuery {\n  ...SideNav_viewer\n}\n\nfragment SideNavFooter_userName on EntUser {\n  userName\n}\n\nfragment SideNav_viewer on Query {\n  viewer {\n    ...SideNavFooter_userName\n    id\n  }\n}\n"
  }
};

(node as any).hash = "e28a804fc632b00988c35734cd86a1d2";

export default node;
