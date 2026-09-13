# Verification scope

The consolidation checks source-to-destination mapping and SHA-256 hashes for all imported files. The manifest explicitly records edits to two database connection definitions, removal of password logging, and omission of individual user-testing notes.

Checks also cover local links in the new index pages, forbidden environment/editor/build files, nested Git repositories, oversized files, recognizable credential patterns, and JavaScript syntax in the two modified server files.

This is not a course-wide runtime test. Racket/Java/C/C++ assignment correctness, browser behavior, old dependency security, historical grades, deployment links, and database integration have not been reverified. Run each assignment in an isolated local environment before relying on it.

The original public repositories preserve historical material, including configuration files omitted here. Archiving does not remove their history or revoke old credentials. No credential validity test was performed.
