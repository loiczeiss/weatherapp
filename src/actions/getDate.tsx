export const GetCurrentDateInGMT = (): {
    hours: number;
    minutes: number;
    day: number;
    month: number;
    year: number;
  } => {
    const currentDate = new Date();

    // Get the UTC day, month, and year
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes();
    const day = currentDate.getUTCDate();
    const month = currentDate.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    const year = currentDate.getUTCFullYear();

    return { hours, minutes, day, month, year };
  };


  export const monthString: Record<number, string> = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };