import { Request, Response } from "express";
import { registerSchema } from "../Schemas/user.schema";
import { loginSchema } from "../Schemas/login.schema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export class AuthControllers {
    static async register(req: Request, res: Response) {
        try {
            // Validação com Zod
            const data = registerSchema.parse(req.body);

            // Criptografar senha
            const hashedPassword = await bcrypt.hash(data.password, 10);

            const newUser = await User.create({
                name: data.name,
                email: data.email,
                password: hashedPassword,
            });

            return res.status(201).json({
                message: "Usuário registrado com sucesso",
                user: { ...newUser.toObject(), password: undefined },
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const dataLogin = loginSchema.parse(req.body);
            const user = await User.findOne({
                email: dataLogin.email,
            });

            // Retorna a mesma mensagem de erro para ambas as falhas de credenciais
            if (!user || !(await bcrypt.compare(dataLogin.password, user.password))) {
                return res.status(401).json({ error: "Email ou senha inválidos." });
            }

            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                console.error("JWT_SECRET não está definido.");
                return res.status(500).json({ error: "Erro interno do servidor." });
            }

            const token = jwt.sign({ id: user._id }, jwtSecret, {
                expiresIn: "1d",
            });

            return res.status(200).json({
                message: "Login realizado com sucesso",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },
                token,
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }
}

export default AuthControllers;