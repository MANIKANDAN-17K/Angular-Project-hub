# 💱 Currency Converter — Angular Learning Project

A simple **Currency Converter** web application built with **Angular**, designed as a step-by-step learning project for Angular beginners.

---

## 📸 Preview

```
┌─────────────────────────────┐
│     💱 Currency Converter    │
│                             │
│  Amount:  [ 1             ] │
│  From:    [ USD ▼         ] │
│  To:      [ EUR ▼         ] │
│                             │
│       [ Convert ]           │
│                             │
│  1 USD = 0.92 EUR           │
└─────────────────────────────┘
```

---

## 🚀 Features

- Convert between 7 major currencies (USD, EUR, GBP, INR, JPY, AUD, CAD)
- Real-time two-way data binding with Angular Forms
- Clean and responsive UI
- Built using core Angular concepts for learning purposes

---

## 🧠 Angular Concepts Covered

| Concept | Description |
|---|---|
| `@Component` | Defines a component with metadata (selector, template, styles) |
| `[(ngModel)]` | Two-way data binding between UI and component |
| `(click)` | Event binding to trigger functions |
| `*ngFor` | Structural directive to loop through arrays |
| `*ngIf` | Structural directive for conditional rendering |
| `\| number` | Built-in pipe for number formatting |
| `FormsModule` | Angular module that enables template-driven forms |
| `AppModule` | Root module that registers all components and imports |

---

## 🛠️ Tech Stack

- **Framework:** Angular (v17+)
- **Language:** TypeScript
- **Styling:** CSS
- **Forms:** Angular Template-Driven Forms

---

## 📦 Prerequisites

Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)
- Angular CLI

```bash
# Check Node and npm versions
node -v
npm -v
```

---

## ⚙️ Installation & Setup

### 1. Install Angular CLI globally

```bash
npm install -g @angular/cli
```

### 2. Create the project

```bash
ng new currency-converter
cd currency-converter
```

> During setup: Select **No** for routing and **CSS** for stylesheet format.

### 3. Install dependencies

```bash
npm install
```

---

## 🏃 Running the App

```bash
ng serve
```

Open your browser and navigate to:

```
http://localhost:4200
```

---

## 📁 Project Structure

```
currency-converter/
├── src/
│   ├── app/
│   │   ├── app.component.ts       ← Component logic (TypeScript)
│   │   ├── app.component.html     ← Component template (HTML)
│   │   ├── app.component.css      ← Component styles (CSS)
│   │   └── app.module.ts          ← Root module
│   ├── index.html                 ← App entry point
│   └── main.ts                    ← Bootstrap file
├── angular.json                   ← Angular CLI config
├── package.json                   ← Project dependencies
└── tsconfig.json                  ← TypeScript config
```

---

## 💡 How It Works

1. The user enters an **amount** and selects **From** and **To** currencies.
2. On clicking **Convert**, the `convert()` method in `AppComponent` is called.
3. The method uses static exchange rates (based on USD) to calculate the result.
4. The result is displayed using Angular's `*ngIf` directive and `number` pipe.

### Conversion Formula

```
convertedAmount = (amount / fromRate) * toRate
```

---

## 💱 Supported Currencies

| Code | Currency |
|---|---|
| USD | US Dollar |
| EUR | Euro |
| GBP | British Pound |
| INR | Indian Rupee |
| JPY | Japanese Yen |
| AUD | Australian Dollar |
| CAD | Canadian Dollar |

> ⚠️ **Note:** Exchange rates are static and hardcoded for learning purposes. They do not reflect live market rates.

---

## 🔮 Next Steps / Future Improvements

Once comfortable with the basics, here are the next things to learn and add:

- [ ] **Angular Service** — Move conversion logic into a dedicated service
- [ ] **HttpClient** — Fetch live exchange rates from a free API (e.g., [exchangerate-api.com](https://www.exchangerate-api.com))
- [ ] **Custom Pipe** — Create a pipe for currency formatting
- [ ] **Angular Router** — Add multiple pages (e.g., history page)
- [ ] **Reactive Forms** — Upgrade from template-driven to reactive forms
- [ ] **Unit Tests** — Write tests using Jasmine and Karma

---

## 📚 Learning Resources

- [Angular Official Documentation](https://angular.io/docs)
- [Angular Tour of Heroes Tutorial](https://angular.io/tutorial)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🤝 Contributing

This is a learning project — feel free to fork it, experiment, and extend it with new features!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ to learn Angular step by step.