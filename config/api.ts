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

export const verifyEmail = async (verificationCode: string) => {
  return API.get(`/auth/email/verify/${verificationCode}`);
};

export const sendPasswordResetEmail = async (email: string) => {
  return API.post("/auth/password/forgot", { email: email });
};

export const resetPassword = async ({
  verificationCode,
  password,
}: {
  verificationCode: string;
  password: string;
}) => {
  API.post("/auth/password/reset", {
    verificationCode: verificationCode,
    password: password,
  });
};
