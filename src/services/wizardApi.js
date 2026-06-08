import axios from "axios";

const api = axios.create({
  baseURL: "https://wizard-world-api.herokuapp.com",
});

export const getWizards = async (search) => {
  if (!search) {
    const { data } = await api.get("/Wizards");
    return data;
  }

  const [firstRes, lastRes] = await Promise.all([
    api.get("/Wizards", {
      params: {
        FirstName: search,
      },
    }),
    api.get("/Wizards", {
      params: {
        LastName: search,
      },
    }),
  ]);

  const merged = [
    ...firstRes.data,
    ...lastRes.data,
  ];

  return Array.from(
    new Map(
      merged.map((wizard) => [wizard.id, wizard])
    ).values()
  );
};