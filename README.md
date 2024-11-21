# ssstocks

> [!IMPORTANT]
>
> The Free Alpha Vantage API is very limited, with only 25 requests/day. ssstocks on the other hand, requires making 2 calls per company to acquire the required data.
>
> Because of this, I'm using the demo API, which allows access to only the data for IBM (and is intentionally slower, it seems)


| Use "IBM" in order to try the tool out (multiple instances can be added) |
| --- |

### Visit the [ssstocks website](https://ssstocks.vercel.app/)!


## Features

- Realtime Stocks Data for pretty much any company accross all global stock exchanges.
- Compare upto 5 companies (soft-limit) at a time.
- Exporting data & datasets.
- Massive variety of super-interactive visualisations:
    - Spotlight view onto specific metrics and metric groups.
    - Series view for time based data for multiple metrics.

## Tech Stack

#### TypeScript, HTML & CSS

- **`NextJS`**
react full-stack framework by vercel

- **`ReactJS`**
react

- **`Zustand`** simple state management library for React

- **`Tailwind CSS`** the framework that's one of the better ways to write CSS

- **`Shadcn/ui`** pretty good, fully customisable and arguably the hottest component library these days.

- **`Recharts`** easy to use interactive charts, that fully support shadcn.

I will be adding **`motion`** (not a part of framer, since 11/12/24) to the project in the future.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

<img src="https://github.com/user-attachments/assets/ba50a7a6-6829-40df-af01-ad828df1d51a">

<img src="https://github.com/user-attachments/assets/8da7e308-83fc-489a-9f9d-064bccf920c1">

<img src="https://github.com/user-attachments/assets/3e235cc7-1aa7-4c95-913e-47cc839a6a89" height=400>

<img src="https://github.com/user-attachments/assets/23e18d8f-f887-4df0-a059-d852bcd8d44c" height=400>

<img src="https://github.com/user-attachments/assets/369bafcc-5cbf-4fff-99df-c6b792694e64" height=400>
