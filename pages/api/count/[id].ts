import prisma from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<unknown>,
): Promise<void> {
    const { id } = req.query;
    console.log(typeof id);
    if (req.method === "PUT") {
        try {
            const track = await prisma.track.update({
                where: {
                    id: parseInt(id as string),
                },
                data: {
                    count: {
                        increment: 1,
                    },
                },
            });
            await prisma.$disconnect();
            res.status(200).json(track);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
