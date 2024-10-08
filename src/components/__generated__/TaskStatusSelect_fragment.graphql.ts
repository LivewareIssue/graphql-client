/**
 * @generated SignedSource<<40ff46b04693bf6ed48a979fcffd25f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type TaskStatus = "BLOCKED" | "CLOSED" | "IN_PROGRESS" | "OPEN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TaskStatusSelect_fragment$data = {
  readonly status: TaskStatus;
  readonly " $fragmentType": "TaskStatusSelect_fragment";
};
export type TaskStatusSelect_fragment$key = {
  readonly " $data"?: TaskStatusSelect_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskStatusSelect_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskStatusSelect_fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "EntTask",
  "abstractKey": null
};

(node as any).hash = "37356f26db085b113e3dcb84d2c38476";

export default node;
