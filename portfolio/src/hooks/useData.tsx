import { useEffect, useState } from "react";

interface Skills {
  FrontEndOptions: string[];
  BackendOptions: string[];
  ToolsOptions: string[];
}

interface Data {
  skills: Skills;
}

interface UseDataResponse {
  data: Data | null;
  error: Error | null;
  FrontEndOptions: string[] | null;
  BackendOptions: string[] | null;
  ToolsOptions: string[] | null;
}

const useData = (): UseDataResponse => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const FrontEndOptions = data?.skills?.FrontEndOptions ?? null;
  const BackendOptions = data?.skills?.BackendOptions ?? null;
  const ToolsOptions = data?.skills?.ToolsOptions ?? null;

  useEffect(() => {
    fetch("/Data/data.json")
      .then((res) => res.json())
      .then((datas: Data) => {
        setData(datas);
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, []);

  return {
    data,
    error,
    FrontEndOptions,
    BackendOptions,
    ToolsOptions,
  };
};

export default useData;
