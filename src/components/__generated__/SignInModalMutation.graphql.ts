/**
 * @generated SignedSource<<2b178b9cf570845afd028ff4864f55d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SignInModalMutation$variables = {
  email: string;
  password: string;
};
export type SignInModalMutation$data = {
  readonly signIn: {
    readonly query: {
      readonly viewer: {
        readonly " $fragmentSpreads": FragmentRefs<"ProfilePicture_viewer">;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "token",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ProfilePicture_viewer"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInModalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                    "name": "userName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9f1bdf2871f176adcb3307f6ea8d6c02",
    "id": null,
    "metadata": {},
    "name": "SignInModalMutation",
    "operationKind": "mutation",
    "text": "mutation SignInModalMutation(\n  $email: String!\n  $password: String!\n) {\n  signIn(email: $email, password: $password) {\n    query {\n      viewer {\n        ...ProfilePicture_viewer\n        id\n      }\n    }\n    token\n  }\n}\n\nfragment ProfilePicture_viewer on User {\n  userName\n}\n"
  }
};
})();

(node as any).hash = "8495bcf20b8d80589a04c66ab85867a4";

export default node;
