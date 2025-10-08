# Airwallex Cypress Automation 
Enterprise-grade, page-object-based, maintainable, scalable UI test framework.

## Structure
- `integration/`: Organized by feature (e.g., login/)
- `support/`: Page objects & shared commands
- `fixtures/`: Test data
- `.env`: Store secrets (excluded from git)

## Usage
- Run with `npx cypress run` or `npx cypress open`
- Add login creds to `.env`
- Page objects and commands ensure easy maintenance

## Next Steps
Integrate with reporting, CI/CD, and Docker for full enterprise setup!