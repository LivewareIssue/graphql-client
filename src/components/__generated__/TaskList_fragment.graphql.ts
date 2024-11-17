/**
 * @generated SignedSource<<3e025302e8c113012151d4baf14f4489>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type TaskPriority = "CRITICAL" | "HIGH" | "LOW" | "MEDIUM" | "%future added value";
export type TaskSize = "L" | "M" | "S" | "XL" | "%future added value";
export type TaskStatus = "BLOCKED" | "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TaskList_fragment$data = ReadonlyArray<{
  readonly id: string;
  readonly owner: {
    readonly id: string;
    readonly userName: string | null | undefined;
  } | null | undefined;
  readonly priority: TaskPriority;
  readonly size: TaskSize;
  readonly status: TaskStatus;
  readonly title: string;
  readonly " $fragmentType": "TaskList_fragment";
}>;
export type TaskList_fragment$key = ReadonlyArray<{
  readonly " $data"?: TaskList_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskList_fragment">;
}>;

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "TaskList_fragment",
  "selections": [
    (v0/*: any*/),
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "size",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priority",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EntUser",
      "kind": "LinkedField",
      "name": "owner",
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
    }
  ],
  "type": "EntTask",
  "abstractKey": null
};
})();

(node as any).hash = "5bf2e280ecf2b785d221b239d170ec66";

export default node;
