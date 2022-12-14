const Icon0 = (weatherFetcho) => {
    console.log( weatherFetcho)
    switch (
        weatherFetcho.current_weather &&
        weatherFetcho.current_weather.weathercode) 
        case 0 | :
          return {
            background: "linear-gradient(to top, #fc4a1a, #f7b733)",
          };
  
        case 1 && false:
        case 2 && false:
        case 3 && false:
          return {
            background: "linear-gradient(to top, #fc4a1a, #f7b733)",
          };
        case 45:
        case 48:
        case 51:
        case 53:
        case 55:
          return {
            background:
              "linear-gradient(to left bottom, #8cacdd, #83a9ca, #83a3b6, #889ca4, #8f9495)",
          };
        case 56:
        case 57:
          return {
            background:
              "radial-gradient(circle, #7da6c1, #7ba7c8, #7ba8d0, #7ca8d7, #7fa8de, #75a1d3, #6b9bc8, #6294bd, #54839c, #4f727e, #4d5f62, #4a4c4c)",
          };
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
          return {
            background:
              "linear-gradient(to left top, #4f9cb8, #5796b2, #5e8fac, #6489a5, #68839d, #5f788e, #576d7f, #4f6270, #3d4e57, #2e3b3f, #21292a, #151717)",
          };
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
          return {
            background:
              " linear-gradient(to left top, #8d9a9f, #889399, #828d93, #7d868c, #788086, #7d858c, #828a92, #888f98, #9ba2ad, #aeb5c2, #c2c8d8, #d7dcee)",
          };
        default:
          return {
            background:
              " linear-gradient(to left top, #8d9a9f, #889399, #828d93, #7d868c, #788086, #7d858c, #828a92, #888f98, #9ba2ad, #aeb5c2, #c2c8d8, #d7dcee)",
          };}
}