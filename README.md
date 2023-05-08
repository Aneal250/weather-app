## Project

### weather app

This simple weather software can be used to check the local weather depending on a certain area. The app displays a thorough description of a specific location.

Deployed [Link](https://weather-app-kappa-umber.vercel.app/)

## Project Setup

```sh
git clone https://github.com/Aneal250/weather-app.git
```

### Clone the repo to your local machine

```sh
npm install
```

### Use npm install to install all the necessary dependencies.

```sh
npm run dev
```

### Run the app Locally using `npm run dev`

```sh
npm run build
```

### Compile and Minify for Production

## Technologies | APIs

1. vue3 (Option API)[https://vuejs.org/guide/introduction.html]
2. Pinia (Pinia)[https://pinia.vuejs.org/]
3. [Openweather API](https://api.openweathermap.org)
4. [Map box Api](https://www.mapbox.com)

### Notes | Challenges

1. In particular, the dynamic routing page of the fetched location presented some difficulties when I tried to manipulate the endpoint to obtain the data I needed to display on the UI. I needed assistance, so I had to read the documentation carefully.

2. I used Pinia, against the vuex, that was asked to use, reasons; Pinia is now vue's default state management and is almost as simple to implement as redux toolkit when using redux, the instructions said I should use Vuex.

### New Features to Implement

1. Automatic location detection: With the help of this capability, the user can retrieve and find a single location.
2. Weather Visualizations With Stunning Maps
