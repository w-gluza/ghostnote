"use client";
import useSWR from "swr";
import { fetchJson } from "@/app/utils/fetchJson";
import { ActivityInterface } from "../../../types/user";

export interface UserActivitiesResponse {
  items: ActivityInterface[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export function useUserActivities(id: string, page = 1, pageSize = 20) {
  const key = id
    ? `/api/users/${id}/activities?page=${page}&pageSize=${pageSize}`
    : null;

  const { data, error, isLoading } = useSWR<UserActivitiesResponse>(
    key,
    fetchJson,
    {
      keepPreviousData: true,
    }
  );
  return { data, error, isLoading };
}
