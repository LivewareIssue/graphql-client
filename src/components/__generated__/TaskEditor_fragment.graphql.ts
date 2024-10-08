/**
 * @generated SignedSource<<e0a1e7e4220512757c122c357bbb57c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TaskEditor_fragment$data = {
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"TaskStatusSelect_fragment">;
  readonly " $fragmentType": "TaskEditor_fragment";
};
export type TaskEditor_fragment$key = {
  readonly " $data"?: TaskEditor_fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TaskEditor_fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TaskEditor_fragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TaskStatusSelect_fragment"
    }
  ],
  "type": "EntTask",
  "abstractKey": null
};

(node as any).hash = "9dc430a8d6a54475e8ca9c05bb350c9a";

export default node;
