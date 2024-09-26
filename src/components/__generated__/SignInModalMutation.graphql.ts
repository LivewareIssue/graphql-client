/**
 * @generated SignedSource<<94534e7444ad73863456a7f60dc51f9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SignInModalMutation$variables = {
  email: string;
  password: string;
};
export type SignInModalMutation$data = {
  readonly signIn: {
    readonly query: {
      readonly viewer: {
        readonly __typename: "User";
        readonly id: string;
      } | null | undefined;
    };
    readonly token: string;
  };
};
export type SignInModalMutation = {
  response: SignInModalMutation$data;
  variables: SignInModalMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "SignInResult",
    "kind": "LinkedField",
    "name": "signIn",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "viewer",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInModalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInModalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b97bddd2ce124ca1caec1183da0b4b15",
    "id": null,
    "metadata": {},
    "name": "SignInModalMutation",
    "operationKind": "mutation",
    "text": "mutation SignInModalMutation(\n  $email: String!\n  $password: String!\n) {\n  signIn(email: $email, password: $password) {\n    query {\n      viewer {\n        id\n        __typename\n      }\n    }\n    token\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa630b7fdd75519c650405a6aaa73eb2";

export default node;
