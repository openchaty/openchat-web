"use client";
import { AblyProvider } from "ably/react";
import * as Ably from "ably";
import { ReactNode } from 'react';

const AUTH_URL = process.env.NEXT_PUBLIC_WS_AUTH_URL

export function AblyContextProvider({ children }: { children: ReactNode }) {
    // console.log(AUTH_URL)
    const client = new Ably.Realtime.Promise({ authUrl: AUTH_URL });

    return (
        <AblyProvider client={client}>
            {children}
        </AblyProvider>
    )
}
