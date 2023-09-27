# Steps to Reproduce Issue:
```
npm install
```

```
BS_USERNAME=<YOUR_BROWSERSTACK_USERNAME> BS_ACCESS_KEY=<YOUR_BROWSERSTACK_ACCESS_KEY> PERCY_TOKEN=<YOUR_TOKEN> npm run percy
```

# Errors:
```
[percy] Encountered an error uploading snapshot: Snapshot 1
[percy] Error: Cannot finalize snapshots in app builds. Did you mean to call comparison finalize?
[percy] Error: Finalizing build 29410441 failed: cannot finalize before all snapshots have comparisons created. This is likely an SDK error, please make sure that comparisons are created before calling finalize.
```

https://docs.percy.io/docs/integrate-functional-testing-with-visual-testing
