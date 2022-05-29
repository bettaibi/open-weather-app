import { UnitProps, UNITS, WeatherForecastPayload } from "../models/app.model";

export async function getJsonResponse(city: string | null, unit: UnitProps | null){

  const fakeResponse: WeatherForecastPayload = {
    // we assume that the first index of the array is represent the forecast of today
    list: [
      {
        dt: 1653609600,
        main: {
          temp: (unit === UNITS.CELSIUS ? 27: (27 * 1.8) + 32) || 27,
          feels_like: 26.67,
          temp_min: 25.53,
          temp_max: 27.77,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1011,
          humidity: 23,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 53
        },
        wind: {
          speed: 3.85,
          deg: 273,
          gust: 5.41
        },
        dt_txt: new Date().toISOString()
      },
      {
        dt: 1653620400,
        main: {
          temp: 24.62,
          feels_like: 23.97,
          temp_min: 22.48,
          temp_max: 24.62,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 32,
        },
        weather: [
          {
            main: "Clouds",
            description: "few clouds",
            icon: "02n"
          }
        ],
        clouds: {
          all: 21
        },
        wind: {
          speed: 0.86,
          deg: 229,
          gust: 0.91
        },
        dt_txt: "2022-05-27 03:00:00"
      },
      {
        dt: 1653631200,
        main: {
          temp: 22.5,
          feels_like: 22.29,
          temp_min: 22.5,
          temp_max: 22.5,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1011,
          humidity: 57,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 4.18,
          deg: 95,
          gust: 4.4
        },
        dt_txt: "2022-05-27 06:00:00"
      },
      {
        dt: 1653642000,
        main: {
          temp: 25.47,
          feels_like: 25.17,
          temp_min: 25.47,
          temp_max: 25.47,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 42,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.26,
          deg: 121,
          gust: 1.01
        },
       
        dt_txt: "2022-05-27 09:00:00"
      },
      {
        dt: 1653652800,
        main: {
          temp: 29.16,
          feels_like: 28.01,
          temp_min: 29.16,
          temp_max: 29.16,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1011,
          humidity: 30,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.43,
          deg: 269,
          gust: 4.22
        },
       
        dt_txt: "2022-05-27 12:00:00"
      },
      {
        dt: 1653663600,
        main: {
          temp: 31.13,
          feels_like: 29.23,
          temp_min: 31.13,
          temp_max: 31.13,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 21,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 4.75,
          deg: 265,
          gust: 5.51
        },
       
        dt_txt: "2022-05-27 15:00:00"
      },
      {
        dt: 1653674400,
        main: {
          temp: 30.27,
          feels_like: 28.49,
          temp_min: 30.27,
          temp_max: 30.27,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 21,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 6.15,
          deg: 251,
          gust: 5.51
        },
       
        dt_txt: "2022-05-27 18:00:00"
      },
      {
        dt: 1653685200,
        main: {
          temp: 28.2,
          feels_like: 27.07,
          temp_min: 28.2,
          temp_max: 28.2,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1010,
          humidity: 26,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.62,
          deg: 294,
          gust: 5.7
        },
        dt_txt: "2022-05-27 21:00:00"
      },
      {
        dt: 1653696000,
        main: {
          temp: 24.91,
          feels_like: 24.53,
          temp_min: 24.91,
          temp_max: 24.91,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 41,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 4.14,
          deg: 78,
          gust: 5.61
        },
        dt_txt: "2022-05-28 00:00:00"
      },
      {
        dt: 1653706800,
        main: {
          temp: 22.6,
          feels_like: 22.22,
          temp_min: 22.6,
          temp_max: 22.6,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 50,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 3.1,
          deg: 74,
          gust: 4.2
        },
        dt_txt: "2022-05-28 03:00:00"
      },
      {
        dt: 1653717600,
        main: {
          temp: 23.11,
          feels_like: 22.73,
          temp_min: 23.11,
          temp_max: 23.11,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1010,
          humidity: 48,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 1.39,
          deg: 139,
          gust: 1.51
        },
       
        dt_txt: "2022-05-28 06:00:00"
      },
      {
        dt: 1653728400,
        main: {
          temp: 27.69,
          feels_like: 26.97,
          temp_min: 27.69,
          temp_max: 27.69,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 32,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 6.09,
          deg: 274,
          gust: 7.11
        },
       
        dt_txt: "2022-05-28 09:00:00"
      },
      {
        dt: 1653739200,
        main: {
          temp: 32.22,
          feels_like: 30.18,
          temp_min: 32.22,
          temp_max: 32.22,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1007,
          humidity: 20,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 8.07,
          deg: 255,
          gust: 12.02
        },
       
        dt_txt: "2022-05-28 12:00:00"
      },
      {
        dt: 1653750000,
        main: {
          temp: 34.97,
          feels_like: 32.48,
          temp_min: 34.97,
          temp_max: 34.97,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1005,
          humidity: 14,
        },
        weather: [
          {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          }
        ],
        clouds: {
          all: 15
        },
        wind: {
          speed: 8.5,
          deg: 344,
          gust: 9.61
        },
       
        dt_txt: "2022-05-28 15:00:00"
      },
      {
        dt: 1653760800,
        main: {
          temp: 32.13,
          feels_like: 30.1,
          temp_min: 32.13,
          temp_max: 32.13,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1006,
          humidity: 20,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 8
        },
        wind: {
          speed: 9.8,
          deg: 359,
          gust: 10.91
        },
       
        dt_txt: "2022-05-28 18:00:00"
      },
      {
        dt: 1653771600,
        main: {
          temp: 28.17,
          feels_like: 27.13,
          temp_min: 28.17,
          temp_max: 28.17,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1008,
          humidity: 28,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 67
        },
        wind: {
          speed: 9.22,
          deg: 2,
          gust: 13.92
        },
        dt_txt: "2022-05-28 21:00:00"
      },
      {
        dt: 1653782400,
        main: {
          temp: 25.51,
          feels_like: 24.93,
          temp_min: 25.51,
          temp_max: 25.51,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1008,
          humidity: 31,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 51
        },
        wind: {
          speed: 2.12,
          deg: 164,
          gust: 2.2
        },
        dt_txt: "2022-05-29 00:00:00"
      },
      {
        dt: 1653793200,
        main: {
          temp: 23.81,
          feels_like: 23.32,
          temp_min: 23.81,
          temp_max: 23.81,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1008,
          humidity: 41,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 1.09,
          deg: 103,
          gust: 1.11
        },
        dt_txt: "2022-05-29 03:00:00"
      },
      {
        dt: 1653804000,
        main: {
          temp: 25.08,
          feels_like: 24.64,
          temp_min: 25.08,
          temp_max: 25.08,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 38,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 84
        },
        wind: {
          speed: 0.95,
          deg: 94,
          gust: 1
        },
       
        dt_txt: "2022-05-29 06:00:00"
      },
      {
        dt: 1653814800,
        main: {
          temp: 29.33,
          feels_like: 27.89,
          temp_min: 29.33,
          temp_max: 29.33,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 25,
        },
        weather: [
          {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          }
        ],
        clouds: {
          all: 24
        },
        wind: {
          speed: 1.85,
          deg: 201,
          gust: 2.62
        },
       
        dt_txt: "2022-05-29 09:00:00"
      },
      {
        dt: 1653825600,
        main: {
          temp: 34.13,
          feels_like: 31.85,
          temp_min: 34.13,
          temp_max: 34.13,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 17,
        },
        weather: [
          {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          }
        ],
        clouds: {
          all: 12
        },
        wind: {
          speed: 4.23,
          deg: 260,
          gust: 6.83
        },
       
        dt_txt: "2022-05-29 12:00:00"
      },
      {
        dt: 1653836400,
        main: {
          temp: 36.22,
          feels_like: 33.71,
          temp_min: 36.22,
          temp_max: 36.22,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1006,
          humidity: 14,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01d"
          }
        ],
        clouds: {
          all: 6
        },
        wind: {
          speed: 6.21,
          deg: 272,
          gust: 8.91
        },
       
        dt_txt: "2022-05-29 15:00:00"
      },
      {
        dt: 1653847200,
        main: {
          temp: 35.07,
          feels_like: 32.52,
          temp_min: 35.07,
          temp_max: 35.07,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1006,
          humidity: 13,
        },
        weather: [
          {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          }
        ],
        clouds: {
          all: 22
        },
        wind: {
          speed: 5.96,
          deg: 280,
          gust: 8.11
        },
       
        dt_txt: "2022-05-29 18:00:00"
      },
      {
        dt: 1653858000,
        main: {
          temp: 32.58,
          feels_like: 30.33,
          temp_min: 32.58,
          temp_max: 32.58,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1007,
          humidity: 16,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 3.63,
          deg: 295,
          gust: 4.21
        },
        dt_txt: "2022-05-29 21:00:00"
      },
      {
        dt: 1653868800,
        main: {
          temp: 29.95,
          feels_like: 28.17,
          temp_min: 29.95,
          temp_max: 29.95,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1006,
          humidity: 19,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 1.54,
          deg: 30,
          gust: 1.61
        },
        dt_txt: "2022-05-30 00:00:00"
      },
      {
        dt: 1653879600,
        main: {
          temp: 28.12,
          feels_like: 26.88,
          temp_min: 28.12,
          temp_max: 28.12,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1007,
          humidity: 22,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 1.49,
          deg: 134,
          gust: 1.7
        },
        dt_txt: "2022-05-30 03:00:00"
      },
      {
        dt: 1653890400,
        main: {
          temp: 29.07,
          feels_like: 27.6,
          temp_min: 29.07,
          temp_max: 29.07,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 23,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 1.98,
          deg: 243,
          gust: 2.9
        },
       
        dt_txt: "2022-05-30 06:00:00"
      },
      {
        dt: 1653901200,
        main: {
          temp: 34.65,
          feels_like: 32.23,
          temp_min: 34.65,
          temp_max: 34.65,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1009,
          humidity: 15,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 99
        },
        wind: {
          speed: 1.61,
          deg: 182,
          gust: 2.72
        },
       
        dt_txt: "2022-05-30 09:00:00"
      },
      {
        dt: 1653912000,
        main: {
          temp: 39.22,
          feels_like: 36.54,
          temp_min: 39.22,
          temp_max: 39.22,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1008,
          humidity: 12,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 98
        },
        wind: {
          speed: 5.37,
          deg: 254,
          gust: 8.22
        },
       
        dt_txt: "2022-05-30 12:00:00"
      },
      {
        dt: 1653922800,
        main: {
          temp: 38.99,
          feels_like: 36.15,
          temp_min: 38.99,
          temp_max: 38.99,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1007,
          humidity: 11,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 98
        },
        wind: {
          speed: 4.79,
          deg: 239,
          gust: 7.21
        },
       
        dt_txt: "2022-05-30 15:00:00"
      },
      {
        dt: 1653933600,
        main: {
          temp: 36.26,
          feels_like: 33.85,
          temp_min: 36.26,
          temp_max: 36.26,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1008,
          humidity: 15,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 99
        },
        wind: {
          speed: 0.69,
          deg: 209,
          gust: 1.73
        },
       
        dt_txt: "2022-05-30 18:00:00"
      },
      {
        dt: 1653944400,
        main: {
          temp: 34.83,
          feels_like: 32.48,
          temp_min: 34.83,
          temp_max: 34.83,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 16,
        },
        weather: [
          {
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 100
        },
        wind: {
          speed: 1.28,
          deg: 119,
          gust: 1.3
        },
        dt_txt: "2022-05-30 21:00:00"
      },
      {
        dt: 1653955200,
        main: {
          temp: 30.51,
          feels_like: 28.89,
          temp_min: 30.51,
          temp_max: 30.51,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1010,
          humidity: 25,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 75
        },
        wind: {
          speed: 4.44,
          deg: 50,
          gust: 6.11
        },
        dt_txt: "2022-05-31 00:00:00"
      },
      {
        dt: 1653966000,
        main: {
          temp: 29.25,
          feels_like: 27.97,
          temp_min: 29.25,
          temp_max: 29.25,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1011,
          humidity: 28,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
          }
        ],
        clouds: {
          all: 73
        },
        wind: {
          speed: 4.32,
          deg: 69,
          gust: 5.92
        },
        dt_txt: "2022-05-31 03:00:00"
      },
      {
        dt: 1653976800,
        main: {
          temp: 30.01,
          feels_like: 28.62,
          temp_min: 30.01,
          temp_max: 30.01,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1012,
          humidity: 28,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 69
        },
        wind: {
          speed: 5.06,
          deg: 63,
          gust: 7.6
        },
       
        dt_txt: "2022-05-31 06:00:00"
      },
      {
        dt: 1653987600,
        main: {
          temp: 36.37,
          feels_like: 34.2,
          temp_min: 36.37,
          temp_max: 36.37,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1012,
          humidity: 17,
        },
        weather: [
          {
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ],
        clouds: {
          all: 62
        },
        wind: {
          speed: 5.56,
          deg: 100,
          gust: 6.31
        },
       
        dt_txt: "2022-05-31 09:00:00"
      },
      {
        dt: 1653998400,
        main: {
          temp: 40.3,
          feels_like: 37.89,
          temp_min: 40.3,
          temp_max: 40.3,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 1011,
          humidity: 13,
        },
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: {
          all: 48
        },
        wind: {
          speed: 4.53,
          deg: 97,
          gust: 4.53
        },
       
        dt_txt: "2022-05-31 12:00:00"
      },
      {
        dt: 1654009200,
        main: {
          temp: 41.84,
          feels_like: 39.08,
          temp_min: 41.84,
          temp_max: 41.84,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1009,
          humidity: 11,
        },
        weather: [
          {
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d"
          }
        ],
        clouds: {
          all: 44
        },
        wind: {
          speed: 4.71,
          deg: 88,
          gust: 2.81
        },
       
        dt_txt: "2022-05-31 15:00:00"
      },
      {
        dt: 1654020000,
        main: {
          temp: 36.16,
          feels_like: 34.09,
          temp_min: 36.16,
          temp_max: 36.16,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1010,
          humidity: 18,
        },
        weather: [
          {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          }
        ],
        clouds: {
          all: 24
        },
        wind: {
          speed: 8.29,
          deg: 93,
          gust: 10.22
        },
       
        dt_txt: "2022-05-31 18:00:00"
      },
      {
        dt: 1654030800,
        main: {
          temp: 30.21,
          feels_like: 29.2,
          temp_min: 30.21,
          temp_max: 30.21,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1012,
          humidity: 33,
        },
        weather: [
          {
            main: "Clear",
            description: "clear sky",
            icon: "01n"
          }
        ],
        clouds: {
          all: 0
        },
        wind: {
          speed: 8.63,
          deg: 64,
          gust: 14.61
        },
        dt_txt: "2022-05-31 21:00:00"
      }
    ],
    city: {
      name: city || "Tunisia",
      sunrise: 1653538581,
      sunset: 1653589562
    }
  }

  return fakeResponse;
}
      


