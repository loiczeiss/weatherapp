"use server";

interface Data {
  name: string;
}

export const FetchLocationApi = async (url:string) => {
  let data: Data | undefined = undefined;
  let isError = false;
  let error = "";

  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (e) {
    isError = true;
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    else error = "Error";
  }

  return { data, isError, error };
};