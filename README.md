# Wizarding Registry Dashboard

A responsive React dashboard for managing and monitoring the Wizarding Registry. The application provides insights into magical activities, wizard specialties, and registered wizards through an interactive and modern user interface.

---

## Features

* Dashboard overview with summary cards
* Registry activity monitoring
* Wizard specialty analytics
* Master Wizard Registry table
* Search functionality with debouncing
* Pagination support
* Expandable wizard details
* Detailed wizard information modal
* Responsive design for desktop and mobile devices
* Data fetching with React Query

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### State & Data Management

* React Query (@tanstack/react-query)

### UI & Icons

* Lucide React

### Custom Hooks

* useDebounce

---

## Project Structure

```bash
src/
│
├── components/
│
├── hooks/
│   └── useDebounce.js
│
├── services/
│   └── wizardApi.js
│
├── pages/
│   └── Dashboard/
│       ├── Dashboard.jsx
│       └── components/
│           ├── CardList.jsx
│           ├── RegistryActivity.jsx
│           ├── WizardsSpecialty.jsx
│           ├── MasterWizardRegistry.jsx
│           ├── WizardTable.jsx
│           ├── WizardTableRow.jsx
│           ├── WizardExpandedRow.jsx
│           ├── WizardSearch.jsx
│           ├── Pagination.jsx
│           ├── TableState.jsx
│           └── WizardDetailsModal.jsx
│
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd wizarding-registry-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available Scripts

Run development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint project:

```bash
npm run lint
```

---

## Main Components

### Dashboard

The main page that combines all dashboard sections.

### CardList

Displays summary cards with key wizarding statistics.

### RegistryActivity

Shows recent registry activities and updates.

### WizardsSpecialty

Displays wizard specialization information.

### MasterWizardRegistry

Provides:

* Search functionality
* Pagination
* Expandable rows
* Wizard details modal

### WizardDetailsModal

Displays detailed information about a selected wizard.

---

---

## Future Improvements

* Server-side pagination
* Sorting functionality
* Advanced filtering
* Dark/Light theme support
* Unit and integration testing
* Export wizard data to CSV or Excel
* Role-based access control

---

## Author

Doaa mohamed

