# WPI coursework

My coursework at Worcester Polytechnic Institute, organized by course and assignment. This is an archive of how I learned, not a collection of production-ready applications.

## Courses

| Course | Work in this archive |
| --- | --- |
| [CS1101](courses/cs1101/) | Six Racket homework submissions |
| [CS2102](courses/cs2102/) | Six Java homework folders |
| [CS2303](courses/cs2303/) | C/C++ assignments and labs, including stacks and CSV processing |
| [CS3733](courses/cs3733/) | Service-request UI, number conversion, and tax-strategy exercises |
| [CS4241: Webware](courses/cs4241/) | A progression from HTML/CSS to Node, Express, MongoDB, and React |
| [CS542: Database Management Systems](courses/cs542/) | Index to the standalone What's Cooking team application |
| [Data visualization](courses/data-visualization/) | An interactive basketball court, one dataset visualized in seven tools, and clearly labeled experiment starter material |

## Larger projects

Substantial projects remain in their own repositories so their development history, issues, and demos stay together. See the [project index](projects/README.md).

## Using this archive

There is no single installation command. Each assignment is independent; read the course index and the assignment's own files before running it. Old deployment links and assignment-era test results are historical, not claims that a service still works today.

The Webware database exercises have known authentication and authorization limitations. Use them only as local coursework examples, with disposable data, not as deployed services.

## History and attribution

The September 2026 consolidation imports cleaned snapshots from 14 source repositories. Original authorship comments and applicable assignment material are retained. Original commit histories remain in the source repositories; the consolidation does not invent new development history or imply sole authorship of group work.

[Import provenance](docs/import-manifest.json) records every source revision, copied file, checksum, omission, and migration edit. Local environment files, editor state, backups, compiled executables, and generated documentation were excluded. The NBA dataset and screen recording are left in their original repository; the court implementation does not load that dataset. Existing AI-assistance disclosures are retained.

No blanket license is applied to coursework or third-party material. Existing rights and attribution still apply.

## Verification

Run `node scripts/verify-archive.mjs` to check imported-file hashes, documented edits, local index links, and excluded-file rules. This verifies the migration, not the correctness of every historical assignment. See [verification scope](docs/VERIFICATION.md).
