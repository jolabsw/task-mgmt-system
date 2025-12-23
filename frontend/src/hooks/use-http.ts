import { useState, useCallback } from "react";
import type { ApiResponse, RequestConfig } from "../types/api";

const useHttp = <T>() => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const sendRequest = useCallback(
        async (
            requestConfig: RequestConfig, 
            onSuccess: (data: T) => void
        ) => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await fetch(requestConfig.url, {
                    method: requestConfig.method ?? "GET",
                    headers: requestConfig.headers ?? {},
                    body: requestConfig.body ?? null

                })

                if (!response.ok) {
                    throw new Error("Request failed!")
                }

                const responseData: ApiResponse<T> = await response.json()
                onSuccess(responseData.data)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError("Something went wrong!")
                }
            }

        setIsLoading(false)
    }, [])

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp