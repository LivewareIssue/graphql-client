/**
 * @generated SignedSource<<b2f5149969c248f237a23d85647c382e>>
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
        readonly userName: string | null | undefined;
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
              },
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
    "cacheID": "f58b9f1cbb76a07ef374d991dfa19608",
    "id": null,
    "metadata": {},
    "name": "SignInModalMutation",
    "operationKind": "mutation",
    "text": "mutation SignInModalMutation(\n  $email: String!\n  $password: String!\n) {\n  signIn(email: $email, password: $password) {\n    query {\n      viewer {\n        id\n        __typename\n        userName\n      }\n    }\n    token\n  }\n}\n"
  }
};
})();

(node as any).hash = "75b10afcdaab9f6b290ec4f010b90153";

export default node;
