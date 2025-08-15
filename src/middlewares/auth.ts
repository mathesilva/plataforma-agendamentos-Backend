import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {Router} from 'express';



interface JwtPayload {
    id: string;
}

export interface AuthRequest extends Request {
    userId? : string;
}

export function auth(req: AuthRequest, res: Response, next: NextFunction){
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({error: "Token não informado"});
        }

        const parts = authHeader.split(" ");
        if (parts.length !==2) {
            return res.status(401).json({error: "Token mal formado"})
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).json({error: "Formato de token inválido"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
        if (typeof decoded === "object" && "id" in decoded) {
            req.userId = decoded.id;
            console.log("ID extraído do token:", req.userId);
            next(); 
        } else {
            return res.status(401).json({ error: "Token inválido" });
        }
    } catch (error) {
        return res.status(401).json({error: "Token inválido ou expirado"});
    }

}