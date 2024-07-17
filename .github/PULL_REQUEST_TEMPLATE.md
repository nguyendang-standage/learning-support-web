<!--
Reference the issue(s):

Closes #123
-->

<!-- 🚨 explain whether this impacts any other repository or requires other PRs to be merged and deployed (link to the PR) -->

### Pre-PR checklist

<!-- Things you should have checked / done before issuing the PR and requesting reviews. -->

The following have been checked (and are up to date for this branch):

- [x] The PR fulfils ALL the issue(s)' goals
- [x] Documentation (`README.md`, `/docs`...)
- [x] GitHub actions & secrets
- [x] `.env` examples (if any)
- [x] File package.json and yarn.lock has change and committed
- [x] Link review PR (label style, enhancement) like in comment: > **Note**: preview at https://pr-xxxx.digitrad-forwarding-webapp.pages.dev ⏳🤞

Locally built version has no errors / warnings:

- [x] During build
- [x] When serving (incl. in browser's console)

## Summary of changes

<!--
Ex:
- change A
- change B
-->

## How to test

<!--
Explain preparatory work needed to test (updating `.env` files, etc.), if any.
-->

Run automated tests (there should be no errors):

```bash
yarn test
```

<!-- Explain any manual tests to focus on / things to try / edge cases to watch out for. -->