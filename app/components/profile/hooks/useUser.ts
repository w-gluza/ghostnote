"use client";
import useSWR from "swr";
import { fetchJson } from "@/app/utils/fetchJson";
import { UserInterface } from "../../../types/user";

export function useUser(id: string) {
  const { data, error, isLoading } = useSWR<UserInterface>(
    id ? `/api/users/${id}` : null,
    fetchJson
  );
  return { user: data, error, isLoading };
}
