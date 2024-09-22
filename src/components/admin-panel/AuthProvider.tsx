"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import React from 'react';
// import {session} from "next-auth/core/routes";

interface PropsTypes {
    children: ReactNode
}

function AuthProvider({children}: PropsTypes) {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
}

export default AuthProvider;