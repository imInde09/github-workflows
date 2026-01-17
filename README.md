# GitHub Workflows Repository

This repository serves as a collection of reusable and interesting GitHub Actions workflows.

## Workflows

### 1. Issue & PR Management

- **Issue Validation**: Ensures all new issues follow the required structure (Current State, Desired State, Deliverables).
- **PR Validation**: Checks that Pull Requests are linked to an issue and have appropriate labels.
- **Stale Issues**: Automatically labels and closes issues and PRs that have had no recent activity (60 days to stale, 7 days to close).

### 2. Release Management

- **Manual/Automated Releases**: Automates release creation and tagging based on merges to `uat` (User Acceptance Testing) and `prod` (Production) branches.
  - Merges to `uat` -> `x.x.x-uat`
  - Merges to `prod` -> `x.x.x-prod`

### 3. Security

- **CodeQL Analysis**:
  - Uses GitHub's CodeQL semantic code analysis engine to discover vulnerabilities across the codebase.
  - Automatically scans on `push` and `pull_request` to the main branch, as well as on a weekly schedule.
  - Currently configured to scan **JavaScript**, but can be easily extended to support other languages like Python, Java, Go, etc.
  - Helps catch issues like SQL injection, XSS, and dangerous data flow early in the development cycle.

### 4. Automation

- **PR Labeler**:
  - Automatically triages Pull Requests by applying labels based on the files modified.
  - Keeps the PR list organized and helps reviewers identify relevant changes quickly.
  - **Configuration**: Defined in `.github/labeler.yml`.
  - **Rules**:
    - `documentation`: Applied when `*.md` files are changed.
    - `ci`: Applied when GitHub workflow files (`.github/workflows/*`) are changed.
    - `source`: Applied when source code files (js, ts, py, go, java) are modified.

## Usage

Check the `.github/workflows` directory to see the workflow definitions.
