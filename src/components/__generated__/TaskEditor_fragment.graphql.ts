/**
 * @generated SignedSource<<f408aa7bb38e84fad1c036e785ff5460>>
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
export type TaskEditor_fragment$data = ReadonlyArray<{
  readonly id: string;
  readonly owner: {
    readonly id: string;
    readonly userName: string | null | undefined;
  } | null | undefined;
  readonly priority: TaskPriority;
  readonly size: TaskSize;
  readonly status: TaskStatus;
  readonly title: string;
  readonly " $fragmentType": "TaskEditor_fragment";
}>;
export type TaskEditor_fragment$key = ReadonlyArray<{
  readonly " $data"?: TaskEditor_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskEditor_fragment">;
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
  "name": "TaskEditor_fragment",
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

(node as any).hash = "9c4ee9fc2e7d14ec59b0826e592acf16";

export default node;
