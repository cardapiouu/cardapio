import { api } from "../lib/api";

interface EstabilishmentDataProps {
  EstablishmentName: string;
  clientTable: string;
}

export const postEstablishmentData = async (
  sendData: EstabilishmentDataProps
) => {
  try {
    const { data } = await api.post("/", sendData);

    return data;
  } catch (err) {
    console.log(err);
  }
};
