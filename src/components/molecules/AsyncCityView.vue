<template>
  <SaveView />

  <!-- My Design Start -->
  <div class="flex flex-col md:flex-row text-white place-items-baseline">
    <div>
      <h1 class="text-4xl my-2 px-2">
        {{ route.params.city }}, {{ route.params.state }}
      </h1>
      <p class="text-sm md:mb-12 px-2 mb-2">
        {{
          new Date(weatherData.currentTime).toLocaleDateString("en-us", {
            weekday: "short",
            day: "2-digit",
            month: "long",
          })
        }}
      </p>
    </div>
  </div>
  <!-- other Data -->
  <div class="flex flex-col md:flex-row text-white items-center">
    <img
      class="w-[150px] h-auto"
      :src="`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`"
      alt=""
    />

    <p class="text-8xl mb-8 px-6">
      {{ Math.round(weatherData.current.temp) }}&deg;
    </p>

    <div class="flex flex-col mx-6 md:border-l-2 md:pl-8">
      <div class="mb-8 text-center md:text-left">
        <p class="text-xl">{{ Math.round(weatherData.current.temp) }}&deg;</p>
        <p class="text-sm text-gray-400">High</p>
      </div>

      <div class="mb-8 text-center md:text-left">
        <p class="text-xl">{{ weatherData.current.temp }}&deg;</p>
        <p class="text-sm text-gray-400">Low</p>
      </div>
    </div>

    <div class="flex flex-col mx-6 text-center md:text-left">
      <div class="mb-8">
        <p class="text-xl">{{ weatherData.current.wind_speed }} mph</p>
        <p class="text-sm text-gray-400">Wind</p>
      </div>

      <div class="mb-8 text-center md:text-left">
        <p class="text-xl">
          {{ (weatherData.current.pressure / 14.5).toFixed(2) }}in
        </p>
        <p class="text-sm text-gray-400">Pressure</p>
      </div>
    </div>

    <div class="flex flex-col mx-6 text-center md:text-left">
      <div class="mb-8">
        <p class="text-xl">
          {{ Math.round(weatherData.current.humidity) }}&percnt;
        </p>
        <p class="text-sm text-gray-400">Humidity</p>
      </div>

      <div class="mb-8 text-center md:text-left">
        <p class="text-xl">
          {{ Math.round(weatherData.current.dew_point) }}&deg;
        </p>
        <p class="text-sm text-gray-400">Precipitation</p>
      </div>
    </div>
  </div>

  <!-- Today's weather -->
  <div class="md:max-w-screen-md py-12 w-[400px] md:w-full">
    <div class="mx-8 text-white">
      <h2 class="mb-4">Today's Weather</h2>
      <div class="flex gap-6 overflow-x-scroll w-full">
        <div
          v-for="hourData in weatherData.hourly.splice(0, 9)"
          :key="hourData.dt"
          class="flex flex-col gap-4 items-center bg-gray-900/50 px-6 py-2 rounded-lg"
        >
          <p class="whitespace-nowrap text-md">
            {{
              new Date(hourData.currentTime).toLocaleTimeString("en-us", {
                hour: "numeric",
              })
            }}
          </p>
          <img
            class="w-auto h-[50px] object-cover"
            :src="`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`"
            alt=""
          />
          <p class="text-xl">{{ Math.round(hourData.temp) }}&deg;</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Next 3 Days Weather -->

  <div class="max-w-screen-md py-12 md:max-w-screen-md w-[400px] md:w-full">
    <div class="mx-8 text-white">
      <h2 class="mb-4">Next 3 days Weather</h2>
      <div
        v-for="day in weatherData.daily.splice(0, 3)"
        :key="day.dt"
        class="flex items-center bg-gray-900/50 px-6 py-2 my-2 justify-between overflow-x-scroll"
      >
        <p class="w-1/6">
          {{
            new Date(day.dt * 1000).toLocaleDateString("en-us", {
              weekday: "long",
            })
          }}
        </p>
        <div class="w-1/6">
          <img
            class="w-[50px] h-[50px] object-cover"
            :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
            alt=""
          />
        </div>
        <div class="w-1/6 justify-end">
          <p>{{ Math.round(day.temp.max) }}&deg;</p>
          <p class="text-sm text-gray-400">High</p>
        </div>

        <div class="w-1/6 justify-end">
          <p>{{ Math.round(day.temp.min) }}&deg;</p>
          <p class="text-sm text-gray-400">Low</p>
        </div>
        <div class="w-1/6 justify-end">
          <p v-if="day.rain">{{ day.rain }}&percnt;</p>
          <p v-else-if="!day.rain">0&percnt;</p>
          <p class="text-sm text-gray-400">Rain</p>
        </div>

        <div class="w-1/6 justify-end">
          <p>{{ day.wind_speed }}mph</p>
          <p class="text-sm text-gray-400">Wind</p>
        </div>
      </div>
    </div>
  </div>

  <!-- My Design End -->
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import SaveView from "@/components/atom/SaveView.vue";
const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperial`
    );
    // cal current date & time
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localOffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;
    // cal hourly weather offset
    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
    });
    console.log(weatherData.data);
    return weatherData.data;
  } catch (err) {
    console.log(err);
  }
};
const weatherData = await getWeatherData();
</script>
