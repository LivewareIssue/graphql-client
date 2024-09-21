/**
 * @generated SignedSource<<623df24ccde0a0c51551a4d503aa13c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type BookPageQuery$variables = Record<PropertyKey, never>;
export type BookPageQuery$data = {
  readonly book: {
    readonly author: {
      readonly name: string;
    };
    readonly title: string;
  };
};
export type BookPageQuery = {
  response: BookPageQuery$data;
  variables: BookPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "book",
    "plural": false,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BookPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BookPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ff001646d5e1bd14b0d3db1eae6580b5",
    "id": null,
    "metadata": {},
    "name": "BookPageQuery",
    "operationKind": "query",
    "text": "query BookPageQuery {\n  book {\n    title\n    author {\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "003dfee63858fda51817b5335d6890f7";

export default node;
