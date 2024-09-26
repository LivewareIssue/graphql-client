/**
 * @generated SignedSource<<23e8ace8535587ed46e348b960984a4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProfilePicture_viewer$data = {
  readonly userName: string | null | undefined;
  readonly " $fragmentType": "ProfilePicture_viewer";
};
export type ProfilePicture_viewer$key = {
  readonly " $data"?: ProfilePicture_viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProfilePicture_viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfilePicture_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userName",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "f4c6d3396182ac64a2df8e28db111e30";

export default node;
