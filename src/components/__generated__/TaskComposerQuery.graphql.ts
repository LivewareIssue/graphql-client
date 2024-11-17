/**
 * @generated SignedSource<<0425e75d6434624d182041bb876e7148>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TaskPriority = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "%future added value";
export type TaskSize = "L" | "M" | "S" | "XL" | "%future added value";
export type TaskStatus = "BLOCKED" | "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
export type TaskComposerQuery$variables = {
  id: string;
};
export type TaskComposerQuery$data = {
  readonly task: {
    readonly content: string;
    readonly createdAt: any;
    readonly id: string;
    readonly owner: {
      readonly userName: string | null | undefined;
    } | null | undefined;
    readonly priority: TaskPriority;
    readonly size: TaskSize;
    readonly status: TaskStatus;
    readonly title: string;
    readonly updatedAt: any;
  };
};
export type TaskComposerQuery = {
  response: TaskComposerQuery$data;
  variables: TaskComposerQuery$variables;
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
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "priority",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "size",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskComposerQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "EntTask",
          "kind": "LinkedField",
          "name": "task",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "EntUser",
              "kind": "LinkedField",
              "name": "owner",
              "plural": false,
              "selections": [
                (v5/*: any*/)
              ],
              "storageKey": null
            },
            (v6/*: any*/),
            (v7/*: any*/),
            (v8/*: any*/),
            (v9/*: any*/),
            (v10/*: any*/)
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "task"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskComposerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "EntTask",
        "kind": "LinkedField",
        "name": "task",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "EntUser",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "32bf11d95848547ead2488dbefcd6f67",
    "id": null,
    "metadata": {},
    "name": "TaskComposerQuery",
    "operationKind": "query",
    "text": "query TaskComposerQuery(\n  $id: ID!\n) {\n  task(id: $id) {\n    content\n    createdAt\n    id\n    owner {\n      userName\n      id\n    }\n    priority\n    size\n    status\n    title\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "9752c2d71f3e4d2c6436ed0abf694e34";

export default node;
