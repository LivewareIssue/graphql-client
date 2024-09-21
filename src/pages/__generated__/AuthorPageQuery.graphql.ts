/**
 * @generated SignedSource<<dc4649dc04b9b51a89e404b17c02d049>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AuthorPageQuery$variables = Record<PropertyKey, never>;
export type AuthorPageQuery$data = {
  readonly author: {
    readonly name: string;
  };
};
export type AuthorPageQuery = {
  response: AuthorPageQuery$data;
  variables: AuthorPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "author",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuthorPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthorPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "06f898341bfb5bea12a72d1c6c218be8",
    "id": null,
    "metadata": {},
    "name": "AuthorPageQuery",
    "operationKind": "query",
    "text": "query AuthorPageQuery {\n  author {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "b363a63d3203188d2389e641c4f8be83";

export default node;
