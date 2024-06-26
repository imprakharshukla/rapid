import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { RestAPI, TokenProvider } from "~/lib/client";

const fetchToken = async () => {
    const response = await fetch("/api/token");
    const data = await response.json();
    return data.token;
}
const useRestAPI = () => {
    const { data: session } = useSession();
    const api = useMemo(
        () => {
            const tokenProvider: TokenProvider = {
                getToken: fetchToken
            };
            const restApi = new RestAPI(tokenProvider);
            return { restApi: restApi.client };
        },
        [session, fetchToken]
    );

    return { client: api.restApi };
};

export default useRestAPI;