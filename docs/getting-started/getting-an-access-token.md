---
pageClass: doc-class
---

Access to our services is controlled via tokens (Oauth 2.0). To get a token you must call our token end-point and supply your client key and client secret. Tokens remain valid for a limited time.

## Apply for an application key

To use our API you must first register an application and apply for a key. You will be given two values: a key and a secret. These can be exchanged for a short-lived access token. A valid access token must be sent with every request.

```bash
curl "https://api.lufthansa.com/v1/oauth/token" -X POST -d "client_id=28fu8yg7tx35qkqnc6jg96fy" -d "client_secret=6jc9Zj9PE2" -d "grant_type=client_credentials"

```
