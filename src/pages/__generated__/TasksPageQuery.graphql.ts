/**
 * @generated SignedSource<<2a19ef02a0677ea3fa94187e2800e780>>
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
  readonly tasks: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TaskEditor_fragment">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"SideNavFooter_fragment">;
};
export type TasksPageQuery = {
  response: TasksPageQuery$data;
  variables: TasksPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TasksPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SideNavFooter_fragment"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "EntTask",
        "kind": "LinkedField",
        "name": "tasks",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TaskEditor_fragment"
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
    "name": "TasksPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EntUser",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userName",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "EntTask",
        "kind": "LinkedField",
        "name": "tasks",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fdf4bfd5a3417f3d57818073a0096096",
    "id": null,
    "metadata": {},
    "name": "TasksPageQuery",
    "operationKind": "query",
    "text": "query TasksPageQuery {\n  ...SideNavFooter_fragment\n  tasks {\n    ...TaskEditor_fragment\n    id\n  }\n}\n\nfragment SideNavFooter_fragment on Query {\n  viewer {\n    id\n    userName\n  }\n}\n\nfragment TaskEditor_fragment on EntTask {\n  title\n  ...TaskStatusSelect_fragment\n}\n\nfragment TaskStatusSelect_fragment on EntTask {\n  status\n}\n"
  }
};
})();

(node as any).hash = "5498d2a02d7296887cde98f5848bf93b";

export default node;
