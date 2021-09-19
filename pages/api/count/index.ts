import prisma from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<unknown>,
): Promise<void> {
    if (req.method === "GET") {
        try {
            const tracks = await prisma.track.findMany({
                orderBy: {
                    id: "asc",
                },
            });
            await prisma.$disconnect();
            res.status(200).json(tracks);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
