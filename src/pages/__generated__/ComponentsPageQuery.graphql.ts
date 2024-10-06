/**
 * @generated SignedSource<<049aa4ab82c30e4937291454e46b5129>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ComponentsPageQuery$variables = Record<PropertyKey, never>;
export type ComponentsPageQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"SideNavFooter_userName">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"SideNav_viewer">;
};
export type ComponentsPageQuery = {
  response: ComponentsPageQuery$data;
  variables: ComponentsPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ComponentsPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SideNav_viewer"
      },
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ComponentsPageQuery",
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
    "cacheID": "e27e4dcb20e78d6e34bc184465cd1689",
    "id": null,
    "metadata": {},
    "name": "ComponentsPageQuery",
    "operationKind": "query",
    "text": "query ComponentsPageQuery {\n  ...SideNav_viewer\n  viewer {\n    ...SideNavFooter_userName\n    id\n  }\n}\n\nfragment SideNavFooter_userName on EntUser {\n  userName\n}\n\nfragment SideNav_viewer on Query {\n  viewer {\n    ...SideNavFooter_userName\n    id\n  }\n}\n"
  }
};

(node as any).hash = "7e59140a653401c9acbdfdf8aa834977";

export default node;
