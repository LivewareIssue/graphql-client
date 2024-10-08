/**
 * @generated SignedSource<<a6f48338e298fb4f1bfab1f2a6ad2d48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NodePageQuery$variables = {
  id: string;
};
export type NodePageQuery$data = {
  readonly node: {
    readonly __typename: string;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"User_fragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"SideNavFooter_fragment">;
};
export type NodePageQuery = {
  response: NodePageQuery$data;
  variables: NodePageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NodePageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SideNavFooter_fragment"
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "User_fragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NodePageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EntUser",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e56a491006d3eba338bc0671670e81d0",
    "id": null,
    "metadata": {},
    "name": "NodePageQuery",
    "operationKind": "query",
    "text": "query NodePageQuery(\n  $id: ID!\n) {\n  ...SideNavFooter_fragment\n  node(id: $id) {\n    id\n    __typename\n    ...User_fragment\n  }\n}\n\nfragment SideNavFooter_fragment on Query {\n  viewer {\n    id\n    userName\n  }\n}\n\nfragment User_fragment on EntUser {\n  id\n  __typename\n  userName\n  email\n  roles\n}\n"
  }
};
})();

(node as any).hash = "15a4b3ff7f57fc665d8f5d46328f8d07";

export default node;
