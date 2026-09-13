# A3: Persistent to-do application

Historical CS4241 exercise using Express, MongoDB, and static HTML views. The code implements account creation and task creation, editing, and deletion.

## Local setup

Inspect `package.json` and install its dependencies. Set `MONGODB_URI`, `DB`, `DB_USERS`, and `DB_TASKS` in a local environment file. Use a disposable database containing no personal data. `USER` and `ADMIN_ACCOUNT_ID` occur in the old access-control logic; that logic is not a reliable security boundary.

The migration removes the old environment file, moves the connection URI to `process.env.MONGODB_URI`, and removes password logging. It does not modernize the application. Known limitations include plaintext password storage, a process-wide user ID, and missing per-record authorization. Do not deploy this example or use real credentials.

Original assignment writeup and history: [a3-SeanArackal](https://github.com/ScribleSean/a3-SeanArackal). Old test-account details and performance claims are not republished as current evidence. End-to-end database operation was not tested in this migration.
