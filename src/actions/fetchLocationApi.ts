"use server";

interface Data {
  length: number;
  name: string;
}

export const FetchLocationApi = async (url:string, options: {
  method: string,
  headers: { accept: string },
}) => {
  let data: Data | undefined = undefined;
  let isError = false;
  let error = "";

  try {
    const res = await fetch(url, options);
    data = await res.json();
  } catch (e) {
    isError = true;
    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    else error = "Error";
  }

  return { data, isError, error };
};