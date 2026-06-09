"use client";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export function UserInitializer({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  const storeUser = useMutation(api.users.store);
  const [isUserReady, setIsUserReady] = useState(false);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      storeUser()
        .then(() => setIsUserReady(true))
        .catch((error) => {
          console.error("Failed to initialize user:", error);
          setIsUserReady(true);
        });
    } else if (isLoaded && !isSignedIn) {
      setIsUserReady(true);
    }
  }, [isLoaded, isSignedIn, storeUser]);

  if (!isUserReady) return null;

  return children;
}
