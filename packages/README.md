# 📦 Packages

This folder is responsible for internally available packages, but you can also publish packages from here.

From there we can use packages as shown in the following example:

[apps/api/package.json]

```json
{
  "name": "@workspace/api",
  "devDependencies": {
    "@workspace/typescript-config": "workspace:*"
  }
}
```

[apps/api/tsconfig.json]

```json
{
  "extends": "@workspace/typescript-config/node18-strictest.json"
}
```

[apps/api/tsconfig.json]: ../apps/api/tsconfig.json
[apps/api/package.json]: ../apps/api/package.json
