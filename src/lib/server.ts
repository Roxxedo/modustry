import { GetServerSidePropsContext } from "next";
import { request } from "./mod/utils";
import { ServerType } from "./types";
import { useState } from "react";

const API_URL = process.env.API_URL

export async function getProps(ctx: GetServerSidePropsContext) {
    const data = await request(`${API_URL}/api/servers`)
    return { data }
}