import API from "@/config/axios-client";

interface DataLoginProps {
  email: string;
  password: string;
}
export const loginUser = async (data: DataLoginProps) => {
  return API.post("/auth/login", data);
};

interface DataRegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const registerUser = async (data: DataRegisterProps) => {
  return API.post("/auth/register", data);
};
