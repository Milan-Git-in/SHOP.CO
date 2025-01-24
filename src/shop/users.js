import { create } from "zustand";

export const useUser = create((set) => ({
  Userdetails: [],
  setUserdetails: (Userdetails) => set({ Userdetails }),
  login: async (email, password) => {
    const result = await fetch("http://localhost:8000/api/visitors/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Add this header
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const { Data, Success, message } = await result.json();
    if (!Success) return { success: false, message: message };
    set(() => ({ Userdetails: Data }));
    return { success: true, message: message, type: Data.type };
  },
  registation: async (visitor) => {
    /* 
    const visitor = {name: 'Milan', 
    email: 'milanprajapati366@gmail.com',
    password: 'Maahi@121',
    type: 'user'}
    */
    const result = await fetch("http://localhost:8000/api/visitors/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitor),
    });
    const { Success, message } = await result.json();
    return { success: Success, message: message };
  },
}));
